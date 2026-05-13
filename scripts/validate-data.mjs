#!/usr/bin/env node
// 简单字段校验，确保 data/*.yaml 在发包前结构正确。
// 复杂 schema 校验留待后续接入 zod / ajv。

import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const ROOT = resolve(dirname(__filename), '..');
const D = (p) => join(ROOT, 'data', p);

const errors = [];
const err = (file, msg) => errors.push(`[${file}] ${msg}`);

function loadList(file) {
  const data = parse(readFileSync(D(file), 'utf8'));
  if (!Array.isArray(data)) {
    err(file, '顶层必须是数组');
    return [];
  }
  return data;
}

const playerCounts = loadList('player-counts.yaml');
for (const row of playerCounts) {
  if (typeof row.players !== 'number') err('player-counts.yaml', `players 缺失或非数字: ${JSON.stringify(row)}`);
  if (row.good + row.evil !== row.players)
    err('player-counts.yaml', `${row.players} 人时 good+evil 不等于 players`);
  if (!Array.isArray(row.missionSize) || row.missionSize.length !== 5)
    err('player-counts.yaml', `${row.players} 人 missionSize 必须为长度 5 的数组`);
}

const roles = loadList('roles.yaml');
const roleIds = new Set();
for (const r of roles) {
  if (!r.id) err('roles.yaml', '存在没有 id 的条目');
  if (roleIds.has(r.id)) err('roles.yaml', `id 重复: ${r.id}`);
  roleIds.add(r.id);
  if (!['good', 'evil'].includes(r.faction))
    err('roles.yaml', `${r.id} faction 必须为 good/evil`);
  if (!r.name?.zh || !r.name?.en) err('roles.yaml', `${r.id} name 缺 zh/en`);
  if (!r.summary?.zh || !r.summary?.en) err('roles.yaml', `${r.id} summary 缺 zh/en`);
}

const combos = loadList('role-combinations.yaml');
for (const c of combos) {
  for (const id of [...(c.good ?? []), ...(c.evil ?? [])]) {
    if (!roleIds.has(id)) err('role-combinations.yaml', `${c.id} 引用了不存在的角色: ${id}`);
  }
}

if (errors.length > 0) {
  console.error('[validate-data] 校验失败：');
  for (const e of errors) console.error('  -', e);
  process.exit(1);
}
console.log('[validate-data] OK');

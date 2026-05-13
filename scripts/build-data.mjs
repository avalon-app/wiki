#!/usr/bin/env node
// 将 data/*.yaml 转换为 dist-data/*.json，供站点组件与 npm 包消费者使用。

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join, resolve, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const ROOT = resolve(dirname(__filename), '..');
const SRC_DIR = join(ROOT, 'data');
const OUT_DIR = join(ROOT, 'dist-data');

mkdirSync(OUT_DIR, { recursive: true });

const files = readdirSync(SRC_DIR).filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'));
if (files.length === 0) {
  console.error('[build-data] data/ 下没有 YAML 文件');
  process.exit(1);
}

for (const file of files) {
  const src = join(SRC_DIR, file);
  const name = basename(file, extname(file));
  const out = join(OUT_DIR, `${name}.json`);
  try {
    const yaml = readFileSync(src, 'utf8');
    const parsed = parse(yaml);
    writeFileSync(out, JSON.stringify(parsed, null, 2) + '\n', 'utf8');
    console.log(`[build-data] ${file} -> dist-data/${name}.json`);
  } catch (err) {
    console.error(`[build-data] 解析 ${file} 失败：`, err.message);
    process.exit(1);
  }
}

// 由 scripts/build-data.mjs 生成 dist-data/*.json，再由本模块统一导出。
// 站点内部组件以及 npm 包消费者均可从此处取数据（消费者走 package.json#exports）。

import playerCountsJson from '../../dist-data/player-counts.json';
import rolesJson from '../../dist-data/roles.json';
import roleCombinationsJson from '../../dist-data/role-combinations.json';
import expansionsJson from '../../dist-data/expansions.json';
import lancelotRulesJson from '../../dist-data/lancelot-rules.json';

export type Faction = 'good' | 'evil';
export type Locale = 'zh' | 'en';
export type Localized = Record<Locale, string>;

export interface PlayerCount {
  players: number;
  good: number;
  evil: number;
  missionSize: [number, number, number, number, number];
  doubleFailRound?: number;
}

export interface Role {
  id: string;
  faction: Faction;
  name: Localized;
  image: string;
  summary: Localized;
}

export interface RoleCombination {
  id: string;
  players: number;
  name: Localized;
  good: string[];
  evil: string[];
}

export interface Expansion {
  id: string;
  name: Localized;
  summary: Localized;
  recommendedPlayers?: string;
}

export interface LancelotRule {
  id: 'rule1' | 'rule2' | 'rule3';
  title: Localized;
  brief: Localized;
  detail: { zh: string[]; en: string[] };
}

export const playerCounts = playerCountsJson as PlayerCount[];
export const roles = rolesJson as Role[];
export const roleCombinations = roleCombinationsJson as RoleCombination[];
export const expansions = expansionsJson as Expansion[];
export const lancelotRules = lancelotRulesJson as LancelotRule[];

export const roleById = (id: string): Role | undefined =>
  roles.find((r) => r.id === id);

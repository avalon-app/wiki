---
id: by-player-count
title: 按人数推荐角色
sidebar_label: 按人数查询
---

import RoleRecommendation from '@site/src/components/RoleRecommendation';

# 按人数推荐角色

选择**规则**与**人数**，查看与 [avalon-core](https://github.com/avalon-app/core) 内置配置一致的推荐角色组合。

<RoleRecommendation />

## 说明

- **基础规则**覆盖 5–10 人，由 [`data/role-combinations.yaml`](https://github.com/avalon-app/wiki/blob/main/data/role-combinations.yaml) 中的 `variant: base` 条目驱动。
- **兰斯洛特扩展**覆盖 7–12 人，对应 `variant: lancelot`。其中 **10 人** 邪恶阵营**不含「刺客」**，刺杀由「莫甘娜」执行——详见 [兰斯洛特扩展](../rules/expansions/lancelot.md)。
- 阵营人数与任务流程见 [规则总览](../rules/overview.md)。

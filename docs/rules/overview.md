---
id: overview
title: 规则总览
sidebar_position: 1
---

import PlayerCountTable from '@site/src/components/PlayerCountTable';

# 规则总览

「阿瓦隆」是一款 5–10 人的隐藏身份游戏。玩家被划分为**善良阵营（亚瑟王的忠臣）**与**邪恶阵营（莫德雷德的追随者）**，通过 5 轮任务的成败与最终的「刺杀梅林」环节判定胜负。

## 胜负条件速览

- 任务成功 3 次 → 进入刺杀阶段，刺客若刺中梅林则邪恶胜，否则善良胜。
- 任务失败 3 次 → 邪恶胜。
- 任意一轮任务里连续 5 次组队失败 → 邪恶胜。

详细规则见：

- [基础玩法 / 流程](./base-game.md)
- [任务流程与投票](./mission-flow.md)
- [胜负判定](./win-conditions.md)

## 不同人数下的阵营分布

<PlayerCountTable />

> 表格中带 `*` 号的任务表示**保护轮**，需要两张失败票任务才会失败。

数据维护在 [`data/player-counts.yaml`](https://github.com/avalon-app/wiki/blob/main/data/player-counts.yaml)，构建后由 `@avalon-app/wiki/data/player-counts` 暴露。

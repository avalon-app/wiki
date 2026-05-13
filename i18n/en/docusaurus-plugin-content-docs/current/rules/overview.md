---
id: overview
title: Rules Overview
sidebar_position: 1
---

import PlayerCountTable from '@site/src/components/PlayerCountTable';

# Rules Overview

Avalon is a 5–10 player hidden-role game. Players are split into **Good (Loyal Servants of Arthur)** and **Evil (Minions of Mordred)**, and the winner is decided across 5 quests plus a final assassination phase.

## Win conditions at a glance

- 3 quests succeed → assassination phase; if the Assassin names Merlin, Evil wins, otherwise Good wins.
- 3 quests fail → Evil wins.
- 5 consecutive rejected team proposals (within a single quest) → Evil wins.

See also:

- [Base Game / Flow](./base-game.md)
- [Mission Flow & Voting](./mission-flow.md)
- [Win Conditions](./win-conditions.md)

## Faction distribution by player count

<PlayerCountTable />

> Mission cells marked with `*` are **protected rounds** — two Fail cards are required for the quest to fail.

Data is maintained in [`data/player-counts.yaml`](https://github.com/avalon-app/wiki/blob/main/data/player-counts.yaml) and exposed at `@avalon-app/wiki/data/player-counts` after build.

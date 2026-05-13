---
title: Base Game
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Base Game

A round of Avalon loops through four phases until a winner is decided.

## Opening

Every player taps the **Identity** button to see their role and any visible information (Merlin's view of evil, Percival's two candidates, etc.).

## Team Building

1. A random leader is chosen; they pick the team for this quest.
2. All players **openly vote** to approve or reject the team.
3. More than half approve → the team proceeds to the quest phase.
4. Otherwise → the leader passes **clockwise** to the next player, who proposes a new team.
5. If a single quest sees **5 consecutive rejected proposals**, Evil (Red) wins immediately.

> <img src={useBaseUrl('/img/cards/leader-token.png')} alt="Leader token" width="28" style={{verticalAlign: 'middle'}} /> A crown icon on a player's avatar marks the current leader.

## Quest

1. Team members vote **anonymously** for Success <img src={useBaseUrl('/img/cards/mission-success.png')} alt="Success" width="22" style={{verticalAlign: 'middle'}} /> or Fail <img src={useBaseUrl('/img/cards/mission-fail.png')} alt="Fail" width="22" style={{verticalAlign: 'middle'}} />.
2. **Good (Blue)** must play Success; **Evil (Red)** may choose either.
3. Any single Fail card causes the quest to fail — unless this is a **protected round**.
4. **Protected round** (the 4th quest at 7+ players) requires **two Fail cards** to fail.
5. The leader passes clockwise; play continues until Successes or Failures reach **three**.
6. 3 Successes → assassination phase; 3 Failures → Evil wins.

## Assassination

1. The Assassin may attempt the kill **at any point in the game** (typically after 3 Successes, when Evil opens the assassination by default).
2. Correct guess → Evil wins.
3. Wrong guess → Good wins.

See the mission-size table and protected-round rules in [Rules Overview](./overview.md); win conditions are summarised in [Win Conditions](./win-conditions.md).

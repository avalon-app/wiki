---
title: Mission Flow & Voting
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mission Flow & Voting

Each of the 5 quests follows this sequence:

## 1. Team Building

- The leader chooses the team. The size is fixed by the [player-count configuration](./overview.md#faction-distribution-by-player-count).
- The leader may include **any** player (including themselves), as long as the size is exact.

## 2. Open Vote

- Everyone reveals Approve / Reject simultaneously.
- More than half Approve → team proceeds.
- Otherwise → leader passes clockwise; a new team is proposed.
- **5 consecutive rejections** in a single quest → Evil wins outright.

## 3. Quest Execution

The quest is resolved with two outcome cards:

<div style={{display: 'flex', gap: '1.5rem', alignItems: 'center', margin: '1rem 0'}}>
  <figure style={{margin: 0, textAlign: 'center'}}>
    <img src={useBaseUrl('/img/cards/mission-success.png')} alt="Mission Success card" width="96" />
    <figcaption>Success</figcaption>
  </figure>
  <figure style={{margin: 0, textAlign: 'center'}}>
    <img src={useBaseUrl('/img/cards/mission-fail.png')} alt="Mission Fail card" width="96" />
    <figcaption>Fail</figcaption>
  </figure>
</div>

- Only chosen team members play cards anonymously.
- Good may only play Success; Evil may play Success or Fail.
- Resolution:
  - Standard quest: **any 1 Fail card** → quest fails.
  - Protected round (4th quest at 7+ players): **at least 2 Fail cards** → quest fails.

## 4. Next Quest

- Leader passes clockwise.
- 3 Successes → assassination phase; 3 Failures → Evil wins.

## Protected Round Cheat Sheet

| Players | Protected round |
| --- | --- |
| 5 / 6 | none |
| 7 / 8 / 9 / 10 | quest 4 |

For full mission sizes see the [player-count table](./overview.md#faction-distribution-by-player-count).

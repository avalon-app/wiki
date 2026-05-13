---
title: Lancelot
---

# Lancelot

## Background

- Introduces two Lancelots: [Lancelot (Good)](../../roles/good/lancelot.md) and [Lancelot (Evil)](../../roles/evil/lancelot.md).
- At game start, the evil Lancelot is **visible to Merlin and to other evil players**, but **does not see** other evil players.
- Under Rules 1 & 2, Lancelots' alignments may **swap** during play (good becomes evil, evil becomes good).
- A Lancelot wins or loses based on their alignment **at the end of the game**.

:::warning Note
Lancelot alignment swaps happen **silently** between players; the role panel does not show the change, but vote restrictions (e.g. Rule 2's Fail-only constraint on evil Lancelot) still apply.
:::

## Supported player counts

The Lancelot expansion supports **7 / 8 / 9 / 10 / 11 / 12** players. When enabled, the two Lancelots replace one Good and one Evil slot. The role composition and mission sizes are:

| Players | Roles | Mission sizes | Protected round |
| --- | --- | --- | --- |
| 7  | Merlin / Percival / Loyal Servant / Lancelot (Good) ・ Morgana / Assassin / Lancelot (Evil) | 2 / 3 / 3 / 4 / 4 | Quest 4 |
| 8  | Merlin / Percival / Loyal Servant ×2 / Lancelot (Good) ・ Morgana / Assassin / Lancelot (Evil) | 3 / 4 / 4 / 5 / 5 | Quest 4 |
| 9  | Merlin / Percival / Loyal Servant ×3 / Lancelot (Good) ・ Morgana / Assassin / Lancelot (Evil) | 3 / 4 / 4 / 5 / 5 | Quest 4 |
| 10 | Merlin / Percival / Loyal Servant ×3 / Lancelot (Good) ・ Mordred / Morgana / Lancelot (Evil) / Oberon | 3 / 4 / 4 / 5 / 5 | Quest 4 |
| 11 | Merlin / Percival / Loyal Servant ×4 / Lancelot (Good) ・ Mordred / Morgana / Lancelot (Evil) / Assassin | 3 / 4 / 5 / 6 / 6 | Quest 4 |
| 12 | Merlin / Percival / Loyal Servant ×4 / Lancelot (Good) ・ Mordred / Morgana / Lancelot (Evil) / Oberon / Assassin | 3 / 4 / 5 / 6 / 6 | Quest 4 |

:::info Special case — 10 players with Lancelot
In the **10-player** Lancelot setup, Evil has **no Assassin role**; **Morgana** carries out the assassination of Merlin instead. All other player counts keep Assassin as the killer.
:::

## Rule 1

From quest 3 onward, the leader draws a swap card before each team build; 0–2 swaps may occur.

- Deck of **5 swap cards**: 3 blank, 2 "swap".
- Drawing "swap" swaps the two Lancelots' alignments.
- The draw happens **before each proposal** from quest 3 onward.

## Rule 2

5 swap cards are revealed at game start; alignment changes are evaluated each quest. The evil-side Lancelot must play Fail when participating.

- Deck of **7 swap cards**: 5 blank, 2 "swap"; 5 are randomly selected at game start and revealed in order, one per quest.
- At the start of each quest, the corresponding card determines whether the two Lancelots swap.
- While the Lancelot is on the evil side, they can **only play Fail** on quests.

## Rule 3

Lancelots never swap, but the good and evil Lancelots see each other.

- No alignment changes.
- The two Lancelots are mutually visible.

## Data source

The full sub-rule text is maintained in [`data/lancelot-rules.yaml`](https://github.com/avalon-app/wiki/blob/main/data/lancelot-rules.yaml) and exposed at `@avalon-app/wiki/data/lancelot-rules` after build.

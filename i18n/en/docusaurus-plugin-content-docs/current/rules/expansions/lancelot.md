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

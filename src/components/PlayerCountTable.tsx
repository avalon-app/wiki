import React from 'react';
import { playerCounts } from '@site/src/data';

export default function PlayerCountTable(): JSX.Element {
  return (
    <table>
      <thead>
        <tr>
          <th>人数 / Players</th>
          <th>好人 / Good</th>
          <th>坏人 / Evil</th>
          <th>任务人数 / Mission size</th>
        </tr>
      </thead>
      <tbody>
        {playerCounts.map((row) => (
          <tr key={row.players}>
            <td>{row.players}</td>
            <td>{row.good}</td>
            <td>{row.evil}</td>
            <td>
              {row.missionSize.map((n, i) => {
                const needsTwoFails = row.doubleFailRound === i + 1;
                return (
                  <span key={i} style={{ marginRight: 8 }}>
                    {n}
                    {needsTwoFails ? '*' : ''}
                  </span>
                );
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import React, { useMemo, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  roleCombinations,
  roleById,
  type Locale,
  type Variant,
} from '@site/src/data';

interface Props {
  locale?: Locale;
}

const VARIANT_LABEL: Record<Variant, Record<Locale, string>> = {
  base: { zh: '基础规则', en: 'Base rules' },
  lancelot: { zh: '兰斯洛特扩展', en: 'Lancelot expansion' },
};

const FACTION_LABEL: Record<'good' | 'evil', Record<Locale, string>> = {
  good: { zh: '正义阵营', en: 'Good' },
  evil: { zh: '邪恶阵营', en: 'Evil' },
};

const STRINGS: Record<Locale, {
  variantLabel: string;
  playersLabel: string;
  empty: string;
  playerSuffix: string;
}> = {
  zh: { variantLabel: '规则', playersLabel: '人数', empty: '该人数下暂无推荐组合。', playerSuffix: ' 人' },
  en: { variantLabel: 'Rules', playersLabel: 'Players', empty: 'No recommended setup for this player count yet.', playerSuffix: ' players' },
};

function RoleChip({ id, locale }: { id: string; locale: Locale }) {
  const role = roleById(id);
  const img = useBaseUrl(role?.image ?? '');
  if (!role) return null;
  const isGood = role.faction === 'good';
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 12px',
        border: `1px solid var(--ifm-color-emphasis-300)`,
        borderLeft: `4px solid ${isGood ? '#2563eb' : '#dc2626'}`,
        borderRadius: 6,
        background: 'var(--ifm-card-background-color, var(--ifm-background-surface-color))',
        minWidth: 180,
      }}
    >
      <img src={img} alt={role.name[locale]} width={40} height={40} style={{ objectFit: 'contain' }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <strong style={{ fontSize: '0.95em' }}>{role.name[locale]}</strong>
        <span style={{ fontSize: '0.75em', opacity: 0.7 }}>{FACTION_LABEL[role.faction][locale]}</span>
      </div>
    </div>
  );
}

export default function RoleRecommendation({ locale = 'zh' }: Props): JSX.Element {
  const s = STRINGS[locale];

  const variants = useMemo(
    () => Array.from(new Set(roleCombinations.map((c) => c.variant))),
    [],
  );
  const [variant, setVariant] = useState<Variant>(variants[0] ?? 'base');

  const playersForVariant = useMemo(
    () =>
      Array.from(new Set(roleCombinations.filter((c) => c.variant === variant).map((c) => c.players)))
        .sort((a, b) => a - b),
    [variant],
  );
  const [players, setPlayers] = useState<number>(playersForVariant[0] ?? 5);

  // Keep `players` valid when variant changes.
  React.useEffect(() => {
    if (!playersForVariant.includes(players)) {
      setPlayers(playersForVariant[0] ?? 5);
    }
  }, [variant, playersForVariant, players]);

  const combo = roleCombinations.find((c) => c.variant === variant && c.players === players);

  const btn = (active: boolean): React.CSSProperties => ({
    padding: '6px 14px',
    borderRadius: 6,
    border: '1px solid var(--ifm-color-emphasis-300)',
    background: active ? 'var(--ifm-color-primary)' : 'transparent',
    color: active ? '#fff' : 'inherit',
    cursor: 'pointer',
    fontSize: '0.9em',
  });

  return (
    <div style={{ margin: '1rem 0' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1rem' }}>
        <div>
          <div style={{ fontSize: '0.85em', opacity: 0.7, marginBottom: 4 }}>{s.variantLabel}</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {variants.map((v) => (
              <button key={v} type="button" style={btn(v === variant)} onClick={() => setVariant(v)}>
                {VARIANT_LABEL[v][locale]}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: '0.85em', opacity: 0.7, marginBottom: 4 }}>{s.playersLabel}</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {playersForVariant.map((p) => (
              <button key={p} type="button" style={btn(p === players)} onClick={() => setPlayers(p)}>
                {p}
                {s.playerSuffix}
              </button>
            ))}
          </div>
        </div>
      </div>

      {combo ? (
        <div>
          <h3 style={{ marginTop: 0 }}>{combo.name[locale]}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {[...combo.good, ...combo.evil].map((id, idx) => (
              <RoleChip key={`${id}-${idx}`} id={id} locale={locale} />
            ))}
          </div>
        </div>
      ) : (
        <p>{s.empty}</p>
      )}
    </div>
  );
}

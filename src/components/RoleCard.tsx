import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { roleById, type Locale } from '@site/src/data';

interface Props {
  id: string;
  locale?: Locale;
}

export default function RoleCard({ id, locale = 'zh' }: Props): JSX.Element | null {
  const role = roleById(id);
  const img = useBaseUrl(role?.image ?? '');
  if (!role) {
    return <div style={{ color: 'crimson' }}>未知角色：{id}</div>;
  }
  return (
    <aside
      style={{
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        padding: 12,
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: 8,
        margin: '12px 0',
      }}
    >
      <img
        src={img}
        alt={role.name[locale]}
        width={96}
        height={96}
        style={{ objectFit: 'contain', flex: '0 0 auto' }}
      />
      <div>
        <strong>{role.name[locale]}</strong>
        <div style={{ fontSize: '0.9em', opacity: 0.8 }}>
          {role.faction === 'good' ? '正义阵营 / Good' : '邪恶阵营 / Evil'}
        </div>
        <p style={{ marginTop: 6 }}>{role.summary[locale]}</p>
      </div>
    </aside>
  );
}

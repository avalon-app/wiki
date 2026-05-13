import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  wiki: [
    'intro',
    {
      type: 'category',
      label: '规则',
      link: { type: 'doc', id: 'rules/overview' },
      items: [
        'rules/base-game',
        'rules/mission-flow',
        'rules/win-conditions',
        {
          type: 'category',
          label: '扩展',
          items: [
            'rules/expansions/lady-of-the-lake',
            'rules/expansions/excalibur',
            'rules/expansions/lancelot',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '角色',
      link: { type: 'doc', id: 'roles/overview' },
      items: [
        {
          type: 'category',
          label: '正义阵营',
          items: [
            'roles/good/merlin',
            'roles/good/percival',
            'roles/good/loyal-servant',
            'roles/good/lancelot',
          ],
        },
        {
          type: 'category',
          label: '邪恶阵营',
          items: [
            'roles/evil/assassin',
            'roles/evil/morgana',
            'roles/evil/mordred',
            'roles/evil/oberon',
            'roles/evil/minion',
            'roles/evil/lancelot',
          ],
        },
      ],
    },
  ],
};

export default sidebars;

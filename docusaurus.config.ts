import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const GITHUB_REPO = 'https://github.com/avalon-app/wiki';

const config: Config = {
  title: 'Avalon Wiki',
  tagline: '阿瓦隆桌游规则、角色与美术资源',
  favicon: 'img/favicon.png',

  url: 'https://avalon-wiki.enmo.fun',
  baseUrl: '/',

  organizationName: 'avalon-app',
  projectName: 'wiki',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': { label: '简体中文' },
      en: { label: 'English' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: ({ versionDocsDirPath, docPath, locale }) =>
            locale === 'zh-Hans'
              ? `${GITHUB_REPO}/edit/main/${versionDocsDirPath}/${docPath}`
              : `${GITHUB_REPO}/edit/main/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Avalon Wiki',
      logo: { alt: 'Avalon Wiki', src: 'img/logo.png' },
      items: [
        { to: '/rules/overview', label: '规则', position: 'left' },
        { to: '/roles/overview', label: '角色', position: 'left' },
        { type: 'localeDropdown', position: 'right' },
        { href: GITHUB_REPO, label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} @avalon-app/wiki. 文案以 CC BY-NC-SA 4.0 协议发布。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['yaml', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

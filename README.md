# @avalon-app/wiki

阿瓦隆桌游（The Resistance: Avalon）的中文 Wiki，同时作为 npm 包对外提供结构化数据与美术资源。

- 📖 站点基于 **Docusaurus 3.x**，支持中英双语
- 🃏 角色、规则、策略文案位于 `docs/`（中文）与 `i18n/en/`（英文）
- 📦 结构化数据维护在 `data/*.yaml`，构建后通过 `dist-data/*.json` 暴露
- 🖼️ 美术资源位于 `static/img/`

## 快速开始

```bash
pnpm install
pnpm start              # 启动 dev server（自动构建 data）
pnpm build              # 输出静态站到 build/
pnpm validate:data      # 校验 data/ 下 YAML 结构
```

需要 Node 20（见 `.nvmrc`）与 pnpm 9。

## 目录结构

```
.
├── docs/                       # 中文文档源
├── i18n/en/                    # 英文翻译镜像
├── data/                       # 结构化数据（YAML 源文件）
├── dist-data/                  # 构建产物（JSON，gitignore，随包发布）
├── static/img/{roles,cards,board}/  # 美术资源
├── src/                        # 站点定制（组件、样式、数据入口）
├── scripts/                    # build-data / validate-data
├── docusaurus.config.ts
└── sidebars.ts
```

## 作为 npm 包使用

```ts
import roles from '@avalon-app/wiki/data/roles';
import playerCounts from '@avalon-app/wiki/data/player-counts';
import roleCombinations from '@avalon-app/wiki/data/role-combinations';

// 引用图片资源（Node / 现代打包器）：
const merlin = new URL(
  '../node_modules/@avalon-app/wiki/static/img/roles/merlin.png',
  import.meta.url,
);
```

`package.json#exports` 暴露：

- `./data/*` → `dist-data/*.json`
- `./assets/*` → `static/img/*`

## 数据维护流程

1. 编辑 `data/*.yaml`
2. 运行 `pnpm validate:data` 确认结构正确
3. 运行 `pnpm build:data` 重新生成 `dist-data/`（或交由 `pnpm start` / `pnpm build` 自动执行）

## 许可

- 文案 / 数据：[CC BY-NC-SA 4.0](./LICENSE)
- 代码：MIT
- 美术资源：见 [static/img/roles/README.md](./static/img/roles/README.md)

English version: [README.en.md](./README.en.md)

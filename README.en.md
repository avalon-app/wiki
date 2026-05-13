# @avalon-app/wiki

A community wiki for *The Resistance: Avalon*, also distributed as an npm package that exposes structured data and art assets.

- 📖 Docusaurus 3.x site, bilingual (Chinese & English)
- 🃏 Rule / role / strategy docs in `docs/` (Chinese) and `i18n/en/` (English)
- 📦 Structured data in `data/*.yaml`, surfaced as `dist-data/*.json` after build
- 🖼️ Art assets in `static/img/`

## Quick start

```bash
pnpm install
pnpm start              # dev server (auto-builds data)
pnpm build              # static build → build/
pnpm validate:data      # validate data/ YAML files
```

Requires Node 20 (see `.nvmrc`) and pnpm 9.

## Layout

```
.
├── docs/                       # Chinese docs (default locale)
├── i18n/en/                    # English mirror
├── data/                       # YAML source
├── dist-data/                  # generated JSON (gitignored, shipped with the package)
├── static/img/{roles,cards,board}/
├── src/                        # site customisation
├── scripts/                    # build-data / validate-data
├── docusaurus.config.ts
└── sidebars.ts
```

## Usage as an npm package

```ts
import roles from '@avalon-app/wiki/data/roles';
import playerCounts from '@avalon-app/wiki/data/player-counts';
import roleCombinations from '@avalon-app/wiki/data/role-combinations';

const merlin = new URL(
  '../node_modules/@avalon-app/wiki/static/img/roles/merlin.png',
  import.meta.url,
);
```

`package.json#exports` provides:

- `./data/*` → `dist-data/*.json`
- `./assets/*` → `static/img/*`

## Data workflow

1. Edit `data/*.yaml`
2. Run `pnpm validate:data`
3. Run `pnpm build:data` (or just `pnpm start` / `pnpm build`)

## License

- Content / data: [CC BY-NC-SA 4.0](./LICENSE)
- Code: MIT
- Art assets: see [static/img/roles/README.md](./static/img/roles/README.md)

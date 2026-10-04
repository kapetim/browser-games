# games

Games in **all deployable forms** — the same puzzles (sudoku · logic-grid · crosswords) rendered per platform. No backend, no database, no accounts.

## 🚀 Deployables

| Folder | Platform | Renderer |
| --- | --- | --- |
| [`src/browser/`](src/browser) | web (GitHub Pages) | Rust + WebAssembly |
| [`src/windows/`](src/windows) | native Windows | Godot |
| [`src/unix/`](src/unix) | native Linux / macOS | Godot |

The folder names are **platforms**; the engine is an implementation detail.

## 🧩 Shared

- [`src/catalog/`](src/catalog) — `games.yaml` (the source of truth) + tags.
- [`src/data/`](src/data) — per-game puzzle banks.
- [`assets/`](assets) — submodule ([`kapetim/ui-assets`](https://github.com/kapetim/ui-assets)): images · fonts · audio, shared with the other deployables and `data-science`.

## 🗂️ Structure

```text
src/catalog/        games.yaml + tags
src/data/           per-game static datasets
src/browser/        web deployable
  rust/             Rust workspace (wasm32 engines)
  frontend/         React + TS launcher
src/windows/        native Windows deployable (Godot)
src/unix/           native Unix deployable (Godot)
assets/             shared assets submodule
src/docs/           GAMES / GOALS / REQUIREMENTS
```

## 🎮 Games

The catalog ([`src/catalog/games.yaml`](src/catalog/games.yaml)) is the source of truth — the three pillars, each mapped to a `/play/<slug>` route:

| Game | Route |
| --- | --- |
| Sudoku | `/play/sudoku` |
| Logic Grid | `/play/logic-puzzles` |
| Crosswords | `/play/crosswords` |

Other game ideas live as issues — see [`src/docs/GAMES.md`](src/docs/GAMES.md). Add-a-game boilerplate: [`src/docs/ADD-A-GAME.md`](src/docs/ADD-A-GAME.md).

## ⚡ Quick start

```bash
# assets (submodule)
git submodule update --init --recursive

# browser deployable
npm --prefix src/browser/frontend/launcher run dev
cargo build --workspace -p sudoku -p logic-grid -p crosswords
```

## 📄 Docs

- [`src/docs/GAMES.md`](src/docs/GAMES.md) — game issue roadmap
- [`src/docs/REQUIREMENTS.md`](src/docs/REQUIREMENTS.md) — game requirements
- [`src/docs/GOALS.md`](src/docs/GOALS.md) — project goals

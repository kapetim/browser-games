# browser-games

Browser games built with **Rust → WebAssembly** — sudoku · logic grid · crosswords. Static, solo, offline after first load; no backend, no database, no accounts.

## 🎮 Games

The catalog ([`src/catalog/games.yaml`](src/catalog/games.yaml)) is the source of truth — each game maps to a `/play/<slug>` route:

| Game | Route |
| --- | --- |
| Sudoku | `/play/sudoku` |
| Logic Grid | `/play/logic-puzzles` |
| Crosswords | `/play/crosswords` |

Each game **is** a wasm crate under [`src/games/`](src/games); the React launcher ([`src/frontend/`](src/frontend)) is just the host. Other game ideas live as issues — see [`src/docs/GAMES.md`](src/docs/GAMES.md); add-a-game boilerplate: [`src/docs/ADD-A-GAME.md`](src/docs/ADD-A-GAME.md).

## 🗂️ Structure

```text
src/games/          Rust → wasm32 (one crate per game)
src/frontend/       React + Vite launcher (host)
src/catalog/        games.yaml + tags.yaml + manifest.yaml
src/data/           per-game puzzle banks
src/docs/           GAMES / GOALS / REQUIREMENTS / ADD-A-GAME
assets/             shared assets submodule (kapetim/ui-assets)
```

## ⚡ Quick start

```bash
# assets (submodule)
git submodule update --init --recursive

# games (wasm)
cargo build --workspace -p sudoku -p logic-grid -p crosswords --target wasm32-unknown-unknown

# launcher
npm --prefix src/frontend ci
npm --prefix src/frontend run dev
```

## 📄 Docs

- [`src/docs/GAMES.md`](src/docs/GAMES.md) — game issue roadmap
- [`src/docs/REQUIREMENTS.md`](src/docs/REQUIREMENTS.md) — game requirements
- [`src/docs/GOALS.md`](src/docs/GOALS.md) — project goals
- [`src/docs/ADD-A-GAME.md`](src/docs/ADD-A-GAME.md) — add a game

# Add a game — boilerplate

browser-games is a Rust-first monorepo. Adding a game follows a fixed pattern; the game logic itself is tracked as issues.

## Steps

1. **Catalog** — add/update the entry in `src/catalog/games.yaml` (title, slug, `/play/<slug>` route, status, tags).
2. **WASM engine** — a Rust crate under `src/browser/rust/engines/<slug>/` (wasm32 target) exposing the standard game contract (init → render → tick), rendering to canvas. Copy an existing engine crate as the starting boilerplate.
3. **Launcher** — `src/browser/frontend/launcher` routes to `/play/<slug>`; the catalog is the source of truth for the game list.
4. **Backend** — endpoints under `src/browser/rust/backend/games/` (fetch puzzle, submit score, leaderboard) as needed.
5. **Data** — per-game data under `src/data/<slug>/`.
6. **Issue** — open a GitHub issue (label `game`) for the game logic, referencing the catalog entry.

## Keep it focused

The daily pillars are **sudoku · logic grid · crosswords**. Other game ideas live as issues, not in the active catalog.

# Add a game — boilerplate

browser-games is a Rust-first repo: each game compiles to **WebAssembly**, and the React launcher only hosts it. Adding a game follows a fixed pattern; the game logic itself is tracked as issues.

## Steps

1. **Catalog** — add/update the entry in `src/catalog/games.yaml` (title, slug, `/play/<slug>` route, status, tags).
2. **wasm game** — a Rust crate under `src/games/<slug>/` (wasm32 target) exposing the game contract (init → render → tick), rendering to canvas. Copy an existing crate as the starting boilerplate.
3. **Launcher** — `src/frontend` loads the game's `.wasm` and routes to `/play/<slug>`; the catalog is the source of truth for the game list.
4. **Data** — per-game data under `src/data/<slug>/`.
5. **Issue** — open a GitHub issue (label `game`) for the game logic, referencing the catalog entry.

## Keep it focused

The daily pillars are **sudoku · logic grid · crosswords**. Other game ideas live as issues, not in the active catalog.

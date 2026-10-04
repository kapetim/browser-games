export interface GameEntry {
  slug: string
  title: string
  emoji: string
  route: string
  tags: string[]
  blurb: string
}

const catalog: GameEntry[] = [
  { slug: 'sudoku', title: 'Sudoku', emoji: '🔢', route: '/play/sudoku', tags: ['grid', 'logic', 'newspaper'], blurb: '9×9 grid with notes and answer reveal.' },
  { slug: 'logic-puzzles', title: 'Logic Grid', emoji: '🧩', route: '/play/logic-puzzles', tags: ['grid', 'logic', 'newspaper'], blurb: 'Clues, categories, green-check marking.' },
  { slug: 'crosswords', title: 'Crosswords', emoji: '📝', route: '/play/crosswords', tags: ['word', 'grid', 'newspaper'], blurb: 'Clues and grid — check letter or word.' },
]

export default catalog

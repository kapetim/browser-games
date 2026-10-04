import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import Header from './components/Header'
import GameCard from './components/GameCard'
import catalog, { type GameEntry } from './catalog'

function Home() {
  const navigate = useNavigate()

  const handlePlay = (game: GameEntry) => {
    navigate(game.route)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Puzzles</h1>
          <p className="text-gray-500 mt-1 text-sm">Choose a puzzle to play — solo, logic-focused, minimal.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {catalog.map((game) => (
            <GameCard key={game.slug} game={game} onPlay={handlePlay} />
          ))}
        </div>
      </main>
    </div>
  )
}

function GamePlaceholder() {
  const { slug } = useParams()
  const game = catalog.find((g) => g.route === `/play/${slug}`)
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="p-8 text-center text-gray-500">
          {game ? `${game.title} — wasm engine coming soon` : 'Game not found'}
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play/:slug" element={<GamePlaceholder />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

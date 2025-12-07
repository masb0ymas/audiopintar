import { Link } from '@tanstack/react-router'
import { Play } from 'lucide-react'

import { Progress } from '~/components/ui/progress'

interface ContinueItem {
  id: string
  title: string
  author: string
  cover: string
  progress: number
  timeLeft: string
}

const continueItems: ContinueItem[] = [
  {
    id: '1',
    title: 'Atomic Habits',
    author: 'James Clear',
    cover:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=200&fit=crop',
    progress: 65,
    timeLeft: '2h 15m left',
  },
  {
    id: '2',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    cover:
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=200&h=200&fit=crop',
    progress: 32,
    timeLeft: '4h 30m left',
  },
  {
    id: '3',
    title: 'Deep Work',
    author: 'Cal Newport',
    cover:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&h=200&fit=crop',
    progress: 78,
    timeLeft: '1h 10m left',
  },
]

export function ContinueListening() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Continue Listening
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {continueItems.map((item) => (
          <Link
            to={item.id}
            key={item.id}
            className="group flex items-center gap-4 bg-secondary/50 hover:bg-secondary rounded-lg p-3 transition-all cursor-pointer"
          >
            <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
              <img
                src={item.cover}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <button className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-6 h-6 text-foreground" fill="currentColor" />
              </button>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate text-sm">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground truncate mb-2">
                {item.author}
              </p>
              <div className="flex items-center gap-2">
                <Progress value={item.progress} className="h-1 flex-1" />
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {item.timeLeft}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

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
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=200&fit=crop',
    progress: 65,
    timeLeft: '2h 15m left',
  },
  {
    id: '2',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    cover: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=200&h=200&fit=crop',
    progress: 32,
    timeLeft: '4h 30m left',
  },
  {
    id: '3',
    title: 'Deep Work',
    author: 'Cal Newport',
    cover: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&h=200&fit=crop',
    progress: 78,
    timeLeft: '1h 10m left',
  },
]

export function ContinueListening() {
  return (
    <section className="mb-8">
      <h2 className="text-foreground mb-4 text-2xl font-bold">Continue Listening</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {continueItems.map((item) => (
          <Link
            to={`/audio/${item.id}`}
            key={item.id}
            className="group bg-secondary/50 hover:bg-secondary flex cursor-pointer items-center gap-4 rounded-lg p-3 transition-all"
          >
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
              <img src={item.cover} alt={item.title} className="h-full w-full object-cover" />
              <button className="bg-background/60 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <Play className="text-foreground h-6 w-6" fill="currentColor" />
              </button>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-foreground truncate text-sm font-semibold">{item.title}</h3>
              <p className="text-muted-foreground mb-2 truncate text-xs">{item.author}</p>
              <div className="flex items-center gap-2">
                <Progress value={item.progress} className="h-1 flex-1" />
                <span className="text-muted-foreground text-xs whitespace-nowrap">
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

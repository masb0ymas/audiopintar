import { ChevronRight } from 'lucide-react'

import { AudiobookCard } from './audiobook-card'

interface Audiobook {
  id: string
  title: string
  author: string
  cover: string
  duration: string
}

interface CategorySectionProps {
  title: string
  audiobooks: Audiobook[]
}

export function CategorySection({ title, audiobooks }: CategorySectionProps) {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <button className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
          Show all
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {audiobooks.map((book) => (
          <AudiobookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            cover={book.cover}
            duration={book.duration}
          />
        ))}
      </div>
    </section>
  )
}

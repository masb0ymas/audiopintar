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
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-foreground text-2xl font-bold">{title}</h2>
        <button className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm font-semibold transition-colors">
          Show all
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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

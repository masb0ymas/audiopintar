import { MoreHorizontal, Play, Plus } from 'lucide-react'

import { Button } from '~/components/ui/button'

export function HeroSection() {
  return (
    <section
      className="relative mb-8 overflow-hidden rounded-xl"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="flex flex-col items-end gap-6 p-6 md:flex-row md:p-8">
        {/* Book Cover */}
        <div className="animate-fade-in h-48 w-48 flex-shrink-0 overflow-hidden rounded-lg shadow-2xl md:h-56 md:w-56">
          <img
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=400&fit=crop"
            alt="Featured audiobook"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Book Info */}
        <div className="animate-slide-up flex-1" style={{ animationDelay: '0.1s' }}>
          <span className="text-primary mb-2 inline-block text-xs font-semibold tracking-wider uppercase">
            Featured Audiobook
          </span>
          <h1 className="text-foreground mb-2 text-3xl font-extrabold md:text-5xl">
            The Art of Thinking Clearly
          </h1>
          <p className="text-muted-foreground mb-4">
            <span className="text-foreground font-medium">Rolf Dobelli</span> • 2013 • 6h 42m
          </p>
          <p className="text-muted-foreground mb-6 line-clamp-2 max-w-2xl text-sm">
            A world-class thinker offers a guide to avoiding the most common mental mistakes that
            can stop you from reaching your potential.
          </p>
          <div className="flex items-center gap-3">
            <Button size="lg" className="animate-pulse-glow gap-2 rounded-full px-8 font-semibold">
              <Play className="h-5 w-5" fill="currentColor" />
              Play
            </Button>
            <button className="border-muted-foreground/50 text-muted-foreground hover:text-foreground hover:border-foreground flex h-10 w-10 items-center justify-center rounded-full border transition-colors">
              <Plus className="h-5 w-5" />
            </button>
            <button className="text-muted-foreground hover:text-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

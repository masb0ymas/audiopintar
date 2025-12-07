import { MoreHorizontal,Play, Plus } from 'lucide-react'

import { Button } from '~/components/ui/button'

export function HeroSection() {
  return (
    <section
      className="relative mb-8 rounded-xl overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className="flex flex-col md:flex-row items-end gap-6 p-6 md:p-8">
        {/* Book Cover */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden shadow-2xl flex-shrink-0 animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=400&fit=crop"
            alt="Featured audiobook"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Book Info */}
        <div
          className="flex-1 animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 inline-block">
            Featured Audiobook
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-2">
            The Art of Thinking Clearly
          </h1>
          <p className="text-muted-foreground mb-4">
            <span className="font-medium text-foreground">Rolf Dobelli</span> •
            2013 • 6h 42m
          </p>
          <p className="text-muted-foreground text-sm max-w-2xl mb-6 line-clamp-2">
            A world-class thinker offers a guide to avoiding the most common
            mental mistakes that can stop you from reaching your potential.
          </p>
          <div className="flex items-center gap-3">
            <Button
              size="lg"
              className="rounded-full gap-2 px-8 font-semibold animate-pulse-glow"
            >
              <Play className="w-5 h-5" fill="currentColor" />
              Play
            </Button>
            <button className="w-10 h-10 rounded-full border border-muted-foreground/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              <Plus className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

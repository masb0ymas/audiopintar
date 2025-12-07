import { Link } from '@tanstack/react-router'
import { Play } from 'lucide-react'

import { cn } from '~/lib/utils'

interface AudiobookCardProps {
  id: string
  title: string
  author: string
  cover: string
  duration?: string
  className?: string
}

export function AudiobookCard({
  id,
  title,
  author,
  cover,
  duration,
  className,
}: AudiobookCardProps) {
  return (
    <Link
      to={`/audio/${id}`}
      className={cn(
        'group bg-card hover:bg-secondary card-glow relative cursor-pointer rounded-lg p-4 transition-all duration-300',
        className,
      )}
    >
      {/* Cover Image */}
      <div className="relative mb-4 aspect-square overflow-hidden rounded-md shadow-lg">
        <img
          src={cover}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Play Button Overlay */}
        <button className="bg-primary hover:bg-primary/90 absolute right-2 bottom-2 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-105">
          <Play className="text-primary-foreground ml-0.5 h-5 w-5" fill="currentColor" />
        </button>
      </div>

      {/* Info */}
      <h3 className="text-foreground mb-1 truncate font-semibold">{title}</h3>
      <p className="text-muted-foreground truncate text-sm">{author}</p>
      {duration && <p className="text-muted-foreground mt-1 text-xs">{duration}</p>}
    </Link>
  )
}

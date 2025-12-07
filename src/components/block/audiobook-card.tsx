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
      to={id}
      className={cn(
        'group relative bg-card rounded-lg p-4 transition-all duration-300 hover:bg-secondary cursor-pointer card-glow',
        className,
      )}
    >
      {/* Cover Image */}
      <div className="relative aspect-square mb-4 rounded-md overflow-hidden shadow-lg">
        <img
          src={cover}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Play Button Overlay */}
        <button className="absolute bottom-2 right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 hover:bg-primary/90">
          <Play
            className="w-5 h-5 text-primary-foreground ml-0.5"
            fill="currentColor"
          />
        </button>
      </div>

      {/* Info */}
      <h3 className="font-semibold text-foreground truncate mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground truncate">{author}</p>
      {duration && (
        <p className="text-xs text-muted-foreground mt-1">{duration}</p>
      )}
    </Link>
  )
}

import {
  Bookmark,
  ListMusic,
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from 'lucide-react'
import { useState } from 'react'

import { Slider } from '~/components/ui/slider'
import { cn } from '~/lib/utils'

interface PlayerBarProps {
  className?: string
}

export function PlayerBar({ className }: PlayerBarProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState([35])
  const [volume, setVolume] = useState([70])

  return (
    <div
      className={cn(
        'bg-card border-border flex h-24 items-center justify-between border-t px-4',
        className,
      )}
    >
      {/* Current Book Info */}
      <div className="flex w-1/4 min-w-[180px] items-center gap-4">
        <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-md shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=200&fit=crop"
            alt="Current audiobook"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <h4 className="text-foreground truncate text-sm font-medium">Atomic Habits</h4>
          <p className="text-muted-foreground truncate text-xs">James Clear</p>
        </div>
        <button className="text-muted-foreground hover:text-primary flex-shrink-0 transition-colors">
          <Bookmark className="h-4 w-4" />
        </button>
      </div>

      {/* Playback Controls */}
      <div className="flex max-w-2xl flex-1 flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Shuffle className="h-4 w-4" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipBack className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-foreground flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105"
          >
            {isPlaying ? (
              <Pause className="text-background h-5 w-5" fill="currentColor" />
            ) : (
              <Play className="text-background ml-0.5 h-5 w-5" fill="currentColor" />
            )}
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipForward className="h-5 w-5" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Repeat className="h-4 w-4" />
          </button>
        </div>

        <div className="flex w-full items-center gap-3">
          <span className="text-muted-foreground w-10 text-right text-xs">1:23:45</span>
          <Slider
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-muted-foreground w-10 text-xs">4:32:10</span>
        </div>
      </div>

      {/* Volume & Extra Controls */}
      <div className="flex w-1/4 min-w-[180px] items-center justify-end gap-4">
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <ListMusic className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          <Volume2 className="text-muted-foreground h-4 w-4" />
          <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-24" />
        </div>
      </div>
    </div>
  )
}

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
        'h-24 bg-card border-t border-border px-4 flex items-center justify-between',
        className,
      )}
    >
      {/* Current Book Info */}
      <div className="flex items-center gap-4 w-1/4 min-w-[180px]">
        <div className="w-14 h-14 rounded-md overflow-hidden shadow-lg flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=200&fit=crop"
            alt="Current audiobook"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <h4 className="font-medium text-foreground text-sm truncate">
            Atomic Habits
          </h4>
          <p className="text-xs text-muted-foreground truncate">James Clear</p>
        </div>
        <button className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0">
          <Bookmark className="w-4 h-4" />
        </button>
      </div>

      {/* Playback Controls */}
      <div className="flex flex-col items-center gap-2 flex-1 max-w-2xl">
        <div className="flex items-center gap-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Shuffle className="w-4 h-4" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-background" fill="currentColor" />
            ) : (
              <Play
                className="w-5 h-5 text-background ml-0.5"
                fill="currentColor"
              />
            )}
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Repeat className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-3 w-full">
          <span className="text-xs text-muted-foreground w-10 text-right">
            1:23:45
          </span>
          <Slider
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-xs text-muted-foreground w-10">4:32:10</span>
        </div>
      </div>

      {/* Volume & Extra Controls */}
      <div className="flex items-center gap-4 w-1/4 justify-end min-w-[180px]">
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <ListMusic className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-muted-foreground" />
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </div>
  )
}

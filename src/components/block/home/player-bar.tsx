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
  VolumeX,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { Slider } from '~/components/ui/slider'
import { cn } from '~/lib/utils'

interface PlaylistProps {
  title: string
  src: string
}

interface PlayerBarProps {
  playlist: PlaylistProps[]
  className?: string
}

export function PlayerBar({ playlist, className }: PlayerBarProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)

  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(100)
  const [currentTrack, setCurrentTrack] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleNext)
    audio.addEventListener('keydown', handleKeydown)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleNext)
      audio.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === ' ') togglePlay()
    if (e.key === 'ArrowLeft') handlePrevious()
    if (e.key === 'ArrowRight') handleNext()
  }

  const togglePlay = () => {
    const audio = audioRef.current
    if (isPlaying) {
      audio?.pause()
    } else {
      audio?.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (isMuted) {
      const restoredVolume = volume === 0 ? 50 : volume
      if (audio) audio.volume = restoredVolume / 100
      if (volume === 0) setVolume(restoredVolume)
      setIsMuted(false)
    } else {
      if (audio) audio.volume = 0
      setIsMuted(true)
    }
  }

  const handleSeek = (value: number) => {
    const audio = audioRef.current
    const seekTime = (value / 100) * duration
    if (audio) audio.currentTime = seekTime
    setCurrentTime(seekTime)
  }

  const handleVolume = (value: number) => {
    const audio = audioRef.current
    if (audio) audio.volume = value / 100
    setVolume(value)
    setIsMuted(value === 0)
  }

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length)
    setIsPlaying(false)
  }

  const handleNext = () => {
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * playlist.length)
      setCurrentTrack(randomIndex)
    } else {
      setCurrentTrack((prev) => (prev + 1) % playlist.length)
    }
    setIsPlaying(false)
  }

  const formatTime = (time: number, totalDuration: number = duration) => {
    const shouldShowHours = totalDuration >= 3600
    const shouldShowMinutes = totalDuration >= 60

    if (isNaN(time)) {
      if (shouldShowHours) return '0:00:00'
      if (shouldShowMinutes) return '0:00'
      return '00'
    }

    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = Math.floor(time % 60)

    const mm = String(minutes).padStart(2, '0')
    const ss = String(seconds).padStart(2, '0')

    if (shouldShowHours) return `${hours}:${mm}:${ss}`
    if (shouldShowMinutes) return `${minutes}:${ss}`
    return ss
  }

  const progress = (currentTime / duration) * 100 || 0

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

      <audio ref={audioRef} src={playlist[currentTrack].src} />

      {/* Playback Controls */}
      <div className="flex max-w-2xl flex-1 flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsShuffle((prev) => !prev)}
            className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
          >
            <Shuffle className="h-4 w-4" />
          </button>
          <button
            onClick={handlePrevious}
            className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
          >
            <SkipBack className="h-5 w-5" />
          </button>
          <button
            onClick={togglePlay}
            className="bg-foreground flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-transform hover:scale-105"
          >
            {isPlaying ? (
              <Pause className="text-background h-5 w-5" fill="currentColor" />
            ) : (
              <Play className="text-background ml-0.5 h-5 w-5" fill="currentColor" />
            )}
          </button>
          <button
            onClick={handleNext}
            className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
          >
            <SkipForward className="h-5 w-5" />
          </button>
          <button className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            <Repeat className="h-4 w-4" />
          </button>
        </div>

        <div className="flex w-full items-center gap-3">
          <span className="text-muted-foreground w-10 text-right text-xs">
            {formatTime(currentTime)}
          </span>
          <Slider
            value={[progress]}
            onValueChange={(val) => handleSeek(val[0])}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-muted-foreground w-10 text-xs">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Volume & Extra Controls */}
      <div className="flex w-1/4 min-w-[180px] items-center justify-end gap-4">
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <ListMusic className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          <button onClick={toggleMute} className="cursor-pointer">
            {isMuted || volume === 0 ? (
              <VolumeX className="text-muted-foreground h-4 w-4" />
            ) : (
              <Volume2 className="text-muted-foreground h-4 w-4" />
            )}
          </button>
          <Slider
            value={[volume]}
            onValueChange={(val) => handleVolume(val[0])}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </div>
  )
}

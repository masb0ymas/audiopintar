import { Bell, ChevronLeft, ChevronRight, Search, User } from 'lucide-react'

import { Input } from '~/components/ui/input'

export function Header() {
  return (
    <header className="bg-background/80 sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 backdrop-blur-md">
      {/* Navigation Arrows */}
      <div className="flex items-center gap-2">
        <button className="bg-secondary hover:bg-muted flex h-8 w-8 items-center justify-center rounded-full transition-colors">
          <ChevronLeft className="text-foreground h-5 w-5" />
        </button>
        <button className="bg-secondary hover:bg-muted flex h-8 w-8 items-center justify-center rounded-full transition-colors">
          <ChevronRight className="text-foreground h-5 w-5" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="max-w-md flex-1">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            type="search"
            placeholder="What do you want to listen to?"
            className="bg-secondary focus-visible:ring-primary h-10 rounded-full border-none pl-10 text-sm focus-visible:ring-1"
          />
        </div>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-3">
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="h-5 w-5" />
        </button>
        <button className="bg-primary flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-105">
          <User className="text-primary-foreground h-5 w-5" />
        </button>
      </div>
    </header>
  )
}

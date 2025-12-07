import { Bell, ChevronLeft, ChevronRight, Search, User } from 'lucide-react'

import { Input } from '~/components/ui/input'

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-background/80 backdrop-blur-md">
      {/* Navigation Arrows */}
      <div className="flex items-center gap-2">
        <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="What do you want to listen to?"
            className="pl-10 bg-secondary border-none focus-visible:ring-1 focus-visible:ring-primary rounded-full h-10 text-sm"
          />
        </div>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-3">
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:scale-105 transition-transform">
          <User className="w-5 h-5 text-primary-foreground" />
        </button>
      </div>
    </header>
  )
}

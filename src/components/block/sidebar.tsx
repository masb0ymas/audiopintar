import { Headphones,Heart, Home, Library, Plus, Search } from 'lucide-react'

import { cn } from '~/lib/utils'

interface SidebarProps {
  className?: string
}

const navItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: Search, label: 'Search' },
  { icon: Library, label: 'Your Library' },
]

const playlists = [
  'Liked Audiobooks',
  'Self Improvement',
  'Fiction Favorites',
  'Mystery & Thriller',
  'Business & Finance',
]

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={cn('w-64 bg-sidebar flex flex-col h-full', className)}>
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Headphones className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Audioly</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-3">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                className={cn(
                  'w-full flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium transition-all',
                  item.active
                    ? 'bg-sidebar-accent text-foreground'
                    : 'text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent/50',
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Library Section */}
      <div className="mt-6 px-3 flex-1 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 mb-4">
          <span className="text-sm font-semibold text-sidebar-foreground">
            Your Playlists
          </span>
          <button className="p-1 hover:bg-sidebar-accent rounded-md transition-colors">
            <Plus className="w-5 h-5 text-sidebar-foreground" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin">
          <ul className="space-y-1">
            <li>
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent/50 transition-all">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary/80 to-primary/20 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Liked Audiobooks</p>
                  <p className="text-xs text-muted-foreground">24 books</p>
                </div>
              </button>
            </li>
            {playlists.slice(1).map((playlist) => (
              <li key={playlist}>
                <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent/50 transition-all">
                  <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center">
                    <Library className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="font-medium truncate">{playlist}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}

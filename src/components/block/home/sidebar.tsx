import { Link } from '@tanstack/react-router'
import { Heart, Home, Library, Plus, Search } from 'lucide-react'

import { cn } from '~/lib/utils'

import BrandLogo from '../site/brand-logo'

interface SidebarProps {
  className?: string
}

const navItems = [
  { icon: Home, label: 'Home', href: '/', active: true },
  { icon: Search, label: 'Search', href: '/search' },
  { icon: Library, label: 'Your Library', href: '/library' },
]

const playlists = [
  { name: 'Liked Audiobooks', id: 'liked-audiobooks' },
  { name: 'Self Improvement', id: 'self-improvement' },
  { name: 'Fiction Favorites', id: 'fiction-favorites' },
  { name: 'Mystery & Thriller', id: 'mystery-thriller' },
  { name: 'Business & Finance', id: 'business-finance' },
]

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={cn('bg-sidebar flex h-full w-64 flex-col', className)}>
      {/* Logo */}
      <div className="p-6">
        <BrandLogo />
      </div>

      {/* Main Navigation */}
      <nav className="px-3">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={cn(
                  'flex w-full items-center gap-4 rounded-lg px-4 py-3 text-sm font-medium transition-all',
                  item.active
                    ? 'bg-sidebar-accent text-foreground'
                    : 'text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent/50',
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Library Section */}
      <div className="mt-6 flex flex-1 flex-col overflow-hidden px-3">
        <div className="mb-4 flex items-center justify-between px-4">
          <span className="text-sidebar-foreground text-sm font-semibold">Your Playlists</span>
          <button className="hover:bg-sidebar-accent rounded-md p-1 transition-colors">
            <Plus className="text-sidebar-foreground h-5 w-5" />
          </button>
        </div>

        <div className="scrollbar-thin flex-1 overflow-y-auto">
          <ul className="space-y-1">
            <li>
              <button className="text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent/50 flex w-full items-center gap-3 rounded-lg px-4 py-2 text-sm transition-all">
                <div className="from-primary/80 to-primary/20 flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br">
                  <Heart className="text-foreground h-4 w-4" />
                </div>
                <div className="text-left">
                  <p className="font-medium">Liked Audiobooks</p>
                  <p className="text-muted-foreground text-xs">24 books</p>
                </div>
              </button>
            </li>
            {playlists.slice(1).map((playlist) => (
              <li key={playlist.id}>
                <Link
                  to={`/playlist/${playlist.id}`}
                  className="text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent/50 flex w-full items-center gap-3 rounded-lg px-4 py-2 text-sm transition-all"
                >
                  <div className="bg-secondary flex h-10 w-10 items-center justify-center rounded-md">
                    <Library className="text-muted-foreground h-4 w-4" />
                  </div>
                  <span className="truncate font-medium">{playlist.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}

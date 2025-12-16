import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Clock, Heart, MoreHorizontal, Play } from 'lucide-react'

import Loading from '~/components/block/common/loading'
import NotFound from '~/components/block/common/not-found'
import { PlayerBar } from '~/components/block/home/player-bar'
import { Sidebar } from '~/components/block/home/sidebar'
import { Button } from '~/components/ui/button'

export const Route = createFileRoute('/(protected)/playlist/$id/')({
  component: RouteComponent,
  pendingComponent: Loading,
  notFoundComponent: NotFound,
})

type Playlist = {
  name: string
  description: string
  coverGradient: string
  audiobooks: Array<{
    id: string
    title: string
    author: string
    duration: string
    cover: string
  }>
}

const playlistsData: Record<string, Playlist> = {
  'liked-audiobooks': {
    name: 'Liked Audiobooks',
    description: 'Your favorite audiobooks collection',
    coverGradient: 'from-primary/80 to-primary/20',
    audiobooks: [
      {
        id: '1',
        title: 'Atomic Habits',
        author: 'James Clear',
        duration: '5h 35m',
        cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop',
      },
      {
        id: '2',
        title: 'The Psychology of Money',
        author: 'Morgan Housel',
        duration: '5h 48m',
        cover: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=300&fit=crop',
      },
      {
        id: '3',
        title: 'Deep Work',
        author: 'Cal Newport',
        duration: '7h 44m',
        cover: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=300&h=300&fit=crop',
      },
      {
        id: '4',
        title: 'The Midnight Library',
        author: 'Matt Haig',
        duration: '8h 50m',
        cover: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=300&h=300&fit=crop',
      },
    ],
  },
  'self-improvement': {
    name: 'Self Improvement',
    description: 'Books to help you grow and succeed',
    coverGradient: 'from-green-600 to-green-900',
    audiobooks: [
      {
        id: '1',
        title: 'Atomic Habits',
        author: 'James Clear',
        duration: '5h 35m',
        cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop',
      },
      {
        id: '5',
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        duration: '9h 35m',
        cover: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300&h=300&fit=crop',
      },
      {
        id: '3',
        title: 'Deep Work',
        author: 'Cal Newport',
        duration: '7h 44m',
        cover: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=300&h=300&fit=crop',
      },
    ],
  },
  'fiction-favorites': {
    name: 'Fiction Favorites',
    description: 'Amazing stories that captivate your imagination',
    coverGradient: 'from-purple-600 to-purple-900',
    audiobooks: [
      {
        id: '4',
        title: 'The Midnight Library',
        author: 'Matt Haig',
        duration: '8h 50m',
        cover: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=300&h=300&fit=crop',
      },
      {
        id: '6',
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        duration: '16h 10m',
        cover: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=300&h=300&fit=crop',
      },
    ],
  },
  'mystery-thriller': {
    name: 'Mystery & Thriller',
    description: 'Edge-of-your-seat suspense and intrigue',
    coverGradient: 'from-red-600 to-red-900',
    audiobooks: [
      {
        id: '7',
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        duration: '8h 43m',
        cover: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop',
      },
      {
        id: '8',
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        duration: '19h 11m',
        cover: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=300&fit=crop',
      },
    ],
  },
  'business-finance': {
    name: 'Business & Finance',
    description: 'Master your money and career',
    coverGradient: 'from-blue-600 to-blue-900',
    audiobooks: [
      {
        id: '2',
        title: 'The Psychology of Money',
        author: 'Morgan Housel',
        duration: '5h 48m',
        cover: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=300&fit=crop',
      },
      {
        id: '5',
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        duration: '9h 35m',
        cover: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300&h=300&fit=crop',
      },
    ],
  },
}

const mockPlaylist = [
  {
    id: '13',
    title: "Can't Hurt Me",
    author: 'David Goggins',
    cover: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: 372.2,
  },
  {
    id: '14',
    title: 'The 7 Habits',
    author: 'Stephen Covey',
    cover: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&h=300&fit=crop',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    duration: 372.2,
  },
]

function RouteComponent() {
  const { id } = Route.useParams()
  const playlist = playlistsData[id || 'liked-audiobooks']

  if (!playlist) {
    return (
      <div className="bg-background flex h-screen">
        <Sidebar />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-foreground mb-4 text-2xl font-bold">Playlist not found</h1>
            <Link to="/" className="text-primary hover:underline">
              Go back home
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="bg-background flex h-screen">
      <Sidebar />

      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          {/* Header with gradient */}
          <div className={`bg-gradient-to-b ${playlist.coverGradient} to-background p-8`}>
            <Link
              to="/"
              className="text-foreground/70 hover:text-foreground mb-6 inline-flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back
            </Link>

            <div className="flex items-end gap-6">
              <div
                className={`h-52 w-52 rounded-lg bg-gradient-to-br ${playlist.coverGradient} flex items-center justify-center shadow-2xl`}
              >
                <Heart className="text-foreground h-20 w-20" />
              </div>

              <div className="flex-1">
                <p className="text-foreground/70 text-sm font-medium tracking-wider uppercase">
                  Playlist
                </p>
                <h1 className="text-foreground mt-2 mb-4 text-5xl font-bold">{playlist.name}</h1>
                <p className="text-foreground/70 mb-4">{playlist.description}</p>
                <p className="text-foreground/50 text-sm">
                  {playlist.audiobooks.length} audiobooks
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 px-8 py-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 h-14 w-14 rounded-full transition-all hover:scale-105"
            >
              <Play className="fill-primary-foreground text-primary-foreground ml-1 size-6" />
            </Button>
            <button className="text-foreground/50 hover:text-foreground transition-colors">
              <Heart className="h-8 w-8" />
            </button>
            <button className="text-foreground/50 hover:text-foreground transition-colors">
              <MoreHorizontal className="h-8 w-8" />
            </button>
          </div>

          {/* Audiobook list */}
          <div className="px-8 pb-32">
            <table className="w-full">
              <thead>
                <tr className="text-foreground/50 border-border border-b text-sm">
                  <th className="w-12 pb-3 text-left font-medium">#</th>
                  <th className="pb-3 text-left font-medium">Title</th>
                  <th className="pb-3 text-left font-medium">Author</th>
                  <th className="pr-4 pb-3 text-right font-medium">
                    <Clock className="inline h-4 w-4" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {playlist.audiobooks.map((audiobook, index) => (
                  <tr
                    key={audiobook.id}
                    className="group hover:bg-card/50 cursor-pointer transition-colors"
                  >
                    <td className="text-foreground/50 group-hover:text-foreground py-3">
                      <span className="group-hover:hidden">{index + 1}</span>
                      <Play className="fill-foreground hidden h-4 w-4 group-hover:block" />
                    </td>
                    <td className="py-3">
                      <Link to={audiobook.id} className="flex items-center gap-4">
                        <img
                          src={audiobook.cover}
                          alt={audiobook.title}
                          className="h-10 w-10 rounded object-cover"
                        />
                        <span className="text-foreground font-medium hover:underline">
                          {audiobook.title}
                        </span>
                      </Link>
                    </td>
                    <td className="text-foreground/70 py-3">{audiobook.author}</td>
                    <td className="text-foreground/50 py-3 pr-4 text-right">
                      {audiobook.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <PlayerBar playlist={mockPlaylist} />
      </main>
    </div>
  )
}

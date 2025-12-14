import { createFileRoute } from '@tanstack/react-router'

import Loading from '~/components/block/common/loading'
import NotFound from '~/components/block/common/not-found'
import { CategorySection } from '~/components/block/home/category-section'
import { ContinueListening } from '~/components/block/home/continue-listening'
import { Header } from '~/components/block/home/header'
import { HeroSection } from '~/components/block/home/hero-section'
import { PlayerBar } from '~/components/block/home/player-bar'
import { Sidebar } from '~/components/block/home/sidebar'

export const Route = createFileRoute('/(protected)/home/')({
  component: RouteComponent,
  pendingComponent: Loading,
  notFoundComponent: NotFound,
})

function RouteComponent() {
  const trendingBooks = [
    {
      id: '1',
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      duration: '20h 2m',
    },
    {
      id: '2',
      title: 'The Power of Now',
      author: 'Eckhart Tolle',
      cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
      duration: '7h 37m',
    },
    {
      id: '3',
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      cover: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=300&fit=crop',
      duration: '15h 17m',
    },
    {
      id: '4',
      title: 'The Subtle Art',
      author: 'Mark Manson',
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop',
      duration: '5h 17m',
    },
    {
      id: '5',
      title: '12 Rules for Life',
      author: 'Jordan Peterson',
      cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=300&fit=crop',
      duration: '15h 40m',
    },
    {
      id: '6',
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      cover: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=300&h=300&fit=crop',
      duration: '6h 9m',
    },
  ]

  const fictionBooks = [
    {
      id: '7',
      title: 'The Midnight Library',
      author: 'Matt Haig',
      cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop',
      duration: '8h 50m',
    },
    {
      id: '8',
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      cover: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=300&h=300&fit=crop',
      duration: '16h 10m',
    },
    {
      id: '9',
      title: 'The Seven Husbands',
      author: 'Taylor Jenkins Reid',
      cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=300&fit=crop',
      duration: '12h 10m',
    },
    {
      id: '10',
      title: 'Where the Crawdads Sing',
      author: 'Delia Owens',
      cover: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=300&h=300&fit=crop',
      duration: '12h 12m',
    },
    {
      id: '11',
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      cover: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=300&h=300&fit=crop',
      duration: '4h 2m',
    },
    {
      id: '12',
      title: '1984',
      author: 'George Orwell',
      cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop',
      duration: '11h 22m',
    },
  ]

  const selfHelpBooks = [
    {
      id: '13',
      title: "Can't Hurt Me",
      author: 'David Goggins',
      cover: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop',
      duration: '13h 37m',
    },
    {
      id: '14',
      title: 'The 7 Habits',
      author: 'Stephen Covey',
      cover: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&h=300&fit=crop',
      duration: '13h 4m',
    },
    {
      id: '15',
      title: 'Think and Grow Rich',
      author: 'Napoleon Hill',
      cover: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300&h=300&fit=crop',
      duration: '9h 35m',
    },
    {
      id: '16',
      title: 'The 4-Hour Workweek',
      author: 'Tim Ferriss',
      cover: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=300&h=300&fit=crop',
      duration: '13h 1m',
    },
    {
      id: '17',
      title: 'Start with Why',
      author: 'Simon Sinek',
      cover: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=300&fit=crop',
      duration: '7h 18m',
    },
    {
      id: '18',
      title: 'Mindset',
      author: 'Carol S. Dweck',
      cover: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=300&fit=crop',
      duration: '10h 23m',
    },
  ]

  const playlist = [
    {
      id: '13',
      title: "Can't Hurt Me",
      author: 'David Goggins',
      cover: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      duration: '13h 37m',
    },
    {
      id: '14',
      title: 'The 7 Habits',
      author: 'Stephen Covey',
      cover: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&h=300&fit=crop',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      duration: '13h 4m',
    },
  ]

  return (
    <div className="bg-background flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar className="hidden md:flex" />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Scrollable Content */}
        <div className="scrollbar-thin flex-1 overflow-y-auto">
          <Header />

          <main className="px-6 pb-8">
            <HeroSection />
            <ContinueListening />
            <CategorySection title="Trending Now" audiobooks={trendingBooks} />
            <CategorySection title="Popular Fiction" audiobooks={fictionBooks} />
            <CategorySection title="Self Improvement" audiobooks={selfHelpBooks} />
          </main>
        </div>

        {/* Player Bar */}
        <PlayerBar playlist={playlist} />
      </div>
    </div>
  )
}

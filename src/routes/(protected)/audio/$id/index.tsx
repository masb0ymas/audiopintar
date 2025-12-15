import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, BookOpen, Clock, Headphones, Play, Star } from 'lucide-react'

import AIAnalysis from '~/components/block/audio/ai-analysis'
import Loading from '~/components/block/common/loading'
import NotFound from '~/components/block/common/not-found'
import { PlayerBar } from '~/components/block/home/player-bar'
import { Button } from '~/components/ui/button'

export const Route = createFileRoute('/(protected)/audio/$id/')({
  component: RouteComponent,
  pendingComponent: Loading,
  notFoundComponent: NotFound,
})

// Mock data - in real app, fetch by ID
type AudiobookData = {
  title: string
  author: string
  cover: string
  duration: string
  rating: number
  narrator: string
  genre: string
  releaseYear: number
  chapters: number
  description: string
  aiSummary: string
}

const audiobooksData: Record<string, AudiobookData> = {
  '1': {
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
    duration: '5h 35m',
    rating: 4.8,
    narrator: 'James Clear',
    genre: 'Self-Help',
    releaseYear: 2018,
    chapters: 20,
    description: `No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world"s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world"s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world"s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world"s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.`,
    aiSummary: `**Key Insights from Atomic Habits:**
1. **The 1% Rule**: Small improvements compound over time. Getting 1% better each day results in being 37 times better by the end of the year.
2. **Four Laws of Behavior Change**:
- Make it Obvious
- Make it Attractive
- Make it Easy
- Make it Satisfying
3. **Identity-Based Habits**: Focus on who you want to become, not what you want to achieve. Every action is a vote for the type of person you wish to be.
4. **Environment Design**: Your environment shapes your behavior more than motivation. Design your spaces to make good habits inevitable.
5. **Habit Stacking**: Link new habits to existing ones using the formula: 'After I [CURRENT HABIT], I will [NEW HABIT].'

**Bottom Line**: Success is the product of daily habits, not once-in-a-lifetime transformations. Focus on systems, not goals.`,
  },
  '2': {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    cover: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=400&fit=crop',
    duration: '5h 48m',
    rating: 4.7,
    narrator: 'Chris Hill',
    genre: 'Finance',
    releaseYear: 2020,
    chapters: 20,
    description: `Doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people. Morgan Housel shares 19 short stories exploring the strange ways people think about money.`,
    aiSummary: `**Key Insights from The Psychology of Money:**
1. **No One's Crazy**: Everyone makes financial decisions based on their unique experiences. What seems irrational to you makes perfect sense to them.
2. **Luck & Risk**: Success involves both skill and luck. Be humble about your wins and compassionate about others' failures.
3. **Never Enough**: The hardest financial skill is getting the goalpost to stop moving. Knowing "enough" is essential.
4. **Compounding Magic**: Warren Buffett's success isn't just skill—it's time. He's been investing for 80+ years.
5. **Room for Error**: Plan for things going wrong. A margin of safety is the only effective way to navigate uncertainty.

**Bottom Line**: Financial success is more about behavior than intelligence. Wealth is what you don't spend.`,
  },
  '3': {
    title: 'Deep Work',
    author: 'Cal Newport',
    cover: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=400&fit=crop',
    duration: '7h 44m',
    rating: 4.6,
    narrator: 'Jeff Bottoms',
    genre: 'Productivity',
    releaseYear: 2016,
    chapters: 14,
    description: `Deep work is the ability to focus without distraction on a cognitively demanding task. Cal Newport argues that deep work is becoming rare and increasingly valuable in our economy.`,
    aiSummary: `**Key Insights from Deep Work:**
1. **Deep Work Hypothesis**: The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable.
2. **Shallow Work Trap**: Most knowledge workers spend their days in a frenzied blur of email and social media—shallow work that adds little value.
3. **Four Strategies**:
- Monastic: Eliminate all distractions
- Bimodal: Dedicate long stretches to deep work
- Rhythmic: Build daily rituals
- Journalistic: Fit it in when you can
4. **Embrace Boredom**: Train your brain to resist distraction. Schedule distraction time instead of focus time.
5. **Quit Social Media**: Apply the craftsman approach—only use tools that substantially help your key activities.

**Bottom Line**: To produce at your peak level, you need to work for extended periods with full concentration on a single task free from distraction.`,
  },
}

// Default data for unknown IDs
const defaultAudiobook = {
  title: 'Unknown Audiobook',
  author: 'Unknown Author',
  cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
  duration: 'N/A',
  rating: 0,
  narrator: 'Unknown',
  genre: 'Unknown',
  releaseYear: 2024,
  chapters: 0,
  description: 'No description available.',
  aiSummary: 'No summary available for this audiobook.',
}

const playlist = [
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
  const audiobook = audiobooksData[id || ''] || defaultAudiobook

  return (
    <div className="bg-background relative min-h-screen">
      {/* Header */}
      <header className="bg-background/80 border-border/50 sticky top-0 z-50 border-b backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Library</span>
          </Link>
        </div>
      </header>
      {/* Content */}
      <main className="container mx-auto px-6 py-8 pb-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Audiobook Details */}
          <div className="space-y-6">
            {/* Cover and Basic Info */}
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="mx-auto h-48 w-48 flex-shrink-0 sm:mx-0 sm:h-56 sm:w-56">
                <img
                  src={audiobook.cover}
                  alt={audiobook.title}
                  className="h-full w-full rounded-lg object-cover shadow-2xl"
                />
              </div>
              <div className="flex flex-col justify-center text-center sm:text-left">
                <p className="text-primary mb-2 text-sm font-medium">{audiobook.genre}</p>
                <h1 className="text-foreground mb-2 text-3xl font-bold">{audiobook.title}</h1>
                <p className="text-muted-foreground mb-4 text-lg">by {audiobook.author}</p>

                <div className="text-muted-foreground mb-4 flex items-center justify-center gap-4 text-sm sm:justify-start">
                  <div className="flex items-center gap-1">
                    <Star className="text-primary fill-primary h-4 w-4" />
                    <span>{audiobook.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{audiobook.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{audiobook.chapters} chapters</span>
                  </div>
                </div>

                <Button className="w-full gap-2 sm:w-auto">
                  <Play className="h-4 w-4" fill="currentColor" />
                  Play Now
                </Button>
              </div>
            </div>

            {/* Additional Details */}
            <div className="bg-card space-y-4 rounded-lg p-6">
              <h2 className="text-foreground text-lg font-semibold">Details</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Narrator</p>
                  <p className="text-foreground flex items-center gap-2">
                    <Headphones className="text-primary h-4 w-4" />
                    {audiobook.narrator}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Release Year</p>
                  <p className="text-foreground">{audiobook.releaseYear}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Genre</p>
                  <p className="text-foreground">{audiobook.genre}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Length</p>
                  <p className="text-foreground">{audiobook.duration}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-card space-y-4 rounded-lg p-6">
              <h2 className="text-foreground text-lg font-semibold">About this Audiobook</h2>
              <p className="text-muted-foreground leading-relaxed">{audiobook.description}</p>
            </div>
          </div>

          {/* Right Column - AI Summary */}
          <AIAnalysis summary={audiobook.aiSummary} />
        </div>
      </main>
      <div className="fixed right-0 bottom-0 left-0 z-40">
        <PlayerBar playlist={playlist} />
      </div>
    </div>
  )
}

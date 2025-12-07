import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Headphones,
  Play,
  Star,
} from 'lucide-react'

import { PlayerBar } from '~/components/block/player-bar'
import { Button } from '~/components/ui/button'

export const Route = createFileRoute('/(home)/$id/')({
  component: RouteComponent,
})

// Mock data - in real app, fetch by ID
const audiobooksData: Record<
  string,
  {
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
> = {
  '1': {
    title: 'Atomic Habits',
    author: 'James Clear',
    cover:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
    duration: '5h 35m',
    rating: 4.8,
    narrator: 'James Clear',
    genre: 'Self-Help',
    releaseYear: 2018,
    chapters: 20,
    description:
      "No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    aiSummary:
      "**Key Insights from Atomic Habits:**\n\n1. **The 1% Rule**: Small improvements compound over time. Getting 1% better each day results in being 37 times better by the end of the year.\n\n2. **Four Laws of Behavior Change**:\n   - Make it Obvious\n   - Make it Attractive\n   - Make it Easy\n   - Make it Satisfying\n\n3. **Identity-Based Habits**: Focus on who you want to become, not what you want to achieve. Every action is a vote for the type of person you wish to be.\n\n4. **Environment Design**: Your environment shapes your behavior more than motivation. Design your spaces to make good habits inevitable.\n\n5. **Habit Stacking**: Link new habits to existing ones using the formula: 'After I [CURRENT HABIT], I will [NEW HABIT].'\n\n**Bottom Line**: Success is the product of daily habits, not once-in-a-lifetime transformations. Focus on systems, not goals.",
  },
  '2': {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    cover:
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=400&fit=crop',
    duration: '5h 48m',
    rating: 4.7,
    narrator: 'Chris Hill',
    genre: 'Finance',
    releaseYear: 2020,
    chapters: 20,
    description:
      "Doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people. Morgan Housel shares 19 short stories exploring the strange ways people think about money.",
    aiSummary:
      "**Key Insights from The Psychology of Money:**\n\n1. **No One's Crazy**: Everyone makes financial decisions based on their unique experiences. What seems irrational to you makes perfect sense to them.\n\n2. **Luck & Risk**: Success involves both skill and luck. Be humble about your wins and compassionate about others' failures.\n\n3. **Never Enough**: The hardest financial skill is getting the goalpost to stop moving. Knowing 'enough' is essential.\n\n4. **Compounding Magic**: Warren Buffett's success isn't just skill—it's time. He's been investing for 80+ years.\n\n5. **Room for Error**: Plan for things going wrong. A margin of safety is the only effective way to navigate uncertainty.\n\n**Bottom Line**: Financial success is more about behavior than intelligence. Wealth is what you don't spend.",
  },
  '3': {
    title: 'Deep Work',
    author: 'Cal Newport',
    cover:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=400&fit=crop',
    duration: '7h 44m',
    rating: 4.6,
    narrator: 'Jeff Bottoms',
    genre: 'Productivity',
    releaseYear: 2016,
    chapters: 14,
    description:
      'Deep work is the ability to focus without distraction on a cognitively demanding task. Cal Newport argues that deep work is becoming rare and increasingly valuable in our economy.',
    aiSummary:
      '**Key Insights from Deep Work:**\n\n1. **Deep Work Hypothesis**: The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable.\n\n2. **Shallow Work Trap**: Most knowledge workers spend their days in a frenzied blur of email and social media—shallow work that adds little value.\n\n3. **Four Strategies**:\n   - Monastic: Eliminate all distractions\n   - Bimodal: Dedicate long stretches to deep work\n   - Rhythmic: Build daily rituals\n   - Journalistic: Fit it in when you can\n\n4. **Embrace Boredom**: Train your brain to resist distraction. Schedule distraction time instead of focus time.\n\n5. **Quit Social Media**: Apply the craftsman approach—only use tools that substantially help your key activities.\n\n**Bottom Line**: To produce at your peak level, you need to work for extended periods with full concentration on a single task free from distraction.',
  },
}

// Default data for unknown IDs
const defaultAudiobook = {
  title: 'Unknown Audiobook',
  author: 'Unknown Author',
  cover:
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
  duration: 'N/A',
  rating: 0,
  narrator: 'Unknown',
  genre: 'Unknown',
  releaseYear: 2024,
  chapters: 0,
  description: 'No description available.',
  aiSummary: 'No summary available for this audiobook.',
}

function RouteComponent() {
  const { id } = Route.useParams()
  const audiobook = audiobooksData[id || ''] || defaultAudiobook

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Library</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Audiobook Details */}
          <div className="space-y-6">
            {/* Cover and Basic Info */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-48 h-48 sm:w-56 sm:h-56 flex-shrink-0 mx-auto sm:mx-0">
                <img
                  src={audiobook.cover}
                  alt={audiobook.title}
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div className="flex flex-col justify-center text-center sm:text-left">
                <p className="text-sm text-primary font-medium mb-2">
                  {audiobook.genre}
                </p>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {audiobook.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  by {audiobook.author}
                </p>

                <div className="flex items-center justify-center sm:justify-start gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span>{audiobook.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{audiobook.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{audiobook.chapters} chapters</span>
                  </div>
                </div>

                <Button className="w-full sm:w-auto gap-2">
                  <Play className="w-4 h-4" fill="currentColor" />
                  Play Now
                </Button>
              </div>
            </div>

            {/* Additional Details */}
            <div className="bg-card rounded-lg p-6 space-y-4">
              <h2 className="text-lg font-semibold text-foreground">Details</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Narrator</p>
                  <p className="text-foreground flex items-center gap-2">
                    <Headphones className="w-4 h-4 text-primary" />
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
            <div className="bg-card rounded-lg p-6 space-y-4">
              <h2 className="text-lg font-semibold text-foreground">
                About this Audiobook
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {audiobook.description}
              </p>
            </div>
          </div>

          {/* Right Column - AI Summary */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-gradient-to-br from-card to-secondary/30 rounded-lg p-6 border border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-sm font-bold">AI</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    AI Summary
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Powered by ChatGPT
                  </p>
                </div>
              </div>
              <div className="prose prose-invert prose-sm max-w-none">
                <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {audiobook.aiSummary.split('\n').map((line, index) => {
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return (
                        <h3
                          key={index}
                          className="text-foreground font-semibold mt-4 mb-2"
                        >
                          {line.replace(/\*\*/g, '')}
                        </h3>
                      )
                    }
                    if (line.startsWith('**')) {
                      const parts = line.split('**')
                      return (
                        <p key={index} className="mb-1">
                          <strong className="text-foreground">
                            {parts[1]}
                          </strong>
                          {parts[2]}
                        </p>
                      )
                    }
                    if (line.trim().startsWith('-')) {
                      return (
                        <p key={index} className="ml-4 mb-1">
                          {line}
                        </p>
                      )
                    }
                    return line ? (
                      <p key={index} className="mb-2">
                        {line}
                      </p>
                    ) : null
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-40">
        <PlayerBar />
      </div>
    </div>
  )
}

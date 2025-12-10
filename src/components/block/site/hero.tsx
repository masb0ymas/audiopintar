import { Link } from '@tanstack/react-router'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

import { Button } from '~/components/ui/button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(38_92%_50%_/_0.15)_0%,_transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="bg-primary/10 border-primary/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <Sparkles className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-medium">AI-Powered Audio Experience</span>
          </div>
          <h1 className="text-foreground mb-6 text-5xl leading-tight font-bold md:text-7xl">
            Listen Smarter with <span className="text-gradient">AI-Enhanced</span> Audio
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
            Discover audiobooks and podcasts like never before. Get AI summaries, chat with your
            content, and unlock insights that transform how you learn.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 gap-2 px-8 text-lg"
              asChild
            >
              <Link to="/login">
                <Play className="h-5 w-5 fill-current" />
                <span>Start Free Trial</span>
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary h-12 gap-2 px-8 text-lg"
              asChild
            >
              <Link to="/">
                <span>See How It Works</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="text-muted-foreground mt-4 text-sm">
            30-day free trial • No credit card required
          </p>
        </div>

        {/* Hero Image/Preview */}
        <div className="relative mt-16">
          <div className="from-background absolute inset-0 z-10 bg-gradient-to-t via-transparent to-transparent" />
          <div className="border-border bg-card overflow-hidden rounded-2xl border shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&h=600&fit=crop"
              alt="Audioly App Preview"
              className="h-auto w-full opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

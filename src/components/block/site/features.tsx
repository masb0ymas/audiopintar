import { BookOpen, Brain, Clock, Mic2, Shield, Sparkles } from 'lucide-react'
import { Element } from 'react-scroll'

export default function Features() {
  const features = [
    {
      icon: BookOpen,
      title: 'Vast Library',
      description:
        'Access over 500,000 audiobooks and podcasts from bestselling authors and creators worldwide.',
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description:
        'Get intelligent summaries, key takeaways, and personalized recommendations powered by AI.',
    },
    {
      icon: Mic2,
      title: 'Premium Podcasts',
      description:
        'Exclusive access to top podcasts with ad-free listening and early episode releases.',
    },
    {
      icon: Sparkles,
      title: 'Smart Bookmarks',
      description:
        'AI automatically highlights key moments and creates chapter summaries for easy navigation.',
    },
    {
      icon: Clock,
      title: 'Offline Mode',
      description:
        'Download unlimited content and listen anywhere, even without an internet connection.',
    },
    {
      icon: Shield,
      title: 'Family Sharing',
      description:
        'Share your subscription with up to 6 family members, each with their own profile.',
    },
  ]

  return (
    <Element name="features" id="features" className="bg-secondary/30 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-4xl font-bold">
            Everything You Need to <span className="text-gradient">Listen & Learn</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Powerful features designed to enhance your audio experience and maximize your learning.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border-border hover:border-primary/50 card-glow rounded-xl border p-6 transition-all duration-300"
            >
              <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <feature.icon className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-foreground mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  )
}

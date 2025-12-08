import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Book Enthusiast',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      content:
        'The AI summaries feature is a game-changer! I can quickly decide which books are worth my time and get the key insights instantly.',
      rating: 5,
    },
    {
      name: 'James Chen',
      role: 'Podcast Addict',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      content:
        "Finally, a platform that combines audiobooks and podcasts seamlessly. The recommendation engine knows exactly what I'll love.",
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Busy Professional',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      content:
        'I listen during my commute every day. The offline mode and smart bookmarks help me pick up exactly where I left off.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="bg-secondary/30 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-4xl font-bold">
            Loved by <span className="text-gradient">Listeners</span> Worldwide
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Join thousands of happy listeners who've transformed their audio experience.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border-border rounded-xl border p-6">
              <div className="mb-4 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary h-5 w-5" />
                ))}
              </div>
              <p className="text-foreground mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-foreground font-semibold">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

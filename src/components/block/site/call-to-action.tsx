import { Link } from '@tanstack/react-router'
import { ArrowRight, Zap } from 'lucide-react'

import { Button } from '~/components/ui/button'

export default function CallToAction() {
  return (
    <section className="px-6 pt-20 pb-4">
      <div className="mx-auto max-w-4xl text-center">
        <div className="from-primary/20 via-card to-card border-primary/20 rounded-3xl border bg-gradient-to-br p-12">
          <Zap className="text-primary mx-auto mb-6 h-12 w-12" />
          <h2 className="text-foreground mb-4 text-4xl font-bold">
            Ready to Transform Your Listening?
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-xl text-lg">
            Join over 2 million listeners who are learning faster and enjoying audio content like
            never before.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 gap-2 px-8 text-lg"
            asChild
          >
            <Link to="/login">
              <span>Start Your Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <p className="text-muted-foreground mt-4 text-sm">
            No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}

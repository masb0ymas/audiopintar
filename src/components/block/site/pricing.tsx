import { Link } from '@tanstack/react-router'
import { Check } from 'lucide-react'
import { Element } from 'react-scroll'

import { Button } from '~/components/ui/button'

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Basic',
      price: 'Free',
      period: '',
      description: 'Perfect for casual listeners',
      features: [
        '1 audiobook credit per month',
        'Unlimited podcast access',
        'Basic AI summaries',
        'Mobile & web access',
        'Offline downloads (5 titles)',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: '/month',
      description: 'Best for avid readers',
      features: [
        '3 audiobook credits per month',
        'Unlimited podcast access',
        'Advanced AI insights & chat',
        'Priority customer support',
        'Unlimited offline downloads',
        'Early access to new releases',
      ],
      popular: true,
    },
    {
      name: 'Family',
      price: '$24.99',
      period: '/month',
      description: 'Share with loved ones',
      features: [
        '5 audiobook credits per month',
        'Up to 6 family profiles',
        'All Premium features',
        'Parental controls',
        'Family listening stats',
        'Shared library & playlists',
      ],
      popular: false,
    },
  ]

  return (
    <Element name="pricing" id="pricing" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-4xl font-bold">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Choose the plan that fits your listening style. All plans include a 30-day free trial.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.popular
                  ? 'bg-primary/5 border-primary shadow-primary/10 shadow-lg'
                  : 'bg-card border-border'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-foreground mb-2 text-2xl font-bold">{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-foreground text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-muted-foreground flex items-center gap-3">
                    <Check className="text-primary h-5 w-5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                  asChild
                >
                  <Link to="/">Start Free Trial</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  )
}

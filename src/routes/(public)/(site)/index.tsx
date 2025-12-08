import { createFileRoute } from '@tanstack/react-router'

import CallToAction from '~/components/block/site/call-to-action'
import Comparison from '~/components/block/site/comparison'
import FAQ from '~/components/block/site/faq'
import Features from '~/components/block/site/features'
import Hero from '~/components/block/site/hero'
import Pricing from '~/components/block/site/pricing'
import Testimonials from '~/components/block/site/testimonials'

export const Route = createFileRoute('/(public)/(site)/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Feature Comparison */}
      <Comparison />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CallToAction />
    </>
  )
}

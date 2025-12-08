import { Link } from '@tanstack/react-router'

import BrandLogo from '~/components/block/site/brand-logo'
import { Button } from '~/components/ui/button'

export default function PublicNavbar() {
  return (
    <nav className="bg-background/80 border-border fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <BrandLogo />
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Reviews
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
            <Link to="/">Sign In</Link>
          </Button>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link to="/">Start Free Trial</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import BrandLogo from '~/components/block/site/brand-logo'
import { Button } from '~/components/ui/button'

export default function PublicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#faq', label: 'FAQ' },
  ]

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="bg-background/80 border-border fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <BrandLogo />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
            <Link to="/">Sign In</Link>
          </Button>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link to="/">Start Free Trial</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="border-border bg-background overflow-hidden border-t md:hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="mx-auto max-w-7xl space-y-1 px-6 py-4"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-muted-foreground hover:text-foreground hover:bg-muted block rounded-lg px-4 py-3 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                className="grid grid-cols-2 gap-2 pt-4"
              >
                <Button
                  variant="outline"
                  className="text-muted-foreground hover:text-foreground"
                  asChild
                >
                  <Link to="/" onClick={handleNavClick}>
                    Sign In
                  </Link>
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link to="/" onClick={handleNavClick}>
                    Start Free Trial
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

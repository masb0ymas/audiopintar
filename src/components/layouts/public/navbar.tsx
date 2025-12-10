import { Link, useRouter } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { scroller } from 'react-scroll'

import BrandLogo from '~/components/block/site/brand-logo'
import { Button } from '~/components/ui/button'

export default function PublicNavbar() {
  const { state, navigate } = useRouter()
  const pathname = state.location.pathname

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#', scroll_target: 'features', label: 'Features' },
    { href: '#', scroll_target: 'pricing', label: 'Pricing' },
    { href: '#', scroll_target: 'testimonials', label: 'Reviews' },
    { href: '#', scroll_target: 'faq', label: 'FAQ' },
  ]

  const handleNavigation = async (item: (typeof navLinks)[0]) => {
    if (item.href === '#') {
      if (pathname !== '/') {
        const targetScroll = item.scroll_target

        // Store target in sessionStorage
        sessionStorage.setItem('scroll_target', targetScroll)

        // Navigate to home
        navigate({ to: '/' })
      } else {
        scroller.scrollTo(item.scroll_target, {
          duration: 500,
          smooth: true,
          offset: -70,
        })
      }
    } else {
      navigate({ to: item.href })
    }
  }

  useEffect(() => {
    // Check if we have a stored scroll target when on home page
    if (pathname === '/') {
      const targetScroll = sessionStorage.getItem('scroll_target')

      if (targetScroll) {
        // Clear the stored target
        sessionStorage.removeItem('scroll_target')

        // Scroll to target after a short delay to ensure content is loaded
        setTimeout(() => {
          scroller.scrollTo(targetScroll, {
            duration: 500,
            smooth: true,
            offset: -90,
          })
        }, 100)
      }
    }
  }, [pathname])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="bg-background/80 border-border fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <BrandLogo />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item, index) => {
            if (item.href === '#') {
              return (
                <div
                  key={index}
                  onClick={() => handleNavigation(item)}
                  className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                >
                  {item.label}
                </div>
              )
            }

            return (
              <Link
                key={index}
                to={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" className="text-muted-foreground hover:text-foreground" asChild>
            <Link to="/login">Sign In</Link>
          </Button>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link to="/register">Start Free Trial</Link>
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
              {navLinks.map((item, index) => {
                if (item.href === '#') {
                  return (
                    <motion.div
                      key={index}
                      onClick={() => {
                        handleNavClick()
                        handleNavigation(item)
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="text-muted-foreground hover:text-foreground hover:bg-muted block rounded-lg px-4 py-3 transition-colors"
                    >
                      {item.label}
                    </motion.div>
                  )
                }

                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-muted-foreground hover:text-foreground hover:bg-muted block rounded-lg px-4 py-3 transition-colors"
                  >
                    {item.label}
                  </motion.a>
                )
              })}
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
                  <Link to="/login" onClick={handleNavClick}>
                    Sign In
                  </Link>
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link to="/register" onClick={handleNavClick}>
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

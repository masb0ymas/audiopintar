import { Link } from '@tanstack/react-router'

import BrandLogo from '~/components/block/site/brand-logo'
import { env } from '~/env'

export default function PublicFooter() {
  const footers = [
    {
      name: 'Privacy',
      href: '/privacy',
      external: false,
    },
    {
      name: 'Terms',
      href: '/terms',
      external: false,
    },
    {
      name: 'Contact',
      href: 'mailto:support@audiopintar.xyz',
      external: true,
    },
    {
      name: 'Github',
      href: 'https://github.com/masb0ymas/audiopintar',
      external: true,
    },
  ]

  return (
    <footer className="border-border border-t px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <BrandLogo />
          <div className="text-muted-foreground flex items-center gap-8 text-sm">
            {footers.map((item) =>
              !item.external ? (
                <Link to={item.href} className="hover:text-foreground transition-colors">
                  {item.name}
                </Link>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ),
            )}
          </div>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} {env.VITE_APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

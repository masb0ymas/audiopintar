import BrandLogo from '~/components/block/site/brand-logo'
import { env } from '~/env'

export default function PublicFooter() {
  return (
    <footer className="border-border border-t px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <BrandLogo />
          <div className="text-muted-foreground flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Help Center
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} {env.VITE_APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

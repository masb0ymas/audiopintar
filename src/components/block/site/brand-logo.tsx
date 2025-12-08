import { Link } from '@tanstack/react-router'

import { env } from '~/env'

export default function BrandLogo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center">
        <img src="/static/images/brand-logo.png" alt="brand-logo" />
      </div>
      <span className="text-foreground text-xl font-bold">{env.VITE_APP_NAME}</span>
    </Link>
  )
}

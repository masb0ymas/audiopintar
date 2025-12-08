import { Link } from '@tanstack/react-router'
import { Headphones } from 'lucide-react'

import { env } from '~/env'

export default function BrandLogo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
        <Headphones className="text-primary-foreground h-5 w-5" />
      </div>
      <span className="text-foreground text-xl font-bold">{env.VITE_APP_NAME}</span>
    </Link>
  )
}

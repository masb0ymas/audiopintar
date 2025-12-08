import React from 'react'

import PublicFooter from './footer'
import PublicNavbar from './navbar'

interface PublicLayoutProps {
  children: React.ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="bg-background min-h-screen">
      <PublicNavbar />
      {children}
      <PublicFooter />
    </div>
  )
}

import { createFileRoute, Outlet } from '@tanstack/react-router'

import PublicLayout from '~/components/layouts/public/layout'

export const Route = createFileRoute('/(public)')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  )
}

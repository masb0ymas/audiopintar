import { createFileRoute } from '@tanstack/react-router'

import RegisterForm from '~/components/block/auth/register-form'
import BrandLogo from '~/components/block/site/brand-logo'

export const Route = createFileRoute('/(auth)/register/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <BrandLogo />
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}

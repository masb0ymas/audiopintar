import { createFileRoute } from '@tanstack/react-router'

import Loading from '~/components/block/common/loading'
import NotFound from '~/components/block/common/not-found'

export const Route = createFileRoute('/(home)/playlist/')({
  component: RouteComponent,
  pendingComponent: Loading,
  notFoundComponent: NotFound,
})

function RouteComponent() {
  return <div>You can create your own playlist</div>
}

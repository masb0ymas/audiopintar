import { TanStackDevtools } from '@tanstack/react-devtools'
import { formDevtoolsPlugin } from '@tanstack/react-form-devtools'
import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRootRouteWithContext, HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import NotFound from '~/components/block/common/not-found'
import {
  GOOGLE_FONTS,
  META_CONTENT,
  META_DESCRIPTION,
  META_ICONS,
  META_KEYWORDS,
  META_TITLE,
  META_URL,
  OPEN_GRAPH_META,
  TWITTER_META,
} from '~/lib/constants/meta'
import DecorationProvider from '~/lib/providers/decoration'

import appCss from '../styles/globals.css?url'

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: META_TITLE,
      },
      {
        name: 'description',
        content: META_DESCRIPTION,
      },
      {
        name: 'keywords',
        content: META_KEYWORDS,
      },
      {
        rel: 'canonical',
        href: META_URL,
      },
      ...META_CONTENT,
      ...OPEN_GRAPH_META,
      ...TWITTER_META,
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      ...META_ICONS,
      ...GOOGLE_FONTS,
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <DecorationProvider>{children}</DecorationProvider>

        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            {
              name: 'Tanstack Query',
              render: <ReactQueryDevtools />,
            },
            formDevtoolsPlugin(),
          ]}
        />

        <Scripts />
      </body>
    </html>
  )
}

import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import Header from '../components/Header'
import { ThemeProvider } from '../components/ThemeProvider'
import appCss from '../styles.css?url'

const adsenseClient = import.meta.env.VITE_ADSENSE_CLIENT

export const Route = createRootRoute({
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
        title: '陸強恕 (John Lu) - Senior Frontend Engineer',
      },
      {
        name: 'description',
        content:
          'Senior Frontend Engineer with expertise in TypeScript, React, Vue, and full-stack development. Based in Taipei, Taiwan.',
      },
      ...(adsenseClient
        ? [{ name: 'google-adsense-account', content: adsenseClient }]
        : []),
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
        sizes: '48x48',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/logo/JL.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/logo/JL.png',
      },
    ],
    scripts: [
      ...(adsenseClient
        ? [
            {
              src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`,
              async: true,
              crossOrigin: 'anonymous' as const,
            },
          ]
        : []),
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}

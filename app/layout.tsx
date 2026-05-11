import type { Metadata } from 'next'
import { StatusBar } from '@/components/chrome/StatusBar'
import { Nav } from '@/components/chrome/Nav'
import { Footer } from '@/components/chrome/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'STATION 01 — Samuel Kelley',
  description:
    'Infrastructure engineer. Cyber operator. Builder of physical things. Audacia et Veritas.',
  openGraph: {
    title: 'STATION 01 — Samuel Kelley',
    description:
      'Infrastructure engineer. Cyber operator. Builder of physical things.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STATION 01 — Samuel Kelley',
    description:
      'Infrastructure engineer. Cyber operator. Builder of physical things.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#0A0908" />
      </head>
      <body className="bg-ink text-bone">
        <StatusBar />
        <Nav />

        <main
          id="main"
          className="min-h-screen pt-24 pb-8 px-4"
          style={{ fontFamily: 'JetBrains Mono' }}
        >
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>

        <Footer />

        {/* Skip link */}
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
      </body>
    </html>
  )
}

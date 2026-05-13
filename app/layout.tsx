import type { Metadata } from 'next'
import { StatusBar } from '@/components/chrome/StatusBar'
import { Nav } from '@/components/chrome/Nav'
import { Footer } from '@/components/chrome/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Samuel Kelley — Cloud Security & Infrastructure Engineer',
    template: '%s | Samuel Kelley',
  },
  description:
    'Cloud security and infrastructure engineer. 10,000+ servers at Wells Fargo, M.S. Cybersecurity at Johns Hopkins (APL). US Citizen, eligible for security clearance. Audacia et Veritas.',
  keywords: [
    'cloud security',
    'infrastructure engineer',
    'AWS',
    'Ansible',
    'CVE remediation',
    'Johns Hopkins cybersecurity',
    'Wells Fargo',
    'security clearance',
  ],
  authors: [{ name: 'Samuel Kelley', url: 'https://samuelkelley.dev' }],
  openGraph: {
    title: 'Samuel Kelley — Cloud Security & Infrastructure Engineer',
    description:
      'Cloud security and infrastructure engineer. 10,000+ servers. Zero downtime. M.S. JHU Cybersecurity.',
    type: 'website',
    url: 'https://samuelkelley.dev',
    siteName: 'Samuel Kelley',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Kelley — Cloud Security & Infrastructure Engineer',
    description:
      'Cloud security and infrastructure engineer. 10,000+ servers. Zero downtime. M.S. JHU Cybersecurity.',
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-ink text-bone">
        {/* Skip to main content */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 9999,
            padding: '0.5rem 1rem',
            background: 'var(--color-phosphor)',
            color: 'var(--color-ink)',
            fontFamily: 'JetBrains Mono',
            fontSize: '0.75rem',
          }}
        >
          Skip to main content
        </a>

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
      </body>
    </html>
  )
}

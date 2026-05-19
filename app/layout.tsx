import type { Metadata } from 'next'
import { StatusBar } from '@/components/chrome/StatusBar'
import { Nav } from '@/components/chrome/Nav'
import { Footer } from '@/components/chrome/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://samuelkelley.dev'),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Samuel Kelley',
              jobTitle: 'Cloud Security & Infrastructure Engineer',
              email: 'samuel.c.kelley@proton.me',
              telephone: '+18287475412',
              url: 'https://samuelkelley.dev',
              address: { '@type': 'PostalAddress', addressLocality: 'Charlotte', addressRegion: 'NC', addressCountry: 'US' },
              alumniOf: [
                { '@type': 'EducationalOrganization', name: 'Johns Hopkins University', url: 'https://www.jhu.edu' },
                { '@type': 'EducationalOrganization', name: 'University of South Carolina', url: 'https://www.sc.edu' },
              ],
              knowsAbout: ['Cloud Security', 'Infrastructure Engineering', 'Ansible', 'AWS', 'CVE Remediation', 'P4 Programming', 'Cybersecurity'],
              sameAs: [
                'https://github.com/sammysprinkler',
                'https://linkedin.com/in/samuel-kelley-73256b1b7',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-ink text-bone scanlines">
        {/* Skip to main content */}
        <a
          href="#main"
          className="skip-link"
          style={{
            position: 'absolute',
            top: '-100px',
            left: '0.5rem',
            zIndex: 9999,
            padding: '0.5rem 1rem',
            background: 'var(--color-phosphor)',
            color: 'var(--color-ink)',
            fontFamily: 'JetBrains Mono',
            fontSize: '0.75rem',
            transition: 'top 200ms var(--ease-station)',
          }}
        >
          Skip to main content
        </a>

        <StatusBar />
        <Nav />

        <main
          id="main"
          style={{
            minHeight: '100svh',
            paddingTop: 'var(--chrome-h)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div className="shell" style={{ paddingBlock: 'var(--space-lg)' }}>
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  )
}

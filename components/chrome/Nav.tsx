'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MonogramSeal } from './MonogramSeal'

const STATIONS = [
  { num: '01', name: 'ENTRY', href: '/' },
  { num: '02', name: 'DOSSIER', href: '/dossier' },
  { num: '03', name: 'OPERATIONS', href: '/operations' },
  { num: '04', name: 'ARSENAL', href: '/arsenal' },
  { num: '05', name: 'ACADEMY', href: '/academy' },
  { num: '06', name: 'TRANSMISSIONS', href: '/transmissions' },
  { num: '07', name: 'COMMS', href: '/comms' },
]

export function Nav() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav
      className="fixed top-8 inset-x-0 h-14 bg-ink border-b border-bone-faint flex items-center justify-between px-4 z-40"
      style={{ fontFamily: 'JetBrains Mono' }}
      aria-label="Main navigation"
    >
      {/* Left: Monogram */}
      <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity" aria-label="Home">
        <MonogramSeal />
      </Link>

      {/* Center: Stations — hidden on small screens */}
      <div className="hidden lg:flex items-center gap-5 ml-6 text-xs flex-1">
        {STATIONS.map((station) => (
          <Link
            key={station.href}
            href={station.href}
            className={`transition-colors duration-200 hover:text-phosphor whitespace-nowrap ${
              isActive(station.href)
                ? 'text-phosphor border-b-2 border-phosphor'
                : 'text-bone-dim'
            }`}
          >
            {station.num} {station.name}
          </Link>
        ))}
      </div>

      {/* Mobile: station list collapse indicator */}
      <div className="flex lg:hidden flex-1 items-center ml-4 text-xs text-bone-dim">
        <span>STATION {STATIONS.find((s) => isActive(s.href))?.num ?? '01'}</span>
      </div>

      {/* Right: Resume download — always visible */}
      <a
        href="/samuel-kelley-resume.pdf"
        download="Samuel-Kelley-Resume.pdf"
        data-event="resume-download"
        className="flex-shrink-0 flex items-center gap-1 text-xs font-mono font-bold"
        style={{
          padding: '0.3rem 0.75rem',
          background: 'var(--color-phosphor)',
          color: 'var(--color-ink)',
          border: '1px solid var(--color-phosphor)',
          textDecoration: 'none',
          letterSpacing: '0.06em',
          transition: 'all 240ms',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement
          el.style.background = 'transparent'
          el.style.color = 'var(--color-phosphor)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement
          el.style.background = 'var(--color-phosphor)'
          el.style.color = 'var(--color-ink)'
        }}
      >
        <span className="hidden sm:inline">↓ </span>RESUME
      </a>
    </nav>
  )
}

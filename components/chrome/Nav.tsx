'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
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
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const activeStation = STATIONS.find((s) => isActive(s.href))

  // Close on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <nav
        className="fixed top-8 inset-x-0 h-14 bg-ink border-b border-bone-faint flex items-center justify-between px-4 z-40"
        style={{ fontFamily: 'JetBrains Mono' }}
        aria-label="Main navigation"
      >
        {/* Left: Monogram */}
        <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity" aria-label="Home">
          <MonogramSeal />
        </Link>

        {/* Center: Station links — desktop only */}
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

        {/* Mobile: current station + hamburger */}
        <div className="flex lg:hidden flex-1 items-center ml-4 text-xs">
          <span className="text-bone-dim">
            {activeStation ? `${activeStation.num} ${activeStation.name}` : '01 ENTRY'}
          </span>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Resume download — always visible */}
          <a
            href="/samuel-kelley-resume.pdf"
            download="Samuel-Kelley-Resume.pdf"
            data-event="resume-download"
            className="flex items-center gap-1 text-xs font-mono font-bold"
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

          {/* Hamburger — mobile only */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-1 w-8 h-8"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
          >
            <span
              style={{
                display: 'block',
                width: '18px',
                height: '1.5px',
                background: 'var(--color-bone-dim)',
                transition: 'transform 200ms, opacity 200ms',
                transform: mobileOpen ? 'translateY(3.5px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '18px',
                height: '1.5px',
                background: 'var(--color-bone-dim)',
                transition: 'opacity 200ms',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '18px',
                height: '1.5px',
                background: 'var(--color-bone-dim)',
                transition: 'transform 200ms, opacity 200ms',
                transform: mobileOpen ? 'translateY(-3.5px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30"
          style={{ background: 'rgba(10,9,8,0.6)', top: 'calc(2rem + 3.5rem)' }}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        className="lg:hidden fixed inset-x-0 z-35"
        style={{
          top: 'calc(2rem + 3.5rem)',
          background: 'var(--color-ink)',
          borderBottom: '1px solid var(--color-bone-faint)',
          fontFamily: 'JetBrains Mono',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 240ms cubic-bezier(0.16, 1, 0.30, 1)',
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
      >
        {STATIONS.map((station) => (
          <Link
            key={station.href}
            href={station.href}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.875rem 1.25rem',
              borderBottom: '1px solid var(--color-bone-faint)',
              color: isActive(station.href) ? 'var(--color-phosphor)' : 'var(--color-bone-dim)',
              fontSize: 'var(--text-sm)',
              textDecoration: 'none',
              transition: 'color 150ms',
            }}
          >
            <span>{station.num} {station.name}</span>
            {isActive(station.href) && (
              <span style={{ color: 'var(--color-phosphor)', fontSize: 'var(--text-xs)' }}>◈ ACTIVE</span>
            )}
          </Link>
        ))}
        <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--color-bone-faint)' }}>
          <a
            href="/samuel-kelley-resume.pdf"
            download="Samuel-Kelley-Resume.pdf"
            className="cta-primary"
            style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}
          >
            ↓ Download Resume (PDF)
          </a>
        </div>
      </div>
    </>
  )
}

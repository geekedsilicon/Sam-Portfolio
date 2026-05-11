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
    >
      {/* Left: Monogram */}
      <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
        <MonogramSeal />
      </Link>

      {/* Right: Stations */}
      <div className="flex items-center gap-6 ml-auto text-xs">
        {STATIONS.map((station) => (
          <Link
            key={station.href}
            href={station.href}
            className={`transition-colors duration-200 hover:text-phosphor ${
              isActive(station.href)
                ? 'text-phosphor border-b-2 border-phosphor'
                : 'text-bone-dim'
            }`}
          >
            {station.num} {station.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Station Not Found',
}

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'JetBrains Mono',
      }}
    >
      <p
        className="font-mono"
        style={{ fontSize: 'var(--text-xs)', color: 'var(--color-phosphor)', letterSpacing: '0.1em', marginBottom: '1rem' }}
      >
        ◆ TRANSMISSION LOST
      </p>

      <h1
        style={{
          fontSize: 'var(--text-4xl)',
          color: 'var(--color-bone)',
          lineHeight: 1,
          marginBottom: '1rem',
          fontWeight: 600,
        }}
      >
        404
      </h1>

      <p
        className="font-mono"
        style={{ fontSize: 'var(--text-sm)', color: 'var(--color-bone-dim)', marginBottom: '0.5rem' }}
      >
        Station not found. Signal lost in transit.
      </p>

      <p
        className="font-mono"
        style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-faint)', marginBottom: '2.5rem' }}
      >
        The route you requested does not exist on this station.
      </p>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Link href="/" className="cta-primary">
          ↩ Return to Entry
        </Link>
        <Link href="/comms" className="cta-secondary">
          Open Comms Channel
        </Link>
      </div>
    </div>
  )
}

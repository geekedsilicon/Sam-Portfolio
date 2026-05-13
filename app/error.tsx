'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[STATION] Unhandled error:', error)
  }, [error])

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
        style={{ fontSize: 'var(--text-xs)', color: 'var(--color-crimson)', letterSpacing: '0.1em', marginBottom: '1rem' }}
      >
        ◆ SYSTEM FAULT
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
        ERROR
      </h1>

      <p
        className="font-mono"
        style={{ fontSize: 'var(--text-sm)', color: 'var(--color-bone-dim)', marginBottom: '0.5rem' }}
      >
        An unexpected fault occurred at this station.
      </p>

      {error.digest && (
        <p
          className="font-mono"
          style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-faint)', marginBottom: '2rem' }}
        >
          Digest: {error.digest}
        </p>
      )}

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
        <button className="cta-primary" onClick={reset}>
          ↺ Retry
        </button>
        <a href="/" className="cta-secondary">
          ↩ Return to Entry
        </a>
      </div>
    </div>
  )
}

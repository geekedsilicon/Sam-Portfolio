import type { Metadata } from 'next'
import { AsciiBox } from '@/components/typography/AsciiBox'
import { StationTitle } from '@/components/typography/StationTitle'

export const metadata: Metadata = {
  title: 'Status',
  description: 'Operational status for samuelkelley.dev',
}

const SYSTEMS = [
  { name: 'samuelkelley.dev', status: 'operational', note: 'Web — Next.js on Railway' },
  { name: 'Email', status: 'operational', note: 'samuel.c.kelley@proton.me · ProtonMail' },
  { name: 'Comms Form', status: 'operational', note: '/comms → /api/comms · Resend' },
  { name: 'GitHub', status: 'operational', note: 'github.com/sammysprinkler' },
  { name: 'LinkedIn', status: 'operational', note: 'samuel-kelley-73256b1b7' },
  { name: 'Resume PDF', status: 'pending', note: 'Uploading — available soon' },
] as const

const STATUS_COLOR: Record<string, string> = {
  operational: 'var(--color-phosphor)',
  degraded: '#F6AE2D',
  outage: 'var(--color-crimson)',
  pending: 'var(--color-bone-dim)',
}

const STATUS_LABEL: Record<string, string> = {
  operational: '● OPERATIONAL',
  degraded: '● DEGRADED',
  outage: '● OUTAGE',
  pending: '○ PENDING',
}

export default function StatusPage() {
  const allOperational = SYSTEMS.every((s) => s.status === 'operational')

  return (
    <div className="space-y-12">
      <StationTitle
        number="SYS"
        name="STATUS"
        subtitle="Operational status for all STATION systems."
      />

      {/* Overall status banner */}
      <div
        style={{
          padding: '1rem 1.25rem',
          border: `1px solid ${allOperational ? 'var(--color-phosphor)' : 'var(--color-crimson)'}`,
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          background: allOperational ? 'rgba(255,176,0,0.04)' : 'rgba(122,31,31,0.08)',
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: allOperational ? 'var(--color-phosphor)' : 'var(--color-crimson)',
            flexShrink: 0,
            display: 'block',
          }}
        />
        <span
          className="font-mono"
          style={{
            fontSize: 'var(--text-sm)',
            color: allOperational ? 'var(--color-phosphor)' : 'var(--color-crimson)',
            fontWeight: 700,
          }}
        >
          {allOperational ? 'ALL SYSTEMS OPERATIONAL' : 'DEGRADED — CHECK BELOW'}
        </span>
      </div>

      {/* System list */}
      <AsciiBox title="SYSTEM ROSTER">
        <div
          className="font-mono"
          style={{ fontSize: 'var(--text-xs)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          {SYSTEMS.map((sys) => (
            <div
              key={sys.name}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--color-bone-faint)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <span style={{ color: 'var(--color-bone)', fontWeight: 600 }}>{sys.name}</span>
                <span style={{ color: 'var(--color-bone-faint)', fontSize: '0.65rem' }}>{sys.note}</span>
              </div>
              <span style={{ color: STATUS_COLOR[sys.status] ?? 'var(--color-bone-dim)', flexShrink: 0 }}>
                {STATUS_LABEL[sys.status] ?? sys.status.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </AsciiBox>

      {/* Incident history */}
      <AsciiBox title="INCIDENT LOG">
        <p
          className="font-mono"
          style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-faint)', fontStyle: 'italic' }}
        >
          No incidents recorded. All clear since launch.
        </p>
      </AsciiBox>

      {/* Meta */}
      <p
        className="font-mono"
        style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-faint)' }}
      >
        Last checked: rendered at build time · Infrastructure: Railway · Region: US-East
      </p>
    </div>
  )
}

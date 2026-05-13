import type { Metadata } from 'next'
import { StationTitle } from '@/components/typography/StationTitle'
import { AsciiBox } from '@/components/typography/AsciiBox'
import { METRICS } from '@/lib/metrics'

export const metadata: Metadata = {
  title: 'Academy',
  description:
    'Education and certifications. M.S. Cybersecurity Johns Hopkins, B.S. USC Magna Cum Laude.',
}

const CERTIFICATIONS = [
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', status: 'active' as const },
  { name: 'AWS Cloud Essentials', issuer: 'Amazon Web Services', status: 'active' as const },
  { name: 'Microsoft Azure AI-900', issuer: 'Microsoft', status: 'active' as const },
  { name: 'Red Hat GL380', issuer: 'Red Hat', status: 'active' as const },
  { name: 'American Red Cross CPR', issuer: 'Red Cross', status: 'active' as const },
  { name: 'American Red Cross Lifeguard', issuer: 'Red Cross', status: 'active' as const },
  { name: 'CCNA', issuer: 'Cisco', status: 'in-progress' as const },
  { name: 'CompTIA Security+', issuer: 'CompTIA', status: 'in-progress' as const },
]

export default function AcademyPage() {
  return (
    <div className="space-y-12">
      <StationTitle
        number="05"
        name="ACADEMY"
        subtitle="Education and qualifications."
      />

      {/* Education */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* JHU */}
        <AsciiBox title="JOHNS HOPKINS UNIVERSITY — IN PROGRESS">
          <div className="font-mono" style={{ fontSize: 'var(--text-xs)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ color: 'var(--color-phosphor)', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
              M.S. Cybersecurity
            </p>
            <p style={{ color: 'var(--color-bone-dim)' }}>Whiting School of Engineering · Applied Physics Laboratory Track</p>
            <p style={{ color: 'var(--color-bone-faint)' }}>Baltimore, MD · Jan 2026 — Dec 2027 (expected)</p>
            <ul style={{ marginTop: '0.5rem', color: 'var(--color-bone-dim)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <li>▸ Advanced coursework in network security, applied cryptography, and threat analysis</li>
              <li>▸ Applied Physics Laboratory partnership — defense and intelligence research track</li>
              <li>▸ Thesis focus: TBD (network security / programmable data planes)</li>
            </ul>
          </div>
        </AsciiBox>

        {/* USC */}
        <AsciiBox title="UNIVERSITY OF SOUTH CAROLINA — COMPLETE">
          <div className="font-mono" style={{ fontSize: 'var(--text-xs)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <p style={{ color: 'var(--color-phosphor)', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                B.S. Integrated Information Technology
              </p>
              <span
                style={{
                  padding: '0.15rem 0.5rem',
                  border: '1px solid var(--color-phosphor)',
                  color: 'var(--color-phosphor)',
                  fontSize: 'var(--text-xs)',
                  height: 'fit-content',
                }}
              >
                GPA {METRICS.usc_gpa.value} · Magna Cum Laude
              </span>
            </div>
            <p style={{ color: 'var(--color-bone-dim)' }}>College of Engineering and Computing</p>
            <p style={{ color: 'var(--color-bone-faint)' }}>Columbia, SC · Aug 2020 — Dec 2022</p>
            <ul style={{ marginTop: '0.5rem', color: 'var(--color-bone-dim)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <li>▸ Network architecture and systems design</li>
              <li>▸ Database systems and optimization</li>
              <li>▸ Senior Capstone: Blockchain Secure Communications for Fort Jackson (Scrum Master)</li>
              <li>▸ ONR Cyber Security Research Assistant (concurrent, Jan–Apr 2022)</li>
            </ul>
          </div>
        </AsciiBox>

        {/* Presbyterian College */}
        <AsciiBox title="PRESBYTERIAN COLLEGE — TRANSFERRED">
          <div className="font-mono" style={{ fontSize: 'var(--text-xs)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ color: 'var(--color-bone)', fontWeight: 700 }}>
              Attended — Football &amp; Academic Scholarship
            </p>
            <p style={{ color: 'var(--color-bone-faint)' }}>Clinton, SC · Aug 2019 — May 2020</p>
            <p style={{ color: 'var(--color-bone-dim)', marginTop: '0.5rem' }}>
              Division II football scholarship alongside academic award. Transferred to USC in 2020. Discipline,
              team operations, and performance under pressure carried forward into every professional role.
            </p>
          </div>
        </AsciiBox>
      </section>

      {/* Certifications */}
      <section>
        <div
          className="font-mono uppercase"
          style={{
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.12em',
            color: 'var(--color-bone-dim)',
            marginBottom: '1rem',
          }}
        >
          ◆ Qualifications &amp; Certifications
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.75rem',
          }}
          className="certs-grid"
        >
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              style={{
                padding: '0.75rem',
                border: `1px solid ${cert.status === 'active' ? 'var(--color-phosphor)' : 'var(--color-bone-faint)'}`,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: 'var(--text-xs)',
                  color: cert.status === 'active' ? 'var(--color-phosphor)' : 'var(--color-bone-dim)',
                  fontWeight: 600,
                }}
              >
                {cert.name}
              </span>
              <span
                className="font-mono"
                style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-faint)' }}
              >
                {cert.issuer}
                {cert.status === 'in-progress' && ' · in progress'}
              </span>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .certs-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </div>
  )
}

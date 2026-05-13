'use client'

import { useState } from 'react'
import { StationTitle } from '@/components/typography/StationTitle'
import { AsciiBox } from '@/components/typography/AsciiBox'

// Note: metadata must be exported from a server component; using title in StationTitle instead
// export const metadata: Metadata = { title: 'Comms', description: '...' }

const CONTACT = {
  email: 'samuel.c.kelley@proton.me',
  phone: '+1 828-747-5412',
  linkedin: 'https://linkedin.com/in/samuel-kelley-73256b1b7',
  github: 'https://github.com/sammysprinkler',
}

export default function CommsPage() {
  const [copied, setCopied] = useState<string | null>(null)
  const [formOpen, setFormOpen] = useState(false)
  const [pgpOpen, setPgpOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    // Simulated send — wire to /api/comms when backend is ready
    setTimeout(() => setStatus('sent'), 1200)
  }

  return (
    <div className="space-y-12">
      <StationTitle
        number="07"
        name="COMMS"
        subtitle="Direct channels. Encrypted preferred. Response within 24h on weekdays."
      />

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* PRIMARY — raw contacts */}
        <AsciiBox title="PRIMARY CHANNELS">
          <div className="font-mono" style={{ fontSize: 'var(--text-xs)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <ContactRow
              label={`▸ ${CONTACT.email}`}
              copyLabel={copied === 'email' ? 'COPIED' : 'COPY'}
              onCopy={() => copyToClipboard(CONTACT.email, 'email')}
              href={`mailto:${CONTACT.email}`}
              hrefLabel="MAILTO"
            />
            <ContactRow
              label={`▸ ${CONTACT.phone}`}
              copyLabel={copied === 'phone' ? 'COPIED' : 'COPY'}
              onCopy={() => copyToClipboard(CONTACT.phone, 'phone')}
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              hrefLabel="CALL"
            />
          </div>
        </AsciiBox>

        {/* NETWORK */}
        <AsciiBox title="NETWORK">
          <div className="font-mono" style={{ fontSize: 'var(--text-xs)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <ContactRow
              label="▸ LinkedIn — samuel-kelley-73256b1b7"
              onCopy={() => window.open(CONTACT.linkedin, '_blank', 'noopener,noreferrer')}
              copyLabel="OPEN"
              href={CONTACT.linkedin}
              hrefLabel="OPEN"
              external
            />
            <ContactRow
              label="▸ GitHub — sammysprinkler"
              onCopy={() => window.open(CONTACT.github, '_blank', 'noopener,noreferrer')}
              copyLabel="OPEN"
              href={CONTACT.github}
              hrefLabel="OPEN"
              external
            />
          </div>
        </AsciiBox>

        {/* DOCUMENTS */}
        <AsciiBox title="DOCUMENTS">
          <div className="font-mono" style={{ fontSize: 'var(--text-xs)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ color: 'var(--color-bone)' }}>▸ Resume (PDF, one page)</span>
              <a
                href="/samuel-kelley-resume.pdf"
                download="Samuel-Kelley-Resume.pdf"
                className="cta-primary"
                data-event="resume-download"
                style={{ fontSize: '0.65rem', padding: '0.25rem 0.6rem' }}
              >
                ↓ download
              </a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ color: 'var(--color-bone)' }}>▸ Detailed CV (PDF, two pages)</span>
              <a
                href="/samuel-kelley-cv.pdf"
                download="Samuel-Kelley-CV.pdf"
                className="cta-secondary"
                style={{ fontSize: '0.65rem', padding: '0.25rem 0.6rem' }}
              >
                ↓ download
              </a>
            </div>
          </div>
        </AsciiBox>

        {/* PGP — collapsed */}
        <div>
          <button
            onClick={() => setPgpOpen(!pgpOpen)}
            className="font-mono"
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--color-bone-dim)',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ color: 'var(--color-phosphor)' }}>{pgpOpen ? '▾' : '▸'}</span>
            [ENCRYPTED COMMS — PGP Public Key]
          </button>
          {pgpOpen && (
            <div
              className="font-mono"
              style={{
                marginTop: '0.75rem',
                padding: '1rem',
                background: 'var(--color-ink-raised)',
                border: '1px solid var(--color-bone-faint)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-bone-dim)',
                overflowX: 'auto',
              }}
            >
              <pre>{`-----BEGIN PGP PUBLIC KEY BLOCK-----

[PGP key will be added here]

-----END PGP PUBLIC KEY BLOCK-----`}</pre>
            </div>
          )}
        </div>

        {/* Prefer a form? */}
        <div style={{ borderTop: '1px solid var(--color-bone-faint)', paddingTop: '1.5rem' }}>
          <button
            onClick={() => setFormOpen(!formOpen)}
            className="font-mono"
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--color-bone-dim)',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            Prefer a form?{' '}
            <span style={{ color: 'var(--color-phosphor)', textDecoration: 'underline' }}>
              {formOpen ? 'close form' : 'open secure form'}
            </span>
          </button>

          {formOpen && (
            <div style={{ marginTop: '1.5rem' }}>
              <AsciiBox title="SECURE MESSAGE FORM">
                {status === 'sent' ? (
                  <p className="font-mono" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-phosphor)' }}>
                    ✓ Transmission received. I will respond within 24 hours.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <FormField label="NAME" name="name" type="text" required />
                    <FormField label="EMAIL" name="email" type="email" required />
                    <FormField label="ORGANIZATION (optional)" name="org" type="text" />
                    <div>
                      <label
                        htmlFor="message"
                        className="font-mono"
                        style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)', marginBottom: '0.5rem' }}
                      >
                        MESSAGE
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        style={{ width: '100%' }}
                        placeholder="Your message here..."
                        aria-label="Message"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      style={{ alignSelf: 'flex-start' }}
                    >
                      {status === 'sending' ? 'TRANSMITTING...' : 'TRANSMIT'}
                    </button>
                    {status === 'error' && (
                      <p
                        className="font-mono"
                        style={{ fontSize: 'var(--text-xs)', color: 'var(--color-crimson)' }}
                        role="alert"
                        aria-live="assertive"
                      >
                        Transmission failed. Please email directly.
                      </p>
                    )}
                  </form>
                )}
              </AsciiBox>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function ContactRow({
  label,
  copyLabel,
  onCopy,
  href,
  hrefLabel,
  external,
}: {
  label: string
  copyLabel: string
  onCopy: () => void
  href: string
  hrefLabel: string
  external?: boolean
}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
      <span style={{ color: 'var(--color-bone)' }}>{label}</span>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          onClick={onCopy}
          style={{
            padding: '0.15rem 0.5rem',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-phosphor)',
            border: '1px solid var(--color-phosphor)',
            background: 'none',
          }}
          aria-label={`${copyLabel} ${label}`}
        >
          [{copyLabel}]
        </button>
        {!external && (
          <a
            href={href}
            style={{
              padding: '0.15rem 0.5rem',
              fontSize: 'var(--text-xs)',
              color: 'var(--color-bone-dim)',
              border: '1px solid var(--color-bone-faint)',
            }}
          >
            [{hrefLabel}]
          </a>
        )}
      </div>
    </div>
  )
}

function FormField({
  label,
  name,
  type,
  required,
}: {
  label: string
  name: string
  type: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono"
        style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)', marginBottom: '0.5rem' }}
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        style={{ width: '100%' }}
        placeholder={label.split(' (')[0].toLowerCase()}
        aria-label={label}
      />
    </div>
  )
}

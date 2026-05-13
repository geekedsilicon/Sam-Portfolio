'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { StationTitle } from '@/components/typography/StationTitle'
import { AsciiBox } from '@/components/typography/AsciiBox'

const CONTACT = {
  email: 'samuel.c.kelley@proton.me',
  phone: '+1 828-747-5412',
  linkedin: 'https://linkedin.com/in/samuel-kelley-73256b1b7',
  github: 'https://github.com/sammysprinkler',
}

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  org: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})
type FormData = z.infer<typeof schema>

export default function CommsPage() {
  const [copied, setCopied] = useState<string | null>(null)
  const [formOpen, setFormOpen] = useState(false)
  const [pgpOpen, setPgpOpen] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('idle')
    try {
      const res = await fetch('/api/comms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Send failed')
      setSubmitStatus('success')
      reset()
    } catch {
      setSubmitStatus('error')
    }
  }

  return (
    <div className="space-y-12">
      <StationTitle
        number="07"
        name="COMMS"
        subtitle="Direct channels. Encrypted preferred. Response within 24h on weekdays."
      />

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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

        {/* PGP */}
        <div>
          <button
            onClick={() => setPgpOpen(!pgpOpen)}
            className="font-mono"
            style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span style={{ color: 'var(--color-phosphor)' }}>{pgpOpen ? '▾' : '▸'}</span>
            [ENCRYPTED COMMS — PGP Public Key]
          </button>
          {pgpOpen && (
            <div className="font-mono" style={{ marginTop: '0.75rem', padding: '1rem', background: 'var(--color-ink-raised)', border: '1px solid var(--color-bone-faint)', fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)', overflowX: 'auto' }}>
              <pre>{`-----BEGIN PGP PUBLIC KEY BLOCK-----\n\n[PGP key will be added here]\n\n-----END PGP PUBLIC KEY BLOCK-----`}</pre>
            </div>
          )}
        </div>

        {/* Secure form */}
        <div style={{ borderTop: '1px solid var(--color-bone-faint)', paddingTop: '1.5rem' }}>
          <button
            onClick={() => { setFormOpen(!formOpen); setSubmitStatus('idle') }}
            className="font-mono"
            style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            Prefer a form?{' '}
            <span style={{ color: 'var(--color-phosphor)', textDecoration: 'underline' }}>
              {formOpen ? 'close form' : 'open secure form'}
            </span>
          </button>

          {formOpen && (
            <div style={{ marginTop: '1.5rem' }}>
              <AsciiBox title="SECURE MESSAGE FORM">
                {submitStatus === 'success' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p className="font-mono" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-phosphor)' }}>
                      ✓ Transmission received. I will respond within 24 hours.
                    </p>
                    <button className="cta-secondary" style={{ alignSelf: 'flex-start', fontSize: 'var(--text-xs)' }} onClick={() => { setSubmitStatus('idle'); setFormOpen(false) }}>
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <FormField label="NAME" error={errors.name?.message}>
                      <input {...register('name')} type="text" style={{ width: '100%' }} placeholder="your name" aria-label="Name" />
                    </FormField>
                    <FormField label="EMAIL" error={errors.email?.message}>
                      <input {...register('email')} type="email" style={{ width: '100%' }} placeholder="your@email.com" aria-label="Email" />
                    </FormField>
                    <FormField label="ORGANIZATION (optional)">
                      <input {...register('org')} type="text" style={{ width: '100%' }} placeholder="company / org (optional)" aria-label="Organization" />
                    </FormField>
                    <FormField label="MESSAGE" error={errors.message?.message}>
                      <textarea {...register('message')} rows={6} style={{ width: '100%' }} placeholder="Your message here..." aria-label="Message" />
                    </FormField>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      <button type="submit" disabled={isSubmitting} style={{ alignSelf: 'flex-start', opacity: isSubmitting ? 0.7 : 1 }}>
                        {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT'}
                      </button>
                      {submitStatus === 'error' && (
                        <p className="font-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-crimson)' }} role="alert" aria-live="assertive">
                          Transmission failed. Please email directly.
                        </p>
                      )}
                    </div>
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

function ContactRow({ label, copyLabel, onCopy, href, hrefLabel, external }: { label: string; copyLabel: string; onCopy: () => void; href: string; hrefLabel: string; external?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
      <span style={{ color: 'var(--color-bone)' }}>{label}</span>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={onCopy} style={{ padding: '0.15rem 0.5rem', fontSize: 'var(--text-xs)', color: 'var(--color-phosphor)', border: '1px solid var(--color-phosphor)', background: 'none' }} aria-label={`${copyLabel} ${label}`}>
          [{copyLabel}]
        </button>
        {!external && (
          <a href={href} style={{ padding: '0.15rem 0.5rem', fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)', border: '1px solid var(--color-bone-faint)' }}>
            [{hrefLabel}]
          </a>
        )}
      </div>
    </div>
  )
}

function FormField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="font-mono" style={{ display: 'block', fontSize: 'var(--text-xs)', color: error ? 'var(--color-crimson)' : 'var(--color-bone-dim)', marginBottom: '0.5rem' }}>
        {label}
        {error && <span style={{ marginLeft: '0.5rem', fontStyle: 'italic' }}>— {error}</span>}
      </label>
      {children}
    </div>
  )
}

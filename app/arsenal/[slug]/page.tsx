import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getCaseStudy, getCaseStudySlugs } from '@/lib/case-studies'
import { AsciiBox } from '@/components/typography/AsciiBox'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) return {}
  return {
    title: cs.title,
    description: cs.subtitle,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) notFound()

  return (
    <div style={{ maxWidth: '72ch', margin: '0 auto' }}>
      {/* Breadcrumb */}
      <div
        className="font-mono"
        style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)', marginBottom: '2rem' }}
      >
        <Link href="/arsenal" style={{ color: 'var(--color-bone-dim)' }}>
          04 ARSENAL
        </Link>
        {' '}→{' '}
        <span style={{ color: 'var(--color-phosphor)' }}>{cs.category}</span>
      </div>

      {/* Header */}
      <header style={{ marginBottom: '3rem' }}>
        <div
          className="font-mono uppercase"
          style={{ fontSize: 'var(--text-xs)', color: 'var(--color-phosphor)', letterSpacing: '0.1em', marginBottom: '1rem' }}
        >
          [{cs.category}] · {cs.duration} · {cs.org}
        </div>

        <h1
          className="font-mono"
          style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-bone)', lineHeight: 1.2, marginBottom: '0.75rem', fontWeight: 600 }}
        >
          {cs.title}
        </h1>

        <p
          className="font-mono"
          style={{ fontSize: 'var(--text-base)', color: 'var(--color-bone-dim)', marginBottom: '1rem', lineHeight: 1.6 }}
        >
          {cs.subtitle}
        </p>

        <div
          className="font-mono"
          style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)', marginBottom: '1.5rem' }}
        >
          <span style={{ color: 'var(--color-bone-faint)' }}>ROLE:</span>{' '}
          {cs.role}
        </div>

        {/* Metrics table */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '0.5rem',
            marginBottom: '1.5rem',
          }}
        >
          {cs.metrics.map((m) => (
            <div
              key={m.label}
              style={{
                padding: '0.75rem',
                border: '1px solid rgba(255,176,0,0.4)',
              }}
            >
              <div
                className="font-mono"
                style={{ fontSize: 'var(--text-lg)', color: 'var(--color-phosphor)', fontWeight: 700 }}
              >
                {m.value}
              </div>
              <div
                className="font-mono"
                style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)', marginTop: '0.15rem' }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Stack */}
        <p
          className="font-mono"
          style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-faint)' }}
        >
          STACK: {cs.stack.join(' · ')}
        </p>
      </header>

      {/* Architecture diagram */}
      {cs.diagramPath ? (
        <figure style={{ marginBottom: '2rem' }}>
          <img
            src={cs.diagramPath}
            alt={cs.diagramAlt ?? 'Architecture diagram'}
            style={{
              width: '100%',
              height: 'auto',
              border: '1px solid var(--color-bone-faint)',
              display: 'block',
            }}
          />
          {cs.diagramAlt && (
            <figcaption
              className="font-mono"
              style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--color-bone-faint)',
                marginTop: '0.5rem',
                fontStyle: 'italic',
              }}
            >
              {cs.diagramAlt}
            </figcaption>
          )}
        </figure>
      ) : cs.diagramAlt ? (
        <div
          style={{
            border: '1px solid var(--color-bone-faint)',
            padding: '2rem',
            marginBottom: '2rem',
            textAlign: 'center',
          }}
        >
          <div
            className="font-mono"
            style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-faint)', fontStyle: 'italic' }}
          >
            [DIAGRAM PENDING]
            <br />
            {cs.diagramAlt}
          </div>
        </div>
      ) : null}

      {/* Case study body */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {cs.sections.map((section) => (
          <AsciiBox key={section.id} title={`// ${section.heading.toUpperCase()}`}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {section.body.map((para, i) => (
                <p
                  key={i}
                  className="font-mono"
                  style={{ fontSize: 'var(--text-sm)', color: 'var(--color-bone)', lineHeight: 1.8 }}
                >
                  {para}
                </p>
              ))}
            </div>
          </AsciiBox>
        ))}
      </div>

      {/* Footer actions */}
      <div
        style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-bone-faint)',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {cs.repoUrl && (
            <a
              href={cs.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
            >
              GitHub Repo →
            </a>
          )}
          {cs.demoUrl && (
            <a
              href={cs.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              Live Demo →
            </a>
          )}
          <a
            href="/samuel-kelley-resume.pdf"
            download="Samuel-Kelley-Resume.pdf"
            className="cta-primary"
            data-event="resume-download"
          >
            ↓ Resume (PDF)
          </a>
        </div>

        <Link
          href="/arsenal"
          className="font-mono"
          style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)' }}
        >
          ← Back to Arsenal
        </Link>
      </div>
    </div>
  )
}

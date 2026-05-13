import type { Metadata } from 'next'
import { StationTitle } from '@/components/typography/StationTitle'
import { AsciiBox } from '@/components/typography/AsciiBox'

export const metadata: Metadata = {
  title: 'Transmissions',
  description:
    'Field notes, case studies, and technical deep-dives from Samuel Kelley.',
}

const POSTS = [
  {
    slug: 'patching-10k-servers',
    title: 'How I Patched 10,000 Servers Without Breaking Production',
    date: '2025-10-10',
    readTime: 10,
    excerpt:
      'CVE remediation at scale. Ansible + Jenkins + institutional patience. Zero unplanned downtime across the full two-year tenure.',
    topics: ['infrastructure', 'automation', 'security'],
    caseStudySlug: 'patching-10k-servers',
  },
  {
    slug: 'nat-with-p4',
    title: "NAT in the Modern Firewall: A P4 Programmer's Field Notes",
    date: '2025-11-20',
    readTime: 12,
    excerpt:
      'Technical deep-dive on programmable network address translation from the ONR capstone. P4 as of 2022 was known by ~500 engineers globally. Here is what it looks like from the inside.',
    topics: ['cyber', 'networking', 'ONR'],
    caseStudySlug: 'nat-with-p4',
  },
  {
    slug: 'layer-1-humility',
    title: 'Layer 1 Humility: What Splicing Fiber Taught a Bank VP',
    date: '2025-12-15',
    readTime: 8,
    excerpt:
      'The dirt → suit → dirt arc. Why I left Wells Fargo to splice fiber in North Carolina, and what five years on Layer 7 had made me forget about Layer 1.',
    topics: ['infrastructure', 'philosophy', 'career'],
    caseStudySlug: null,
  },
]

export default function TransmissionsPage() {
  return (
    <div className="space-y-12">
      <StationTitle
        number="06"
        name="TRANSMISSIONS"
        subtitle="Field notes, case studies, technical deep-dives."
      />

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {POSTS.map((post) => (
          <article key={post.slug} id={post.slug}>
            <AsciiBox title={post.title}>
              <div
                className="font-mono"
                style={{ fontSize: 'var(--text-xs)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
              >
                <p style={{ color: 'var(--color-bone-dim)', fontStyle: 'italic', lineHeight: 1.6 }}>
                  {post.excerpt}
                </p>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    paddingTop: '0.5rem',
                    borderTop: '1px solid var(--color-bone-faint)',
                  }}
                >
                  <span style={{ color: 'var(--color-bone-faint)' }}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span style={{ color: 'var(--color-bone-faint)' }}>~{post.readTime} min read</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {post.topics.map((topic) => (
                      <span
                        key={topic}
                        style={{
                          color: 'var(--color-phosphor)',
                          borderBottom: '1px solid var(--color-phosphor)',
                          paddingBottom: '0.05rem',
                        }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {post.caseStudySlug && (
                    <a
                      href={`/arsenal/${post.caseStudySlug}`}
                      style={{
                        color: 'var(--color-phosphor)',
                        textDecoration: 'none',
                        border: '1px solid var(--color-phosphor)',
                        padding: '0.15rem 0.5rem',
                      }}
                    >
                      Read Case Study →
                    </a>
                  )}
                </div>
              </div>
            </AsciiBox>
          </article>
        ))}
      </section>

      <div
        className="font-mono"
        style={{
          fontSize: 'var(--text-xs)',
          color: 'var(--color-bone-faint)',
          borderTop: '1px solid var(--color-bone-faint)',
          paddingTop: '1rem',
        }}
      >
        Full articles in progress. Subscribe at{' '}
        <a href="mailto:samuel.c.kelley@proton.me" style={{ color: 'var(--color-phosphor)' }}>
          samuel.c.kelley@proton.me
        </a>{' '}
        for notifications.
      </div>
    </div>
  )
}

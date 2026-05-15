import type { Metadata } from 'next'
import Link from 'next/link'
import { StationTitle } from '@/components/typography/StationTitle'
import { AsciiBox } from '@/components/typography/AsciiBox'
import { getAllTransmissions } from '@/lib/mdx'
import { COPY } from '@/lib/copy'

export const metadata: Metadata = {
  title: 'Transmissions',
  description: COPY.pages.transmissions.subtitle,
}

export default function TransmissionsPage() {
  const posts = getAllTransmissions()

  return (
    <div className="space-y-12">
      <StationTitle
        number="06"
        name="TRANSMISSIONS"
        subtitle={COPY.pages.transmissions.subtitle}
      />

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {posts.length === 0 ? (
          <p
            className="font-mono"
            style={{ fontSize: 'var(--text-sm)', color: 'var(--color-bone-dim)' }}
          >
            {COPY.pages.transmissions.empty}
          </p>
        ) : (
          posts.map((post) => (
            <article key={post.slug} id={post.slug}>
              <AsciiBox title={post.title}>
                <div
                  className="font-mono"
                  style={{
                    fontSize: 'var(--text-xs)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <p
                    style={{
                      color: 'var(--color-bone-dim)',
                      fontStyle: 'italic',
                      lineHeight: 1.6,
                    }}
                  >
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
                    <span style={{ color: 'var(--color-bone-faint)' }}>
                      ~{post.readTime} {COPY.pages.transmissions.minRead}
                    </span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      alignItems: 'center',
                    }}
                  >
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

                    <Link
                      href={`/transmissions/${post.slug}`}
                      style={{
                        color: 'var(--color-phosphor)',
                        textDecoration: 'none',
                        border: '1px solid var(--color-phosphor)',
                        padding: '0.15rem 0.5rem',
                      }}
                    >
                      {COPY.pages.transmissions.readMore}
                    </Link>
                  </div>
                </div>
              </AsciiBox>
            </article>
          ))
        )}
      </section>
    </div>
  )
}

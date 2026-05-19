import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getTransmission, getTransmissionSlugs } from '@/lib/mdx'
import { AsciiBox } from '@/components/typography/AsciiBox'
import { LatinMotto } from '@/components/typography/LatinMotto'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getTransmissionSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getTransmission(slug)
  if (!post) return {}
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  }
}

const mdxComponents = {
  AsciiBox,
  LatinMotto,
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2
      className="font-serif"
      style={{
        fontStyle: 'italic',
        fontSize: 'var(--text-xl)',
        color: 'var(--color-bone)',
        marginTop: '2.5rem',
        marginBottom: '0.75rem',
        lineHeight: 1.3,
      }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3
      className="font-serif"
      style={{
        fontStyle: 'italic',
        fontSize: 'var(--text-lg)',
        color: 'var(--color-bone)',
        marginTop: '2rem',
        marginBottom: '0.5rem',
        lineHeight: 1.4,
      }}
    >
      {children}
    </h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p
      className="font-mono"
      style={{
        fontSize: 'var(--text-sm)',
        color: 'var(--color-bone)',
        lineHeight: 1.8,
        marginBottom: '1.2em',
      }}
    >
      {children}
    </p>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong style={{ color: 'var(--color-bone)', fontWeight: 700 }}>{children}</strong>
  ),
  em: ({ children }: { children?: React.ReactNode }) => (
    <em style={{ color: 'var(--color-bone-dim)', fontStyle: 'italic' }}>{children}</em>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <a
      href={href}
      style={{ color: 'var(--color-phosphor)', textDecoration: 'underline' }}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul
      className="font-mono"
      style={{
        fontSize: 'var(--text-sm)',
        color: 'var(--color-bone)',
        lineHeight: 1.8,
        paddingLeft: '1.5rem',
        marginBottom: '1.2em',
        listStyleType: 'disc',
      }}
    >
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol
      className="font-mono"
      style={{
        fontSize: 'var(--text-sm)',
        color: 'var(--color-bone)',
        lineHeight: 1.8,
        paddingLeft: '1.5rem',
        marginBottom: '1.2em',
        listStyleType: 'decimal',
      }}
    >
      {children}
    </ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li style={{ marginBottom: '0.4em' }}>{children}</li>
  ),
  code: ({ children }: { children?: React.ReactNode }) => (
    <code
      style={{
        fontFamily: 'JetBrains Mono',
        fontSize: '0.85em',
        color: 'var(--color-phosphor)',
        background: 'var(--color-ink-raised)',
        padding: '0.1em 0.35em',
        borderRadius: '2px',
      }}
    >
      {children}
    </code>
  ),
  hr: () => (
    <hr
      style={{
        border: 'none',
        borderTop: '1px solid var(--color-bone-faint)',
        margin: '2.5rem 0',
      }}
    />
  ),
}

export default async function TransmissionPage({ params }: PageProps) {
  const { slug } = await params
  const post = getTransmission(slug)
  if (!post) notFound()

  const { frontmatter, content } = post

  return (
    <div style={{ maxWidth: '68ch', margin: '0 auto' }}>
      {/* Breadcrumb */}
      <div
        className="font-mono"
        style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)', marginBottom: '2rem' }}
      >
        <Link href="/transmissions" style={{ color: 'var(--color-bone-dim)' }}>
          06 TRANSMISSIONS
        </Link>
        {' '}→{' '}
        <span style={{ color: 'var(--color-phosphor)' }}>{frontmatter.slug}</span>
      </div>

      {/* Header */}
      <header style={{ marginBottom: '2.5rem' }}>
        <div
          className="font-mono"
          style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--color-phosphor)',
            letterSpacing: '0.1em',
            marginBottom: '0.75rem',
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <span>
            {new Date(frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span style={{ color: 'var(--color-bone-faint)' }}>·</span>
          <span>~{frontmatter.readTime} min read</span>
        </div>

        <h1
          className="font-serif"
          style={{
            fontStyle: 'italic',
            fontSize: 'var(--text-3xl)',
            color: 'var(--color-bone)',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}
        >
          {frontmatter.title}
        </h1>

        <p
          className="font-mono"
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--color-bone-dim)',
            lineHeight: 1.7,
            marginBottom: '1.25rem',
          }}
        >
          {frontmatter.excerpt}
        </p>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {frontmatter.topics.map((topic) => (
            <span
              key={topic}
              className="font-mono"
              style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--color-phosphor)',
                borderBottom: '1px solid var(--color-phosphor)',
                paddingBottom: '0.05rem',
              }}
            >
              {topic}
            </span>
          ))}
        </div>
      </header>

      {/* MDX body */}
      <div
        style={{
          lineHeight: 1.7,
          borderTop: '1px solid var(--color-bone-faint)',
          paddingTop: '2rem',
        }}
      >
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-bone-faint)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <Link
          href="/transmissions"
          className="font-mono"
          style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)' }}
        >
          ← All transmissions
        </Link>
        <a
          href="/comms"
          className="cta-secondary"
          style={{ fontSize: 'var(--text-xs)' }}
        >
          Open Comms Channel →
        </a>
      </div>
    </div>
  )
}

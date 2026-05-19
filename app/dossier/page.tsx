import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { StationTitle } from '@/components/typography/StationTitle'
import { AsciiBox } from '@/components/typography/AsciiBox'
import { LatinMotto } from '@/components/typography/LatinMotto'
import { MonogramSeal } from '@/components/chrome/MonogramSeal'
import { getMdxContent } from '@/lib/mdx'
import { COPY } from '@/lib/copy'
import { RESUME } from '@/content/resume/source'

export const metadata: Metadata = {
  title: 'Dossier',
  description:
    'Biography and credentials. Cloud security and infrastructure engineer, M.S. Johns Hopkins Cybersecurity.',
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
  li: ({ children }: { children?: React.ReactNode }) => (
    <li style={{ marginBottom: '0.4em' }}>{children}</li>
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

export default async function DossierPage() {
  const { content: manifestoContent } = getMdxContent('content/dossier/manifesto.mdx')

  return (
    <div className="space-y-12">
      <StationTitle
        number="02"
        name="DOSSIER"
        subtitle={COPY.pages.dossier.subtitle}
      />

      {/* Vitals panel */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
        }}
        className="dossier-grid"
      >
        {/* Left: seal and vitals */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div
            style={{
              padding: '1.5rem',
              border: '1px solid var(--color-bone-faint)',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <MonogramSeal />
          </div>

          <AsciiBox title="VITALS">
            <div
              className="font-mono"
              style={{
                fontSize: 'var(--text-xs)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {[
                { label: 'NAME',      value: 'Samuel C. Kelley' },
                { label: 'ROLE',      value: 'Cloud Security & Infrastructure Engineer', color: 'var(--color-phosphor)' },
                { label: 'LOCATION',  value: 'Charlotte, NC' },
                { label: 'ORIGIN',    value: 'Simpsonville, SC' },
                { label: 'CLEARANCE', value: 'US Citizen · Eligible', color: 'var(--color-crimson)' },
                { label: 'ALIGNMENT', value: 'God · Country · Craft' },
              ].map(({ label, value, color }) => (
                <div key={label}>
                  <span
                    style={{
                      color: 'var(--color-bone-dim)',
                      display: 'block',
                      marginBottom: '0.1rem',
                    }}
                  >
                    {label}
                  </span>
                  <span style={{ color: color ?? 'var(--color-bone)' }}>{value}</span>
                </div>
              ))}
            </div>
          </AsciiBox>

          {/* Identity tags */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              { tag: 'ENGINEER',   desc: 'Cloud Security & Infrastructure' },
              { tag: 'RESEARCHER', desc: 'ONR · JHU APL track' },
              { tag: 'OPERATOR',   desc: 'Full-stack infra, L1 to L7' },
            ].map(({ tag, desc }) => (
              <div
                key={tag}
                style={{
                  padding: '0.5rem 0.75rem',
                  border: '1px solid var(--color-phosphor)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-phosphor)',
                    fontWeight: 700,
                  }}
                >
                  {tag}
                </span>
                <span
                  className="font-mono"
                  style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)' }}
                >
                  {desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: brief manifesto summary */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <AsciiBox title="MANIFESTO">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p
                className="font-mono"
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-bone)',
                  lineHeight: 1.7,
                }}
              >
                {RESUME.summary}
              </p>
              <p
                className="font-mono"
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-bone-dim)',
                  lineHeight: 1.7,
                }}
              >
                The through-line: audacity, humility, and the willingness to own every layer of the stack.
                Has spliced fiber, soldered FPV drones, built custom PCs, designed networks from scratch,
                and secured production systems handling millions of transactions.
              </p>
            </div>
          </AsciiBox>

          {/* Three doctrines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                latin: 'Audacia et Veritas',
                en: 'Boldness and Truth',
                desc: 'Bold claims backed by receipts. Every metric defensible. The numbers are on the hero — they trace to verified sources.',
              },
              {
                latin: 'Per Aspera Ad Astra',
                en: 'Through Hardship to the Stars',
                desc: 'Built from $99 custom PCs at 13, through fiber splicing in dirt, to enterprise infrastructure securing 10,000+ servers.',
              },
              {
                latin: 'Non Sibi Sed Patriae',
                en: 'Not for Self but for Country',
                desc: 'Why Johns Hopkins. Why the APL track. Why defense-adjacent research. Why the security clearance eligibility matters.',
              },
            ].map(({ latin, en, desc }) => (
              <div
                key={latin}
                style={{ borderLeft: '2px solid var(--color-phosphor)', paddingLeft: '1rem' }}
              >
                <p
                  className="font-serif"
                  style={{
                    fontStyle: 'italic',
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-bone)',
                    marginBottom: '0.15rem',
                  }}
                >
                  {latin}
                </p>
                <p
                  className="font-mono"
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-phosphor)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {en}
                </p>
                <p
                  className="font-mono"
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-bone-dim)',
                    lineHeight: 1.6,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
              paddingTop: '1rem',
            }}
          >
            <a
              href="/samuel-kelley-resume.pdf"
              download="Samuel-Kelley-Resume.pdf"
              className="cta-primary"
              data-event="resume-download"
            >
              ↓ Download Resume (PDF)
            </a>
            <a href="/comms" className="cta-secondary">
              Open Comms Channel
            </a>
          </div>
        </div>
      </section>

      {/* Full manifesto — long-form prose */}
      <section
        style={{
          maxWidth: '68ch',
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-bone-faint)',
        }}
      >
        <MDXRemote
          source={manifestoContent}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </section>

      <style>{`
        @media (min-width: 768px) {
          .dossier-grid {
            grid-template-columns: 280px 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

import { METRICS } from '@/lib/metrics'
import { HeroCanvas } from '@/components/hero/HeroCanvas'
import { AsciiBox } from '@/components/typography/AsciiBox'
import Link from 'next/link'

const RECENT_TRANSMISSIONS = [
  {
    slug: 'patching-10k-servers',
    title: 'How I Patched 10,000 Servers Without Breaking Production',
    date: '2025-10-10',
    readTime: 10,
    topics: ['infrastructure', 'automation'],
  },
  {
    slug: 'nat-with-p4',
    title: "NAT in the Modern Firewall: A P4 Programmer's Field Notes",
    date: '2025-11-20',
    readTime: 12,
    topics: ['cyber', 'technical'],
  },
  {
    slug: 'layer-1-humility',
    title: 'Layer 1 Humility: What Splicing Fiber Taught a Bank VP',
    date: '2025-12-15',
    readTime: 8,
    topics: ['infrastructure', 'philosophy'],
  },
]

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        aria-label="Site introduction"
        style={{
          minHeight: 'calc(100svh - var(--chrome-h) - 2 * var(--space-lg))',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingBottom: 'var(--space-md)',
        }}
      >
        {/* Two-column layout: content left, constellation right */}
        <div className="hero-layout">
          {/* Left: all critical recruiter info */}
          <div>
            <h1
              className="font-serif"
              style={{ fontStyle: 'italic', fontSize: 'var(--text-hero)', lineHeight: 1, color: 'var(--color-bone)', marginBottom: '1.5rem' }}
            >
              Samuel Kelley.
            </h1>

            <p
              className="font-mono uppercase"
              style={{ fontSize: 'var(--text-lg)', letterSpacing: '0.1em', color: 'var(--color-phosphor)', marginBottom: '0.5rem' }}
            >
              Cloud Security &amp; Infrastructure Engineer.
            </p>

            <p
              className="font-mono"
              style={{ fontSize: 'var(--text-sm)', color: 'var(--color-bone-dim)', marginBottom: '0.25rem' }}
            >
              M.S. Cybersecurity, Johns Hopkins · APL track.
            </p>

            <p
              className="font-mono"
              style={{ fontSize: 'var(--text-xs)', color: 'var(--color-crimson)', fontWeight: 600, marginBottom: '2rem' }}
            >
              US Citizen · Eligible for Security Clearance.
            </p>

            {/* Marquee metrics */}
            <ul
              className="font-mono"
              style={{ listStyle: 'none', borderLeft: '2px solid rgba(255,176,0,0.35)', paddingLeft: '1rem', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: 'var(--text-sm)', color: 'var(--color-bone)' }}
            >
              <li>▸ {METRICS.wf_server_count.value} servers managed at Wells Fargo · zero unplanned downtime</li>
              <li>▸ {METRICS.wf_patch_reduction.value} patch cycle reduction via Ansible / Jenkins</li>
              <li>▸ {METRICS.wf_ai_hours_saved.value} engineering hours saved annually with AI agents</li>
              <li>▸ ONR research · P4 programming for next-gen NAT</li>
            </ul>

            {/* Primary CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <a
                href="/samuel-kelley-resume.pdf"
                download="Samuel-Kelley-Resume.pdf"
                className="cta-primary"
                data-event="resume-download"
              >
                ↓ Download Resume (PDF)
              </a>
              <a href="https://github.com/sammysprinkler" className="cta-secondary" rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
              <a href="https://linkedin.com/in/samuel-kelley-73256b1b7" className="cta-secondary" rel="noopener noreferrer" target="_blank">
                LinkedIn
              </a>
            </div>

            {/* Email */}
            <p className="font-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)', marginBottom: '2rem' }}>
              <a href="mailto:samuel.c.kelley@proton.me" className="hover-text-phosphor" style={{ color: 'var(--color-bone-dim)' }}>
                samuel.c.kelley@proton.me
              </a>
            </p>

            {/* Latin mottos */}
            <p className="font-serif" style={{ fontStyle: 'italic', color: 'var(--color-bone-dim)', fontSize: 'var(--text-base)', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              <span>Audacia et Veritas.</span>
              <span>Per Aspera Ad Astra.</span>
              <span>Non Sibi Sed Patriae.</span>
            </p>
          </div>

          {/* Right: constellation — desktop only via CSS */}
          <div className="hero-canvas-col" aria-hidden="true">
            <HeroCanvas />
          </div>
        </div>

        <p
          className="font-mono"
          style={{ fontSize: 'var(--text-xs)', color: 'var(--color-phosphor)', marginTop: '3rem' }}
        >
          ╰─→ STATION 02 // DOSSIER
        </p>

        <style>{`
          .hero-layout {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hero-canvas-col {
            display: none;
          }
          @media (min-width: 1024px) {
            .hero-layout {
              grid-template-columns: 1fr minmax(0, 42%);
              align-items: center;
            }
            .hero-canvas-col {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        `}</style>
      </section>

      {/* ── MANIFEST STRIP ── */}
      <section style={{ marginBottom: '4rem' }}>
        <AsciiBox title="MANIFEST — STATION 01">
          <div className="font-mono" style={{ fontSize: 'var(--text-xs)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { label: 'CURRENT LOCATION', value: 'Charlotte, NC · 35.2271°N, 80.8431°W', color: 'var(--color-phosphor)' },
              { label: 'CURRENT FOCUS', value: 'M.S. Cybersecurity · Johns Hopkins · APL', color: 'var(--color-phosphor)' },
              { label: 'SECURITY POSTURE', value: 'US Citizen · Eligible for Security Clearance', color: 'var(--color-crimson)' },
              { label: 'IDENTITY', value: 'Cloud Security · Infrastructure · ONR Research', color: 'var(--color-bone)' },
            ].map(({ label, value, color }) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-bone-dim)' }}>{label}</span>
                <span style={{ color }}>{value}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ color: 'var(--color-bone-dim)' }}>DIRECT COMMS</span>
              <a href="mailto:samuel.c.kelley@proton.me" style={{ color: 'var(--color-phosphor)' }}>
                samuel.c.kelley@proton.me
              </a>
            </div>
          </div>
        </AsciiBox>
      </section>

      {/* ── RECENT TRANSMISSIONS ── */}
      <section style={{ marginBottom: '4rem' }}>
        <p
          className="font-mono uppercase"
          style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.12em', color: 'var(--color-bone-dim)', marginBottom: '1.5rem' }}
        >
          ◆ Recent Transmissions
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {RECENT_TRANSMISSIONS.map((post) => (
            <Link
              key={post.slug}
              href={`/transmissions#${post.slug}`}
              className="hover-border-phosphor"
              style={{ display: 'block', padding: '1rem', border: '1px solid var(--color-bone-faint)', textDecoration: 'none' }}
            >
              <p className="font-mono" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-bone)', marginBottom: '0.35rem' }}>
                {post.title}
              </p>
              <div className="font-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
                <span>~{post.readTime} min</span>
                {post.topics.map((t) => (
                  <span key={t} style={{ color: 'var(--color-phosphor)' }}>{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

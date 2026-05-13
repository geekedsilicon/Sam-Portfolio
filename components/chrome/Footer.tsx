export function Footer() {
  return (
    <footer
      className="border-t border-bone-faint bg-ink py-8 mt-16"
      style={{ fontFamily: 'JetBrains Mono' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '2rem',
            marginBottom: '2rem',
          }}
          className="footer-grid"
        >
          {/* Col 1: Mottos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <p className="font-serif" style={{ fontStyle: 'italic', color: 'var(--color-bone-dim)', fontSize: 'var(--text-xs)' }}>
              Audacia et Veritas.
            </p>
            <p className="font-serif" style={{ fontStyle: 'italic', color: 'var(--color-bone-dim)', fontSize: 'var(--text-xs)' }}>
              Per Aspera Ad Astra.
            </p>
            <p className="font-serif" style={{ fontStyle: 'italic', color: 'var(--color-bone-dim)', fontSize: 'var(--text-xs)' }}>
              Non Sibi Sed Patriae.
            </p>
            <p className="font-mono" style={{ color: 'var(--color-bone-faint)', fontSize: 'var(--text-xs)', marginTop: '0.5rem' }}>
              STATION · Samuel C. Kelley · 2026
            </p>
          </div>

          {/* Col 2: Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <p className="font-mono" style={{ color: 'var(--color-bone-dim)', fontSize: 'var(--text-xs)' }}>
              samuel.c.kelley@proton.me
            </p>
            <p className="font-mono" style={{ color: 'var(--color-bone-dim)', fontSize: 'var(--text-xs)' }}>
              +1 828-747-5412
            </p>
            <p className="font-mono" style={{ color: 'var(--color-bone-dim)', fontSize: 'var(--text-xs)' }}>
              Charlotte, NC
            </p>
          </div>

          {/* Col 3: Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <a
              href="https://github.com/sammysprinkler"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono"
              style={{ color: 'var(--color-bone-dim)', fontSize: 'var(--text-xs)' }}
            >
              github.com/sammysprinkler
            </a>
            <a
              href="https://linkedin.com/in/samuel-kelley-73256b1b7"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono"
              style={{ color: 'var(--color-bone-dim)', fontSize: 'var(--text-xs)' }}
            >
              linkedin.com/in/samuel-kelley-73256b1b7
            </a>
            <a
              href="/samuel-kelley-resume.pdf"
              download="Samuel-Kelley-Resume.pdf"
              className="font-mono"
              style={{ color: 'var(--color-bone-dim)', fontSize: 'var(--text-xs)' }}
              data-event="resume-download"
            >
              ↓ Resume (PDF)
            </a>
          </div>

          {/* Col 4: Build info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <p className="font-mono" style={{ color: 'var(--color-bone-faint)', fontSize: 'var(--text-xs)' }}>
              Built with Next.js · Tailwind · Framer Motion
            </p>
            <p className="font-mono" style={{ color: 'var(--color-bone-faint)', fontSize: 'var(--text-xs)' }}>
              Deployed on Railway
            </p>
            <a
              href="https://github.com/geekedsilicon/sam-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono"
              style={{ color: 'var(--color-bone-faint)', fontSize: 'var(--text-xs)' }}
            >
              View source →
            </a>
          </div>
        </div>

        <div
          className="font-mono"
          style={{
            borderTop: '1px solid var(--color-bone-faint)',
            paddingTop: '1rem',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-bone-faint)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
          }}
        >
          <span>🇺🇸</span>
          <span>US Citizen · Eligible for Security Clearance</span>
          <span>·</span>
          <span>Pi Kappa Alpha</span>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </footer>
  )
}

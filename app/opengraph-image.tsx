import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Samuel Kelley — Cloud Security & Infrastructure Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0908',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          fontFamily: 'monospace',
          position: 'relative',
        }}
      >
        {/* Grid dot pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at center, rgba(234,224,204,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Top: monogram + station label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', zIndex: 1 }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              border: '1px solid #FFB000',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFB000',
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            SK
          </div>
          <span style={{ color: '#5C5648', fontSize: '13px', letterSpacing: '0.1em' }}>
            STATION · samuelkelley.dev
          </span>
        </div>

        {/* Center: name + role */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 1 }}>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 400,
              color: '#EAE0CC',
              lineHeight: 1,
              fontStyle: 'italic',
            }}
          >
            Samuel Kelley.
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#FFB000',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Cloud Security &amp; Infrastructure Engineer
          </div>
          <div style={{ display: 'flex', gap: '24px', marginTop: '8px' }}>
            {['10,000+ servers', 'Zero downtime', 'M.S. JHU Cybersecurity', 'US Citizen'].map((m) => (
              <div
                key={m}
                style={{
                  fontSize: '13px',
                  color: '#A89F8C',
                  paddingLeft: '12px',
                  borderLeft: '2px solid rgba(255,176,0,0.4)',
                }}
              >
                {m}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: clearance + mottos */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', zIndex: 1 }}>
          <span style={{ fontSize: '13px', color: '#7A1F1F', fontWeight: 700, letterSpacing: '0.06em' }}>
            US CITIZEN · ELIGIBLE FOR SECURITY CLEARANCE
          </span>
          <span style={{ fontSize: '13px', color: '#5C5648', fontStyle: 'italic' }}>
            Audacia et Veritas.
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}

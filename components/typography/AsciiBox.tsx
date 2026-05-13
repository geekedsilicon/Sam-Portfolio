interface AsciiBoxProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  accent?: boolean
}

export function AsciiBox({
  title,
  subtitle,
  children,
  className = '',
  accent = false,
}: AsciiBoxProps) {
  const borderColor = accent ? 'var(--color-phosphor)' : 'var(--color-bone-faint)'

  return (
    <div
      className={className}
      style={{
        fontFamily: 'JetBrains Mono',
        border: `1px solid ${borderColor}`,
        position: 'relative',
      }}
    >
      {(title || subtitle) && (
        <div
          style={{
            padding: '0.35rem 0.75rem',
            background: 'var(--color-ink-raised)',
            borderBottom: `1px solid ${borderColor}`,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            minWidth: 0,
          }}
        >
          <span
            style={{
              color: 'var(--color-bone-faint)',
              flexShrink: 0,
              userSelect: 'none',
            }}
          >
            ╔
          </span>
          <span
            style={{
              flex: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              color: 'var(--color-phosphor)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.1em',
              fontWeight: 700,
            }}
          >
            {title}
          </span>
          <span
            style={{
              color: 'var(--color-bone-faint)',
              flexShrink: 0,
              userSelect: 'none',
            }}
          >
            ╗
          </span>
        </div>
      )}

      {subtitle && (
        <div
          style={{
            padding: '0.25rem 0.75rem',
            borderBottom: `1px solid ${borderColor}`,
            color: 'var(--color-bone-dim)',
            fontSize: 'var(--text-xs)',
          }}
        >
          {subtitle}
        </div>
      )}

      <div style={{ padding: '0.875rem 1rem' }}>{children}</div>
    </div>
  )
}

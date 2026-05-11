interface AsciiBoxProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export function AsciiBox({
  title,
  subtitle,
  children,
  className = '',
}: AsciiBoxProps) {
  const maxWidth = title ? Math.max(title.length + 4, 60) : 60

  return (
    <div className={`my-6 ${className}`} style={{ fontFamily: 'JetBrains Mono' }}>
      {/* Top border */}
      {title && (
        <div className="text-phosphor text-xs overflow-x-auto">
          ╔{'═'.repeat(maxWidth - 2)}╗
        </div>
      )}

      {/* Title and subtitle */}
      {title && (
        <div className="text-phosphor text-xs border-l-2 border-r-2 border-phosphor px-3 py-1 overflow-x-auto">
          ║ {title.padEnd(maxWidth - 4)} ║
        </div>
      )}

      {subtitle && (
        <div className="text-phosphor text-xs border-l-2 border-r-2 border-phosphor px-3 py-1 overflow-x-auto">
          ║ {subtitle.padEnd(maxWidth - 4)} ║
        </div>
      )}

      {/* Middle divider */}
      {(title || subtitle) && (
        <div className="text-bone-faint text-xs overflow-x-auto">
          ║{' '.repeat(maxWidth - 2)}║
        </div>
      )}

      {/* Content */}
      <div className="text-xs border-l-2 border-r-2 border-bone-faint px-3 py-2 text-bone">
        {children}
      </div>

      {/* Bottom border */}
      <div className="text-bone-faint text-xs overflow-x-auto">
        ╚{'═'.repeat(maxWidth - 2)}╝
      </div>
    </div>
  )
}

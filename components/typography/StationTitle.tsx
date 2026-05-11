export interface StationTitleProps {
  number: string
  name: string
  subtitle?: string
}

export function StationTitle({ number, name, subtitle }: StationTitleProps) {
  return (
    <div className="mb-8">
      <div
        className="text-2xl font-bold mb-2 tracking-widest letter-spacing"
        style={{ fontFamily: 'JetBrains Mono' }}
      >
        STATION {number} // {name}
      </div>
      {subtitle && (
        <div className="text-sm text-bone-dim" style={{ fontFamily: 'JetBrains Mono' }}>
          {subtitle}
        </div>
      )}
      <div className="border-b border-bone-faint mt-4" />
    </div>
  )
}

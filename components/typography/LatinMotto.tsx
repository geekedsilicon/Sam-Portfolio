interface LatinMottoProps {
  children: string
  translat?: string
}

const TRANSLATIONS: Record<string, string> = {
  'Audacia et Veritas': 'Audacity and Truth',
  'Per Aspera Ad Astra': 'Through Hardship to the Stars',
  'Non Sibi Sed Patriae': 'Not for Self, but for Country',
}

export function LatinMotto({ children, translat }: LatinMottoProps) {
  const translation = translat || TRANSLATIONS[children.trim()] || null

  return (
    <div className="my-4">
      <p
        className="font-serif italic text-lg text-bone tracking-tight"
        style={{ letterSpacing: '-0.01em' }}
      >
        {children}
      </p>
      {translation && (
        <p className="text-xs text-bone-dim mt-1" style={{ fontFamily: 'JetBrains Mono' }}>
          — {translation}
        </p>
      )}
    </div>
  )
}

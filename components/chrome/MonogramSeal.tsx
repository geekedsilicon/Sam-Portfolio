export function MonogramSeal() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="64"
      height="64"
      className="fill-none stroke-phosphor"
      strokeWidth="1"
    >
      {/* Outer ring */}
      <circle cx="32" cy="32" r="30" />

      {/* Text around circle (simplified as visual elements) */}
      <text
        x="32"
        y="10"
        textAnchor="middle"
        className="text-xs"
        fill="var(--color-phosphor)"
        fontFamily="JetBrains Mono"
        fontSize="6"
        letterSpacing="0.05em"
      >
        SAMUEL KELLEY
      </text>

      {/* Inner monogram: SK with fiber strand (horizontal) and signal trace (vertical to star) */}
      <g>
        {/* Horizontal fiber strand */}
        <line x1="22" y1="32" x2="42" y2="32" strokeWidth="1" />

        {/* Vertical signal trace */}
        <line x1="32" y1="40" x2="32" y2="18" strokeWidth="1" />

        {/* 4-point star at top */}
        <g>
          <line x1="32" y1="14" x2="32" y2="18" strokeWidth="1" />
          <line x1="28" y1="18" x2="32" y2="18" strokeWidth="1" />
          <line x1="36" y1="18" x2="32" y2="18" strokeWidth="1" />
          <circle cx="32" cy="16" r="1.5" />
        </g>

        {/* SK text */}
        <text
          x="32"
          y="36"
          textAnchor="middle"
          className="text-xs font-bold"
          fill="var(--color-phosphor)"
          fontFamily="JetBrains Mono"
          fontSize="8"
          letterSpacing="0.1em"
        >
          SK
        </text>
      </g>

      {/* Bottom banner */}
      <rect x="22" y="44" width="20" height="6" />
      <text
        x="32"
        y="48"
        textAnchor="middle"
        className="text-xs"
        fill="var(--color-phosphor)"
        fontFamily="JetBrains Mono"
        fontSize="5"
        letterSpacing="0.05em"
      >
        MMXXVI
      </text>
    </svg>
  )
}

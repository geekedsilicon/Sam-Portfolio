'use client'

import { useState, useEffect } from 'react'
import { UtcClock } from './UtcClock'

const MOTTOS = [
  'AUDACIA ET VERITAS',
  'PER ASPERA AD ASTRA',
  'NON SIBI SED PATRIAE',
]

export function StatusBar() {
  const [motto, setMotto] = useState(0)
  const [pulse, setPulse] = useState(false)
  const buildHash = process.env.NEXT_PUBLIC_BUILD_HASH || 'dev'

  useEffect(() => {
    const mottoInterval = setInterval(() => {
      setMotto((m) => (m + 1) % MOTTOS.length)
    }, 12000)
    return () => clearInterval(mottoInterval)
  }, [])

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulse((p) => !p)
    }, 3000)
    return () => clearInterval(pulseInterval)
  }, [])

  return (
    <div
      className="fixed top-0 inset-x-0 h-8 bg-ink border-b border-bone-faint flex items-center justify-between px-4 z-50 text-bone-dim text-xs"
      style={{ fontFamily: 'JetBrains Mono', fontSize: 'var(--text-xs)' }}
    >
      <div className="flex items-center gap-3">
        {/* Pulse indicator */}
        <span
          className={`inline-block w-1.5 h-1.5 rounded-full transition-colors ${
            pulse ? 'bg-phosphor' : 'bg-phosphor/50'
          }`}
        />
        <span className="text-phosphor font-mono font-medium">STATION-01</span>
      </div>

      <div className="flex items-center gap-3 flex-1 justify-center text-center">
        <span className="hidden sm:inline">◆</span>
        <UtcClock />
        <span className="hidden sm:inline">◆</span>
        <span className="hidden md:inline">35.2271°N 80.8431°W</span>
        <span className="hidden lg:inline">◆</span>
        <span className="hidden lg:inline">BUILD {buildHash}</span>
      </div>

      <div className="hidden xl:block text-right text-bone-dim text-xs">
        {MOTTOS[motto]}
      </div>
    </div>
  )
}

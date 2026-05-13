'use client'

import dynamic from 'next/dynamic'
import { StaticConstellationFallback } from './StaticConstellationFallback'

const ConstellationCanvas = dynamic(
  () =>
    import('./ConstellationCanvas').then((m) => m.ConstellationCanvas),
  { ssr: false, loading: () => <StaticConstellationFallback /> }
)

export function HeroCanvas() {
  return <ConstellationCanvas />
}

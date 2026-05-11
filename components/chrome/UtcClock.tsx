'use client'

import { useEffect, useState } from 'react'

export function UtcClock() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    setTime(new Date().toISOString().replace('.000Z', 'Z'))
    const interval = setInterval(() => {
      setTime(new Date().toISOString().replace('.000Z', 'Z'))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <time
      dateTime={new Date().toISOString()}
      className="tabular-nums text-xs"
    >
      {time}
    </time>
  )
}

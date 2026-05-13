'use client'

import { useEffect, useRef } from 'react'

const POINT_COUNT = 72

function fibonacciSphere(n: number, radius: number) {
  const points: number[] = []
  const phi = Math.PI * (Math.sqrt(5) - 1)
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = phi * i
    points.push(r * Math.cos(theta) * radius, y * radius, r * Math.sin(theta) * radius)
  }
  return points
}

export function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)
  const rotationRef = useRef(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animating = true

    const RADIUS = 120
    const positions = fibonacciSphere(POINT_COUNT, RADIUS)
    const pts: [number, number, number][] = []
    for (let i = 0; i < POINT_COUNT; i++) {
      pts.push([positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]])
    }

    const edges: [number, number][] = []
    const DIST_THRESHOLD = RADIUS * 0.72
    for (let i = 0; i < POINT_COUNT; i++) {
      for (let j = i + 1; j < POINT_COUNT; j++) {
        const dx = pts[i][0] - pts[j][0]
        const dy = pts[i][1] - pts[j][1]
        const dz = pts[i][2] - pts[j][2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < DIST_THRESHOLD) edges.push([i, j])
      }
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const size = Math.min(canvas.parentElement?.clientWidth ?? 400, canvas.parentElement?.clientHeight ?? 400, 500)
      canvas.width = size * dpr
      canvas.height = size * dpr
      canvas.style.width = size + 'px'
      canvas.style.height = size + 'px'
      ctx.scale(dpr, dpr)
    }

    resize()
    const ro = new ResizeObserver(resize)
    if (canvas.parentElement) ro.observe(canvas.parentElement)

    const project = (x: number, y: number, z: number, angle: number, size: number) => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      const rx = x * cos - z * sin
      const rz = x * sin + z * cos
      const fov = 320
      const scale = fov / (fov + rz + RADIUS * 1.2)
      const cx = size / 2
      const cy = size / 2
      return {
        sx: cx + rx * scale,
        sy: cy - y * scale,
        depth: rz,
        scale,
      }
    }

    let lastTime = 0
    const draw = (time: number) => {
      if (!animating) return
      if (document.hidden) {
        frameRef.current = requestAnimationFrame(draw)
        return
      }

      const delta = time - lastTime
      lastTime = time
      rotationRef.current += delta * 0.0002

      const size = parseInt(canvas.style.width) || 400
      ctx.clearRect(0, 0, size, size)

      const angle = rotationRef.current
      const projected = pts.map(([x, y, z]) => project(x, y, z, angle, size))

      // Draw edges
      for (const [a, b] of edges) {
        const pa = projected[a]
        const pb = projected[b]
        const avgDepth = (pa.depth + pb.depth) / 2
        const alpha = Math.max(0.04, Math.min(0.22, (avgDepth + RADIUS * 1.2) / (RADIUS * 2.4) * 0.22))
        ctx.beginPath()
        ctx.moveTo(pa.sx, pa.sy)
        ctx.lineTo(pb.sx, pb.sy)
        ctx.strokeStyle = `rgba(255,176,0,${alpha})`
        ctx.lineWidth = 0.8
        ctx.stroke()
      }

      // Draw points
      for (let i = 0; i < POINT_COUNT; i++) {
        const { sx, sy, depth, scale } = projected[i]
        const alpha = Math.max(0.15, Math.min(0.9, (depth + RADIUS * 1.2) / (RADIUS * 2.4) * 0.9))
        const r = Math.max(0.8, scale * 2.2)
        ctx.beginPath()
        ctx.arc(sx, sy, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,176,0,${alpha})`
        ctx.fill()
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    frameRef.current = requestAnimationFrame(draw)

    const handleVisibility = () => {
      animating = !document.hidden
      if (animating) frameRef.current = requestAnimationFrame(draw)
    }
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      animating = false
      cancelAnimationFrame(frameRef.current)
      ro.disconnect()
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      }}
    />
  )
}

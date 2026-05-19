import { describe, it, expect } from 'vitest'
import { METRICS, metric } from '@/lib/metrics'

describe('metrics registry', () => {
  it('all values are non-empty strings', () => {
    for (const [k, m] of Object.entries(METRICS)) {
      expect(m.value, `metric ${k}`).toBeTruthy()
      expect(typeof m.value).toBe('string')
    }
  })
  it('all sources are valid', () => {
    for (const m of Object.values(METRICS)) {
      expect(['verified', 'approximate', 'derived']).toContain(m.source)
    }
  })
  it('metric() retrieves by key', () => {
    expect(metric('wf_server_count').value).toBe('10,000+')
  })
})

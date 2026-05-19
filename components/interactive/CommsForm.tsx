'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const Schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(255),
  body: z.string().min(10).max(5000),
  honeypot: z.string().max(0),
})
type FormShape = z.infer<typeof Schema>

export function CommsForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors } } = useForm<FormShape>({
    resolver: zodResolver(Schema),
    defaultValues: { name: '', email: '', body: '', honeypot: '' },
  })

  async function onSubmit(data: FormShape) {
    setState('sending')
    try {
      const r = await fetch('/api/comms', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!r.ok) throw new Error('failed')
      setState('sent')
    } catch {
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div className="mt-6 border border-phosphor p-6 font-mono text-sm" style={{ borderColor: 'var(--color-phosphor)', padding: '1.5rem', marginTop: '1.5rem' }}>
        <div className="text-phosphor uppercase tracking-wider mb-2" style={{ color: 'var(--color-phosphor)' }}>TRANSMISSION RECEIVED</div>
        <div className="text-bone" style={{ color: 'var(--color-bone)' }}>Message received. I'll reply within 48 hours.</div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'JetBrains Mono', fontSize: '0.875rem' }}>
      <input type="text" {...register('honeypot')} style={{ position: 'absolute', left: '-10000px' }} aria-hidden tabIndex={-1} autoComplete="off" />
      <div>
        <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-bone-dim)', marginBottom: '0.25rem' }}>NAME</label>
        <input
          {...register('name')}
          style={{ width: '100%', background: 'var(--color-ink-raised)', border: '1px solid var(--color-bone-faint)', padding: '0.5rem 0.75rem', color: 'var(--color-bone)', outline: 'none' }}
        />
        {errors.name && <div style={{ color: 'var(--color-crimson)', fontSize: '0.7rem', marginTop: '0.25rem' }}>required</div>}
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-bone-dim)', marginBottom: '0.25rem' }}>EMAIL</label>
        <input
          type="email"
          {...register('email')}
          style={{ width: '100%', background: 'var(--color-ink-raised)', border: '1px solid var(--color-bone-faint)', padding: '0.5rem 0.75rem', color: 'var(--color-bone)', outline: 'none' }}
        />
        {errors.email && <div style={{ color: 'var(--color-crimson)', fontSize: '0.7rem', marginTop: '0.25rem' }}>invalid email</div>}
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-bone-dim)', marginBottom: '0.25rem' }}>MESSAGE</label>
        <textarea
          {...register('body')}
          rows={6}
          style={{ width: '100%', background: 'var(--color-ink-raised)', border: '1px solid var(--color-bone-faint)', padding: '0.5rem 0.75rem', color: 'var(--color-bone)', outline: 'none', resize: 'vertical' }}
        />
        {errors.body && <div style={{ color: 'var(--color-crimson)', fontSize: '0.7rem', marginTop: '0.25rem' }}>message too short</div>}
      </div>
      <button
        type="submit"
        disabled={state === 'sending'}
        className="cta-primary"
        style={{ opacity: state === 'sending' ? 0.5 : 1, cursor: state === 'sending' ? 'not-allowed' : 'pointer' }}
      >
        {state === 'sending' ? 'TRANSMITTING…' : 'SEND TRANSMISSION'}
      </button>
      {state === 'error' && (
        <div style={{ color: 'var(--color-crimson)', fontSize: '0.7rem' }}>
          Transmission failed. Please try email directly: samuel.c.kelley@proton.me
        </div>
      )}
    </form>
  )
}

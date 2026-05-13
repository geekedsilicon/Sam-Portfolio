import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  org: z.string().max(100).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  const { name, email, org, message } = parsed.data

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL || 'samuel.c.kelley@proton.me'

  // In dev or without a real key, log and return success
  if (!apiKey || apiKey === 'placeholder') {
    console.log('[COMMS] Transmission received:', { name, email, org, message: message.slice(0, 80) })
    return NextResponse.json({ ok: true })
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: 'station@samuelkelley.dev',
    to,
    reply_to: email,
    subject: `[STATION] Transmission from ${name}${org ? ` · ${org}` : ''}`,
    text: [
      `FROM: ${name} <${email}>`,
      org ? `ORG:  ${org}` : null,
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n'),
  })

  if (error) {
    console.error('[COMMS] Resend error:', error)
    return NextResponse.json({ error: 'Transmission failed' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

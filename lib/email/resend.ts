import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY ?? '')

export async function sendCommsNotification(input: {
  name: string
  email: string
  body: string
}) {
  return resend.emails.send({
    from: 'STATION 01 <comms@samuelkelley.dev>',
    to: process.env.CONTACT_TO_EMAIL ?? 'samuel.c.kelley@proton.me',
    replyTo: input.email,
    subject: `STATION 01 // transmission from ${input.name}`,
    text: [
      `from:    ${input.name} <${input.email}>`,
      `received: ${new Date().toISOString()}`,
      '',
      input.body,
      '',
      '--',
      'sent via station-01 comms',
    ].join('\n'),
  })
}

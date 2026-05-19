import { z } from 'zod'

const schema = z.object({
  DATABASE_URL: z.string().url().optional().default('postgres://localhost:5432/station'),
  RESEND_API_KEY: z.string().min(1).optional().default('re_placeholder'),
  CONTACT_TO_EMAIL: z.string().email().optional().default('samuel.c.kelley@proton.me'),
  NEXT_PUBLIC_SITE_URL: z.string().url().optional().default('http://localhost:3000'),
  RAILWAY_GIT_COMMIT_SHA: z.string().default('dev'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
})

const parsed = schema.safeParse(process.env)

if (!parsed.success) {
  console.error('❌ Invalid environment:', parsed.error.flatten().fieldErrors)
  // Don't throw in build context — just warn
}

export const env = parsed.success ? parsed.data : {
  DATABASE_URL: 'postgres://localhost:5432/station',
  RESEND_API_KEY: 're_placeholder',
  CONTACT_TO_EMAIL: 'samuel.c.kelley@proton.me',
  NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
  RAILWAY_GIT_COMMIT_SHA: 'dev',
  NODE_ENV: 'development' as const,
}

import { pgTable, serial, text, timestamp, varchar, boolean } from 'drizzle-orm/pg-core'

export const messages = pgTable('messages', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 120 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  body: text('body').notNull(),
  ipHash: varchar('ip_hash', { length: 64 }),
  userAgent: text('user_agent'),
  spam: boolean('spam').default(false).notNull(),
  receivedAt: timestamp('received_at').defaultNow().notNull(),
})

export type Message = typeof messages.$inferSelect
export type NewMessage = typeof messages.$inferInsert

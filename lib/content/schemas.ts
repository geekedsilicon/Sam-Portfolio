import { z } from 'zod'

export const ProjectFrontmatter = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  slug: z.string(),
  category: z.enum(['cloud', 'cyber', 'builds', 'creative']),
  featured: z.boolean().default(false),
  year: z.string(),
  duration: z.string(),
  role: z.string(),
  org: z.string(),
  stack: z.array(z.string()),
  oneLineHook: z.string(),
  demoUrl: z.string().url().nullable().optional(),
  repoUrl: z.string().url().nullable().optional(),
  videoUrl: z.string().url().nullable().optional(),
  diagramUrl: z.string().nullable().optional(),
  metrics: z.array(z.object({
    label: z.string().optional(),
    value: z.string().optional(),
    source: z.enum(['verified', 'approximate', 'derived']).optional(),
    k: z.string().optional(),
  })).default([]),
  status: z.enum(['complete', 'wip', 'archived']).default('complete'),
  lastUpdated: z.string().optional(),
})
export type ProjectFrontmatter = z.infer<typeof ProjectFrontmatter>

export const TransmissionFrontmatter = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.string(),
  excerpt: z.string(),
  topics: z.array(z.enum(['cyber', 'cloud', 'infra', 'hardware', 'philosophy'])),
  readTime: z.number().optional(),
  status: z.enum(['transmission', 'classified', 'archived']).default('transmission'),
})
export type TransmissionFrontmatter = z.infer<typeof TransmissionFrontmatter>

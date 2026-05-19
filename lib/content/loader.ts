import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { ProjectFrontmatter, TransmissionFrontmatter } from './schemas'
import type { z } from 'zod'

const ROOT = path.resolve(process.cwd(), 'content')

async function readMdx<T extends z.ZodTypeAny>(
  rel: string,
  schema: T,
): Promise<{ fm: z.infer<T>; body: string }> {
  const raw = await fs.readFile(path.join(ROOT, rel), 'utf8')
  const { data, content } = matter(raw)
  const fm = schema.parse(data)
  return { fm, body: content }
}

async function listMdx(dir: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(path.join(ROOT, dir))
    return entries.filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
  } catch {
    return []
  }
}

export async function getAllProjects() {
  const files = await listMdx('arsenal')
  const all = await Promise.all(
    files.map((f) => readMdx(`arsenal/${f}`, ProjectFrontmatter)),
  )
  return all.sort((a, b) => Number(b.fm.featured) - Number(a.fm.featured))
}

export async function getProject(slug: string) {
  const files = await listMdx('arsenal')
  const match = files.find((f) => f.startsWith(slug))
  if (!match) return null
  return readMdx(`arsenal/${match}`, ProjectFrontmatter)
}

export async function getAllTransmissions() {
  const files = await listMdx('transmissions')
  const all = await Promise.all(
    files.map((f) => readMdx(`transmissions/${f}`, TransmissionFrontmatter)),
  )
  return all.sort((a, b) => b.fm.date.localeCompare(a.fm.date))
}

export async function getTransmission(slug: string) {
  const files = await listMdx('transmissions')
  const match = files.find((f) => f.startsWith(slug))
  if (!match) return null
  return readMdx(`transmissions/${match}`, TransmissionFrontmatter)
}

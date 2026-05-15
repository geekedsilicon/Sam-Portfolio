import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface TransmissionFrontmatter {
  title: string
  slug: string
  date: string
  excerpt: string
  topics: string[]
  readTime: number
  status: string
}

export function getMdxContent(filePath: string): {
  frontmatter: Record<string, unknown>
  content: string
} {
  const fullPath = path.join(process.cwd(), filePath)
  const raw = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(raw)
  return { frontmatter: data, content }
}

export function getTransmissionSlugs(): string[] {
  const dir = path.join(process.cwd(), 'content/transmissions')
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))
}

export function getAllTransmissions(): (TransmissionFrontmatter & { slug: string })[] {
  const slugs = getTransmissionSlugs()
  return slugs
    .map((slug) => {
      const { frontmatter } = getMdxContent(`content/transmissions/${slug}.mdx`)
      return { slug, ...(frontmatter as TransmissionFrontmatter) }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getTransmission(slug: string): {
  frontmatter: TransmissionFrontmatter
  content: string
} | null {
  const filePath = `content/transmissions/${slug}.mdx`
  const fullPath = path.join(process.cwd(), filePath)
  if (!fs.existsSync(fullPath)) return null
  const { frontmatter, content } = getMdxContent(filePath)
  return { frontmatter: frontmatter as TransmissionFrontmatter, content }
}

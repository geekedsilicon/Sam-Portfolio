import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { ProjectFrontmatter, TransmissionFrontmatter } from '../lib/content/schemas'

const ROOT = path.resolve(process.cwd(), 'content')

async function check(dir: string, schema: typeof ProjectFrontmatter | typeof TransmissionFrontmatter) {
  let files: string[] = []
  try {
    files = (await fs.readdir(path.join(ROOT, dir))).filter((f) => f.endsWith('.mdx'))
  } catch { return [] }

  const errs: string[] = []
  for (const f of files) {
    const raw = await fs.readFile(path.join(ROOT, dir, f), 'utf8')
    const { data } = matter(raw)
    const r = (schema as any).safeParse(data)
    if (!r.success) {
      errs.push(`${dir}/${f}: ${JSON.stringify(r.error.flatten().fieldErrors)}`)
    }
  }
  return errs
}

async function main() {
  const errs = [
    ...(await check('arsenal', ProjectFrontmatter)),
    ...(await check('transmissions', TransmissionFrontmatter)),
  ]
  if (errs.length) {
    console.error('❌ Content validation failed:')
    for (const e of errs) console.error('  -', e)
    process.exit(1)
  }
  console.log('✓ content frontmatter valid')
}

main().catch((e) => { console.error(e); process.exit(1) })

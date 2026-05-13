import type { MetadataRoute } from 'next'
import { getCaseStudySlugs } from '@/lib/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://samuelkelley.dev'
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/dossier`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/operations`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/arsenal`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/academy`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/transmissions`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/comms`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
  ]

  const caseStudyRoutes: MetadataRoute.Sitemap = getCaseStudySlugs().map((slug) => ({
    url: `${base}/arsenal/${slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...caseStudyRoutes]
}

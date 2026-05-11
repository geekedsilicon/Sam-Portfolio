import { StationTitle } from '@/components/typography/StationTitle'
import { AsciiBox } from '@/components/typography/AsciiBox'

export default function TransmissionsPage() {
  const posts = [
    {
      slug: 'layer-1-humility',
      title: 'Layer 1 Humility: What Splicing Fiber Taught a Bank VP',
      date: '2025-12-15',
      excerpt:
        'The dirt → suit → dirt arc. Why I left Wells Fargo to splice fiber in North Carolina.',
      readTime: 8,
      topics: ['infrastructure', 'philosophy'],
    },
    {
      slug: 'nat-with-p4',
      title: "NAT in the Modern Firewall: A P4 Programmer's Field Notes",
      date: '2025-11-20',
      excerpt:
        'Technical deep-dive on programmable network address translation from the ONR capstone.',
      readTime: 12,
      topics: ['cyber', 'technical'],
    },
    {
      slug: 'wells-fargo-patches',
      title: 'How I Patched 10,000 Servers Without Breaking Production',
      date: '2025-10-10',
      excerpt: 'CVE remediation at scale. Ansible + Jenkins + institutional patience.',
      readTime: 10,
      topics: ['infrastructure', 'automation'],
    },
  ]

  return (
    <div className="space-y-12">
      <StationTitle
        number="06"
        name="TRANSMISSIONS"
        subtitle="Field notes, case studies, technical deep-dives."
      />

      <section className="space-y-4">
        {posts.map((post) => (
          <AsciiBox key={post.slug} title={post.title}>
            <div className="space-y-2 text-xs">
              <p className="text-bone-dim italic">{post.excerpt}</p>
              <div className="flex justify-between pt-2 border-t border-bone-faint mt-2">
                <span className="text-bone-faint">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="text-bone-faint">~{post.readTime} min read</span>
              </div>
              <div className="flex gap-2 mt-2">
                {post.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs text-phosphor border-b border-phosphor"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </AsciiBox>
        ))}
      </section>
    </div>
  )
}

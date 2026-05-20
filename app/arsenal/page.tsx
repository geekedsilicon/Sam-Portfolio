'use client'

import { useState } from 'react'
import Link from 'next/link'
import { StationTitle } from '@/components/typography/StationTitle'

type Category = 'ALL' | 'CYBER' | 'INFRA' | 'HARDWARE' | 'CLOUD' | 'AI' | 'WEB'

const FEATURED = [
  {
    slug: 'nat-with-p4',
    category: 'CYBER' as Category,
    id: 'CYBER-01',
    title: 'NAT with P4: Programmable Packet Forwarding for Next-Gen Firewalls',
    hook: 'One of ~500 engineers globally fluent in P4 as of 2022. Defense-grade packet rewriting for ONR.',
    year: '2022',
    org: 'Office of Naval Research × USC',
    stack: ['P4', 'Wireshark', 'Linux', 'VMs', 'OSI'],
    metrics: ['28% control efficiency', '40% config reduction', '100+ vulns found'],
    repoUrl: 'https://github.com/sammysprinkler/nat-with-p4',
    featured: true,
  },
  {
    slug: 'patching-10k-servers',
    category: 'INFRA' as Category,
    id: 'INFRA-01',
    title: 'Patching 10,000 Servers Without Breaking Production',
    hook: 'Zero unplanned downtime. 50% patch cycle reduction. 70% fewer manual errors. Enterprise Ansible/Jenkins.',
    year: '2022 – 2025',
    org: 'Wells Fargo',
    stack: ['Ansible', 'Jenkins', 'Linux', 'Windows', 'Python', 'Bash'],
    metrics: ['10,000+ servers', '50% faster patching', '3,000+ hours saved'],
    repoUrl: 'https://github.com/sammysprinkler/patch-orchestration-demo',
    featured: true,
  },
  {
    slug: 'blockchain-secure-comms',
    category: 'CYBER' as Category,
    id: 'CYBER-02',
    title: 'Blockchain Secure Communications for Fort Jackson',
    hook: 'Defense-adjacent MITM-resistant messaging system. USC Senior Capstone. Scrum Master.',
    year: '2022',
    org: 'University of South Carolina',
    stack: ['Python', 'Blockchain', 'Cryptography', 'Scrum'],
    metrics: ['Fort Jackson deployment', 'MITM-resistant', 'Full whitepaper'],
    repoUrl: 'https://github.com/sammysprinkler/blockchain-secure-comms',
    featured: true,
  },
]

const INDEX_CARDS = [
  // ── HARDWARE ────────────────────────────────────────────────────────────────
  {
    slug: 'home-lab',
    category: 'HARDWARE' as Category,
    id: 'HW-01',
    title: 'Home Lab — Dell PowerEdge R610 + Synology NAS',
    hook: 'Production home lab hosting Plex, VPN, and automated photo backups. Dell PowerEdge 610 server paired with Synology NAS for a fully self-hosted environment with stable network operations and regular backups.',
    year: '2020 – present',
    stack: ['Dell PowerEdge', 'Synology DSM', 'Docker', 'ESXi', 'Plex', 'VPN'],
    repoUrl: 'https://github.com/sammysprinkler/home-lab-iac',
    demoUrl: null,
  },
  {
    slug: 'soho-network',
    category: 'HARDWARE' as Category,
    id: 'HW-02',
    title: 'Advanced SOHO Network Setup During COVID',
    hook: 'Enterprise-grade SOHO network in a remote location with no traditional internet. UniFi UDM Dream Machine Pro managing cameras, doorbell, PoE switch, and APs — with a MoFi router converting 4G to Wi-Fi. VLANs and custom route tables throughout.',
    year: '2020',
    stack: ['UniFi UDM Pro', 'VLANs', 'MoFi 4G', 'PoE', 'Access Points', 'Wireshark'],
    repoUrl: null,
    demoUrl: null,
  },
  {
    slug: 'custom-pc',
    category: 'HARDWARE' as Category,
    id: 'HW-03',
    title: 'Custom PC Build Series',
    hook: 'Series of custom PC builds from compact office setups to high-end gaming rigs with custom water cooling loops and silent builds. Hands-on from component selection through thermal tuning and system optimization.',
    year: '2013 – present',
    stack: ['Custom Water Cooling', 'Silent Builds', 'Overclocking', 'Thermal Management', 'Hardware'],
    repoUrl: null,
    demoUrl: null,
  },
  {
    slug: 'fpv-drone',
    category: 'HARDWARE' as Category,
    id: 'HW-04',
    title: 'FPV Drone Build',
    hook: 'Custom FPV drone assembled from scratch — meticulously soldered ESCs and flight controller, flashed Betaflight firmware, and tuned PID loops for aerial photography and racing. Electronic assembly meets precision software programming.',
    year: '2021',
    stack: ['Betaflight', 'ESC Soldering', 'PID Tuning', 'FPV Camera', 'Flight Controller'],
    repoUrl: null,
    demoUrl: null,
  },
  {
    slug: '3d-printing',
    category: 'HARDWARE' as Category,
    id: 'HW-05',
    title: '3D Printing and Design Exploration',
    hook: 'Comprehensive 3D printing project using a Minda Magician Max printer and Cura. Designed and printed functional items (shoe accessories, lawnmower parts) and decorative objects. Performed full printer maintenance including motor disassembly and replacement.',
    year: '2022 – present',
    stack: ['Cura', 'FDM Printing', '3D Modeling', 'CAD', 'Printer Maintenance'],
    repoUrl: null,
    demoUrl: null,
  },
  {
    slug: 'automotive-mods',
    category: 'HARDWARE' as Category,
    id: 'HW-06',
    title: 'Comprehensive Automotive Modification & Maintenance',
    hook: "Extensive modifications and maintenance across 5 vehicles: '92 Jeep YJ, 2015 Ram 1500, 2014 Scion FRS, 2021 Toyota Supra, and Yamaha MT07. Covers low-voltage electrical, soldering, welding, stereo installs, engine overhauls, and transmission/differential service.",
    year: '2015 – present',
    stack: ['Soldering', 'Welding', 'Low-Voltage Electrical', 'Stereo Installation', 'Engine Work'],
    repoUrl: null,
    demoUrl: null,
  },
  // ── INFRA ────────────────────────────────────────────────────────────────────
  {
    slug: 'business-network-sim',
    category: 'INFRA' as Category,
    id: 'INFRA-02',
    title: 'Business Network Design & Implementation Simulation',
    hook: 'Final networking course project simulating a network consultant engagement. Designed a full business network in Cisco Packet Tracer — then replicated it on enterprise hardware with APs, switches, routers, and firewalls. Developed subnet tables and route tables for the complete deployment.',
    year: '2021',
    stack: ['Cisco Packet Tracer', 'Cisco Hardware', 'Subnetting', 'Routing', 'Firewalls', 'VLANs'],
    repoUrl: null,
    demoUrl: null,
  },
  // ── CLOUD ────────────────────────────────────────────────────────────────────
  {
    slug: 'aws-labs',
    category: 'CLOUD' as Category,
    id: 'CLOUD-01',
    title: 'AWS Foundations Lab Series',
    hook: 'Six hands-on AWS labs: VPC design and EC2 deployment, S3 bucket policies, RDS cluster setup and connectivity, CloudWatch alarms with SNS notifications, and EFS file system integration with EC2. Foundation for AWS Cloud Practitioner certification.',
    year: '2023',
    stack: ['VPC', 'EC2', 'S3', 'RDS', 'CloudWatch', 'EFS', 'SNS', 'IAM', 'Elastic IP'],
    repoUrl: 'https://github.com/sammysprinkler/aws-labs',
    demoUrl: null,
  },
  {
    slug: 'cloudmate',
    category: 'CLOUD' as Category,
    id: 'CLOUD-02',
    title: 'CloudMate — Multi-Cloud Management Platform',
    hook: 'Founded and built a multi-cloud optimization SaaS. Microsoft Partner. 5M+ monthly events. 30% cost reduction.',
    year: '2024 – 2025',
    stack: ['Azure', 'AWS', 'GCP', 'Terraform', 'Python', 'React'],
    repoUrl: null,
    demoUrl: null,
  },
  // ── AI ───────────────────────────────────────────────────────────────────────
  {
    slug: 'gpt-bot-suite',
    category: 'AI' as Category,
    id: 'AI-01',
    title: 'Suite of Specialized GPT-Powered Bots',
    hook: '7 purpose-built GPT bots tailored for distinct domains: BudgetEZ (financial management), Better Call Chat (customer service), Cornell Note Organizer, Tech Executive Advisor, Agile Ally, Print Master Max, and CloudMate. Natural language understanding customized per function.',
    year: '2023 – present',
    stack: ['GPT-4', 'ChatGPT API', 'Prompt Engineering', 'Python', 'Automation'],
    repoUrl: null,
    demoUrl: null,
  },
  {
    slug: 'ai-graphic-design',
    category: 'AI' as Category,
    id: 'AI-02',
    title: 'AI-Driven Graphic Design & UI/UX Enhancement',
    hook: 'Led digital media transformation using AI tools and Canva across all social platforms. Developed a unified content scheduling strategy, maintained brand consistency, and iteratively improved UI/UX based on engagement feedback — resulting in boosted online presence.',
    year: '2023 – present',
    stack: ['AI Design Tools', 'Canva', 'UI/UX', 'Social Media Strategy', 'Brand Design'],
    repoUrl: null,
    demoUrl: null,
  },
  {
    slug: 'instagram-bot',
    category: 'AI' as Category,
    id: 'AI-03',
    title: 'Smart Instagram Follower Management Bot',
    hook: 'Python bot that automates Instagram follower management — checks mutual follows, unfollows non-reciprocal accounts, and intelligently excludes verified and major accounts. Positive reception for its customization and utility.',
    year: '2023',
    stack: ['Python', 'Instagram API', 'Automation', 'Algorithm Design'],
    repoUrl: null,
    demoUrl: null,
  },
  // ── WEB ──────────────────────────────────────────────────────────────────────
  {
    slug: 'portfolio-website',
    category: 'WEB' as Category,
    id: 'WEB-01',
    title: 'Dynamic Personal Portfolio Website',
    hook: 'The site you\'re on. Built with Next.js, Three.js, and Tailwind CSS. Interactive 3D constellation canvas, performance-optimized, fully responsive. Version-controlled on GitHub throughout iterative development.',
    year: '2023 – present',
    stack: ['Next.js', 'Three.js', 'Tailwind CSS', 'TypeScript', 'Vite', 'GitHub'],
    repoUrl: 'https://github.com/geekedsilicon/sam-portfolio',
    demoUrl: null,
  },
  {
    slug: 'cloudimpact-website',
    category: 'WEB' as Category,
    id: 'WEB-02',
    title: 'CloudImpact Solutions — Website Build',
    hook: 'Led the Webflow build for CloudImpact Solutions. Designed a modern, interactive site aligned with the company brand. Implemented SEO strategy and content that drove measurable increases in web traffic, user engagement, and stakeholder satisfaction.',
    year: '2023 – present',
    stack: ['Webflow', 'SEO', 'No-Code', 'UI/UX', 'Content Strategy'],
    repoUrl: null,
    demoUrl: null,
  },
]

const ALL_CATEGORIES: Category[] = ['ALL', 'CYBER', 'INFRA', 'HARDWARE', 'CLOUD', 'AI', 'WEB']

export default function ArsenalPage() {
  const [activeFilter, setActiveFilter] = useState<Category>('ALL')

  const filteredFeatured =
    activeFilter === 'ALL'
      ? FEATURED
      : FEATURED.filter((p) => p.category === activeFilter)

  const filteredIndex =
    activeFilter === 'ALL'
      ? INDEX_CARDS
      : INDEX_CARDS.filter((p) => p.category === activeFilter)

  return (
    <div className="space-y-12">
      <StationTitle
        number="04"
        name="ARSENAL"
        subtitle="Selected projects. Three deep-dive case studies. Seventeen projects across cyber, infra, hardware, cloud, AI, and web."
      />

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className="font-mono"
            style={{
              padding: '0.3rem 0.75rem',
              fontSize: 'var(--text-xs)',
              border: `1px solid ${activeFilter === cat ? 'var(--color-phosphor)' : 'var(--color-bone-faint)'}`,
              background: activeFilter === cat ? 'var(--color-phosphor)' : 'transparent',
              color: activeFilter === cat ? 'var(--color-ink)' : 'var(--color-bone-dim)',
              cursor: 'pointer',
              fontWeight: activeFilter === cat ? 700 : 400,
              transition: 'all 200ms',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured case studies */}
      {filteredFeatured.length > 0 && (
        <section>
          <div
            className="font-mono uppercase"
            style={{
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.12em',
              color: 'var(--color-bone-dim)',
              marginBottom: '1rem',
            }}
          >
            ◆ Case Studies — Full Deep-Dive
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredFeatured.map((proj) => (
              <FeaturedCard key={proj.slug} proj={proj} />
            ))}
          </div>
        </section>
      )}

      {/* Index cards */}
      {filteredIndex.length > 0 && (
        <section>
          <div
            className="font-mono uppercase"
            style={{
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.12em',
              color: 'var(--color-bone-dim)',
              marginBottom: '1rem',
            }}
          >
            ◆ Index
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: '0.75rem',
            }}
            className="index-grid"
          >
            {filteredIndex.map((proj) => (
              <IndexCard key={proj.slug} proj={proj} />
            ))}
          </div>
        </section>
      )}

      <style>{`
        @media (min-width: 768px) {
          .index-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .index-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </div>
  )
}

function FeaturedCard({ proj }: { proj: (typeof FEATURED)[0] }) {
  return (
    <div
      style={{
        border: '1px solid var(--color-phosphor)',
        padding: '1.25rem',
        position: 'relative',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <span
          className="font-mono"
          style={{ fontSize: 'var(--text-xs)', color: 'var(--color-phosphor)', fontWeight: 700 }}
        >
          [{proj.id}] {proj.category} · {proj.year}
        </span>
        <span
          className="font-mono"
          style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)' }}
        >
          {proj.org}
        </span>
      </div>

      {/* Title */}
      <p
        className="font-mono"
        style={{ fontSize: 'var(--text-base)', color: 'var(--color-bone)', fontWeight: 600, marginBottom: '0.5rem' }}
      >
        {proj.title}
      </p>

      {/* Hook */}
      <p
        className="font-mono"
        style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)', marginBottom: '1rem', lineHeight: 1.6 }}
      >
        {proj.hook}
      </p>

      {/* Metrics */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
        {proj.metrics.map((m) => (
          <span
            key={m}
            className="font-mono"
            style={{
              padding: '0.15rem 0.5rem',
              border: '1px solid rgba(255,176,0,0.4)',
              color: 'var(--color-phosphor)',
              fontSize: 'var(--text-xs)',
            }}
          >
            {m}
          </span>
        ))}
      </div>

      {/* Stack */}
      <p
        className="font-mono"
        style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-faint)', marginBottom: '1rem' }}
      >
        STACK: {proj.stack.join(' · ')}
      </p>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Link href={`/arsenal/${proj.slug}`} className="cta-primary" style={{ fontSize: '0.65rem', padding: '0.3rem 0.75rem' }}>
          Read Case Study →
        </Link>
        {proj.repoUrl && (
          <a
            href={proj.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary"
            style={{ fontSize: '0.65rem', padding: '0.3rem 0.75rem' }}
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  )
}

function IndexCard({ proj }: { proj: (typeof INDEX_CARDS)[0] }) {
  const hasLink = proj.repoUrl || proj.demoUrl

  return (
    <div
      style={{
        border: `1px solid ${hasLink ? 'var(--color-bone-faint)' : 'var(--color-bone-faint)'}`,
        padding: '1rem',
        opacity: hasLink ? 1 : 0.7,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.25rem' }}>
        <span
          className="font-mono"
          style={{ fontSize: 'var(--text-xs)', color: 'var(--color-phosphor)', fontWeight: 600 }}
        >
          [{proj.id}]
        </span>
        <span className="font-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-faint)' }}>
          {proj.year}
        </span>
      </div>

      <p className="font-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone)', fontWeight: 600 }}>
        {proj.title}
      </p>

      <p className="font-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-dim)', lineHeight: 1.5 }}>
        {proj.hook}
      </p>

      <p className="font-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-faint)' }}>
        {proj.stack.join(' · ')}
      </p>

      <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto', paddingTop: '0.5rem' }}>
        {proj.demoUrl && (
          <a href={proj.demoUrl} target="_blank" rel="noopener noreferrer" className="cta-secondary" style={{ fontSize: '0.6rem', padding: '0.2rem 0.5rem' }}>
            Demo
          </a>
        )}
        {proj.repoUrl && (
          <a href={proj.repoUrl} target="_blank" rel="noopener noreferrer" className="cta-secondary" style={{ fontSize: '0.6rem', padding: '0.2rem 0.5rem' }}>
            GitHub
          </a>
        )}
        {!hasLink && (
          <span className="font-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-faint)' }}>
            [ARCHIVED]
          </span>
        )}
      </div>
    </div>
  )
}

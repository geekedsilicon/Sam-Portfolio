import type { Metadata } from 'next'
import { StationTitle } from '@/components/typography/StationTitle'
import { AsciiBox } from '@/components/typography/AsciiBox'
import { METRICS } from '@/lib/metrics'

export const metadata: Metadata = {
  title: 'Operations',
  description:
    'Career history and deployments. Wells Fargo, CloudMate, DriveTime, ONR research. Cloud security and infrastructure.',
}

const DEPLOYMENTS = [
  {
    id: 'D001',
    status: 'ACTIVE' as const,
    org: 'JOHNS HOPKINS UNIVERSITY',
    title: 'M.S. Candidate, Cybersecurity · APL Track',
    location: 'Baltimore, MD',
    period: 'Jan 2026 — Dec 2027 (expected)',
    bullets: [
      'Advanced cybersecurity coursework via Whiting School of Engineering and Applied Physics Laboratory.',
      'Focus areas: network security, cryptography, and applied defense research.',
    ],
    stack: ['Cybersecurity', 'APL', 'Network Security', 'Cryptography'],
    metrics: [],
    note: null,
  },
  {
    id: 'D002',
    status: 'TERMINATED' as const,
    org: 'ITG COMMUNICATIONS',
    title: 'Outside Plant Engineer',
    location: 'Charlotte, NC',
    period: 'Dec 2025 — Jan 2026',
    bullets: [
      'Managed physical layer (L1) telecom infrastructure for NCDOT DMS/CCTV and GFiber networks.',
      'Consumer active and dark fiber network operations across the Charlotte metro.',
      'Layer 1 humility: the full-stack arc, from fiber in the dirt to cloud in the boardroom.',
    ],
    stack: ['OSP', 'ISP', 'NCDOT DMS/CCTV', 'GFiber', 'Fiber Splicing'],
    metrics: [],
    note: null,
  },
  {
    id: 'D003',
    status: 'TERMINATED' as const,
    org: 'PRINCE TELECOM LLC',
    title: 'Fiber Splicer I',
    location: 'Charlotte, NC',
    period: 'May 2025 — Dec 2025',
    bullets: [
      'Spliced fiber optic cable for enterprise and residential deployments.',
      'Maintained physical infrastructure for carrier-grade network operations.',
    ],
    stack: ['Fiber Optics', 'OSP', 'ISP'],
    metrics: [],
    note: null,
  },
  {
    id: 'D004',
    status: 'TERMINATED' as const,
    org: 'WELLS FARGO — ASSISTANT VP',
    title: 'Assistant VP, IT Infrastructure Engineer',
    location: 'Charlotte, NC',
    period: 'Oct 2023 — Feb 2025',
    bullets: [
      `Managed and secured ${METRICS.wf_server_count.value} Windows/Linux servers; executed enterprise-wide release cycles with zero unplanned downtime.`,
      `Reduced patch cycle time by ${METRICS.wf_patch_reduction.value} via Ansible/Jenkins automation; eliminated ${METRICS.wf_manual_error_reduction.value} of manual error rate.`,
      `Deployed AI agents saving ${METRICS.wf_ai_hours_saved.value} engineering hours annually through automated triage and pre-deployment validation.`,
      `Led ${METRICS.wf_team_size.value}-member Kanban squad coordinating US and India teams; accelerated project delivery by ${METRICS.wf_delivery_acceleration.value}.`,
      'Drove CVE remediation at scale, maintaining compliance across heterogeneous fleet during each quarterly release window.',
    ],
    stack: ['Ansible', 'Jenkins', 'Linux', 'Windows Server', 'Python', 'Bash', 'PowerShell', 'CVE'],
    metrics: [
      `${METRICS.wf_server_count.value} servers`,
      `${METRICS.wf_patch_reduction.value} patch cycle reduction`,
      `${METRICS.wf_ai_hours_saved.value} hours saved`,
      'Zero unplanned downtime',
    ],
    note: null,
  },
  {
    id: 'D005',
    status: 'TERMINATED' as const,
    org: 'WELLS FARGO — ENGINEER',
    title: 'IT Infrastructure Engineer',
    location: 'Charlotte, NC (remote)',
    period: 'Dec 2022 — Oct 2023',
    bullets: [
      'Onboarded to enterprise infrastructure management and patch orchestration pipelines.',
      'Contributed to Ansible playbook development for automated patch deployments.',
      'Established base automation patterns that scaled into the AVP-level pipeline.',
    ],
    stack: ['Ansible', 'Jenkins', 'Linux', 'Windows'],
    metrics: [],
    note: null,
  },
  {
    id: 'D006',
    status: 'TERMINATED' as const,
    org: 'CLOUDMATE',
    title: 'CEO & Co-Founder',
    location: 'Remote',
    period: 'Jan 2024 — Jan 2025',
    bullets: [
      `Founded multi-cloud management platform achieving Microsoft Partner status; led ${METRICS.cloudmate_team.value}-person engineering team.`,
      `Reduced client cloud costs by ${METRICS.cloudmate_cost_reduction.value} through automated resource optimization across ${METRICS.cloudmate_events.value} monthly events.`,
      'Managed sales pipeline, enterprise partnerships, and product roadmap simultaneously with Wells Fargo role.',
    ],
    stack: ['Azure', 'AWS', 'GCP', 'Terraform', 'Python', 'React', 'TypeScript'],
    metrics: [
      `${METRICS.cloudmate_events.value} monthly events`,
      `${METRICS.cloudmate_cost_reduction.value} client cost reduction`,
      'Microsoft Partner status',
    ],
    note: 'Concurrent with Wells Fargo (side venture, Jan 2024 – Jan 2025). Originally founded as CloudImpact (Sep 2023).',
  },
  {
    id: 'D007',
    status: 'TERMINATED' as const,
    org: 'DRIVETIME AUTOMOTIVE GROUP',
    title: 'Database Developer',
    location: 'Tempe, AZ (hybrid)',
    period: 'May 2022 — Nov 2022',
    bullets: [
      `Reduced data footprint by ${METRICS.drivetime_footprint.value} and improved query performance by ${METRICS.drivetime_query_speed.value} through schema optimization and indexing strategy.`,
      `Achieved ${METRICS.drivetime_ci_success.value} CI/CD deploy success rate via automated pipeline improvements.`,
      'Partnered with analytics team to eliminate redundant data across production databases.',
    ],
    stack: ['SQL Server', 'Python', 'Jenkins', 'CI/CD'],
    metrics: [
      `${METRICS.drivetime_footprint.value} footprint reduction`,
      `${METRICS.drivetime_query_speed.value} query speed gain`,
    ],
    note: null,
  },
  {
    id: 'D008',
    status: 'TERMINATED' as const,
    org: 'OFFICE OF NAVAL RESEARCH × USC',
    title: 'Undergraduate Cyber Security Research Assistant',
    location: 'Columbia, SC',
    period: 'Jan 2022 — Apr 2022',
    bullets: [
      `Implemented NAT with P4 programmable data planes; improved control efficiency by ${METRICS.onr_nat_efficiency.value} and reduced configuration time by ${METRICS.onr_config_reduction.value}.`,
      `Identified ${METRICS.onr_vulns_identified.value} critical vulnerabilities across simulated network topologies.`,
      'Contributed to research informing peer-reviewed publication on next-gen firewall architectures.',
    ],
    stack: ['P4', 'Wireshark', 'Linux', 'VMs', 'OSI Model'],
    metrics: [
      `${METRICS.onr_nat_efficiency.value} control efficiency`,
      `${METRICS.onr_config_reduction.value} config reduction`,
      `${METRICS.onr_vulns_identified.value} vulnerabilities found`,
    ],
    note: null,
  },
  {
    id: 'D009',
    status: 'ARCHIVED' as const,
    org: 'UPSTATE POOL MANAGEMENT GROUP',
    title: 'Lifeguard · Manager',
    location: 'SC',
    period: 'Mar 2015 — Sep 2020',
    bullets: [
      `Supervised ${METRICS.lifeguard_team.value}-person lifeguard team during peak pandemic operations.`,
      'Emergency response lead. Demonstrated operational leadership before corporate career.',
    ],
    stack: ['Team Leadership', 'Emergency Response'],
    metrics: [`${METRICS.lifeguard_team.value} employees supervised`],
    note: 'Included during pandemic operations (2019–2020).',
  },
]

const STATUS_COLOR = {
  ACTIVE: 'var(--color-phosphor)',
  TERMINATED: 'var(--color-bone-dim)',
  ARCHIVED: 'var(--color-bone-faint)',
}

export default function OperationsPage() {
  return (
    <div className="space-y-12">
      <StationTitle
        number="03"
        name="OPERATIONS"
        subtitle="Selected deployments. 2015 — present."
      />

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {DEPLOYMENTS.map((dep) => (
          <DeploymentCard key={dep.id} dep={dep} />
        ))}
      </section>
    </div>
  )
}

function DeploymentCard({
  dep,
}: {
  dep: (typeof DEPLOYMENTS)[0]
}) {
  const statusColor = STATUS_COLOR[dep.status]

  return (
    <AsciiBox title={`${dep.id} — STATUS: ${dep.status}`}>
      <div className="font-mono" style={{ fontSize: 'var(--text-xs)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ color: 'var(--color-phosphor)', fontWeight: 700, fontSize: 'var(--text-sm)' }}>
            {dep.org}
          </span>
          <span style={{ color: statusColor }}>● {dep.status}</span>
        </div>

        <p style={{ color: 'var(--color-bone)' }}>{dep.title}</p>
        <p style={{ color: 'var(--color-bone-dim)' }}>{dep.location} · {dep.period}</p>

        {dep.note && (
          <p style={{ color: 'var(--color-bone-faint)', fontStyle: 'italic' }}>{dep.note}</p>
        )}

        <ul style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', color: 'var(--color-bone-dim)' }}>
          {dep.bullets.map((b, i) => (
            <li key={i}>▸ {b}</li>
          ))}
        </ul>

        {dep.metrics.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
            {dep.metrics.map((m) => (
              <span
                key={m}
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
        )}

        <div style={{ marginTop: '0.5rem', color: 'var(--color-bone-faint)' }}>
          STACK: {dep.stack.join(' · ')}
        </div>
      </div>
    </AsciiBox>
  )
}

import { METRICS } from './metrics'

export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  category: string
  year: string
  duration: string
  role: string
  org: string
  stack: string[]
  hook: string
  repoUrl: string | null
  demoUrl: string | null
  diagramPath: string | null
  diagramAlt: string | null
  metrics: { label: string; value: string }[]
  sections: {
    id: string
    heading: string
    body: string[]
  }[]
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'nat-with-p4',
    title: 'NAT with P4: Programmable Packet Forwarding for Next-Gen Firewalls',
    subtitle: 'Defense-grade network address translation using a language known by ~500 engineers globally.',
    category: 'CYBER',
    year: '2022',
    duration: 'Jan 2022 – Apr 2022',
    role: 'Undergraduate Cyber Security Research Assistant',
    org: 'Office of Naval Research × University of South Carolina',
    stack: ['P4', 'Wireshark', 'Linux', 'VMs', 'OSI Model', 'Match-Action Tables'],
    hook: 'Top-500-globally niche language meets defense-grade packet rewriting.',
    repoUrl: 'https://github.com/sammysprinkler/nat-with-p4',
    demoUrl: null,
    diagramPath: '/diagrams/nat-p4-arch.svg',
    diagramAlt: 'P4 NAT architecture: ingress parser → match-action tables → egress deparser, with Wireshark capture validation at each stage.',
    metrics: [
      { label: 'NAT control efficiency improvement', value: METRICS.onr_nat_efficiency.value },
      { label: 'Configuration time reduction', value: METRICS.onr_config_reduction.value },
      { label: 'Critical vulnerabilities identified', value: METRICS.onr_vulns_identified.value },
    ],
    sections: [
      {
        id: 'problem',
        heading: 'The Problem',
        body: [
          'Traditional stateful NAT is implemented in hardware ASICs or monolithic kernel modules — neither of which can be updated without replacing physical gear or rebooting production nodes. As enterprise and defense networks evolve toward software-defined architectures, the need for programmable, updateable packet-forwarding logic becomes urgent.',
          'The ONR research tasked our team with demonstrating that P4 — a domain-specific language for programming packet-processing pipelines — could implement enterprise-grade NAT with measurable performance improvements over legacy approaches. If successful, the pattern could inform next-generation firewall designs for defense infrastructure.',
          'The catch: P4 was, as of 2022, known by approximately 500 engineers globally. There were no Stack Overflow threads, no tutorials, no senior engineers down the hall. Everything had to be built from documentation and research papers.',
        ],
      },
      {
        id: 'constraints',
        heading: 'The Constraints',
        body: [
          'Hardware: a simulated network running in a Linux VM cluster with no access to physical P4-capable ASICs (Tofino, etc.). All validation via software switches (BMv2).',
          'Time: four months, concurrent with full undergraduate coursework and other research commitments.',
          'Language fluency: P4 requires deep understanding of the OSI model through a non-conventional lens — you write programs that describe what a switch does to every packet, not what your application does with data. The mental model is inverted.',
          'Validation: every behavioral claim had to be verifiable with Wireshark packet captures. No black-box assertions.',
        ],
      },
      {
        id: 'architecture',
        heading: 'The Architecture',
        body: [
          'The P4 pipeline processes packets in three stages: (1) an ingress parser that identifies relevant header fields (IP, TCP/UDP, checksum); (2) a set of match-action tables that apply NAT translation rules to source/destination fields; and (3) an egress deparser that reconstructs the packet with modified headers before forwarding.',
          'NAT state (the translation table mapping internal to external IP:port tuples) was maintained in P4 register arrays — a mechanism that lets the data plane read and write persistent state without involving the control plane for every packet.',
          'Control plane communication (for dynamic rule insertion) used P4Runtime over gRPC. This separation of control and data plane is what makes P4-based NAT maintainable: update the rules without touching the forwarding code.',
          'All changes were validated by capturing pre- and post-NAT packet headers in Wireshark and verifying that translation was correct, checksums were valid, and no packets were dropped unexpectedly.',
        ],
      },
      {
        id: 'tradeoffs',
        heading: 'The Trade-offs',
        body: [
          'P4 over eBPF/XDP: eBPF would have given us kernel-level packet processing on any Linux host without specialized hardware. We chose P4 because the research mandate was specifically to evaluate P4\'s viability for defense-grade switches, not general-purpose Linux systems. eBPF is production-ready; P4 is where programmable ASICs are going.',
          'VM testbed over containers: containers would have been faster to spin up, but Docker\'s network namespaces abstract away some of the Ethernet-layer behavior we needed to observe. VMs give you a more accurate simulation of physical switch behavior.',
          'Match-action tables over hash-based lookups: hash-based approaches are faster for simple forwarding but cannot express the conditional logic NAT requires (connection tracking, port allocation, ICMP special cases). Match-action tables are more expressive at a modest throughput cost — acceptable for a research implementation.',
        ],
      },
      {
        id: 'results',
        heading: 'The Results',
        body: [
          `Control efficiency improvement: ${METRICS.onr_nat_efficiency.value}. Measured as reduction in control-plane interventions per 1,000 packets versus a baseline kernel-module NAT.`,
          `Configuration time reduction: ${METRICS.onr_config_reduction.value}. Time to apply a new NAT rule set dropped from a baseline reconfiguration cycle to near-instant via P4Runtime.`,
          `Critical vulnerabilities identified: ${METRICS.onr_vulns_identified.value}. The research also included a threat-modeling pass across our simulated topology, identifying vulnerabilities in NAT traversal and state-table exhaustion attacks.`,
          'The research contributed to a peer-reviewed publication examining P4\'s applicability to next-generation firewall architectures in defense network contexts.',
        ],
      },
      {
        id: 'retrospective',
        heading: "What I'd Do Differently",
        body: [
          "I would invest earlier in a formal testing harness for the P4 pipeline. We validated everything manually with Wireshark, which was necessary for understanding but doesn't scale. A framework that auto-generates test packets and asserts expected translations would have let us iterate faster and catch the checksum-corruption bug in week two instead of week five.",
          "I'd also have pushed for access to a Tofino2 ASIC earlier. The BMv2 software switch differs from hardware behavior in ways that matter for performance measurement — our throughput numbers are not comparable to hardware deployment.",
        ],
      },
    ],
  },
  {
    slug: 'patching-10k-servers',
    title: 'Patching 10,000 Servers Without Breaking Production',
    subtitle: 'An Ansible / Jenkins playbook architecture for enterprise vulnerability remediation at Wells Fargo.',
    category: 'INFRA',
    year: '2022 – 2025',
    duration: 'Dec 2022 – Feb 2025',
    role: 'Assistant VP, IT Infrastructure Engineer',
    org: 'Wells Fargo',
    stack: ['Ansible', 'Jenkins', 'Linux', 'Windows Server', 'Python', 'Bash', 'PowerShell'],
    hook: 'Zero unplanned downtime across 10,000+ servers. 50% patch cycle reduction. 70% fewer manual errors.',
    repoUrl: 'https://github.com/sammysprinkler/patch-orchestration-demo',
    demoUrl: null,
    diagramPath: '/diagrams/patch-arch.svg',
    diagramAlt: 'Patch orchestration: Jenkins triggers Ansible playbooks scoped by inventory tier, canary → batch → full-fleet rollout, with health checks and automated rollback hooks.',
    metrics: [
      { label: 'Servers managed', value: METRICS.wf_server_count.value },
      { label: 'Patch cycle reduction', value: METRICS.wf_patch_reduction.value },
      { label: 'Manual error reduction', value: METRICS.wf_manual_error_reduction.value },
      { label: 'Engineering hours saved annually', value: METRICS.wf_ai_hours_saved.value },
      { label: 'Team members led', value: METRICS.wf_team_size.value },
      { label: 'Delivery acceleration', value: METRICS.wf_delivery_acceleration.value },
    ],
    sections: [
      {
        id: 'problem',
        heading: 'The Problem',
        body: [
          'Enterprise-scale Windows and Linux fleets at financial institutions face a perpetual tension: regulators require timely CVE remediation, but unplanned downtime on production banking infrastructure is a public-trust event. At Wells Fargo, manual patch cycles were slow, inconsistent, and produced rollback events that consumed engineering hours at the expense of forward progress.',
          'The challenge was not simply "automate patching." It was: automate patching at 10,000-server scale, across a heterogeneous fleet (Windows Server 2016/2019, RHEL 7/8, Ubuntu), with compliance traceability for every CVE, across US and India time zones, without a single unplanned production outage.',
          'That last constraint — zero unplanned downtime — was non-negotiable. Production banking infrastructure carries regulatory and reputational stakes that make every release window a high-consequence operation.',
        ],
      },
      {
        id: 'constraints',
        heading: 'The Constraints',
        body: [
          `Scale: ${METRICS.wf_server_count.value} heterogeneous servers across US and India datacenters, spanning Windows and Linux, multiple generations.`,
          'Compliance: every change traceable. Every CVE evidenced with before/after scan results. Audit logs immutable.',
          'Downtime SLA: zero unplanned downtime during release windows. Banking customer-facing systems, no exceptions.',
          `Team: ${METRICS.wf_team_size.value}-person Kanban squad coordinating across US/India timezones, with daily standups at awkward overlap hours.`,
          'Tooling: must integrate with existing Jenkins-based CI/CD. No greenfield — the pipeline plugs into what exists.',
        ],
      },
      {
        id: 'architecture',
        heading: 'The Architecture',
        body: [
          'The pipeline operates in four phases per release window. Phase 1: Jenkins pulls the CVE scan report, generates a dynamic Ansible inventory scoped to affected hosts, and triggers the playbook run in a canary tier (5% of fleet). Phase 2: Ansible applies patches to the canary group, runs health checks (service availability, response time, log error rate), and waits for a green signal before proceeding.',
          'Phase 3: If canary passes, Jenkins queues the batch tier (remaining non-critical hosts) and runs the same playbook in parallel batches of configurable size. Rollback hooks fire automatically if health checks fail at any batch boundary. Phase 4: Full-fleet completion triggers a compliance report generation pass, producing evidence artifacts for audit.',
          'The AI agent layer, added in late 2024, automated the triage phase: parsing scan reports, cross-referencing against known-false-positive databases, and generating pre-deployment summaries that the on-call engineer reviewed in minutes rather than hours.',
        ],
      },
      {
        id: 'tradeoffs',
        heading: 'The Trade-offs',
        body: [
          "Ansible over Puppet or Chef: the team was fluent in Ansible's YAML, and Ansible's agentless SSH model meant no persistent agent to maintain across 10,000 nodes. Puppet's declarative model is theoretically cleaner for state convergence, but the operational overhead of agent management at this scale was unjustifiable.",
          "Jenkins over GitHub Actions: GitHub Actions would have been the modern choice, but Wells Fargo's compliance posture required the Jenkins-on-internal-network model. Every execution needed to stay within the trust boundary. GitHub Actions' managed runners were out.",
          'Canary tier at 5%: we evaluated 1%, 5%, and 10% canary tiers. At 1%, the statistical signal was too weak — we saw false negatives where a bug that affected 3% of hosts didn\'t manifest in the canary. At 10%, blast radius on a failure was too large. 5% was the sweet spot.',
          'Batch size tuning: smaller batches mean slower rollouts but smaller blast radius. We settled on batches of 200 hosts with a 15-minute health-check window between batches. This was aggressive enough to complete a full-fleet cycle within the release window, conservative enough to catch failures before they cascaded.',
        ],
      },
      {
        id: 'results',
        heading: 'The Results',
        body: [
          `Patch cycle time: reduced ${METRICS.wf_patch_reduction.value}. The old manual process took the better part of a week per release window. The automated pipeline completes in hours.`,
          `Manual errors: dropped ${METRICS.wf_manual_error_reduction.value}. Measured as rework tickets opened per release cycle. The automation eliminated the class of errors caused by inconsistent manual execution across a large team.`,
          'Unplanned downtime during my tenure: zero. Every failure was caught in canary or batch stages and rolled back before customer-facing systems were affected.',
          `AI agent layer: ${METRICS.wf_ai_hours_saved.value} engineering hours saved annually. The triage automation alone eliminated 2-3 hours per engineer per release cycle, multiplied across a 10-person team and quarterly release cadence.`,
        ],
      },
      {
        id: 'retrospective',
        heading: "What I'd Do Differently",
        body: [
          "I would invest earlier in observability for the rollout itself, not just the patched systems. We had good visibility into whether a server was healthy post-patch, but our visibility into the rollout pipeline's own health was ad hoc. A dedicated rollout dashboard — showing batch progress, error rates, and estimated completion time — would have reduced the cognitive load on the on-call engineer significantly.",
          "I'd also push for a chaos engineering practice on the rollback path. We tested rollback logic in staging, but never deliberately triggered it in production to verify the end-to-end behavior. The one time we needed it, it worked — but that was luck, not confidence.",
        ],
      },
      {
        id: 'companion',
        heading: 'Companion Repo',
        body: [
          "The Wells Fargo code is proprietary, but I've open-sourced a sanitized pattern repo that recreates the same architecture on toy infrastructure: Vagrant boxes + docker-compose, a 50-host simulated fleet, and a public Jenkins instance. The playbook structure and canary logic are identical to what ran in production.",
        ],
      },
    ],
  },
  {
    slug: 'blockchain-secure-comms',
    title: 'Blockchain Secure Communications for Fort Jackson',
    subtitle: 'MITM-resistant messaging system for military base communications. USC Senior Capstone.',
    category: 'CYBER',
    year: '2022',
    duration: 'Aug 2022 – Dec 2022',
    role: 'Scrum Master & Lead Developer',
    org: 'University of South Carolina — Senior Capstone',
    stack: ['Python', 'Blockchain', 'Cryptography', 'Scrum', 'Asymmetric Encryption'],
    hook: 'Defense-adjacent MITM-resistant messaging. Scrum Master for a 5-person capstone team. Full whitepaper.',
    repoUrl: 'https://github.com/sammysprinkler/blockchain-secure-comms',
    demoUrl: null,
    diagramPath: null,
    diagramAlt: 'Blockchain message architecture: sender signs message with private key → transaction broadcast to blockchain network → receiver verifies signature via public key ledger.',
    metrics: [
      { label: 'Deployment target', value: 'Fort Jackson, SC' },
      { label: 'Threat model', value: 'MITM-resistant' },
      { label: 'Team size', value: '5 engineers' },
    ],
    sections: [
      {
        id: 'problem',
        heading: 'The Problem',
        body: [
          'Military base communications — even non-classified operational channels — face persistent threats from man-in-the-middle attacks, message tampering, and identity spoofing. Traditional messaging infrastructure at Fort Jackson relied on centralized servers that represented single points of failure and attack.',
          'The capstone challenge: design and implement a secure communications system that eliminates the centralized trust model, ensures message integrity through cryptographic verification, and provides non-repudiation for every message sender. The system needed to be deployable in a constrained environment without requiring public cloud infrastructure.',
        ],
      },
      {
        id: 'constraints',
        heading: 'The Constraints',
        body: [
          'No centralized server: the threat model explicitly prohibits a single point of compromise. The architecture had to be inherently distributed.',
          'Non-repudiation: every message must be cryptographically attributable to its sender. No anonymous messaging.',
          'Offline capability: military environments may operate in degraded network conditions. The system must queue messages and synchronize when connectivity resumes.',
          'Team: 5-person engineering team, 16-week capstone timeline, with me serving as both Scrum Master and primary developer on the cryptographic subsystem.',
        ],
      },
      {
        id: 'architecture',
        heading: 'The Architecture',
        body: [
          'The system uses a permissioned blockchain to store message transactions. Each participant holds an asymmetric key pair. Sending a message means signing the message content with the sender\'s private key and broadcasting a transaction to the network. Every node verifies the signature against the sender\'s public key (stored on the ledger) before accepting the transaction.',
          'Message integrity is guaranteed by the blockchain\'s append-only structure and cryptographic chaining. A tampered message would invalidate its block\'s hash and every subsequent block, making tampering immediately detectable.',
          'The identity ledger — the registry of public keys to identities — is itself managed through a multi-signature governance process, preventing a single administrator from injecting a false identity.',
          'For offline operation, nodes maintain a local message queue. When connectivity to the permissioned network resumes, queued transactions are broadcast in sequence and validated by the network before being committed.',
        ],
      },
      {
        id: 'tradeoffs',
        heading: 'The Trade-offs',
        body: [
          'Permissioned vs. public blockchain: a public chain (Ethereum, etc.) would have provided more decentralization but introduced regulatory concerns about message data leaving a controlled environment. A permissioned chain gives the same cryptographic guarantees with a controlled participant set.',
          'Blockchain over PKI: a traditional PKI (certificate authority model) would have been simpler to implement. We chose blockchain because the capstone mandate required eliminating centralized trust — a CA is itself a centralized trust anchor. Blockchain distributes that trust across all nodes.',
          'Python over Go or Rust: Python was the team\'s common language. For a research prototype, development velocity mattered more than throughput. Production hardening would require a rewrite in a more performant language.',
        ],
      },
      {
        id: 'results',
        heading: 'The Results',
        body: [
          'Delivered a functional prototype demonstrating end-to-end encrypted messaging with blockchain-backed non-repudiation. All MITM attack vectors in our threat model were demonstrably mitigated.',
          'The final deliverable included a full whitepaper documenting the architecture, threat model, cryptographic choices, and performance benchmarks. The whitepaper was submitted to Fort Jackson as part of the capstone deliverable.',
          'Led 5-person team through 4 agile sprints using Scrum methodology. Delivered on schedule with all core features implemented.',
        ],
      },
      {
        id: 'retrospective',
        heading: "What I'd Do Differently",
        body: [
          "The governance model for the identity ledger was under-designed. We implemented multi-signature approval but didn't fully think through the key recovery scenario — what happens when a participant loses their private key? In a military context, the answer matters. A hardware security module (HSM) backed key custody would be the production answer, and I'd design for it from week one.",
          "I'd also scope the offline capability more carefully. We implemented it, but the edge cases around conflict resolution when two nodes both queue messages while offline and then reconnect simultaneously needed more rigorous testing than we had time for.",
        ],
      },
    ],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug)
}

export function getCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((cs) => cs.slug)
}

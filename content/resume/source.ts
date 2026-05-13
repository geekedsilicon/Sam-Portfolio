export const RESUME = {
  person: {
    name: 'Samuel Kelley',
    role: 'Cloud Security & Infrastructure Engineer',
    location: 'Charlotte, NC',
    email: 'samuel.c.kelley@proton.me',
    phone: '+1 828-747-5412',
    linkedin: 'https://linkedin.com/in/samuel-kelley-73256b1b7',
    github: 'https://github.com/sammysprinkler',
    clearance: 'US Citizen · Eligible for Security Clearance',
  },
  summary:
    'Cloud security and infrastructure engineer. Built and secured 10,000+ enterprise servers at Wells Fargo, automated patch pipelines to zero unplanned downtime, and shipped AI agents that saved 3,000+ engineering hours annually. Currently pursuing an M.S. in Cybersecurity at Johns Hopkins (Whiting / APL). US Citizen, eligible for security clearance.',
  experience: [
    {
      org: 'ITG Communications',
      title: 'Outside Plant Engineer',
      location: 'Charlotte, NC',
      start: '2025-12',
      end: '2026-01',
      bullets: [
        {
          text: 'Managed physical layer (L1) telecom infrastructure for NCDOT DMS/CCTV and GFiber networks.',
          source: 'verified' as const,
        },
        {
          text: 'Operated consumer active and dark fiber networks across the Charlotte metro area.',
          source: 'verified' as const,
        },
      ],
      stack: ['OSP', 'ISP', 'NCDOT', 'GFiber'],
    },
    {
      org: 'Prince Telecom LLC',
      title: 'Fiber Splicer I',
      location: 'Charlotte, NC',
      start: '2025-05',
      end: '2025-12',
      bullets: [
        {
          text: 'Spliced fiber optic cable for enterprise and residential deployments.',
          source: 'verified' as const,
        },
      ],
      stack: ['Fiber Optics', 'OSP'],
    },
    {
      org: 'Wells Fargo',
      title: 'Assistant VP, IT Infrastructure Engineer',
      location: 'Charlotte, NC',
      start: '2023-10',
      end: '2025-02',
      bullets: [
        {
          text: 'Managed and secured 10,000+ Windows/Linux servers; executed enterprise-wide release cycles with zero unplanned downtime.',
          source: 'verified' as const,
        },
        {
          text: 'Reduced patch cycle time by 50% via Ansible/Jenkins automation; eliminated 70% of manual error rate.',
          source: 'verified' as const,
        },
        {
          text: 'Deployed AI agents that saved 3,000+ engineering hours annually through automated triage and pre-deployment validation.',
          source: 'verified' as const,
        },
        {
          text: 'Led a 10-member Kanban squad coordinating US and India teams; accelerated project delivery by 35%.',
          source: 'verified' as const,
        },
        {
          text: 'Drove CVE remediation at scale, maintaining compliance across heterogeneous fleet during each quarterly release window.',
          source: 'verified' as const,
        },
      ],
      stack: ['Ansible', 'Jenkins', 'Linux', 'Windows', 'Python', 'Bash', 'PowerShell', 'CVE'],
    },
    {
      org: 'Wells Fargo',
      title: 'IT Infrastructure Engineer',
      location: 'Charlotte, NC (remote)',
      start: '2022-12',
      end: '2023-10',
      bullets: [
        {
          text: 'Onboarded to enterprise infrastructure management and patch orchestration pipelines.',
          source: 'verified' as const,
        },
        {
          text: 'Contributed to Ansible playbook development for automated patch deployments.',
          source: 'verified' as const,
        },
      ],
      stack: ['Ansible', 'Jenkins', 'Linux', 'Windows'],
    },
    {
      org: 'CloudMate',
      title: 'CEO & Co-Founder',
      location: 'Remote',
      start: '2024-01',
      end: '2025-01',
      note: 'Concurrent with Wells Fargo (side venture)',
      bullets: [
        {
          text: 'Founded multi-cloud management platform achieving Microsoft Partner status; led 3-person engineering team.',
          source: 'verified' as const,
        },
        {
          text: 'Reduced client cloud costs by 30% through automated resource optimization across 5M+ monthly events.',
          source: 'verified' as const,
        },
      ],
      stack: ['Azure', 'AWS', 'GCP', 'Terraform', 'Python', 'React'],
    },
    {
      org: 'DriveTime Automotive Group',
      title: 'Database Developer',
      location: 'Tempe, AZ (hybrid)',
      start: '2022-05',
      end: '2022-11',
      bullets: [
        {
          text: 'Reduced data footprint by 30% and improved query performance by 45% through schema optimization and indexing strategy.',
          source: 'verified' as const,
        },
        {
          text: 'Achieved 99.9% CI/CD deploy success rate via automated pipeline improvements.',
          source: 'approximate' as const,
        },
      ],
      stack: ['SQL Server', 'Python', 'Jenkins', 'CI/CD'],
    },
    {
      org: 'Office of Naval Research × University of South Carolina',
      title: 'Undergraduate Cyber Security Research Assistant',
      location: 'Columbia, SC',
      start: '2022-01',
      end: '2022-04',
      bullets: [
        {
          text: 'Implemented NAT with P4 programmable data planes; improved control efficiency by 28% and reduced configuration time by 40%.',
          source: 'verified' as const,
        },
        {
          text: 'Identified 100+ critical vulnerabilities across simulated network topologies.',
          source: 'approximate' as const,
        },
        {
          text: 'Contributed to research informing peer-reviewed publication on next-gen firewall architectures.',
          source: 'verified' as const,
        },
      ],
      stack: ['P4', 'Wireshark', 'Linux', 'VMs', 'OSI'],
    },
    {
      org: 'Upstate Pool Management Group',
      title: 'Lifeguard / Manager',
      location: 'SC',
      start: '2015-03',
      end: '2020-09',
      bullets: [
        {
          text: 'Supervised 6-person lifeguard team during peak pandemic operations.',
          source: 'verified' as const,
        },
      ],
      stack: ['Team Leadership'],
    },
  ],
  education: [
    {
      institution: 'Johns Hopkins University',
      degree: 'M.S. Cybersecurity',
      track: 'Whiting School of Engineering · APL Track',
      location: 'Baltimore, MD',
      start: '2026-01',
      end: '2027-12',
      status: 'in-progress' as const,
      gpa: null,
    },
    {
      institution: 'University of South Carolina',
      degree: 'B.S. Integrated Information Technology',
      track: 'College of Engineering and Computing',
      location: 'Columbia, SC',
      start: '2020-08',
      end: '2022-12',
      status: 'complete' as const,
      gpa: '3.9',
      honors: 'Magna Cum Laude',
    },
    {
      institution: 'Presbyterian College',
      degree: 'Attended (Football + Academic Scholarship)',
      track: 'Clinton, SC',
      location: 'Clinton, SC',
      start: '2019-08',
      end: '2020-05',
      status: 'transferred' as const,
      gpa: null,
    },
  ],
  certifications: [
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', status: 'active' as const },
    { name: 'AWS Cloud Essentials', issuer: 'Amazon Web Services', status: 'active' as const },
    { name: 'Microsoft Azure AI-900', issuer: 'Microsoft', status: 'active' as const },
    { name: 'Red Hat GL380', issuer: 'Red Hat', status: 'active' as const },
    { name: 'American Red Cross CPR', issuer: 'American Red Cross', status: 'active' as const },
    { name: 'American Red Cross Lifeguard', issuer: 'American Red Cross', status: 'active' as const },
    { name: 'CCNA', issuer: 'Cisco', status: 'in-progress' as const },
    { name: 'CompTIA Security+', issuer: 'CompTIA', status: 'in-progress' as const },
  ],
  skills: {
    cloud: ['AWS', 'Azure', 'GCP', 'Terraform', 'CloudFormation'],
    infra: ['Ansible', 'Jenkins', 'Linux', 'Windows Server', 'Docker', 'Kubernetes'],
    security: ['CVE Remediation', 'IAM', 'VPC', 'Wireshark', 'P4', 'SIEM'],
    languages: ['Python', 'Bash', 'PowerShell', 'SQL', 'TypeScript'],
    networking: ['TCP/IP', 'BGP', 'OSPF', 'OSI Model', 'Fiber Optics', 'NAT'],
  },
} as const

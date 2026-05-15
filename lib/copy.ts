// lib/copy.ts
// Single source of truth for every persistent UI string on the site.
// Components import from here rather than hard-coding text.
// Editorial prose (manifesto, case studies, transmissions) stays in MDX.

export const COPY = {
  // --- chrome ---
  statusBar: {
    callsign: 'STATION-01',
    locationLat: '35.2271°N',
    locationLng: '80.8431°W',
    locationCity: 'Charlotte, NC',
    mottos: [
      'AUDACIA ET VERITAS',
      'PER ASPERA AD ASTRA',
      'NON SIBI SED PATRIAE',
    ],
  },

  nav: {
    stations: [
      { num: '01', label: 'ENTRY',         path: '/' },
      { num: '02', label: 'DOSSIER',       path: '/dossier' },
      { num: '03', label: 'OPERATIONS',    path: '/operations' },
      { num: '04', label: 'ARSENAL',       path: '/arsenal' },
      { num: '05', label: 'ACADEMY',       path: '/academy' },
      { num: '06', label: 'TRANSMISSIONS', path: '/transmissions' },
      { num: '07', label: 'COMMS',         path: '/comms' },
    ],
    resumeCta: '↓ RESUME',
    resumeCtaMobile: '↓ PDF',
  },

  footer: {
    callsign: 'STATION 01 // SAMUEL KELLEY',
    motto: 'Audacia et Veritas. Per Aspera Ad Astra. Non Sibi Sed Patriae.',
    flagAlt: 'United States flag',
    builtBy: 'Built by Samuel Kelley. MMXXVI.',
    sourceLabel: 'source',
    sourceUrl: 'https://github.com/sammysprinkler/station-portfolio',
    affiliations: 'Pi Kappa Alpha · Johns Hopkins Whiting',
  },

  // --- hero ---
  hero: {
    name: 'Samuel Kelley.',
    role: 'Cloud Security & Infrastructure Engineer.',
    credential: 'M.S. Cybersecurity, Johns Hopkins · APL track.',
    clearance: 'US Citizen · Eligible for Security Clearance.',
    metricsHeading: 'Selected receipts.',
    primaryCta: '↓ Download Resume (PDF)',
    secondaryCtas: [
      { label: 'GitHub',   href: 'https://github.com/sammysprinkler' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/samuel-kelley-73256b1b7' },
    ],
    emailLabel: 'samuel.c.kelley@proton.me',
    nextStationLabel: 'STATION 02 // DOSSIER',
  },

  // --- pages ---
  pages: {
    dossier: {
      title: 'STATION 02 // DOSSIER',
      subtitle: "Who I am, what I've built, what I'm doing next.",
    },
    operations: {
      title: 'STATION 03 // OPERATIONS',
      subtitle: 'Selected deployments. 2022 — present.',
      deploymentLabel: 'DEPLOYMENT',
      statusActive: 'STATUS: ACTIVE',
      statusTerminated: 'STATUS: TERMINATED',
      statusConcurrent: 'STATUS: CONCURRENT / SIDE VENTURE',
      priorDeploymentsTitle: 'PRIOR DEPLOYMENTS',
      priorDeploymentsBody:
        'Worked nights and weekends through high school and college. ' +
        'The site of the work mattered less than the work itself.',
    },
    arsenal: {
      title: 'STATION 04 // ARSENAL',
      subtitle: 'Selected work. Featured case studies first, supporting builds below.',
      filterAll: 'ALL',
      filterCloud: 'CLOUD',
      filterCyber: 'CYBER',
      filterBuilds: 'BUILDS',
      filterCreative: 'CREATIVE / AI',
      featuredBadge: 'FEATURED CASE STUDY',
      archivedBadge: 'ARCHIVED',
      noResults: 'No projects match this filter. Try ALL.',
    },
    academy: {
      title: 'STATION 05 // ACADEMY',
      subtitle: 'Where the formal training happened.',
      certificationsTitle: 'QUALIFICATIONS',
    },
    transmissions: {
      title: 'STATION 06 // TRANSMISSIONS',
      subtitle: 'Long-form notes. Cyber, infrastructure, philosophy.',
      readMore: 'Read transmission →',
      minRead: 'min read',
      empty: 'No transmissions yet. Check back soon.',
    },
    comms: {
      title: 'STATION 07 // COMMS',
      subtitle: 'Direct channels. Encrypted preferred. Response within 24h on weekdays.',
      primaryHeading: 'PRIMARY',
      networkHeading: 'NETWORK',
      documentsHeading: 'DOCUMENTS',
      encryptedHeading: 'ENCRYPTED COMMS — PGP Key',
      formToggleOpen: 'Prefer a form?',
      formToggleClose: 'close form',
      formNameLabel: 'Name',
      formEmailLabel: 'Email',
      formBodyLabel: 'Message',
      formSubmitLabel: 'TRANSMIT',
      formSuccessHeading: 'TRANSMISSION RECEIVED.',
      formSuccessBody: 'STATION 01 will respond within 24h on weekdays.',
      formErrorGeneric: 'Transmission failed. Try again or email directly.',
      formErrorRateLimit: 'Too many transmissions from your station. Try again in an hour.',
      copyCopiedLabel: '✓ copied',
      copyEmailLabel: 'copy',
      mailtoLabel: 'mailto',
    },
  },

  // --- 404 / error states ---
  errors: {
    notFoundTitle: 'STATION NOT FOUND',
    notFoundBody:
      "You navigated to a station that doesn't exist on this network. " +
      'Either it was decommissioned, or it was never built.',
    notFoundCta: '← Return to STATION 01',
    serverErrorTitle: 'SIGNAL LOST',
    serverErrorBody:
      'STATION 01 is responding but its uplink is degraded. ' +
      'Try again, or contact comms directly.',
    serverErrorCta: 'Retry',
  },

  // --- a11y ---
  a11y: {
    skipToContent: 'Skip to main content',
    closeNav: 'Close navigation',
    openNav: 'Open navigation',
    nextStation: 'Next station',
    externalLink: '(opens in new tab)',
    resumeDownload: 'Download resume as PDF',
  },

  // --- meta ---
  meta: {
    defaultTitle: 'Samuel Kelley · Cloud Security & Infrastructure Engineer',
    defaultDescription:
      'Cloud security and infrastructure engineer. Wells Fargo AVP, ' +
      'JHU Cybersecurity M.S. candidate, US citizen, security clearance eligible. ' +
      'Audacia et Veritas.',
    defaultOgImage: '/og-default.png',
    siteName: 'STATION 01',
    twitterHandle: '@samuelckelley',
  },
} as const

export type CopyKey = keyof typeof COPY

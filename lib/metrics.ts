export const METRICS = {
  wf_server_count: {
    value: '10,000+',
    source: 'verified' as const,
    label: 'Servers managed',
  },
  wf_patch_reduction: {
    value: '50%',
    source: 'verified' as const,
    label: 'Patch cycle reduction',
  },
  wf_manual_error_reduction: {
    value: '70%',
    source: 'approximate' as const,
    label: 'Manual error reduction',
  },
  wf_ai_hours_saved: {
    value: '3,000+',
    source: 'verified' as const,
    label: 'Engineering hours saved annually',
  },
  wf_team_size: {
    value: '10',
    source: 'verified' as const,
    label: 'Kanban team members led',
  },
  wf_delivery_acceleration: {
    value: '35%',
    source: 'verified' as const,
    label: 'Project delivery acceleration',
  },
  cloudmate_events: {
    value: '5M+',
    source: 'approximate' as const,
    label: 'Monthly event volume',
  },
  cloudmate_cost_reduction: {
    value: '30%',
    source: 'verified' as const,
    label: 'Client cost reduction',
  },
  cloudmate_team: {
    value: '3',
    source: 'verified' as const,
    label: 'Engineers led',
  },
  drivetime_footprint: {
    value: '30%',
    source: 'verified' as const,
    label: 'Data footprint reduction',
  },
  drivetime_query_speed: {
    value: '45%',
    source: 'approximate' as const,
    label: 'Query speed improvement',
  },
  drivetime_ci_success: {
    value: '99.9%',
    source: 'approximate' as const,
    label: 'CI/CD deploy success rate',
  },
  onr_nat_efficiency: {
    value: '28%',
    source: 'verified' as const,
    label: 'NAT control efficiency improvement',
  },
  onr_config_reduction: {
    value: '40%',
    source: 'verified' as const,
    label: 'Configuration time reduction',
  },
  onr_vulns_identified: {
    value: '100+',
    source: 'approximate' as const,
    label: 'Critical vulnerabilities identified',
  },
  usc_gpa: {
    value: '3.9',
    source: 'verified' as const,
    label: 'GPA, Magna Cum Laude',
  },
  lifeguard_team: {
    value: '6',
    source: 'verified' as const,
    label: 'Employees supervised',
  },
} as const

export type MetricKey = keyof typeof METRICS
export type MetricSource = 'verified' | 'approximate' | 'derived'

export function metric(key: MetricKey) {
  return METRICS[key]
}

import { StationTitle } from '@/components/typography/StationTitle'
import { AsciiBox } from '@/components/typography/AsciiBox'

export default function OperationsPage() {
  return (
    <div className="space-y-12">
      <StationTitle
        number="03"
        name="OPERATIONS"
        subtitle="Selected deployments. 2022 — present."
      />

      <section className="space-y-8">
        {/* Deployment timeline signal line */}
        <div className="space-y-6">
          {/* Deployment 1 */}
          <AsciiBox title="DEPLOYMENT 001 — STATUS: ACTIVE">
            <div className="space-y-2 text-xs">
              <div className="font-bold text-phosphor">
                ITG COMMUNICATIONS / PRINCE TELECOM
              </div>
              <div>Outside Plant Engineer · Fiber Splicer I</div>
              <div className="text-bone-dim">
                Charlotte, NC · May 2025 — Jan 2026
              </div>
              <ul className="space-y-1 mt-3 text-bone-dim">
                <li>▸ Managed physical layer (L1) telecom infrastructure</li>
                <li>▸ Consumer active and dark fiber network operations</li>
                <li>▸ Layer 1 humility after five years on Layer 7</li>
              </ul>
              <div className="mt-3 text-xs text-bone-faint">
                STACK: OSP · ISP · NCDOT DMS/CCTV · GFiber
              </div>
            </div>
          </AsciiBox>

          {/* Deployment 2 */}
          <AsciiBox title="DEPLOYMENT 002 — STATUS: ACTIVE">
            <div className="space-y-2 text-xs">
              <div className="font-bold text-phosphor">
                JOHNS HOPKINS UNIVERSITY
              </div>
              <div>M.S. Candidate, Cybersecurity · APL Track</div>
              <div className="text-bone-dim">
                Baltimore, MD · Aug 2025 — Present
              </div>
              <ul className="space-y-1 mt-3 text-bone-dim">
                <li>▸ Advanced cybersecurity coursework and research</li>
                <li>▸ Applied Physics Laboratory partnership</li>
                <li>▸ Thesis focus: TBD</li>
              </ul>
            </div>
          </AsciiBox>

          {/* Deployment 3 */}
          <AsciiBox title="DEPLOYMENT 003 — STATUS: TERMINATED">
            <div className="space-y-2 text-xs">
              <div className="font-bold text-phosphor">WELLS FARGO</div>
              <div>
                Assistant VP, IT Infrastructure Engineer · 10,000+ Servers
              </div>
              <div className="text-bone-dim">
                Charlotte, NC · Dec 2022 — Feb 2025
              </div>
              <ul className="space-y-1 mt-3 text-bone-dim">
                <li>▸ Managed enterprise infrastructure at scale</li>
                <li>▸ CVE remediation and patch automation</li>
                <li>▸ Zero unplanned downtime in primary data center</li>
                <li>▸ Ansible/Jenkins orchestration for 10K+ servers</li>
              </ul>
            </div>
          </AsciiBox>
        </div>
      </section>
    </div>
  )
}

import { StationTitle } from '@/components/typography/StationTitle'
import { AsciiBox } from '@/components/typography/AsciiBox'

export default function ArsenalPage() {
  return (
    <div className="space-y-12">
      <StationTitle
        number="04"
        name="ARSENAL"
        subtitle="Selected projects and deployments. 2020 — present."
      />

      <section className="space-y-4">
        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap">
          {['ALL', 'CLOUD', 'CYBER', 'HARDWARE', 'CREATIVE'].map((filter) => (
            <button
              key={filter}
              className="px-3 py-1 border border-phosphor text-phosphor hover:bg-phosphor hover:text-ink text-xs transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project 1 */}
        <AsciiBox title="[CYBER-01]">
          <div className="space-y-2 text-xs">
            <div className="font-bold text-phosphor">NAT with P4</div>
            <p className="italic text-bone-dim">
              Programmable, layer-agnostic network address translation
            </p>
            <div className="space-y-1 text-bone-faint mt-3">
              <div>YEAR ......... 2022</div>
              <div>STACK ....... P4 · Wireshark · VMs · OSI</div>
              <div>ROLE ........ Research Assistant</div>
            </div>
          </div>
        </AsciiBox>

        {/* Project 2 */}
        <AsciiBox title="[HARDWARE-01]">
          <div className="space-y-2 text-xs">
            <div className="font-bold text-phosphor">Home Lab (Dell + Synology)</div>
            <p className="italic text-bone-dim">
              Enterprise infrastructure on consumer hardware
            </p>
            <div className="space-y-1 text-bone-faint mt-3">
              <div>YEAR ......... 2015 — present</div>
              <div>STACK ....... ESXi · Synology · Plex · VPN</div>
              <div>ROLE ........ Architect & Operator</div>
            </div>
          </div>
        </AsciiBox>

        {/* Project 3 */}
        <AsciiBox title="[CYBER-02]">
          <div className="space-y-2 text-xs">
            <div className="font-bold text-phosphor">
              Capstone: Blockchain Secure Comms
            </div>
            <p className="italic text-bone-dim">
              Cryptographically secure messaging system
            </p>
            <div className="space-y-1 text-bone-faint mt-3">
              <div>YEAR ......... 2022</div>
              <div>STACK ....... Python · Cryptography · Blockchain</div>
              <div>ROLE ........ Lead Developer</div>
            </div>
          </div>
        </AsciiBox>

        {/* Project 4 */}
        <AsciiBox title="[CLOUD-01]">
          <div className="space-y-2 text-xs">
            <div className="font-bold text-phosphor">AWS Foundations Lab Series</div>
            <p className="italic text-bone-dim">
              Hands-on cloud infrastructure training
            </p>
            <div className="space-y-1 text-bone-faint mt-3">
              <div>YEAR ......... 2023</div>
              <div>STACK ....... VPC · EC2 · S3 · RDS · CloudWatch</div>
              <div>ROLE ........ Solo Learner & Builder</div>
            </div>
          </div>
        </AsciiBox>
      </section>
    </div>
  )
}

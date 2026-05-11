import { StationTitle } from '@/components/typography/StationTitle'
import { LatinMotto } from '@/components/typography/LatinMotto'
import { AsciiBox } from '@/components/typography/AsciiBox'

export default function DossierPage() {
  return (
    <div className="space-y-12">
      <StationTitle
        number="02"
        name="DOSSIER"
        subtitle="Biography and credentials"
      />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Seal and vitals */}
        <div className="space-y-6">
          <div className="p-4 border border-bone-faint">
            {/* Placeholder for seal SVG */}
            <div className="aspect-square bg-ink-raised flex items-center justify-center text-bone-dim text-xs">
              [SEAL]
            </div>
          </div>

          <AsciiBox title="VITALS" className="text-xs">
            <div className="space-y-2">
              <div>
                <span className="text-bone-dim">NAME</span>
                <br />
                <span>Samuel C. Kelley</span>
              </div>
              <div>
                <span className="text-bone-dim">CALLSIGN</span>
                <br />
                <span className="text-phosphor">STATION 01</span>
              </div>
              <div>
                <span className="text-bone-dim">ORIGIN</span>
                <br />
                <span>Simpsonville, SC</span>
              </div>
              <div>
                <span className="text-bone-dim">ALIGNMENT</span>
                <br />
                <span>God · Country · Craft</span>
              </div>
            </div>
          </AsciiBox>

          <div className="flex gap-2">
            <span className="px-3 py-2 border border-phosphor text-phosphor text-xs">
              ARTIST
            </span>
            <span className="px-3 py-2 border border-phosphor text-phosphor text-xs">
              BUILDER
            </span>
            <span className="px-3 py-2 border border-phosphor text-phosphor text-xs">
              DISRUPTER
            </span>
          </div>
        </div>

        {/* Right: Manifesto */}
        <div className="md:col-span-2 space-y-6">
          <AsciiBox title="MANIFESTO">
            <p className="space-y-3 text-sm leading-relaxed text-bone">
              <p>
                Sam Kelley is an infrastructure engineer and cybersecurity specialist
                operating across the full spectrum — from Layer 1 dark fiber in the dirt
                to Layer 7 cloud architecture in the boardroom. Current M.S. candidate in
                Cybersecurity at Johns Hopkins University, APL track. Former Assistant VP
                of IT Infrastructure at Wells Fargo, managing 10,000+ servers and CVE
                remediation at scale.
              </p>
              <p>
                The through-line: audacity, humility, and the willingness to own every
                layer of the stack. Has spliced fiber, soldered FPV drones, built custom
                PCs, designed networks from scratch, and secured production systems handling
                millions of transactions. Non Sibi Sed Patriae.
              </p>
            </p>
          </AsciiBox>

          {/* Three identities */}
          <div className="space-y-4">
            <div>
              <LatinMotto>Audacia et Veritas</LatinMotto>
              <p className="text-sm text-bone-dim">
                The Disrupter. Bold claims backed by receipts. Every stat defensible.
              </p>
            </div>

            <div>
              <LatinMotto>Per Aspera Ad Astra</LatinMotto>
              <p className="text-sm text-bone-dim">
                The Builder. Climbed from $99 PC builds at 13 to enterprise infrastructure.
              </p>
            </div>

            <div>
              <LatinMotto>Non Sibi Sed Patriae</LatinMotto>
              <p className="text-sm text-bone-dim">
                The Artist. Service-first. Why JHU. Why defense. Why this domain.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

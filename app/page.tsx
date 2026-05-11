import { LatinMotto } from '@/components/typography/LatinMotto'
import { AsciiBox } from '@/components/typography/AsciiBox'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero section */}
      <section className="min-h-screen flex flex-col justify-center items-start gap-8">
        <div>
          <h1 className="text-hero font-bold mb-4 tracking-wide text-phosphor">
            Samuel Kelley.
          </h1>
          <p className="text-xl text-bone-dim mb-8">
            Infrastructure engineer. Cyber operator. Builder of physical things.
          </p>
        </div>

        {/* Mottos */}
        <div className="space-y-2">
          <LatinMotto>Audacia et Veritas</LatinMotto>
          <LatinMotto>Per Aspera Ad Astra</LatinMotto>
          <LatinMotto>Non Sibi Sed Patriae</LatinMotto>
        </div>

        {/* Navigation hint */}
        <div className="mt-12 text-sm text-phosphor">
          ╰─→  STATION 02 // DOSSIER
        </div>
      </section>

      {/* Manifest */}
      <section className="space-y-6">
        <AsciiBox title="MANIFEST">
          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between">
              <span>CURRENT LOCATION</span>
              <span className="text-phosphor">Charlotte, NC · 35.2271°N, 80.8431°W</span>
            </div>
            <div className="flex justify-between">
              <span>CURRENT FOCUS</span>
              <span className="text-phosphor">M.S. Cybersecurity · Johns Hopkins · APL</span>
            </div>
            <div className="flex justify-between">
              <span>CURRENT POSTURE</span>
              <span className="text-crimson">Eligible for Security Clearance</span>
            </div>
            <div className="flex justify-between">
              <span>CURRENT COMMS</span>
              <span className="text-phosphor">samuel.c.kelley@proton.me</span>
            </div>
          </div>
        </AsciiBox>
      </section>

      {/* Recent transmissions placeholder */}
      <section className="space-y-4">
        <AsciiBox title="RECENT TRANSMISSIONS">
          <p className="text-sm text-bone-dim">Coming soon...</p>
        </AsciiBox>
      </section>
    </div>
  )
}

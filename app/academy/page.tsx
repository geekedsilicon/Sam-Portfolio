import { StationTitle } from '@/components/typography/StationTitle'
import { AsciiBox } from '@/components/typography/AsciiBox'

export default function AcademyPage() {
  return (
    <div className="space-y-12">
      <StationTitle
        number="05"
        name="ACADEMY"
        subtitle="Education and qualifications"
      />

      <section className="space-y-8">
        {/* Institution 1 */}
        <AsciiBox title="JOHNS HOPKINS UNIVERSITY">
          <div className="space-y-2 text-xs">
            <div className="font-bold text-phosphor">
              M.S. Cybersecurity (In Progress)
            </div>
            <div className="text-bone-dim">Whiting School of Engineering · APL Track</div>
            <div className="text-bone-faint">2025 — 2027</div>
            <ul className="space-y-1 mt-3 text-bone-dim list-disc list-inside">
              <li>Foundations of cybersecurity and applied cryptography</li>
              <li>Network security and defense mechanisms</li>
              <li>Thesis to focus on emerging threat landscapes</li>
            </ul>
          </div>
        </AsciiBox>

        {/* Institution 2 */}
        <AsciiBox title="UNIVERSITY OF SOUTH CAROLINA">
          <div className="space-y-2 text-xs">
            <div className="font-bold text-phosphor">
              B.S. Information Technology
            </div>
            <div className="text-bone-dim">College of Engineering and Computing</div>
            <div className="text-bone-faint">2020 — 2022</div>
            <ul className="space-y-1 mt-3 text-bone-dim list-disc list-inside">
              <li>Network architecture and systems design</li>
              <li>Database systems and optimization</li>
              <li>Cybersecurity fundamentals</li>
            </ul>
          </div>
        </AsciiBox>
      </section>

      {/* Certifications */}
      <section className="space-y-4">
        <div className="text-lg font-bold tracking-widest mb-4">QUALIFICATIONS</div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'AWS Cloud Practitioner',
            'Microsoft Azure AI-900',
            'Red Hat GL380',
            'AWS Cloud Essentials',
            'American Red Cross CPR',
            'American Red Cross Lifeguard',
            'CCNA (in progress)',
            'Security+',
          ].map((cert) => (
            <div
              key={cert}
              className="aspect-square border border-phosphor text-phosphor flex items-center justify-center text-xs text-center p-2 hover:bg-phosphor/10 transition-colors"
            >
              {cert}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

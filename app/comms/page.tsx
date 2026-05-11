import { StationTitle } from '@/components/typography/StationTitle'
import { AsciiBox } from '@/components/typography/AsciiBox'

export default function CommsPage() {
  return (
    <div className="space-y-12">
      <StationTitle
        number="07"
        name="COMMS"
        subtitle="Secure channel. Encrypted preferred."
      />

      <section className="space-y-8">
        {/* Direct channels */}
        <div className="space-y-4">
          <AsciiBox title="DIRECT CHANNELS">
            <div className="space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span>▸ samuel.c.kelley@proton.me</span>
                <button className="text-phosphor hover:text-phosphor-dim transition-colors">
                  [copy]
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span>▸ +1 828-747-5412</span>
                <button className="text-phosphor hover:text-phosphor-dim transition-colors">
                  [copy]
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span>▸ linkedin.com/in/samkelley</span>
                <button className="text-phosphor hover:text-phosphor-dim transition-colors">
                  [open]
                </button>
              </div>
            </div>
          </AsciiBox>
        </div>

        {/* Contact form */}
        <section className="space-y-4">
          <AsciiBox title="SECURE MESSAGE FORM">
            <form className="space-y-4 text-xs">
              <div>
                <label className="block text-bone-dim mb-2">NAME</label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-ink-raised border border-bone-faint px-3 py-2 text-bone focus:border-phosphor focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-bone-dim mb-2">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-ink-raised border border-bone-faint px-3 py-2 text-bone focus:border-phosphor focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-bone-dim mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  rows={6}
                  className="w-full bg-ink-raised border border-bone-faint px-3 py-2 text-bone focus:border-phosphor focus:outline-none font-mono"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2 border border-phosphor text-phosphor hover:bg-phosphor hover:text-ink transition-colors"
              >
                TRANSMIT
              </button>
            </form>
          </AsciiBox>
        </section>

        {/* PGP section */}
        <details className="text-xs">
          <summary className="cursor-pointer text-bone-dim hover:text-bone">
            [ENCRYPTED COMMS] — PGP Public Key
          </summary>
          <div className="mt-4 p-3 bg-ink-raised border border-bone-faint font-mono text-xs overflow-x-auto">
            <pre>
              {`-----BEGIN PGP PUBLIC KEY BLOCK-----

[Your PGP key here]

-----END PGP PUBLIC KEY BLOCK-----`}
            </pre>
          </div>
        </details>
      </section>
    </div>
  )
}

export function Footer() {
  return (
    <footer
      className="border-t border-bone-faint bg-ink py-8 mt-16"
      style={{ fontFamily: 'JetBrains Mono' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Col 1: Mottos */}
          <div className="text-xs text-bone-dim">
            <p className="italic font-serif mb-2">Audacia et Veritas</p>
            <p className="italic font-serif mb-4">Per Aspera Ad Astra</p>
            <p className="italic font-serif">Non Sibi Sed Patriae</p>
          </div>

          {/* Col 2: Contact */}
          <div className="text-xs text-bone-dim">
            <p>samuel.c.kelley@proton.me</p>
            <p>+1 828-747-5412</p>
            <p>Charlotte, NC</p>
          </div>

          {/* Col 3: Build info */}
          <div className="text-xs text-bone-dim text-right">
            <p>STATION © 2026</p>
            <p>Built with Next.js · Tailwind · Framer Motion</p>
          </div>
        </div>

        <div className="border-t border-bone-faint pt-4 text-xs text-bone-faint text-center flex items-center justify-center gap-2">
          <span>🇺🇸</span>
          <span>Eligible for Security Clearance</span>
        </div>
      </div>
    </footer>
  )
}

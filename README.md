# STATION 01 — Personal Portfolio for Samuel Kelley

> **_STATION_** — A tactical operations terminal crossed with a U.S. Naval Academy seal. Imagine the visual language of a declassified DARPA brief from 1983, redesigned in 2026 by someone who has seen Linear and Vercel but refuses to copy them.

**Codename:** STATION  
**Subject:** Samuel C. Kelley — Infrastructure Engineer, Cybersecurity Specialist, M.S. Candidate (Johns Hopkins / APL)  
**Mottos:** _Audacia et Veritas · Per Aspera Ad Astra · Non Sibi Sed Patriae_

---

## Architecture

**Framework Stack:**
- Next.js 15 (App Router)
- TypeScript 5.6+
- Tailwind CSS v4
- Framer Motion 11.x
- React Three Fiber (for hero 3D)
- Drizzle ORM
- PostgreSQL (Railway plugin)
- Resend (email delivery)

**Seven Stations (Pages):**
1. **STATION 01 // ENTRY** (`/`) — Hero, manifest, recent transmissions
2. **STATION 02 // DOSSIER** (`/dossier`) — Biography, credentials, manifesto
3. **STATION 03 // OPERATIONS** (`/operations`) — Professional deployments (history)
4. **STATION 04 // ARSENAL** (`/arsenal`) — Projects and technical work
5. **STATION 05 // ACADEMY** (`/academy`) — Education and certifications
6. **STATION 06 // TRANSMISSIONS** (`/transmissions`) — Blog / case studies (MDX)
7. **STATION 07 // COMMS** (`/comms`) — Contact form and direct channels
8. **[CLASSIFIED]** (`/terminal`) — Interactive shell easter egg

---

## Quick Start

### Development

```bash
# Install dependencies (uses pnpm)
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Start dev server (http://localhost:3000)
pnpm dev
```

### Build & Deploy

```bash
# Build locally
pnpm build

# Start production build
pnpm start

# Deploy to Railway
git push
# Railway auto-picks green commits from main and deploys
```

---

## Design System

**Brand Colors:**
- `--color-ink`: #0A0908 (base)
- `--color-bone`: #EAE0CC (body text)
- `--color-phosphor`: #FFB000 (accent)
- `--color-crimson`: #7A1F1F (alerts only)

**Fonts:**
- **Instrument Serif** (italic) — Latin mottos, accents
- **JetBrains Mono** — Body, UI, code (all weights 100–800)

**Motion Easing:**
- `--ease-station`: `cubic-bezier(0.16, 1, 0.30, 1)` — primary
- `--ease-relay`: `cubic-bezier(0.65, 0, 0.35, 1)` — sharper
- `--ease-drift`: `cubic-bezier(0.45, 0, 0.55, 1)` — gradual

**Key Visual Elements:**
- ✅ CRT scanline overlay (3% opacity, perpetual drift)
- ✅ ASCII box-drawing borders (`╔══╗`)
- ✅ Status bar with UTC clock, build hash, motto rotation
- ✅ Monogram seal SVG (favicon + nav logo)
- ✅ Latin mottos as decorative punctuation

---

## Project Structure

```
station/
├── app/
│   ├── layout.tsx                 # Root layout, chrome container
│   ├── globals.css                # Brand tokens, base styles, scanlines
│   ├── page.tsx                   # STATION 01
│   ├── dossier/page.tsx           # STATION 02
│   ├── operations/page.tsx        # STATION 03
│   ├── arsenal/page.tsx           # STATION 04
│   ├── academy/page.tsx           # STATION 05
│   ├── transmissions/page.tsx     # STATION 06
│   ├── comms/page.tsx             # STATION 07
│   ├── terminal/page.tsx          # Easter egg
│   └── api/comms/route.ts         # Contact form endpoint
│
├── components/
│   ├── chrome/                    # StatusBar, Nav, Footer, Seal
│   ├── typography/                # StationTitle, LatinMotto, AsciiBox
│   ├── hero/                      # EntryHero, ConstellationCanvas
│   ├── content/                   # DeploymentCard, ProjectCard, etc.
│   └── interactive/               # Terminal, CommsForm
│
├── content/                       # MDX files
│   ├── operations/
│   ├── arsenal/
│   ├── academy/
│   └── transmissions/
│
├── lib/
│   ├── db/                        # Drizzle schema, client
│   ├── email/                     # Resend integration
│   ├── content.ts                 # MDX loader
│   ├── utils.ts
│   └── env.ts                     # Environment validation
│
├── public/                        # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
├── railway.json
└── README.md
```

---

## Key Features

### 1. **Responsive & Dark-Mode Native**
No light theme toggle. Dark mode by design, 3% opacity scanlines, grain texture, dot grid backdrop.

### 2. **Type-Safe**
Strict TypeScript. Zod-validated env vars and form schemas. Drizzle ORM for type-safe DB queries.

### 3. **Performance**
- Code-split React Three Fiber (lazy loaded)
- Next.js Image optimization
- Lighthouse 95+ target
- Zero CLS, LCP < 2.0s

### 4. **Accessible**
- Focus rings, keyboard navigation
- Respects `prefers-reduced-motion`
- WCAG AA color contrast
- Semantic HTML

### 5. **Content Pipeline**
MDX for `/transmissions` deep-dives. Frontmatter schemas ensure consistency.

### 6. **Forms**
Contact form validates with react-hook-form + Zod, stores to Postgres, sends email via Resend, rate-limited by IP.

---

## Environment Variables

```
DATABASE_URL=                       # Railway Postgres (auto-injected)
RESEND_API_KEY=                     # From resend.com
CONTACT_TO_EMAIL=samuel.c.kelley@proton.me
NEXT_PUBLIC_SITE_URL=https://samuelkelley.dev
NEXT_PUBLIC_BUILD_HASH=dev          # Injected at build time
```

---

## Development Roadmap

**Phase 1 ✓** — Foundation (core components, brand, all static pages)
**Phase 2** — Hero animations (typewriter, 3D constellation, scroll reveals)
**Phase 3** — Content pipeline (MDX transmissions, project deep-dives)
**Phase 4** — Forms & database (contact, optional guestbook)
**Phase 5** — Terminal easter egg (full shell with commands)
**Phase 6** — OG images, analytics, polish
**Phase 7** — Deploy, domain, SEO

---

## Deployment to Railway

### One-Time Setup

1. **Create Railway project** from GitHub repo
2. **Add PostgreSQL plugin** (auto-injects `DATABASE_URL`)
3. **Set env vars:**
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `NEXT_PUBLIC_SITE_URL`

4. **Attach custom domain** (e.g., `samuelkelley.dev`)
5. **Push to main** — Railway auto-deploys on green commits

### Seeding Database

```bash
pnpm run db:migrate
```

---

## Audit Checklist (Before Launch)

- [ ] All 8 stations live and linked
- [ ] Lighthouse 95+ on all pages (mobile)
- [ ] No broken links
- [ ] Contact form tested (emails deliver)
- [ ] Terminal shell fully functional
- [ ] OG images render correctly
- [ ] Custom domain configured
- [ ] Sitemap submitted to Google Search Console
- [ ] Security headers validated
- [ ] Accessible via keyboard + screen reader

---

## Voice & Copy Guidelines

**Approved registers:**
- Active, present-tense
- Short clauses, periods over commas
- Plain English with occasional Latin
- No exclamation points, no emojis (except one flag in footer)
- Examples: "shipped," "managed," "secured," "deployed," "spliced"

**Banned phrases:**
- "passionate," "ninja," "rockstar," "synergy," "leveraging"
- "Hi, I'm Sam 👋"
- "Check out my awesome projects!"

---

## References

- **Design inspiration:** NORAD console, Naval Academy diploma, Bell Labs blueprint drawer
- **Color palette:** CRT amber phosphor on warm ink
- **Motion:** Mechanical, not bouncy (relay physics, cubic-bezier eases)
- **Typography:** Instrument Serif + JetBrains Mono, tabular numerics everywhere

---

**Built with audacity and truth. Per aspera ad astra.**

_For questions, send comms to samuel.c.kelley@proton.me._

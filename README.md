# Akul — Portfolio Dashboard

Personal portfolio site for Akul Ramesh — developer working at the intersection of AI and financial markets.

**Live:** [akul321.vercel.app](https://akul321.vercel.app)

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript strict mode
- **Styling:** Tailwind CSS with custom design tokens
- **Animation:** Framer Motion (scroll reveals, hover micro-interactions)
- **Icons:** lucide-react
- **Fonts:** Inter + JetBrains Mono via `next/font/google`
- **Deployment:** Vercel

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Akul321/portfolio)

Or:

1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

No environment variables needed.

## Project Structure

```
app/                  # Next.js App Router
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # Composes all sections
  globals.css         # Tailwind + CSS variables
components/
  sections/           # Hero, About, Skills, Projects, Certifications, Footer
  ui/                 # Badge, Button primitives
  Sidebar.tsx         # Fixed nav with active-section tracking
  MobileNav.tsx       # Top bar + hamburger drawer
  AnimatedDots.tsx    # Canvas dot grid (hero decorative element)
  SectionHeading.tsx  # Reusable H2 with eyebrow
  ProjectCard.tsx     # Project card with Live Demo + GitHub links
  CertificationCard.tsx
  SkillGroup.tsx
lib/
  data/               # Typed TS data files (projects, skills, certifications, profile)
  utils.ts            # cn() helper
public/
  og-image.png        # OG image (1200×630)
```

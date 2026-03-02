A high-fidelity **Next.js 16** personal portfolio for Gursahib Singh, following the **"Noir Editorial Zine"** aesthetic. Optimized for the official domain: **[gursahib-singh.me](https://gursahib-singh.me)**.

---

## 💎 Design Philosophy: "Noir Editorial"

The site is built with a strict aesthetic framework:
- **Palette**: Near-black (`#0a0a0a`) + Cream (`#f0ece2`) + Surgical Chartreuse (`#c8ff00`) accents.
- **Typography**: 
  - `Unbounded`: Bold display for headers and branding.
  - `Newsreader`: Elegant serif for long-form reading and descriptions.
  - `JetBrains Mono`: Technical metadata and interface "chrome".
- **Dynamic Layouts**: High-fidelity cards with banner-first presentations, custom magnetic hovers, and ambient gradient orbs.

---

## 🚀 Tech Stack

| Technology | Role |
|---|---|
| **Next.js 16** (App Router) | Core Framework — Metadata API, SSG, for deployment speed. |
| **TypeScript** | Strict type safety for data structures and components. |
| **Vanilla CSS** | ~2500-line global design system (Zero Tailwind/Modules for maximum control). |
| **Lucide React** | Professional iconography for technical signals. |
| **AI Ingestion** | Support for `llms.txt` and `ai.txt` protocols for machine-readability. |
| **GSAP & Interaction** | Advanced motion system and high-performance scroll triggers. |

---

## 🏛️ Project Architecture

```
PortfolioWeb2/
├── app/
│   ├── layout.tsx              # Font loading, ThemeProvider, anti-FOUC logic
│   ├── page.tsx                # Landing — 6 editorial sections
│   ├── globals.css             # Main design system & custom animations
│   ├── projects/
│   │   ├── page.tsx            # High-fidelity project grid
│   │   └── [slug]/page.tsx     # Detail pages with Sticky TOC & Video Walkthroughs
│   └── research/
│       ├── page.tsx            # Grant-focused research listing
│       └── [slug]/page.tsx     # Modular research detail views
│
├── components/                 # Atomic and Composite UI
│   ├── Navbar.tsx              # Sticky morphing navigation
│   ├── ProjectCard.tsx         # Editorial layout (Banner on top, Unbounded titles)
│   ├── ResearchCard.tsx        # Grant-aware card with Award status
│   ├── TableOfContents.tsx     # Sticky side-navigation for details
│   ├── CTABanner.tsx           # Magnetic CTA sections
│   └── ScrollReveal.tsx        # Cascade animation wrapper
│
├── lib/                        # Modular Data Layer
│   ├── projects.ts             # ← Main Project library
│   ├── research.ts             # ← Main Research & Grants library
│   ├── site.ts                 # Global metadata, nav, & skills
│   └── types.ts                # Shared TypeScript interfaces
│
├── public/                     # Static Assets & AI Hooks
│   ├── assets/                 # Profile and project media
│   └── ai.txt                  # Optimized instructions for AI agents
│
└── prompts/                    # Developer Experience
    ├── design.md               # Visual guidelines & brand tokens
    └── add-project.md          # Template for generating new content
```

---

## 🤖 AI & SEO Optimization (Discoverability 2.0)

This portfolio is built with an **"AI-First"** indexing strategy, making it highly discoverable by both traditional search engines and modern LLM-based chat systems.

- **Dynamic Sitemap & Robots**: Fully compliant `sitemap.xml` and `robots.txt` supporting all dynamic [slug] routes.
- **Structured Data (JSON-LD)**: Every page injects rich schemas (`Person`, `SoftwareApplication`, `Article`) to help AI models like ChatGPT and Perplexity identify identity and projects.
- **`llms.txt` Support**: Implements the emerging `llms.txt` standard — a high-density Markdown summary of the entire site optimized for LLM ingestion.
- **AI Crawler Instructions**: Explicitly allows and welcomes AI agents via `ai.txt` and optimized crawler rules.
- **Local SEO Dominance**: Metadata and schema are optimized to prioritize rankings for local AI developer keywords in Kamloops and British Columbia.

---

## 🛠️ Content Management

The site uses a modular data structure to make updates effortless.

### Adding a New Project / Research Item
1.  Navigate to `lib/projects.ts` or `lib/research.ts`.
2.  Add a new entry following the `Project` or `Research` interfaces.
3.  Set `hasDetail: true` to automatically generate a high-fidelity detail page.
4.  Add banner images to `public/assets/images/`.

### Theming
The site includes a refined **Dark/Light** toggle. The Light theme swaps the Noir aesthetic for a "Brutalist Paper" look, maintaining high contrast and accessibility for all readers.

---

## 🏁 Getting Started

```bash
npm install
npm run dev        # Run with standard Next.js dev server
npm run build      # Static site generation (SSG) for all routes
npx vercel         # Production deployment
```

Built with **intention** ◆ Kamloops, BC

# Add a New Research — Prompt Template

Use this template to add a new research entry to the portfolio. Fill in the fields below, then hand this file to an AI agent with access to the codebase. The agent will:

1. Add the research entry to `lib/research.ts`
2. (Optional) Populate detail page fields if `hasDetail: true`

---

## Quick Reference

- **Data file:** `lib/research.ts` — add a new object to the `research` array
- **Types:** `lib/types.ts` — all interfaces are defined here
- **Detail page:** `app/research/[slug]/page.tsx` — renders automatically from data
- **Design system:** `prompts/design.md` — follow this for styling consistency
- **CSS:** `app/globals.css` — only modify if adding new component types

---

## Required Fields

```
Research Title:
Slug (URL-safe, lowercase, hyphenated):
Amount (e.g. "$6,000"):
Grant Type (e.g. "UREAP Grant"):
Grant Type Color (optional: "lime" | "teal" | "red"):
Short Description (1–2 sentences for homepage card):
Listing Description (2–3 sentences for /research page):
Award (optional, e.g. "🏅 Best Paper — Conference 2025"):
Tech Stack (comma-separated):
Has Detail Page (true/false):
```

---

## Detail Page Fields (only if `hasDetail: true`)

```
Detail Tag (eyebrow text):
Detail Subtitle (1–2 sentences):
Timeline:
Role:
Status:
Status Highlight (true if status should be lime-colored):
```

### Overview (2–3 paragraphs about the research problem & approach)

```
Paragraph 1:
Paragraph 2:
Paragraph 3 (optional):
```

### Features (4–8 items)

```
Feature 1 — Icon (emoji): | Title: | Description:
Feature 2 — Icon (emoji): | Title: | Description:
(add more as needed)
```

### Detail Sections (deep-dive content sections)

Each section has:
```
Section Tag (e.g. "// System Architecture"):
Section Title:
Title Accent (word(s) to italicize):
Paragraphs:
Bullets (optional):
Subsections (optional):
  - Heading: | Content:
```

### Tech Stack (for detail page)

```
Tech 1 — Name: | Role:
Tech 2 — Name: | Role:
(add more as needed)
```

### Impact / Conclusion (3–5 bullet points)

```
Impact 1:
Impact 2:
(add more as needed)
```

---

## Instructions for AI Agent

1. Read `prompts/design.md` for the design system
2. Read `lib/types.ts` for all type definitions
3. Open `lib/research.ts` and add the new research object to the `research` array
4. If `hasDetail: true`, verify the detail page renders at `/research/<slug>`
5. Run `npm run build` to verify no TypeScript errors

# Add a New Project — Prompt Template

Use this template to add a new project to the portfolio. Fill in the fields below, then hand this file to an AI agent with access to the codebase. The agent will:

1. Add the project entry to `lib/projects.ts`
2. (Optional) Create a detail page if `hasDetail: true`
3. Place image assets in `public/projects/<slug>/`

---

## Quick Reference

- **Data file:** `lib/projects.ts` — add a new object to the `projects` array
- **Types:** `lib/types.ts` — all interfaces are defined here
- **Detail page:** `app/projects/[slug]/page.tsx` — renders automatically from data
- **Design system:** `prompts/design.md` — follow this for styling consistency
- **CSS:** `app/globals.css` — only modify if adding new component types

---

## Required Fields

```
Project Name:
Slug (URL-safe, lowercase, hyphenated):
Number (next sequential, e.g. "05"):
Tag (short category label, e.g. "Gen AI · EdTech"):
Tag Color (optional: "lime" | "teal" | "red"):
Short Description (1–2 sentences for homepage card):
Listing Description (2–3 sentences for /projects page):
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
Team Size:
Status:
Status Highlight (true if status should be lime-colored):
Cover Image Filename:
Video URL (YouTube embed URL, optional):
GitHub URL (optional):
```

### Gallery (2–4 screenshots)

```
Image 1 — Label:
Image 1 — Filename:
Image 2 — Label:
Image 2 — Filename:
(add more as needed)
```

### Overview (2–3 paragraphs about the problem & solution)

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
Section Tag (e.g. "// Adaptive Engine"):
Section Title:
Title Accent (word(s) to italicize):
Paragraphs:
Bullets (optional):
Image Filename (optional):
Image Caption (optional):
Subsections (optional):
  - Heading: | Content:
```

### Tech Stack (for detail page)

```
Tech 1 — Name: | Role:
Tech 2 — Name: | Role:
(add more as needed)
```

### Tech Challenges (optional, for hackathon projects)

```
Challenge 1:
Challenge 2:
(add more as needed)
```

### Impact / Conclusion (3–5 bullet points)

```
Impact 1:
Impact 2:
(add more as needed)
```

---

## Image Assets

Place all images in: `public/projects/<slug>/`

Expected naming convention: `<slug>-<descriptor>.png`
Example: `verbi-user-dashboard.png`, `verbi-cover.png`

---

## Instructions for AI Agent

1. Read `prompts/design.md` for the design system
2. Read `lib/types.ts` for all type definitions
3. Open `lib/projects.ts` and add the new project object to the `projects` array
4. If `hasDetail: true`, verify the detail page renders at `/projects/<slug>`
5. Run `npm run build` to verify no TypeScript errors
6. List the required image files and their expected locations in `public/projects/<slug>/`

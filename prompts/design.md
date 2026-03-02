# Design System — Noir Editorial Zine

> A portfolio that does not just present work — it **performs** it. Every pixel is a deliberate act of editorial restraint married with typographic bravado.

---

## Aesthetic Direction

**Tone:** Editorial / Magazine meets Brutalist Typography — a high-contrast noir zine aesthetic. This is not a "developer portfolio." This is a **publication**. Every section reads like a spread in a design magazine where the developer is the featured subject.

**Differentiation:** The one thing someone will remember — the **collision of a massive geometric display typeface** against an elegant serif italic, set against a near-black void punctuated by violent chartreuse accents. It is unforgettable because it does not try to look friendly. It looks *authoritative*.

**Purpose:** Signal to recruiters, collaborators, and faculty that this is not a student who builds projects — this is a **builder who happens to be studying**. The design must communicate seniority before the content does.

---

## Typography System

**CRITICAL CHOICE:** Three typefaces, each with an extreme persona. No safe picks. No Inter. No Roboto.

| Role | Font | Why |
|---|---|---|
| **Display** | **Unbounded** | A geometric variable sans with tight letter-spacing and brutal weight. Set at 800 weight it commands attention like a headline stamped into metal. Used for all headings, section tags, and UI labels. |
| **Body / Accent** | **Newsreader** | A literary serif with graceful italics. In italic form it provides the *breathing room* — the editorial contrast that prevents the display type from becoming oppressive. It whispers where Unbounded shouts. |
| **Mono / System** | **JetBrains Mono** | For code, metadata, timestamps, and navigational chrome. Subtext-weight (0.6–0.7rem), always uppercase, always letter-spaced. Conveys technical precision without competing for attention. |

**Pairing Strategy:** The display/serif pairing is the signature move. Every section heading uses the pattern: `Unbounded bold + Newsreader italic accent` — e.g., "Where I've *built, taught* & led." This creates a rhythmic contrast that carries the user through the entire page like reading a magazine feature.

---

## Color & Theme

**BOLD COMMITMENT:** A dominant dark palette with a single, aggressive accent. No timid, evenly-distributed palette. One color screams; everything else is controlled grayscale.

### Dark Theme (Default)
```
Background:   #0a0a0a  → Near-black void. Not #000 — that's too digital, too cheap.
Surface:      #111111  → Cards, inputs, elevated content.
Border:       #2a2a2a  → Barely visible separation lines.
Text Primary: #f0ece2  → Warm cream, not sterile white. Has organic warmth.
Text Dim:     #beb9ad  → Supporting body text.
Text Muted:   #7a776e  → Metadata, timestamps, nav chrome.
Accent:       #c8ff00  → CHARTREUSE. Electric. Unmissable. Used surgically.
```

### Light Theme (Toggle)
```
Background:   #faf8f4  → Warm ivory, like unbleached paper.
Surface:      #ffffff  → Clean card backgrounds.
Accent:       #2d7a3a  → Deep forest green. The chartreuse softens into nature.
```

**Accent Strategy:** Chartreuse `#c8ff00` is used as a **weapon, not a decoration**. It marks: the active nav state, the hero serif text, card hover borders, badge highlights, the theme toggle track, the `::selection` highlight, decorative corner brackets, and list markers. It appears infrequently enough to shock every time.

---

## Motion & Micro-interactions

**Philosophy:** One well-orchestrated page load creates more delight than scattered effects. The entire reveal system is a single, cohesive performance.

### Scroll Reveal System
- **Mechanism:** `IntersectionObserver` adds `.in` class once, then unobserves — elements only animate on first entry.
- **Base animation:** `opacity: 0 → 1` + `translateY(40px → 0)` over `0.8s` with a custom cubic-bezier `(0.22, 1, 0.36, 1)` — fast start, slow settle. Feels like content is *rising into position* rather than sliding.
- **Staggered delays:** `rv-d1` through `rv-d5` (0.1s increments) create a cascade effect within sections. Header appears → subheader → rule → content.

### Hover States That Surprise
- **Cards lift and glow:** `translateY(-4px)` + box-shadow bloom on hover. Subtle but physically satisfying.
- **Contact cards slide right:** `translateX(8px)` + left lime border-shadow appears. Directional motion that hints "click to go."
- **Skill pills ascend:** Individual `translateY(-2px)` + lime border/background glow. The staggered `transitionDelay` on each pill (0.03s increments) creates a wave effect on hover-adjacent elements.
- **Nav CTA lifts with glow:** The "Let's Talk" button gains box-shadow on hover — a lime halo.

### Horizontal Drag-Scroll
- The projects section uses a **grab cursor** track with mouse-drag scrolling. `cursor: grab` → `grabbing` on mousedown. Custom thin scrollbar (4px) with lime thumb on hover. This is a deliberate departure from vertical scrolling — it signals "this section is different, explore it."

---

## Spatial Composition

**Layout Strategy:** Asymmetric grids with generous negative space. Nothing is centered for the sake of centering.

- **Hero:** 2-column asymmetric grid (`1fr 400px`). Text-heavy left, photo right. The photo frame has **decorative lime corner brackets** via `::before` and `.corner-br` — a distinctly editorial framing device.
- **Experience:** Stacked rows with a `220px | 1fr` grid — date/org metadata pinned left, content flows right. Newspaper column layout.
- **Research:** 2×2 card grid with a **decorative 50px lime bar** at the top of each card (`::before`). Cards float on the void.
- **Contact:** Split grid — emotional appeal left, actionable links right. The links are full-width cards, not scattered buttons.
- **Consistent wrap:** `max-width: 1280px` with `clamp(1.2rem, 4vw, 3.5rem)` padding. Responsive without ever feeling cramped.

---

## Backgrounds & Visual Depth

**Atmosphere, not decoration.**

- **Grain overlay:** `body::after` applies a fixed SVG fractalNoise texture at `opacity: 0.03`. Imperceptible on first glance but gives the entire site a tactile, printed quality. Like looking at a zine through a loupe.
- **Ambient gradient orb:** The hero section has a massive `600px` radial gradient of `lime-glow` at `top: 10%, right: -5%`, filtered through `blur(80px)`. It creates an ethereal, almost accidental light source — as if the accent color is leaking from behind the content.
- **Section separation:** `1px solid var(--border)` between every section. Not heavy dividers — hairlines that create rhythm without weight.
- **Selection color:** Custom `::selection` — chartreuse background with black text in dark mode, green background with white text in light. Even text selection is on-brand.

---

## Implementation Precision

- **CSS Variables for everything:** 30+ custom properties ensure the light/dark theme swap is a single attribute toggle — zero JavaScript repainting, pure CSS cascade.
- **Theme persistence:** `localStorage` read synchronously via inline `<script>` in `<head>` — prevents FOUC (Flash of Unstyled Content). The theme is applied before the first paint frame.
- **Responsive at 4 breakpoints:** `1024px` (tighter grid), `900px` (single column), `640px` (burger menu + stacked layouts), `400px` (compressed spacing). Every breakpoint was tested against the original static HTML.
- **Font loading:** `next/font/google` with `adjustFontFallback: false` — preserving the exact typographic metrics of the original. No CLS, no size shifts.

---

> *"Bold maximalism and refined minimalism both work — the key is intentionality, not intensity."*
>
> This design chooses **refined maximalism**: restraint in color (one accent), excess in typography (three extreme fonts), restraint in motion (one reveal system), excess in detail (grain, gradients, corner brackets, custom scrollbars). Every choice is deliberate. Nothing is default.

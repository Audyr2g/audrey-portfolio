---
name: eportfolio-ui
description: UI and visual design system for Audrey Benjamin Gutierrez's ePortfolio (Audyr2g/audrey-portfolio). Use whenever you build, restyle or review any visual part of the site, such as a new page, section, card, button, gallery, artifact viewer, dark mode, responsive layout, animation or accessibility fix, so that the new UI matches the existing "Modern, Apple-inspired" glass-and-blue look. Triggers on "design", "UI", "layout", "style", "make it look", "card", "responsive", "dark mode", "mobile", "accessibility".
---

# ePortfolio UI system

The design is defined by `css/style.css` (tokens + components), `css/responsive.css`
(breakpoints) and `js/script.js` (behaviour). **Reuse what exists.** Inventing new UI is
the most common way to make this site look inconsistent.

## Before you touch UI

1. Find the closest existing component below and copy its markup from the page that uses it.
2. If something genuinely new is needed, build it **only from the tokens**, add it at the end of
   `css/style.css` under a `/* ===== NAME ===== */` banner, give it a `body.dark-mode` rule and a
   small-screen rule in `css/responsive.css`, and tell the user you added a new component.
3. Never hard-code a colour, shadow or radius that a token already covers.

## Tokens (`:root` in style.css)

| Token | Light | Dark (`body.dark-mode`) | Use |
|---|---|---|---|
| `--primary` | `#2563EB` | same (see the known issues) | links, active nav, badges, outline buttons |
| `--secondary` | `#3B82F6` | same | the second stop of the gradient button |
| `--accent` | `#60A5FA` | same | soft highlights and hero glow |
| `--background` | `#F8FAFC` | `#0F172A` | page background |
| `--surface` | `#FFFFFF` | `#1E293B` | `.bg-white` sections and cards |
| `--text` | `#1E293B` | `#F8FAFC` | headings |
| `--text-light` | `#64748B` | `#CBD5E1` | body paragraphs |
| `--border` | `#E2E8F0` | `#334155` | dividers |
| `--shadow-sm/md/lg` | slate shadows at 6%, 10% and 14% | | resting card / glass / hover-or-hero |
| `--radius` | `22px` | | cards and glass |
| `--transition` | `.35s ease` | | all hover transitions |

Pills (badges, buttons) use `border-radius: 999px`. A tinted pill background is
`rgba(37, 99, 235, .10)`.

**Type:** Poppins 300–800. `h1` is `clamp(3rem, 6vw, 5rem)`, `h2` is `clamp(2rem, 4vw, 3rem)`
and `h3` is `1.5rem`, all at weight 700 and line-height 1.2. Body text has line-height 1.8, and
`p` uses `--text-light`. Don't add a second typeface.

**Spacing:** `section` has `padding: 110px 0`, which responsive.css shrinks. Content sits inside
`.container-custom` (`min(1200px, 92%)`). Use Bootstrap's grid (`row g-4`, `col-lg-6`) and
spacing utilities (`mt-4`, `p-5`). Sections alternate between plain and `.bg-white`.

## Component catalogue

| Need | Use | Where to copy it from |
|---|---|---|
| Top-of-page title | `.page-banner` (eyebrow `.badge-soft` → `h1` → `p`) | any inner page |
| Home hero | `.hero`, `.hero-badge`, `.hero-title span`, `.hero-buttons`, `.hero-image` | index.html |
| Section title | `.section-header` > `span` (pill eyebrow), `h2`, `p` | all pages |
| Main content card | `.glass p-5 fade-up` | prelim.html |
| List card | `.dashboard-card` + `.dashboard-list` | about.html (Skills) |
| Skill tile / progress | `.skill-card`, `.skill-progress span` (width = %) | style.css (not used on a page yet) |
| Small fact box | `.info-box` (h5 in primary) in `.about-info` grid | style.css (not used on a page yet) |
| Chronology | `.timeline` / `.timeline-item` | about.html (Education) |
| Buttons | `.btn-primary-custom` (gradient, main action), `.btn-outline-custom` (secondary), `.btn-icon` (round icon) | all pages |
| Tag / eyebrow | `.badge-soft` | prelim.html |
| Artifact metadata | `dl.artifact-caption` (dt/dd) | prelim.html |
| Embedded file | `.artifact-frame` holding an `<object>` (PDF) or `<iframe>` (notebook), with `.artifact-fallback` | prelim.html |
| File buttons row | `.artifact-actions` + `.file-meta` | prelim.html |
| Jump links | `nav.artifact-index` | prelim.html |
| Screenshots | `.gallery-grid` (`--single` for one) > `.gallery-item` > `img[data-lightbox]` + `.gallery-caption` | prelim.html |
| Image zoom | the `.lightbox` dialog, which every page using `data-lightbox` needs at the end of `<body>` | prelim.html:1617 |
| Footer | `.footer`, `.footer-links`, `.footer-bottom` with `#year` | all pages |
| Back to top | `#backToTop` | all pages |

Icons come only from Bootstrap Icons (`<i class="bi bi-…">`). For decorative icons, add
`aria-hidden="true"`.

## Behaviour (js/script.js — don't duplicate it)

- **Dark mode:** `#darkModeToggle` toggles `body.dark-mode` and saves `localStorage.theme`. Every new
  surface needs a `body.dark-mode` rule. Test both themes.
- **Scroll reveal:** an IntersectionObserver adds `.show` to `.fade-up`, `.dashboard-card`, `.timeline-item`,
  and similar. Put `fade-up` on new blocks. Don't write a second observer.
- The script already handles the navbar shrinking on scroll, the active-nav highlight, smooth `#anchor`
  scrolling, closing the mobile menu on click, the lightbox, Escape to close, and back-to-top.

## Responsive

Breakpoints in responsive.css are 1400, 1200, 992 (where the navbar collapses), 768, 576 and 400px. On a phone:
the buttons in `.artifact-actions` stack, `.artifact-frame` gets shorter, and the hero image shrinks.
Any new component must work at 390px with no horizontal scroll (`body` has `overflow-x: hidden`,
which hides overflow bugs rather than fixing them, so check `document.documentElement.scrollWidth`).

## Accessibility bar (WCAG 2.2 AA)

- Text contrast must be ≥ 4.5:1 (≥ 3:1 for text that is 24px+, or 18.66px+ bold).
- Every interactive element can be reached and seen with the keyboard.
- Images have meaningful `alt` text. Embedded files have a `title`. Heading levels don't skip.
- Motion respects `prefers-reduced-motion`.

### Known issues (measured November 2026; fix only when asked or when touching that area)

1. **Dark-mode blue fails contrast:** `--primary #2563EB` is 2.83:1 on dark `--surface` and
   3.45:1 on dark `--background`. That affects active nav links, badges, outline buttons and info-box headings.
   The fix is to set `--primary: #60A5FA` inside `body.dark-mode` (7.0:1 on `#0F172A`).
   The gradient button keeps white text, so check it still reads well.
2. **White text on the gradient button** is 5.17:1 at the `#2563EB` end but only 3.68:1 at the `#3B82F6` end.
   Darken `--secondary` (e.g. `#1D4ED8`) if you touch the buttons.
3. **No visible focus styles:** there are no `:focus-visible` rules, and `button { outline: none }` removes
   the default ring. Add `:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }`.
4. **No reduced-motion support:** wrap the `fade-up`, hover lifts and `scroll-behavior: smooth` in
   `@media (prefers-reduced-motion: no-preference)`, or disable them under `reduce`.

## Verify every UI change

Serve the site with `python3 -m http.server 8000` and use Playwright (Chromium is preinstalled; don't install it):
1. Take screenshots at 1280×800 and at a 390px-wide phone size, in light **and** dark mode. To get dark mode,
   set `localStorage.theme = "dark"` and reload. The site's `fade-up` elements start hidden,
   so scroll through the page or add the `show` class before taking screenshots.
2. Check `scrollWidth <= clientWidth` at 390px.
3. Tab through the page and confirm the focus is always visible.
4. Look at the screenshots yourself before reporting, and describe what changed.

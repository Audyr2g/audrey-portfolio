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

## Tokens

The original tokens are at the top of `style.css`. The **REFRESH (November 2026)** block at the
end of `style.css` overrides several of them, so the values below are the ones that apply. Put
new overrides in that block too, not in the original rules.

| Token | Light | Dark (`body.dark-mode`) | Use |
|---|---|---|---|
| `--primary` | `#2563EB` | `#60A5FA` | links, active nav, badges, buttons |
| `--secondary` | `#1D4ED8` | `#3B82F6` | primary-button hover |
| `--accent` | `#60A5FA` | `#93C5FD` | focus ring and highlights |
| `--primary-soft` | 8% blue | 12% light blue | pill and icon backgrounds |
| `--background` | `#F8FAFC` | `#0F172A` | page background |
| `--surface` | `#FFFFFF` | `#1E293B` | `.bg-white` sections and cards |
| `--text` | `#1E293B` | `#F8FAFC` | headings |
| `--text-light` | `#64748B` | `#CBD5E1` | body paragraphs |
| `--border` | `#E2E8F0` | `#334155` | dividers |
| `--shadow-sm/md/lg` | soft layered slate shadows | | resting / hover / hero |
| `--radius` / `--radius-sm` | `16px` / `12px` | | cards / inner boxes |
| `--transition` | `.22s` + `--ease-out` | | hover transitions |

Pills (badges, buttons) use `border-radius: 999px`. A tinted pill background is
`rgba(37, 99, 235, .10)`.

**Type:** Poppins 300–800. `h1` is `clamp(2.4rem, 5vw, 3.75rem)`, `h2` is `clamp(1.7rem, 3.2vw, 2.4rem)`
and `h3` is `1.2rem` at weight 600. Headings use letter-spacing -0.02em. Eyebrow pills are small uppercase text with tracking. Body text has line-height 1.8, and
`p` uses `--text-light`. Don't add a second typeface.

**Spacing:** `section` has `padding: 96px 0`, which responsive.css shrinks. Content sits inside
`.container-custom` (`min(1200px, 92%)`). Use Bootstrap's grid (`row g-4`, `col-lg-6`) and
spacing utilities (`mt-4`, `p-5`). Sections alternate between plain and `.bg-white`.

## Component catalogue

| Need | Use | Where to copy it from |
|---|---|---|
| Top-of-page title | `.page-banner` (eyebrow `.badge-soft` → `h1` → `p`) | any inner page |
| Home hero | `.hero`, `.hero-badge`, `.hero-title span`, `.hero-buttons`, `.hero-image` | index.html |
| Section title | `.section-header` > `span` (pill eyebrow), `h2`, `p` | all pages |
| Main content card | `.glass p-5 fade-up` (now a solid surface with a hairline border, not frosted glass) | prelim.html |
| List card | `.dashboard-card` + `.dashboard-list` | about.html (Skills) |
| Course output card | `.output-grid` > `a.output-card` with `.output-period`, h3, p and `.output-link`; add `--pending` for unfinished periods | index.html, finals.html |
| Status pill | `.status-pill` + `.status-dot` | finals.html |
| Slides viewer | `.artifact-frame.artifact-frame--slides` (16:10) | midterm.html |
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

## Period system

Each grading period has its own colour: Prelim `--prelim` (blue), Midterm `--midterm` (amber), Finals `--finals` (green), each with `-strong` and `-soft` variants and dark-mode values. Put `class="period-prelim|period-midterm|period-finals"` on `<body>` of a period page and every `--primary` component takes the period colour. Period pages need: `.period-meta` chips in the banner, the sticky `.page-subnav` jump bar (exercise header ids plus `#reflection`), and the reflection as `section.reflection-section > .reflection-body`. Never use a period colour for something that belongs to a different period.

## Behaviour (js/script.js — don't duplicate it)

- **Dark mode:** `#darkModeToggle` toggles `body.dark-mode` and saves `localStorage.theme`. Every new
  surface needs a `body.dark-mode` rule. Test both themes.
- **Scroll reveal:** an IntersectionObserver adds `.show` to `.fade-up`, `.dashboard-card`, `.timeline-item`,
  and similar. Put `fade-up` on new blocks. Don't write a second observer.
- **Refresh additions:** a reading-progress bar (`.scroll-progress`, injected automatically), `.artifact-index a.is-current`
  (scrollspy), and haptics (an 8 ms `navigator.vibrate` on tap; it only fires on touch screens without reduced motion).
  Tactile feedback for new controls comes from CSS: lift on `:hover`, then `scale(.97–.985)` on `:active`.
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

### Fixed in the November 2026 refresh (keep it that way)

- Dark-mode contrast: `--primary` switches to `#60A5FA` in dark mode, and primary buttons use dark text there.
- Bootstrap's `.bg-white` is `!important`, which had kept alternate sections white in dark mode.
  The override `.bg-white { background-color: var(--surface) !important; }` must stay.
- `:focus-visible` ring, `prefers-reduced-motion` support, and the `g-5` row overflow at phone width (`--bs-gutter-x: 1.5rem` under 576px).

## Verify every UI change

Serve the site with `python3 -m http.server 8000` and use Playwright (Chromium is preinstalled; don't install it).
If the CDN is blocked in the sandbox, route `cdn.jsdelivr.net` to local copies from `npm pack bootstrap@5.3.3 bootstrap-icons@1.11.3`,
or the screenshots will show the page without Bootstrap.
1. Take screenshots at 1280×800 and at a 390px-wide phone size, in light **and** dark mode. To get dark mode,
   set `localStorage.theme = "dark"` and reload. The site's `fade-up` elements start hidden,
   so scroll through the page or add the `show` class before taking screenshots.
2. Check `scrollWidth <= clientWidth` at 390px.
3. Tab through the page and confirm the focus is always visible.
4. Look at the screenshots yourself before reporting, and describe what changed.

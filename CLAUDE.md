# Audrey's ePortfolio

Academic ePortfolio of Audrey Benjamin Gutierrez (BS Information Technology) for
**ITC-C508**. It's a static site served by GitHub Pages from `main`, at
https://audyr2g.github.io/audrey-portfolio/.

## Stack

- Plain HTML pages with no build step: `index.html`, `about.html`, `expectations.html`, `prelim.html`
- `css/style.css` (tokens + components), `css/responsive.css` (breakpoints), `js/script.js` (dark mode, scroll reveal, lightbox, nav)
- Bootstrap 5.3.3, Bootstrap Icons 1.11.3 (jsDelivr) and Poppins (Google Fonts). Add no other libraries.
- Artifacts are in `files/<period>/` and screenshots in `images/<period>/`

## Skills (use them)

- `.claude/skills/eportfolio-update`: content work, i.e. new period pages (Midterm, Finals), artifacts, reflections and nav/footer updates
- `.claude/skills/eportfolio-ui`: any visual work, i.e. tokens, the component catalogue, dark mode, responsive and accessibility rules

## Rules

- **Never invent artifact facts** (dates, scores, page counts, file sizes, findings). Take them from Audrey's files or ask.
- Reuse existing components and CSS variables. A new page copies its structure from `prelim.html`.
- A new page goes into the navbar **and** footer of every page. The current page gets `nav-link active`.
- Writing is first person and specific, with British spelling, dates like "14 August 2026" and HTML entities (`&mdash;`, `&middot;`).
- Keep the 4-space indentation and the blank-line-separated markup style of the existing files.
- Check every change: links resolve, ids are unique, and Playwright screenshots at 1280px and 390px in light and dark mode.

## Preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/.

## Git

- Work on `main`, which is what GitHub Pages deploys. Every push goes live within about a minute.
- Audrey also edits on GitHub directly, so run `git pull --rebase origin main` before you commit.
- Commit messages are short and imperative, e.g. "Add Midterm Output page".

## Current state (November 2026)

- The Prelim is published (7 artifacts). Midterm and later periods are not started yet.
- `reflections.html` is empty and unlinked: fill it in or delete it.
- About → Technical Skills leaves out the Prelim's evidenced skills (Python, Keras/TensorFlow, NLP).
- Dark-mode contrast, focus styles and reduced motion need fixing (details in the eportfolio-ui skill).

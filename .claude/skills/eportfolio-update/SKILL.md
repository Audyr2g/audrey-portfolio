---
name: eportfolio-update
description: Update Audrey Benjamin Gutierrez's ITC-C508 academic ePortfolio (static Bootstrap site, repo Audyr2g/audrey-portfolio, live at audyr2g.github.io/audrey-portfolio). Use when adding a grading-period page (Midterm, Pre-Final, Finals), adding or editing an artifact, writing a learning reflection, changing the About/Expectations/Home pages, or fixing the site's navigation. Triggers on "update my eportfolio", "add my midterm output", "add this artifact", "portfolio".
---

# ePortfolio update

A static site: plain HTML pages, `css/style.css`, `css/responsive.css`, `js/script.js`,
Bootstrap 5.3.3 + Bootstrap Icons 1.11.3 from jsDelivr, Poppins from Google Fonts.
No build step. GitHub Pages serves `main` directly.

## Hard rules

1. **Never invent artifact facts.** Titles, dates, scores, experiment IDs, page counts,
   cell counts, file sizes and findings come from the user's files or words only.
   If something is missing, ask. A graded portfolio with a fabricated number is worse
   than a late one.
2. **Measure file metadata yourself**: sizes (`du -k`, round to KB/MB as the site does),
   PDF pages (`pdfinfo` or pypdf), notebook cells (count `cells` in the .ipynb JSON),
   workbook rows (openpyxl). Use these numbers in the `file-meta` span and `Format` caption.
3. **For any visual or layout work, follow the `eportfolio-ui` skill.**
4. **Read before writing.** Open `prelim.html` and copy the patterns it already uses.
   Don't add new CSS classes or libraries unless the user asks for a redesign.
5. **Every new page goes into the nav and footer of every page**: `index.html`, `about.html`,
   `expectations.html`, `prelim.html` and any new period page. The current page's nav
   link gets `class="nav-link active"`, and only that one.
6. **Writing voice**: first person, specific and honest about results, including ones
   that disappointed. Prose is in British spelling (as in the existing pages, e.g. "regularisation"),
   dates are written as "14 August 2026", and HTML entities are used (`&mdash;`, `&ndash;`, `&middot;`, `&amp;`).
7. Don't commit generated junk. When a change is finished and checked, commit it and push to `main`
   without asking (Audrey's standing instruction). If the push is blocked, hand back the changed files and say where each one goes.

## Period page: copy the structure of `prelim.html`

Name it `<period>.html` (e.g. `midterm.html`), with assets in `files/<period>/` and
`images/<period>/`. Sections in order, alternating plain `<section>` and
`<section class="bg-white">`:

1. `<head>`: `<title>Midterm Output | Audrey Benjamin Gutierrez</title>` and a specific `meta description`.
2. Nav (copied from an existing page) and the `page-banner` with the eyebrow `ITC-C508 &middot; Midterm Period`, an h1, and a one-paragraph summary of the period's connected story.
3. "What This Page Contains" (purpose).
4. **Artifact Index**: `<nav class="artifact-index">`, with one `<a href="#artifact-N">` per artifact (icon + "N. Short name") and a final link to `#reflection`. Update the "N artifacts are published" count.
5. For each exercise group, a section-header block (`<span>Exercise XX</span>`, h2, a one-paragraph description), followed by its artifacts.
6. Artifact sections (`id="artifact-N"`, numbered continuously across the page).
7. `#reflection`, the Learning Reflection: growth with concrete evidence that cites artifact numbers, the competencies developed, what I'd do differently, and next steps.
8. The "Thank You / Continue Exploring" card and the footer (copied).

## Artifact block

```html
<!-- ARTIFACT N -->
<section class="bg-white" id="artifact-N">  <!-- alternate the bg-white class -->
  <div class="container-custom">
    <div class="glass p-5 fade-up">
      <span class="badge-soft">Artifact N</span>
      <h2 class="mt-4">Full Title</h2>
      <dl class="artifact-caption">
        <dt>Title</dt><dd>Full Title</dd>
        <dt>Author</dt><dd>Audrey Benjamin Gutierrez</dd>
        <dt>Date</dt><dd>14 August 2026</dd>
        <dt>Format</dt><dd>IEEE-format technical report, PDF, 5 pages</dd>
      </dl>
      <p>What it is and what it contains.</p>
      <p>Why it matters: the specific finding or growth it shows.</p>
      <!-- viewer: see below -->
      <div class="artifact-actions"> ... buttons + file-meta ... </div>
    </div>
  </div>
</section>
```

Viewer and actions by file type (copy the exact markup from `prelim.html`):

| Type | Viewer | Buttons | `file-meta` icon |
|---|---|---|---|
| PDF | `<div class="artifact-frame"><object data="files/…pdf#view=FitH" type="application/pdf">` with an `artifact-fallback` | Open (`target="_blank" rel="noopener"`) and Download (`download`) | `bi-file-earmark-pdf` |
| Notebook | export an `.html` copy (`jupyter nbconvert --to html`) and show it in an `<iframe loading="lazy">` | Open Notebook, plus Download .ipynb | `bi-journal-code` |
| Excel/CSV | none; `artifact-actions` gets class `mt-5` | Download only | `bi-file-earmark-spreadsheet` |
| Screenshot | `gallery-item` with `<img … data-lightbox loading="lazy">` and a `gallery-caption` | none | none |
| Certificate | the PDF pattern | Open and Download | `bi-award` in the index |

Every `<img>` needs a descriptive `alt` that says what the image shows.

## Verify before finishing

- Every `href`, `src` and `data` path resolves to a real file
  (`grep -oE '(href|src|data)="[^"#]+' page.html` and check each with `test -e`).
- `id`s are unique, the index links match the artifact ids, and the artifact count text is right.
- Nav and footer are identical across all pages, apart from the `active` link.
- Render the page with Playwright (Chromium is preinstalled) using `python -m http.server`
  at 1280px and 390px widths. Check for no horizontal scroll and that the PDFs and iframes load.
- Report what changed page by page, and anything still missing from the user.

## Known state (November 2026)

- About → Technical Skills lists only web skills. The Prelim proves Python, Keras/TensorFlow,
  NLP and experiment logging. Suggest adding them, with links to the artifacts as evidence.

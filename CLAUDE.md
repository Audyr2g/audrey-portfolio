# Audrey's ePortfolio

Academic ePortfolio of Audrey Benjamin Gutierrez (BS Information Technology) for
**ITC-C508**. It's a static site served by GitHub Pages from `main`, at
https://audyr2g.github.io/audrey-portfolio/.

## Stack

- Plain HTML pages with no build step: `index.html`, `about.html`, `expectations.html`, `prelim.html`, `midterm.html`, `finals.html`
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
- **Push automatically.** Audrey asked for every finished change to be committed and pushed to `main` without asking first. Still pull first, and still check the change before pushing.
- Commit messages are short and imperative, e.g. "Add Midterm Output page".

## Current state (November 2026)

- **Prelim:** published, 7 artifacts.
- **Midterm:** 4 artifacts: PT-M1 RAG chatbot over RA 9003 (individual report + notebook, 9 September 2026), then WW-M2 LendSuri proposal (PDF) and pitch deck (PDF view + .pptx) as group work.
- **Finals:** published (November 2026), 8 artifacts: PT-F1 report + notebook, PT-F2 report + notebook + workbook + CSVs (individual, Member 3), WW-F1 & WW-F2 group report + conversational notebook (course name: "Lab exercise WW - F1 and F2 (Optimization and GPU Testing)"; the group also submitted three zips not on the site: question sheet, final dataset, raw SEC dataset). Its Final Project Learning Reflection was drafted by Claude from these files; Audrey says the WW-F1/WW-F2 activity was run jointly by the whole group with no individual split; *My Contributions* says so. Don't invent an individual role for it. The group report lists C3 = 800/100 for Member 3, while her PT-F2 report recommends 1800/180: don't present 800/100 as her choice.
- Finals artifact dates are course weeks from Audrey's LMS (Week 14 PT-F1, 11–17 Oct; Week 15 PT-F2, 19–24 Oct; Week 16 WW-F1/F2, 26–31 Oct, turned in 4 Nov 2026), not file metadata, which is later export dates.
- The home page has a Course Outputs section linking all three periods (none pending now). Keep its card text in sync with each page.
- About → Technical Skills leaves out the Prelim's evidenced skills (Python, Keras/TensorFlow, NLP).
- The Midterm Learning Reflection was drafted by Claude from the PT-M1 and WW-M2 documents at Audrey's request (November 2026). Audrey should review it so it matches her own experience.

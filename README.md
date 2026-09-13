# CodeCraft Academy

**Learn Python & SQL by actually running code — right in your browser.**

Developed by **Ashwik Bire** — Data Analyst & BI Developer.

![CodeCraft Academy thumbnail](thumbnail.png)

A single-page, client-side learning site covering Python fundamentals, four
key Python packages, and SQL — every lesson ships with an editable, runnable
code example. It finishes with a 90-question certification exam and a
downloadable certificate of accomplishment. No backend, no build step, no
installs: open `index.html` and go.

---

## ✨ Features

- **27 hands-on lessons**
  - 12 Python fundamentals topics (variables through decorators & generators)
  - 4 Python packages (NumPy, Pandas, Matplotlib, Requests)
  - 9 SQL topics (SELECT through window functions & views)
  - 2 free-form playgrounds (Python + SQL)
- **Real code execution in the browser** — no server required
  - Python runs via [Pyodide](https://pyodide.org/) (CPython compiled to WebAssembly)
  - SQL runs via [sql.js](https://sql.js.org/) (SQLite compiled to WebAssembly), seeded with a small `students` / `courses` / `enrollments` schema
- **Progress tracking** — mark each lesson complete; progress is saved to `localStorage` and persists across visits
- **Certification exam**
  - Unlocks once every lesson is marked complete
  - 45 Python questions (50 marks) + 45 SQL questions (50 marks) = 100 marks total
  - Includes real "write and run" coding questions, graded automatically against expected output/results
  - Pass mark: **more than 40/50 in both sections**
  - **3 attempts**, tracked locally
- **Certificate of accomplishment**
  - Enter your name, get a styled certificate with today's date, your score, and a unique certificate ID (e.g. `CCA-20260913-7F3K9Q`)
  - Download as a PNG (via [html2canvas](https://html2canvas.hertzen.com/))
  - "Share on LinkedIn" opens LinkedIn's post composer with a caption copied to your clipboard
- **Premium, dark, gold-accented visual theme** with a serif display face and a script-style signature

---

## 🗂 Project structure

```text
.
├── index.html        # the entire site: markup, styles, and the core interactive engine
├── assessment.js     # the certification exam engine: question bank, grading, certificate generator
├── thumbnail.png     # social-preview / README image
└── README.md
```

`index.html` loads `assessment.js` with a relative `<script src="assessment.js">`
tag, so **both files must live in the same folder**. Renaming or moving one
without the other will break the certification section.

---

## 🚀 Getting started

### Run it locally

Just open `index.html` in any modern browser. That's it — everything runs
client-side.

> Some browsers restrict certain APIs (like `localStorage`) for pages opened
> directly via `file://`. If progress-saving or the exam seems inconsistent,
> serve the folder over a tiny local server instead:
>
> ```bash
> python3 -m http.server 8000
> # then visit http://localhost:8000
> ```

### Deploy to GitHub Pages

1. Push `index.html`, `assessment.js`, and `thumbnail.png` to a repository
   (all in the repo root).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`.
4. Save, then visit `https://<your-username>.github.io/<repo-name>/` after
   a minute.

---

## 🎓 How the certification exam works

1. Complete and check off every lesson in the sidebar (progress bar reaches 100%).
2. Open **Certification** in the sidebar and click **Start Certification Exam**.
3. Answer 45 Python questions, then 45 SQL questions. A handful ask you to
   write real code — click **Run & Check** to grade it instantly against the
   expected output or query result.
4. Submit. You need **more than 40/50 in each section** to pass.
5. If you pass, enter your name to generate your certificate — download it as
   a PNG or share it to LinkedIn.
6. If you don't pass, you get up to **3 total attempts**. After that, the
   exam locks (a "Reset Attempts" option is available if you want to keep
   studying and try again later).

All of this is tracked in the browser's `localStorage` — there's no backend,
so attempts/certificates are per-browser, not centrally verified. See
[Advanced features](#-advanced-features-to-consider-next) below for ways to
make this production-grade.

---

## 🔧 Tech stack

| Purpose              | Library                                                                         |
|----------------------|----------------------------------------------------------------------------------|
| Python execution     | [Pyodide](https://pyodide.org/) (loaded from jsDelivr)                         |
| SQL execution        | [sql.js](https://sql.js.org/) (SQLite via WebAssembly)                         |
| Certificate → image  | [html2canvas](https://html2canvas.hertzen.com/)                                |
| Fonts                | Google Fonts — Fraunces, Inter, JetBrains Mono, Cormorant Garamond, Tangerine  |

No npm install, no bundler, no framework — just static files and CDN scripts.

---

## 🐞 Known limitations

- **LinkedIn sharing is best-effort.** Browsers and LinkedIn's public web
  share endpoint don't allow a static page to auto-upload an image or
  auto-add a certification to someone's profile without LinkedIn's own
  OAuth app. "Share on LinkedIn" opens LinkedIn's composer and copies a
  caption to your clipboard — you attach the downloaded PNG yourself, or add
  the certificate under **Profile → Licenses & Certifications** using the
  Certificate ID.
- **Everything is client-side and unauthenticated.** Anyone with browser
  dev tools can inspect the answer key in `assessment.js`, or reset their own
  `localStorage` to bypass the 3-attempt limit. Fine for a self-paced/portfolio
  project; not suitable as-is for a graded, tamper-resistant credential.
- **No cross-device sync.** Progress, attempts, and certificates live in one
  browser's `localStorage`. Clearing site data resets everything.
- **PNG rendering and code execution both depend on CDN scripts** (Pyodide,
  sql.js, html2canvas). If those fail to load (offline, corporate firewall,
  ad blocker), the affected features fail gracefully with an on-screen
  message rather than crashing the page.

---

## 🚧 Advanced features to consider next

Roughly ordered from "quick win" to "bigger project":

1. **Randomized question order & option shuffling** — pull a random subset
   (e.g. 20 of 45) per attempt and shuffle option order, so repeat attempts
   aren't just memorization of positions.
2. **Per-question timer / overall exam timer** with auto-submit, to mirror a
   real proctored exam.
3. **Answer review screen** — after submitting, let the learner see which
   questions they got wrong (without exposing this during the exam itself).
4. **Difficulty tiers** — tag questions easy/medium/hard and report a
   breakdown, or adapt difficulty based on running performance.
5. **A backend for real verification** — move the question bank and grading
   server-side (e.g. a small Node/Flask API + database) so:
   - answers can't be inspected in dev tools,
   - certificates can be looked up/verified by ID on a public endpoint
     (`/verify/CCA-20260913-7F3K9Q`), which also makes the LinkedIn/PNG
     certificate trustworthy to a third party,
   - attempts and progress sync across devices via a login (email, OAuth, or
     a simple magic link).
6. **Server-rendered certificate images** (e.g. a small serverless function
   using `satori`/`resvg` or Puppeteer) instead of client-side html2canvas —
   more reliable rendering, and enables emailing the certificate as a PDF.
7. **LinkedIn "Add to Profile" deep link** — LinkedIn supports a
   `certification` add-to-profile URL scheme
   (`https://www.linkedin.com/profile/add?...`) that pre-fills the
   Certifications section with a name, issuing organization, issue date, and
   credential ID/URL. This is the real fix for one-click LinkedIn integration
   and only needs a verification URL (see point 5) to be genuinely useful.
8. **More languages / tracks** — an equivalent JavaScript, Power BI/DAX, or
   Excel formulas track reusing the same lesson/exam/certificate engine.
9. **Code-question autograding upgrades** — instead of exact stdout/result
   matching, run learner code against multiple hidden test cases (like a
   real coding-judge), and give partial credit.
10. **Leaderboard / cohort mode** — if you add a backend, show percentile
    rank among everyone who has taken the exam, or support instructor-led
    cohorts with shared start/end dates.
11. **Accessibility & i18n pass** — full keyboard navigation through exam
    questions, ARIA roles on the custom radio/toggle controls, and
    translated lesson content.
12. **Offline/PWA support** — a service worker that caches Pyodide/sql.js
    after first load, so the whole course (including the exam) works without
    a live internet connection on repeat visits.
13. **Analytics on lesson engagement** — track which lessons people redo,
    where they get stuck, and which exam questions have the highest failure
    rate, to guide content revisions.

---

## 📄 License

No license specified yet — add one (MIT is a common default for a project
like this) if you plan to accept contributions or want to make reuse terms
explicit.

---

## 🙋 About

Built and maintained by **Ashwik Bire**, Data Analyst & BI Developer.
Follow along for more Python, SQL, and Power BI content.

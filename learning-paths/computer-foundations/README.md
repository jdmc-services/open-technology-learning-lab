# Open Computer Concepts Learning Lab

A self-contained, original, free learning experience for public audiences. No LMS, account, API, CDN, analytics, or build step is required.

## Contents

- `index.html` — responsive page and navigation
- `styles.css` — accessible, mobile-responsive presentation
- `content.js` — four learning modules and 32 original questions with rationales
- `app.js` — simulations, quizzes, browser-local progress and export
- `README.md` — setup and maintenance instructions

## Preview locally

Open `index.html` in a browser. For the most representative local preview, run `python -m http.server 8000` in this folder, then open `http://localhost:8000`.

## Publish to GitHub Pages (recommended safe deployment)

1. **Back up or create a feature branch** in the existing repository before making changes. Do not replace its current `index.html`.
2. In the repository, create a new folder: `computer-concepts/`.
3. Upload all five files from this package into that folder, keeping filenames unchanged.
4. Commit to the feature branch and open a pull request. Inspect the changes; confirm only the new folder was added.
5. After review, merge through your usual process. If GitHub Pages is already configured to publish from the repository root, visit `https://YOUR-ACCOUNT.github.io/YOUR-REPO/computer-concepts/`. If the repository uses a different publishing source, place the folder within that published directory.
6. Test all four labs, each quiz, progress export, mobile layout, and reset behavior.
7. Add an optional navigation link from the existing site **only after confirming** the new page works. Existing pages need no changes.

**Alternative:** Create a dedicated repository and publish these files at its GitHub Pages root. This keeps the site entirely independent.

## Teaching and content guidelines

- The explanations, simulations, scenarios and assessments were authored for this project, not transcribed from proprietary slides.
- There are no external images, fonts or dependencies.
- Module topics: data representation, networking, software use, structured troubleshooting.
- 8 questions per module; >=80% on the latest attempt counts as completion.
- Quiz scores and completion flags are stored locally under `open-learning-lab-v1`. No learner data is sent anywhere.
- The downloadable progress file is a self-reported practice summary, not a certificate.
- For group instruction, consider a teacher-led walkthrough followed by individual practice. Do not collect sensitive personal or organizational data in the practice ticket.

## Editing

Update lesson text and scenarios in `content.js`. Each module has an `id`, `title`, `summary`, `outcomes`, `sections`, `lab`, and `scenario`. The `QUESTIONS` object contains eight questions per module. Keep IDs (`data`, `network`, `software`, `troubleshoot`) stable so browser-local progress remains compatible. Check that answer indices are zero-based.

## Technical clarifications

- kB and MB use decimal powers (1,000 and 1,000,000 bytes); KiB and MiB use binary powers (1,024 and 1,048,576 bytes).
- Unicode code points are not the same as UTF-8 bytes; the encoder shows the actual bytes.
- Hexadecimal is a compact human-readable representation of binary values, not inherently smaller stored data.
- MAC addresses can be spoofed; do not treat them as proof of identity.
- Network and troubleshooting labs are simulations only, not real network tests.

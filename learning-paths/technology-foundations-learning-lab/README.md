# Technology Foundations — Learning & Exam Readiness

A standalone, static GitHub Pages learning path containing 10 modules, 51 lessons, and 50 original scenario-based practice questions.

## Installation in an existing GitHub Pages repository

1. Download and extract the ZIP.
2. Copy the `technology-foundations-learning-lab` directory into the repository's `learning-paths/` directory.
3. Commit the new folder on the branch that publishes the existing GitHub Pages site.
4. Open `https://<account>.github.io/<repository>/learning-paths/technology-foundations-learning-lab/`.
5. Optionally add a navigation link to the existing homepage. Do not replace its current files.

For the user's existing Pages deployment, the expected path *after the folder is committed* is:
`https://jdmc-services.github.io/open-technology-learning-lab/learning-paths/technology-foundations-learning-lab/`

The link will not work until the folder is published. No changes to GitHub have been made by generating this package.

## Student privacy

- No account, analytics, remote tracking, or external dependencies.
- The `localStorage` key `technology-foundations-v1` stores the most recent correctness and attempt count per question on the current device/browser.
- The Export button downloads a local JSON progress file; the Reset button clears progress.
- Do not ask students to upload identifiable progress files to a public GitHub repository.

## Editorial and IP safeguards

- All lesson prose and 50 practice questions were newly authored.
- No certification exam question stems, proprietary distractors, screenshots, or answer keys are included.
- This resource is not affiliated with or endorsed by CompTIA.
- Review technical accuracy and institutional assessment policies before publication.
- `content.json` is public by design; it contains only original practice questions and answer explanations, not real exam content.

## Technical note

The site fetches `content.json`, so open through GitHub Pages or a local web server (e.g. `python -m http.server 8000` from the parent directory), not `file://`.

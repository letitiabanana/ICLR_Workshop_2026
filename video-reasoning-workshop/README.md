# Video Reasoning Workshop website

Static, responsive GitHub Pages site. No build tools required.

## Preview
Open `index.html` in a browser.

## Publish on GitHub Pages
1. Create a public GitHub repository (e.g., `video-reasoning-workshop`).
2. Upload `index.html`, `styles.css`, `script.js`, and the `assets` directory to the repository root.
3. Open **Settings → Pages**; under **Build and deployment**, select **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. Wait for GitHub to display the published URL.
5. Under **Settings → Collaborators and teams**, invite GitHub user `pritamqu`.

## Before making the site public
- The supplied PDF is titled **NeurIPS 2026 Workshop on Video Reasoning**, but the request is for an **ICLR workshop proposal**. This draft deliberately says 'ICLR workshop proposal' without inventing an edition year, date, venue, or acceptance status. Confirm conference branding and whether the speaker lineup is still current.
- CFP topics are adapted from the proposal, but submission deadline, format, portal, and other details are intentionally marked as forthcoming.
- Headshots are **placeholders** (initials), not actual photographs. Save approved images under `assets/`, then set `photo: 'assets/person-name.jpg'` on the corresponding object in `script.js`.
- Affiliation text is abbreviated from the supplied proposal; reconfirm before publication.

## Edit content
- `index.html`: title, introduction, CFP, footer, announcement text.
- `script.js`: speaker and organizer names, affiliations, links, photo paths.
- `styles.css`: styling.

# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Portfolio presentation preferences

- Feature interactive project experiences alongside concise design stories: problem, contribution, design decisions, and outcome.
- Include BSA Calendar / Broadcasting Event Platform and borrow the engineering portfolio's clear project previews and exploration links while keeping design reasoning central.
- Label recreated demos and representative previews accurately; do not present sample data as production evidence.
- Use a multipage portfolio: a concise homepage with project previews and a short introduction, dedicated project case studies with prototype links, and an About page containing practice, experience, and resumes. Keep contact available on every page.

- Keep “Practice” out of the primary navigation; the user considers that navigation item unnecessary.

- About page: omit the “Background / Practice / Experience” eyebrow and use a compact “About Shaina” heading on the cream background that flows into the page content.

- In the About heading, color only “Shaina” purple (#76558a); keep the cream background.
- Present the About biography as a single reading column with a full-width strengths grid below; avoid the previous split heading/body columns and narrow wrapping.
- Clearly identify project visuals and prototypes as independent portfolio remakes, not actual GM applications, production screenshots, or official GM products. Distinguish original work history from recreated design explorations.
- Feature Gamification & Learning with its Figma remake prototype: https://grain-fluid-14768550.figma.site/.
- The dedicated BSA remake prototype is in progress; identify the existing local calendar as a sample interaction demo.
- Use an interface preview with a subtle labeled overlay for the Electron AI gallery card.

- Electron card: use the actual exported Figma frame (file PECexQvNxp0jLedKtJRZZk, node 3:3), saved as public/assets/electron-figma.png, instead of the engineering portfolio concept image.

- ISE replacement prototype: https://www.figma.com/make/Jo6o4zhUv1Y7vPxtPbuwIl/iseexampleprototype?t=HNOiXZn6KcWP4UDI-20&fullscreen=1 — use this Figma Make destination for every ISE prototype link.

- Keep design-portfolio experience aligned with the engineering About page: GM (January 2023–May 2026), Trinetica (January 2020–January 2023), All American Petting Zoo (March 2021–January 2023), and Purdue University Graphic Design & Computer Science (2016–2022), with Purdue presented as education/foundations.

- Include Growing Minds and Pin Seekers Golf Club as selected freelance engagements within the resume-supported 2017–2023 period; do not invent individual employment dates or formal titles.

- Include Lincoln Financial Group alongside the selected 2017–2023 freelance engagements, with resume-supported full-stack, database, API, and data-pipeline scope.

- Omit “Selected Work” from the primary navigation; retain the “Explore the work” call to action.

- Include the Figma profile in the shared footer: https://www.figma.com/@shainagonzales1.

- Use Shaina_Elizabeth_Gonzales_Design_Resume.pdf as the current design resume. Show one Design Resume download in the header, About page, and shared footer instead of the older two resume variants.

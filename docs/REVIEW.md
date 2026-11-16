# Swiss portfolio revision — review guide

Branch: `feat/swiss-portfolio-review`.

## Tasks and commits

1. `content: strengthen engineering ownership and MBTI achievement evidence` — update profile, capabilities, employment, project and contact wording; align search and social descriptions.
2. `feat: foreground selected achievements and simplify portfolio navigation` — show four MBTI contributions, add readable career bullets, replace the animated introduction and improve project-dialog focus restoration.
3. `style: introduce a restrained Swiss typography and grid system` — off-white canvas, dark typography, red accent, aligned responsive grids and a naturally framed portrait.
4. `chore: document branch review and stop tracking generated build output` — update documentation and remove generated files from Git tracking, preserving local build output and the existing ignore rule.

## Run the review

```sh
pnpm install
pnpm build
pnpm preview
```

Use the local preview URL printed by Vite. It serves this checkout's build. For live edits, use `pnpm dev` instead. Neither command publishes the site.

## What to inspect

- First screen: current senior engineering value, stable headline and clear contact action.
- Selected work: delivery migration, Pinia migration and regression coverage, developer enablement and the AI prototype frontend.
- Experience: formal titles and chronology, personal contributions and shared team responsibility.
- Capabilities: engineering depth, practical AI-assisted work and languages.
- Projects: accurate in-development labels, scope and next steps.
- Phone and tablet layouts: readable text, reachable navigation and no horizontal overflow.

## Validation performed on 16 November 2026

- TypeScript typecheck passed after the content and page-structure tasks.
- Production build passed with Vite; built output served and inspected locally.
- Desktop, 768px tablet, 390px phone and 320px small-phone layouts checked; no horizontal overflow detected.
- All in-page anchor destinations existed; the portrait loaded successfully.
- Both project dialogs opened. Escape closed the dialog, restored body scrolling and returned focus to the triggering button. The skip link moved focus to the main content.
- Contact destinations, updated page description and valid Person JSON-LD inspected in the production build.
- No browser warning/error logs observed during the development-preview inspection.
- Core palette contrast ratios: dark text on paper 16.17:1; secondary text on paper 6.57:1; accent on paper 5.68:1; white text on accent 6.30:1. This is a palette check, not a full accessibility certification.
- The introduction and page content have no entrance or scroll animations; reduced-motion CSS disables smooth scrolling.

These checks cover the local browser and common responsive widths. They do not constitute testing across every browser, device or assistive technology. No production deployment is included in this branch review.

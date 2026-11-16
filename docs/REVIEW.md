# Swiss portfolio revision — review guide

Branch: `feat/swiss-portfolio-review`.

## Tasks and commits

1. `content: strengthen engineering ownership and MBTI achievement evidence` — update profile, capabilities, employment, project and contact wording; align search and social descriptions.
2. `feat: foreground selected achievements and simplify portfolio navigation` — show four MBTI contributions, add readable career bullets, replace the animated introduction and improve project-dialog focus restoration.
3. `style: introduce a restrained Swiss typography and grid system` — off-white canvas, dark typography, red accent, aligned responsive grids and a naturally framed portrait.
4. `chore: document branch review and stop tracking generated build output` — update documentation and remove generated files from Git tracking, preserving local build output and the existing ignore rule.
5. `design: restore an animated alpine cover with a modern Swiss identity` — replace the austere first design with a cinematic image cover, warm orange typography, portrait parallax, controllable motion, illustrated achievement cards and stronger light/dark section contrast.

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

## Initial revision validation — 16 November 2026

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

## Modern Swiss revision — 16 November 2026

The latest design follows feedback requesting a more attractive modern Swiss page with animation and the earlier image-cover feel. The existing alpine scene and portrait are reused. Achievement illustrations are decorative diagrams, not screenshots of internal systems or finished personal projects.

- TypeScript and the production build passed after the redesign.
- Desktop cover, selected-work cards and dark capability section inspected in the production preview.
- Layout checked at 320px, 390px, 768px and 1024px; document scroll width did not exceed client width.
- Pause froze both scenery and orbit animations and made every reveal section visible. Resume restarted motion successfully.
- The decorative portrait cannot intercept clicks; motion controls remain above the artwork.
- In-page anchors remained valid. The AI project dialog opened, closed with Escape and returned focus to its trigger.
- No warning/error logs observed in the final production-preview inspection.
- Core action contrast: dark text on the hero's orange button 5.45:1; white text on the darker dialog-button accent 5.93:1. Decorative lighter colours are reserved for large headings or artwork.
- Reduced-motion handling is implemented in both CSS and a media-query hook. The pause state disables smooth scrolling as well as animations and reveals. A full OS-preference/device matrix has not been tested.

The earlier static-design descriptions and palette results above document the first four commits. The latest commit supersedes that visual direction while retaining the strengthened professional evidence.

## Swiss-red and portrait refinement — 16 November 2026

The latest refinement restores the original `hero-alpine-airplane.png` mountain background, replaces orange accents with Swiss red (`#e30613`), and removes the N. monogram from the header and favicon. The portrait is stationary, with no transform/filter, orbit graphics or glass caption; its fade is confined to the bottom edge. Background motion, section reveals and pause/resume remain available.

Validation: TypeScript and production build passed. The production preview confirmed the correct mountain asset, a loaded portrait with computed transform/filter both `none`, no header monogram, working pause/resume and no document overflow at 320px, 390px, 768px and 1024px. No browser warning/error logs observed. White text on the main red button has 4.88:1 contrast; the lighter red used for small accents on dark surfaces has 5.31:1 contrast against the base navy. These changes supersede the prior orange/portrait-parallax design notes.
## Portrait size and Swiss destination flag — 16 November 2026

The portrait renders at 60% of its previous width and height, preserving its centre within the existing right-hand portrait area. No transform scaling is used. A 24px Swiss flag replaces the arrow beside “Germany → Switzerland”; it identifies the relocation destination and is not used as a personal logo. The background image is unchanged.

Validation: production build and TypeScript passed. Desktop and 390px mobile browser measurements confirmed the 0.6 size ratio, unchanged centre (within subpixel rounding), a single 24px flag and no horizontal overflow. The photo-sizing and destination-flag tasks are recorded as separate commits.
## Grounded portrait, white action and purposeful motion — 16 November 2026

Three separate task commits correct the composition and add animation:

- Anchor the existing 60%-sized portrait to the bottom of the cover, preserving its horizontal position.
- Give Explore my work a white background, dark navy text and a red arrow, with a restrained hover response.
- Add a line-by-line headline entrance, mouse parallax on the mountain background only, staged achievement-diagram reveals and a radar pulse when hovering the aviation project. Pause and reduced-motion handling cover these effects. The portrait remains still.

Validation: production build and TypeScript passed. Browser measurements confirmed zero gap between the portrait and cover bottom on desktop and 390px mobile, white/dark/red computed button colours, no overflow at 320px or 390px, an unchanged portrait transform during mountain pointer response, and the expected headline/diagram animation names. Pause stopped scenery motion, reset parallax and exposed all content; resume restored motion. Resizing and focusing controls no longer scrolls the clipped hero internally, and its fact bar meets the cover boundary with zero gap. No browser warning/error logs observed.
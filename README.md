# Nazariy Bohun · Personal website

A React, TypeScript and Vite portfolio focused on senior software engineering, technical solutions and delivery. The page presents selected contributions at Mercedes-Benz Tech Innovation, career history, capabilities, personal projects and contact details.

## Local development

Use Node.js 20.19+ or a compatible newer version, and pnpm.

```sh
pnpm install
pnpm dev
```

Open the local address printed by Vite. If its default port is occupied, Vite selects another available port.

## Check and preview the production build

```sh
pnpm typecheck
pnpm build
pnpm preview
```

Open the preview address printed in the terminal. Preview serves the production bundle; development mode supports live editing.

`dist/` is generated and ignored by Git. Build before deployment. The existing `.openai/hosting.json` points static hosting at that generated directory.

## Content and implementation

| File | Purpose |
| --- | --- |
| `src/content.ts` | Profile, selected achievements, employment, capabilities and project status |
| `src/App.tsx` | Page sections, navigation and selected-project state |
| `src/components/Hero.tsx` | Original mountain cover, stationary portrait and motion control |
| `src/components/WorkVisual.tsx` | Decorative diagrams for the achievement cards |
| `src/hooks/useReducedMotion.ts` | System motion preference, including live preference changes |
| `src/components/ProjectDialog.tsx` | Native modal with scope, next steps and focus restoration |
| `src/components/Contact.tsx` | Contact and relocation copy |
| `src/styles.css` | Shared typography, colours, navigation, buttons and dialog styles |
| `src/components/Hero.css` | Responsive introduction layout |
| `src/content-sections.css` | Achievements, career, capabilities and project layouts |
| `src/contact.css` | Contact layout and links |
| `src/motion.css` | Headline reveal, achievement-diagram entrances and optional radar interaction |
| `index.html` | Page title, social metadata and Person structured data |
| `public/images/` | Existing portrait and image assets |

The modern Swiss visual system combines a cinematic alpine image cover, bold typography, Swiss-red accents, illustrated achievement cards and consistent grid alignment. The original mountain background drifts slowly and responds subtly to a mouse pointer. The smaller portrait stays stationary and anchored to the cover bottom, without orbit graphics, a glass caption or portrait transforms. The headline reveals line by line, and achievement diagrams animate as their cards enter view. The hero's Pause animation control pauses motion across the page. Content sections reveal as they enter the viewport; pausing exposes all sections immediately. System reduced-motion preferences disable animation, reveal transitions and smooth scrolling. There is no loading overlay or scroll-pinned introduction.

The AI Engineering Agent and Planes Over Me are personal projects **in development**. Their descriptions distinguish current scope from planned exploration. The internal AI prototype case study describes frontend delivery, not ownership of its model or backend.

## Review before merging

The current redesign is developed on `feat/swiss-portfolio-review`. See [the review guide](docs/REVIEW.md) for task commits, local preview instructions and validation results. A feature-branch push does not itself merge or deploy `main`.

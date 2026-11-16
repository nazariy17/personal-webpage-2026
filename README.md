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
| `src/components/Hero.tsx` | Static introduction, portrait and professional summary |
| `src/components/ProjectDialog.tsx` | Native modal with scope, next steps and focus restoration |
| `src/components/Contact.tsx` | Contact and relocation copy |
| `src/styles.css` | Shared typography, colours, navigation, buttons and dialog styles |
| `src/components/Hero.css` | Responsive introduction layout |
| `src/content-sections.css` | Achievements, career, capabilities and project layouts |
| `src/contact.css` | Contact layout and links |
| `index.html` | Page title, social metadata and Person structured data |
| `public/images/` | Existing portrait and image assets |

The visual system uses an off-white canvas, dark text, a restrained red accent and consistent grid alignment. Content is available immediately, without loading overlays, scroll-pinned introductions or reveal animations. Reduced-motion preferences disable smooth scrolling.

The AI Engineering Agent and Planes Over Me are personal projects **in development**. Their descriptions distinguish current scope from planned exploration. The internal AI prototype case study describes frontend delivery, not ownership of its model or backend.

## Review before merging

The current redesign is developed on `feat/swiss-portfolio-review`. See [the review guide](docs/REVIEW.md) for task commits, local preview instructions and validation results. A feature-branch push does not itself merge or deploy `main`.

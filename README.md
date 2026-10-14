# Nazariy Bohun · Personal Portfolio

A personal portfolio implemented with **React 19, TypeScript and Vite 7**. It presents my professional experience, product/engineering focus and ongoing side-project work.

**Project status:** The portfolio website itself is implemented in this repository. The AI Engineering Agent and aviation project described on the website are **in development**, not completed production products.

## What is implemented

- Scroll-controlled introductory section with three rotating professional focus areas, a portrait photo and a progress indicator.
- Responsive sections for background, experience, technical capabilities, projects and contact details.
- Project detail dialogs, scroll-reveal effects, and LinkedIn/email contact links.
- Motion controls and reduced-motion behaviour, keyboard focus affordances and a skip link.
- TypeScript type checking as part of the build.

The portrait **image is already included and configured** (`public/images/nazar-portrait-transparent.png`). A portrait-turn **video is not included**: `profile.portraitVideo` is currently `null`. Scroll interaction moves the existing image subtly, but does not simulate real video frames.

## Run locally

Use Node.js 20.19+ or a compatible newer version, and pnpm:

```bash
corepack enable
pnpm install
pnpm dev
```

Check types and build a production bundle:

```bash
pnpm typecheck
pnpm build
pnpm preview
```

Vite outputs the production files to `dist/`.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/content.ts` | Profile, experience, capabilities, personal interests and project status |
| `src/App.tsx` | Application page and section composition |
| `src/components/Hero.tsx` | Scroll-controlled introduction and portrait behaviour |
| `src/components/ProjectDialog.tsx` | Accessible project detail dialog |
| `src/hooks/useReducedMotion.ts` | Reduced-motion preference |
| `src/styles.css`, `src/components/*.css` | Responsive styling and effects |
| `public/images/` | Portrait and visual assets |

## Edit and extend

Professional content and contact details are configured in `src/content.ts`. The existing email, LinkedIn links and portrait image are already populated; there is no need to add placeholder values before using the website.

An optional real head-turn video can be added later by placing the media in `public/` and setting `profile.portraitVideo`. Without a video, the implementation intentionally displays the still image.

The site describes AI-related exploration separately from completed engineering employment. Do not interpret the planned AI assistant as an existing deployed service.

## Hosting

The repository contains a static hosting configuration under `.openai/hosting.json`. A buildable repository is not, by itself, proof of a particular live deployment or uptime level.

# Nazar's Personal Portfolio

A React + TypeScript portfolio built with Vite. The design follows the supplied video reference: a dark cinematic hero, rotating headlines, spotlight movement, scroll reveals, project cards, and oversized typography.

## Getting started

Install Node.js 20.19+ or 22.12+.

```sh
corepack enable
pnpm install
pnpm dev
```

Open the local URL printed by Vite.

```sh
pnpm typecheck
pnpm build
pnpm preview
```

The production output is generated in `dist/`.

## Editing content

- `src/content.ts`: name, introduction, biography, skills, experience, projects, and contact links.
- `src/App.tsx`: page sections and navigation.
- `src/components/`: hero, scroll reveals, and accessible project dialog.
- `src/hooks/`: reduced-motion preference handling.
- `src/styles.css`: typography, colors, layouts, responsiveness, and animation.
- `public/`: images, portrait video, and favicon.

Set `profile.portraitImage` to `/portrait.webp`, and optionally `profile.portraitVideo` to `/portrait.mp4`, after placing those files in `public/`. The monogram remains the intentional fallback until a real portrait is supplied. A photo alone cannot reproduce a true head-turning video.

Set `profile.email` and `profile.linkedin` when ready. No contact destinations are invented.

## Content status

Career copy is provisional, based on prior conversation details; the source CV has not yet been supplied in this task. Project titles and case studies are placeholders as requested. Replace them in `src/content.ts` before making the portfolio public.

## Accessibility

Semantic sections, a skip link, native modal focus handling and Escape support, visible focus indicators, responsive layouts, reduced-motion preference handling, and a motion pause button are included.

## Hosting

The existing Sites project is retained in `.openai/hosting.json`. Source files are separate from build output; credentials are never stored in this repository.


## Scroll-controlled introduction

The introduction is pinned for approximately two viewport heights of scrolling. Scroll position drives portrait movement, reversible headline crossfades, and the progress indicator. It does not advance on a timer. The next section follows normally after the sequence. Reduced-motion preferences disable pinning and show a static introduction; Pause motion freezes the visual sequence while leaving normal page scrolling available.

For the actual head-turning effect, put a short portrait turn video in `public/` and set `profile.portraitVideo` in `src/content.ts`. The video playhead is scrubbed directly by scrolling, including in reverse; it never autoplays. A short browser-compatible MP4 with frequent keyframes is best for responsive seeking. Use `profile.portraitImage` as its poster/fallback. A still image receives only a subtle plane tilt and cannot show new views of a person's face. Until portrait assets are supplied, the monogram demonstrates the scroll-linked motion.

## Type safety

Strict TypeScript checks component props, content models, DOM refs, and event handling. `pnpm build` runs the type checker before generating production assets. Add or edit portfolio content in `src/content.ts`.

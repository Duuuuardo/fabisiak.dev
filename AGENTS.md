# fabisiak.dev

Personal site of Eduardo Fabisiak. Next.js 15 (App Router) + Tailwind 4 + Motion, bilingual PT/EN.

## Commands

- `npm install` - install deps
- `npm run build` - production build (also the verification step; there is no test suite)
- `npm start` - serve the production build locally

## Conventions

- All visible copy lives in `src/content/content.js` in both `pt` and `en`. Never hardcode strings in components.
- Blog posts are Markdown in `content/blog/` with frontmatter (title, date, excerpt, tags).
- Design tokens in `@theme` inside `src/app/globals.css`. The page is single-theme dark (navy). Keep one accent family (`accent` / `accent-bright`).
- No em-dashes or en-dashes in visible copy. Terminal flavor: `>` prompt markers, `~/path` nav links, blinking block cursor.
- Commits: authored by Eduardo, no AI co-author trailers.

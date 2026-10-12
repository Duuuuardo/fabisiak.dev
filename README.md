# fabisiak.dev

Personal site of Eduardo Fabisiak, software engineer (backend & full-stack).
Live at [fabisiak.dev](https://fabisiak.dev).

## Stack

- **Next.js 15** (App Router, static export-friendly)
- **Tailwind CSS 4**
- **Motion** (animation)
- Canvas generative visuals (no image dependencies)

## Commands

```bash
npm install
npm run dev     # local development
npm run build   # production build
npm start       # serve production build
```

## Structure

```
src/
├── app/               # layout, metadata, global styles
├── content/           # bilingual content (PT/EN)
└── components/        # Nav, Hero, Projects (sticky stack), Experience, Stack, About, Footer
```

Content lives in `src/content/content.js` in both Portuguese and English;
the toggle in the nav switches language and persists the choice.

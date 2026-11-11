# TVCode

TVCode is a small demo site that catalogs fictional software from TV and film. Each show has a page, and each piece of software has a write-up: what it is, how it appears on screen, a rough real-world comparison, tech tags, and a short illustrative snippet.

This is a prototype, not a set of working recreations. The JARVIS HUD, Lumon terminal, LCARS panel, and the other entries are described in the catalog. They are not interactive apps.

## What you can do

- Browse ten shows and their catalog entries from the home page.
- Open a show at `/shows/[slug]` or a build write-up at `/builds/[slug]`.
- Upvote ideas for future entries on `/vote`. Counts start from seeded numbers in `src/data/votes.ts` and live in React state, so a refresh resets them. Each idea can be voted once per page load.
- Submit a build request or a contact message. Both forms POST to [Formspree](https://formspree.io/).

Show and build content is static TypeScript in `src/data/shows.ts`.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion for page and card motion
- Lucide for icons
- Geist and Geist Mono via `next/font`

## Run it locally

Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run lint
npm run build
npm start
```

## Project layout

```
src/app/            routes: home, show, build, vote, contact
src/components/     navbar, footer, cards, motion helpers
src/data/           static show, build, and vote data
```

Show names and references belong to their owners. This is an unaffiliated fan prototype.

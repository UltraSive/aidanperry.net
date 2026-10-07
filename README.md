# aidanperry.net

Personal site and blog for Aidan Perry, built with SvelteKit 3, Svelte 5, shadcn-svelte and Tailwind CSS 4.

## Development

```sh
npm install
npm run dev
```

`npm run check` type-checks, `npm run lint` runs Prettier and ESLint.

## Content

| What                       | Where                      |
| -------------------------- | -------------------------- |
| Bio, experience and skills | `src/lib/data/profile.ts`  |
| Projects                   | `src/lib/data/projects.ts` |
| Blog posts                 | `content/blog/<slug>.md`   |

### Writing a post

Add a markdown file to `content/blog/`. The file name is the URL slug.

```md
---
title: My post
description: One-line summary for the post list, RSS and social cards.
date: 2026-10-06
tags: [eBPF, Go]
draft: true # optional; drafts show in `npm run dev` only
---

Post body in GitHub-flavored markdown.
```

Posts are rendered at build time (remark/rehype, Shiki for code) and styled with
[shadcn/typeset](https://ui.shadcn.com/docs/typeset). The typeset stylesheet lives in
`src/routes/typeset.css` and the blog preset (`.typeset-blog`) is in `src/routes/layout.css`.
An RSS feed is generated at `/blog/rss.xml`.

## Deploying

Every page is prerendered and served by `@sveltejs/adapter-node`.

```sh
docker build -t aidanperry.net .
docker run -d -p 3000:3000 --restart unless-stopped aidanperry.net
```

The container listens on port 3000 (override with `-e PORT=...`) and runs as the unprivileged `node` user.

> `scripts/fix-html-mime.js` runs after `vite build` to work around a SvelteKit 3.0.1 bug where
> prerendered HTML is served without a `Content-Type` header. Delete it once that is fixed upstream.

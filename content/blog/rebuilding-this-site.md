---
title: Rebuilding this site with SvelteKit 3
description: Moving off a headless CMS to markdown files, shadcn-svelte and a single Docker image.
date: 2026-10-06
tags: [SvelteKit, Docker]
---

The old version of this site pulled posts from a Strapi CMS. That was one more server to keep alive, and when it went away the blog went with it. This rebuild keeps everything in the repo.

## The stack

- **SvelteKit 3** and **Svelte 5** with runes
- **shadcn-svelte** components on Tailwind CSS 4
- **shadcn/typeset** for everything rendered from markdown
- **adapter-node** inside a small Docker image

Every page is prerendered at build time, so the Node server only has to hand out static files.

## Writing a post

A post is a markdown file in `content/blog/`. The file name becomes the URL, and a bit of frontmatter supplies the rest:

```yaml
---
title: My post
description: One-line summary for the list and social cards.
date: 2026-10-06
tags: [eBPF, Go]
draft: false
---
```

Code blocks are highlighted at build time with Shiki and follow the light and dark theme:

```go
func main() {
	http.HandleFunc("/healthz", func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusNoContent)
	})
	log.Fatal(http.ListenAndServe(":8080", nil))
}
```

## What changed

| Before                | After                 |
| --------------------- | --------------------- |
| Strapi CMS            | Markdown in the repo  |
| SvelteKit 1, Svelte 4 | SvelteKit 3, Svelte 5 |
| Tailwind typography   | shadcn/typeset        |
| Vercel                | Docker, anywhere      |

> Fewer moving parts means fewer things to page you at 3 a.m.

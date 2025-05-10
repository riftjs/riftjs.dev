---
title: Rift v0.1 Released — A Developer-Centric Static Site Generator
slug: rift-v0-release
locale: en
date: 2025-05-28
tags: [rift, ssg, release]
image: https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
summary: Rift is now publicly available. Build sites with full control over routing, collections, and dynamic templates — with zero guesswork.
featured: true
---

After months of development, **Rift v0.1** is here — a developer-centric static site generator that gives you complete control without the guesswork.

Unlike other SSGs that rely on opinionated conventions, complex file-based routing, or hidden magic, **Rift is intentionally explicit**. It’s built for developers who want to generate pages with full knowledge of how and why each one exists.

---

### ✨ Why Rift?

Most SSGs fall into one of two camps:

- **Too simple** — good for blogs, but limited when scaling to apps or complex sites.
- **Too abstract** — powered by plugins and conventions that feel like black boxes.

Rift is different. It gives you:

- Explicit **controller files** that determine routing
- Real data objects, not fake slugs or placeholders
- Clean **permalink logic**, without string hacks
- Reusable templates via **Nunjucks**, or anything you plug in
- A strong foundation for **dynamic SSR later**, without changing your code

You define the data. You define the pages. You define the output.

---

### 🚀 What’s in v0.1?

The first public release includes:

- ✅ Controller-based routing (`params()` + `permalink()`)
- ✅ Built-in collection API with localization support
- ✅ Pagination helper for blog indexes, categories, etc.
- ✅ Nunjucks templating engine with layouts, includes, and filters
- ✅ Fully static output to `dist/`
- ✅ CLI scaffold: `npm create rift@latest`

Plus:

- Dark theme default styling
- Developer-focused IDE-style page documentation
- Real error handling (404, missing routes)

---

### 🛣️ What’s Next?

We're just getting started. Coming next in future versions:

- ✅ Page resolution at runtime (SSR-ready structure)
- ✅ Component syntax for reusable blocks
- ✅ Plugin API for data sources, image pipelines, and more
- ✅ Dev server with hot reload and live error preview

If you're tired of guessing what your SSG is doing — and just want to ship — Rift is built for you.

---

### 💬 Feedback? Ideas?

We want to hear from early adopters. Join the community, open issues, or suggest features on GitHub.

---

### 🧪 Try It Now

You can scaffold a Rift site instantly with:

```bash
npm create rift@latest
````

Whether you're building a blog, a docs site, or something more complex, Rift is your canvas — not your cage.

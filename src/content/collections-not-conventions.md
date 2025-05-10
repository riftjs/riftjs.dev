---
title: "Collections, Not Conventions: Group Your Content Intentionally"
slug: collections-not-conventions
collection: posts
locale: en
date: 2025-05-10
tags: [collections, content, architecture]
category: Philosophy
summary: In Rift, content grouping is explicit and controlled — no more guessing based on folders or filenames.
featured: false
image: https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

Frameworks love to treat your folders like logic.

Drop a file in `posts/`, and it's magically a post. Nest something in `projects/` and it’s supposed to mean something special. But what if your site has 3 languages? Or multiple content types? Or multiple post formats?

Then you're stuck organizing content for your **generator**, not your team.

**Rift flips that.**

---

### 📦 Define Collections with Intent

In Rift, you declare your collection by adding a frontmatter key:

```yaml
collection: posts
```

That’s it.

You can put the file anywhere. Name it anything. Rift doesn’t care where it lives — just what it **is**.

---

### 🧠 No More Folder-Based Inference

Other SSGs make dangerous assumptions:

* A file in `content/blog/` must be a blog post
* A file in `projects/` must follow some plugin logic
* Nested folders become slugs, whether you like it or not

That’s fragile.

Rift avoids all of this by letting you group by metadata — not paths. You get clean intent, not guesswork.

---

### 🔄 Centralized Collection Access

Want all your posts? In a controller, it’s just:

```ts
const posts = context.collections.posts
```

From there, paginate, filter, localize, or do anything else you need — based on actual content values, not file hierarchy hacks.

---

### ✨ Real Grouping. Real Use Cases.

With Rift collections, you can:

* Localize your content — `collection: docs`, `locale: fr`
* Organize by purpose — `collection: changelog`, `collection: help`
* Render filtered indexes — like “all blog posts tagged `react`”

And since it’s all just objects, you can manipulate it however you want.

---

### 🧪 Simpler Sites. Smarter Structure.

You shouldn’t have to fight your folder tree to make your content work.

Rift gives you simple, intentional, metadata-driven grouping — so your site structure reflects your **needs**, not your framework’s opinions.

---

### 🧰 Try It Now

```bash
npm create rift@latest
```

Group your content your way. Rift won’t stand in your way.
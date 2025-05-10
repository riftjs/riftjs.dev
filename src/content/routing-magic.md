---

title: "Routing Shouldn’t Feel Like Magic: Build URLs Like a Developer"
slug: routing-without-magic
collection: posts
locale: en
date: 2025-05-10
tags: [routing, control, permalink]
category: Philosophy
summary: "Rift lets you define your site’s URLs like a real developer — no file system tricks, no brackets, no surprises."
featured: false
image: https://images.unsplash.com/photo-1531574595918-cb77c99fe5e2?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

Modern site generators love the illusion of simplicity.

You drop a file into `pages/blog/[slug].js` and the framework smiles: “We’ve handled routing for you.” Until you want to localize it. Or paginate it. Or generate routes from dynamic data.

Then you're in abstraction hell — juggling folders, filenames, and undocumented behavior.

**Rift doesn’t play that game.**

---

### 🧭 Real Routing with Real Data

In Rift, you define routes using two functions:

* `params(ctx)` – tells Rift what data you want to render
* `permalink(ctx)` – tells Rift exactly what URL to use for each page

That’s it. No guessing. No magic interpolation. No pretending that file structure is routing logic.

---

### 💥 File-Based Routing Fails at Scale

It works great for a five-page site. But try building a multilingual, paginated, tag-filtered blog with clean URLs using just filenames and folders. You’ll end up with:

* Overnested folders
* Conditional logic inside layout files
* Hidden behaviors based on file naming

It’s brittle, unreadable, and difficult to scale.

---

### ✨ With Rift, URLs Are Just Strings

Want this?

`/en/blog/javascript-is-awesome/`

You write:

```ts
return `/${ctx.locale}/blog/${ctx.params.slug}/`
```

Simple. Obvious. Flexible.

---

### 🔁 Dynamic Pages? Easy.

If your data comes from an API, a DB, or a flat file — no problem.

In your controller, fetch it. Loop through it. Use `ctx.param()` to declare pages. Rift doesn’t care how you build the data — it just renders what you tell it to.

No restrictions. No "but only if it's in a folder."

---

### 🧠 Be the Router

You’re a developer. You don’t need a framework guessing what you meant. Rift gives you the tools to define your site’s structure like an engineer — not a magician.

---

### ⚡ Get Started

```bash
npm create rift@latest
```

Within 30 seconds, you’ll be writing actual route logic — not naming files to hope they behave the way you want.
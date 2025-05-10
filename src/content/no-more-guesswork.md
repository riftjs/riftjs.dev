---
title: "No More Guesswork: Why Rift Doesn’t Hide Anything From You"
slug: no-more-guesswork
collection: posts
locale: en
date: 2025-05-10
tags: [transparency, developer-experience, anti-magic]
category: Philosophy
summary: "Rift is built for developers who want to know exactly how their site is generated. No magic strings. No hidden routes. Just clear, predictable behavior."
featured: true
image: https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0
---

Frameworks love magic.

Put a file in a folder, and suddenly it's a route. Add a bracket in the filename, and boom — it’s dynamic. Want to override a template? Good luck figuring out what level of abstraction you’re allowed to touch.

We’ve all been there: spending more time guessing how the system works than actually building.

**Rift doesn’t do that.**

---

### 🔍 Explicit is Powerful

Rift gives you the power to define exactly what pages exist using real data, not conventions.

You write a `params()` function in a controller file, and return the specific params you want. You write a `permalink()` function, and it returns the exact URL you want.

No string interpolations. No file naming hacks. No magic folders. Just code that behaves how you write it.

---

### ✂️ Magic Hides Responsibility

Magic always comes at a cost:

- Debugging becomes harder  
- Documentation becomes essential instead of optional  
- Scaling introduces fragile edge cases  

Rift avoids all of that by treating your site as a composition of explicit parts. You decide what exists — the system doesn’t invent anything behind your back.

---

### 💡 What You See is What You Ship

When you call `ctx.param({ slug: 'hello-world' })`, Rift will generate a page for that slug. That’s it. If you don’t define it, it doesn’t exist.

That makes things like localization, pagination, and conditional routing **100% predictable**. You never have to wonder “Where did this route come from?” again.

---

### 📎 Examples of No-Guesswork in Action

- **Want paginated posts?** You define the pages, their slugs, and the URLs.
- **Need a 404 page?** You create it manually and control the layout.
- **Using multiple languages?** You pass in the locale yourself, not rely on auto-folder parsing.

Every part of the site is under your control — not your framework’s interpretation of it.

---

### 🧠 Who Is Rift Built For?

Rift is for developers who:

- Prefer configuration over convention
- Want full control over their routing
- Don't want to learn an internal plugin system to do basic things
- Believe their build system should be transparent, not opinionated

If you're the type of dev who reads the source when something breaks — this tool was made for you.

---

### 🧪 Try It Yourself

Install Rift and feel the difference:

```bash
npm create rift@latest
````

You’ll be writing real route logic in under a minute — and deploying a fully static site with zero surprise behavior.

---

### 🛠️ TL;DR

* **No file-based routing**
* **No convention-based collections**
* **No hidden logic**
* **No guesswork**

Just you, your data, and a clear pipeline to output.

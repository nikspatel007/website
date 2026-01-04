# Blog Section

Markdown-based blog integrated into the main site.

---

## Overview

- **Format**: Markdown files in repository
- **Location**: `src/content/blog/` or similar
- **Benefits**:
  - Version controlled
  - Easy to write and edit
  - Perfect for llms.txt / AI discoverability
  - No external CMS dependency
  - Can be authored from anywhere (even mobile with git)

---

## Content Categories (Potential)

| Category | Description |
|----------|-------------|
| **Building** | Technical posts, project breakdowns, coding learnings |
| **Flying** | Aviation experiences, lessons from the cockpit |
| **Creating** | DJ mixes, creative projects, Garba/dance |
| **Traveling** | Trip stories, photography journals |
| **Thinking** | Essays, reflections, ideas |

*Categories TBD based on what feels natural to write about.*

---

## Post Structure

```markdown
---
title: "Post Title"
date: 2026-01-04
category: building
description: "Brief description for SEO/AEO"
tags: ["react", "3d", "tutorial"]
featured: false
draft: false
---

# Post Title

Content here...
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title |
| `date` | Yes | Publication date |
| `category` | Yes | Primary category |
| `description` | Yes | SEO meta description (also for llms.txt) |
| `tags` | No | Array of tags |
| `featured` | No | Show on homepage |
| `draft` | No | Hide from production |

---

## Design Direction

Following the main site aesthetic:
- Clean, minimal presentation
- Good typography and readability
- Subtle animations on load/scroll
- Code blocks with syntax highlighting
- Image galleries for travel/photo posts

### Inspiration

- Dennis Snellenberg's project pages (clean, focused)
- Eduard Bodak's content presentation (fluid, visual)
- Elia Locardi's gallery approach (for photo-heavy posts)

---

## Technical Considerations

### Markdown Processing

Options to evaluate:
- `mdx` — Markdown with JSX components
- `marked` + `gray-matter` — Simple parsing
- `@mdx-js/mdx` — Full MDX support
- `contentlayer` — Type-safe content (if using Next.js)

### Features Needed

- [ ] Frontmatter parsing
- [ ] Syntax highlighting (Shiki or Prism)
- [ ] Image optimization
- [ ] Reading time calculation
- [ ] Table of contents generation
- [ ] Related posts
- [ ] RSS feed generation

---

## SEO & AEO for Blog

Each post should:
- Have unique meta title and description
- Use semantic HTML (article, header, section)
- Include structured data (Article schema)
- Be added to llms.txt index
- Use question-style headings where natural (good for AI citation)

### Article Schema Example

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Post Title",
  "author": {
    "@type": "Person",
    "name": "Nik Patel"
  },
  "datePublished": "2026-01-04",
  "description": "Post description"
}
```

---

## URL Structure

Options:
- `/blog/post-slug` — Simple
- `/blog/2026/post-slug` — Year-based
- `/writing/post-slug` — Alternative naming
- `/thoughts/post-slug` — More personal feel

**Decision**: TBD

---

## Changelog

- **2026-01-04**: Initial blog document created

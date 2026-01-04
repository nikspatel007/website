# Technical Stack & Architecture

## Confirmed Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| **Framework** | React | As requested |
| **Build Tool** | Vite | As requested |
| **Styling** | Tailwind CSS v4 | As requested |
| **3D Graphics** | React Three Fiber + Drei | React-native Three.js |
| **Animation** | Framer Motion + GSAP | UI animations + scroll-driven |
| **Content** | Markdown | As requested, easy for LLM ingestion |

---

## Additional Recommendations

| Category | Technology | Why |
|----------|------------|-----|
| **3D Modeling** | Blender → glTF export | Create custom 3D scenes |
| **Scroll Animation** | GSAP ScrollTrigger | Industry standard for scroll effects |
| **Icons** | Lucide React | Clean, consistent icon set |
| **Fonts** | Variable fonts (TBD) | Performance + flexibility |
| **Analytics** | Plausible or Fathom | Privacy-friendly |
| **Deployment** | Vercel or Cloudflare Pages | Easy subdomain management |

---

## Project Structure (Proposed)

```
website/
├── docs/                    # Planning & documentation
├── public/
│   ├── llms.txt            # AI discoverability
│   ├── robots.txt
│   └── assets/             # Static assets
├── src/
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   ├── sections/       # Page sections (Hero, About, etc.)
│   │   ├── 3d/             # Three.js/R3F components
│   │   └── layout/         # Layout components
│   ├── content/
│   │   ├── blog/           # Markdown blog posts
│   │   ├── projects/       # Project descriptions
│   │   └── data/           # JSON data files
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities
│   ├── styles/             # Global styles, Tailwind config
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## Key Technical Decisions

### TypeScript
- **Recommendation**: Yes
- **Reason**: Better DX, catches errors early, good for complex 3D code

### Routing
- **Options**:
  - Single page with scroll sections
  - React Router for separate pages
  - Hybrid (mostly single page, blog as separate routes)
- **Decision**: TBD

### Content Management
- **Approach**: Markdown files in repo
- **Processing**: Use a markdown processor (marked, remark, or MDX)
- **Benefits**:
  - Easy to version control
  - Easy to convert to llms.txt format
  - No external CMS dependency

### 3D Performance Strategy
- Lazy load 3D components
- Use lower poly models on mobile
- Fallback to 2D for low-end devices
- Preload critical 3D assets
- Use instancing for repeated objects

---

## AI Discoverability Setup

### llms.txt Structure

```markdown
# Nik Patel

> Software engineer, pilot, DJ, and maker.

## About
[Brief description]

## Sections
- /about - Background and journey
- /projects - Software and creative work
- /blog - Technical and creative writing
- /hobbies - Aviation, music, dance, travel

## Contact
- Email: [email]
- GitHub: [link]
- LinkedIn: [link]

## Content
- [About](/content/about.md)
- [Projects](/content/projects.md)
- [Blog Posts](/content/blog/index.md)
```

### JSON-LD Schemas to Implement

```javascript
// Person Schema
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nik Patel",
  "url": "https://nik-patel.com",
  "jobTitle": "Software Engineer",
  "knowsAbout": ["Software Development", "Aviation", "Music Production"],
  "sameAs": [
    "https://github.com/nikpatel",
    "https://linkedin.com/in/nikpatel"
  ]
}

// WebSite Schema
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Nik Patel",
  "url": "https://nik-patel.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://nik-patel.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

## Subdomain Architecture

### Main Site: nik-patel.com
- Personal portfolio
- Blog
- About/Contact

### Tools: tools.nik-patel.com
- Separate Vite app or same app with routing
- Shared design system/components
- Individual tool pages

### Deployment Strategy
- Both sites in same monorepo OR
- Separate repos with shared component library
- **Decision**: TBD

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.5s |
| Total Bundle Size (initial) | < 200KB gzipped |

### 3D Performance Notes
- 3D content should lazy load after initial paint
- Mobile should have simplified or no 3D
- Use `<Suspense>` for 3D components
- Consider `@react-three/offscreen` for complex scenes

---

## Development Workflow

### Scripts (Proposed)
```json
{
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "lint": "eslint src --ext ts,tsx",
  "format": "prettier --write src"
}
```

### Pre-commit Hooks
- Lint staged files
- Format code
- Type check

---

## Dependencies to Research

| Package | Purpose | Status |
|---------|---------|--------|
| `@react-three/fiber` | React Three.js renderer | Confirmed |
| `@react-three/drei` | R3F helpers | Confirmed |
| `framer-motion` | Animation | Confirmed |
| `gsap` | Advanced animation | Confirmed |
| `tailwindcss` | Styling | Confirmed |
| `lenis` | Smooth scroll | To evaluate |
| `cmdk` | Command palette | To evaluate |
| `gray-matter` | Markdown frontmatter | To evaluate |

---

## Changelog

- **2026-01-04**: Initial tech stack document created

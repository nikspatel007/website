# Decisions Log

Track design and technical decisions as we make them.

---

## Format

Each decision follows this format:

```
### [Decision Title]
**Date**: YYYY-MM-DD
**Status**: Decided / Pending / Revisit
**Options Considered**:
**Decision**:
**Rationale**:
```

---

## Confirmed Decisions

### Tech Stack Core
**Date**: 2026-01-04
**Status**: Decided
**Decision**: React + Vite + Tailwind CSS v4 + React Three Fiber + Framer Motion + GSAP
**Rationale**: User preference, modern stack, good ecosystem

### Content Format
**Date**: 2026-01-04
**Status**: Decided
**Decision**: Markdown files in repository
**Rationale**: Easy for LLM ingestion (llms.txt), version controlled, no CMS dependency

### Design Direction
**Date**: 2026-01-04
**Status**: Decided
**Decision**: Minimal, playful, techie — like Dennis Snellenberg + Lusion
**Rationale**: Reflects personality — precise but not cold, playful but not childish

### Style References
**Date**: 2026-01-04
**Status**: Decided
**Decision**:
- PRIMARY: dennissnellenberg.com, lusion.co, thevertmenthe.dault-lafon.fr, eduardbodak.com
- PARTIAL: elialocardi.com (photography section only), cydstumpel.nl (hero only)
- NO: Game-like (bruno-simon, robby leonardi), Too corporate (linear, raycast, boom supersonic, joby aviation), Too standard (brittany chiang), Photography others (nick prideaux, carmen huter, photler)
**Rationale**: Want elegant + purposeful 3D, not gamified. Creative but not corporate. Eduard Bodak added for visual storytelling and blending diverse content.

### Core Experience Pillars
**Date**: 2026-01-04
**Status**: Decided
**Decision**: Three pillars define the experience:
1. **Hover Reveals** (from Dennis) — Project cards that come alive
2. **Immersive 3D** (from Lusion) — Purposeful 3D at hero and key moments
3. **Scroll Storytelling** (from all) — Content unfolds as a journey
**Rationale**: Site should "feel like an experience" — memorable, intentional, not just a page to read.

### 3D Strategy
**Date**: 2026-01-04
**Status**: Decided
**Decision**: Use 3D where it makes sense, 2D where it doesn't. Must work on mobile.
**Rationale**: Performance and accessibility matter. 3D should enhance, not hinder.

---

## Pending Decisions

### Hero Section Concept
**Date**: 2026-01-04
**Status**: Pending
**Options Considered**:
- A: "Altitude View" — Cockpit perspective, descend through clouds
- B: "The Mixer" — DJ mixer aesthetic, sections as channels
- C: "The Workshop" — 3D desk with interactive objects
- D: "The Map" — Flight path / topographic visualization
**Decision**: TBD
**Notes**: Need to review inspirations and decide which resonates most

### Color Mode
**Date**: 2026-01-04
**Status**: Pending
**Options Considered**:
- Dark only
- Light only
- Toggle (user choice)
- Auto (system preference)
**Decision**: TBD
**Notes**: Most inspirations are dark. Consider if light mode adds value.

### Navigation Style
**Date**: 2026-01-04
**Status**: Pending
**Options Considered**:
- Fixed top navbar
- Sidebar navigation
- Scroll-based (single page)
- Command palette only
- Hybrid
**Decision**: TBD

### Primary Accent Color
**Date**: 2026-01-04
**Status**: Pending
**Options Considered**:
- Cockpit amber/orange
- Cyan/teal (techy)
- Navratri-inspired vibrant colors
- Gradient approach
**Decision**: TBD

---

## Revisit Later

### Subdomain Architecture
**Date**: 2026-01-04
**Status**: Revisit when ready for tools
**Options**: Separate app / Same app / Monorepo
**Notes**: Start with main site, decide architecture when tools phase begins

---

## Changelog

- **2026-01-04**: Initial decisions log created

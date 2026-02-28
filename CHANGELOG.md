# CHANGELOG.md

All notable changes to Kink Negotiator will be documented here.

This project loosely follows Keep a Changelog principles and semantic versioning.

---

## [0.7.0] – In Progress

### Added
- Structured development roadmap (TODO.md)
- Version-tier planning (0.7 / 0.8 / 0.9 segmentation)

---

## [0.6.0] – Velvet Interface & Architecture Migration

This release represents a structural evolution of the application.  
Core data architecture was refactored and the interface was redesigned for density, elegance, and scalability.

---

### Architectural Changes

- **Data Hierarchy Migration**  
  Refactored `masterData` from a flat category list to a nested object structure supporting:

  `Category → Subcategory → Activity`

- **Recursive Logic Engine**  
  Updated:
  - Survey rendering
  - Code generation
  - Matrix comparison functions  

  All major systems now recursively traverse nested data, allowing seamless support for both flat and sub-categorized sections.

---

### UI / UX – Velvet Interface Redesign

- **Morphing Luxury Scale**
  - Replaced static 6-dot row with dynamic pill-shaped drawer
  - Collapsed state displays only selected dot
  - Expanded state morphs into selection pill
  - Implemented velvet-smooth cubic-bezier transition

- **Space Optimization**
  - Reduced vertical footprint by nesting activities
  - Introduced "Subcategory" header level
  - Applied serif typography (Playfair Display)
  - Added directional sub-chevron indicator

- **Refined Activity Cards**
  - Compressed padding and font sizes for higher information density
  - Implemented horizontal grid layout for "Giving" and "Receiving" labels
  - Desktop: side-by-side layout
  - Mobile: stacked layout below 600px

---

### Styling & Visual Polish

- **Modernized Tooltips**
  - Fixed premature wrapping issue
  - Implemented `width: max-content`
  - Added dynamic z-index to prevent accordion clipping

- **Thematic Consistency**
  - Integrated `--accent-violet` borders for subcategories
  - Added custom halo glows for selected dots
  - Glow color corresponds to selected scale value

- **Responsive Enhancements**
  - Improved mobile stacking behavior for input sections
  - Added `.app-wrapper` max-width constraint (1200px)
  - Prevented layout stretching on ultra-wide monitors

---

### Technical Fixes

- **Hero Transition Stability**
  - Eliminated layout "jump" during app reveal
  - Hero now collapses height and padding simultaneously
  - App fade-in aligns with upward slide motion

- **Legend Intelligence**
  - Sticky legend now dynamically shrinks on scroll
  - Preserves screen real estate during survey navigation

---

## Versioning Notes

- **Major (1.x.x)** – Architectural overhaul or breaking change
- **Minor (0.x.0)** – Feature release or significant redesign
- **Patch (0.0.x)** – Bug fixes, polish, performance tuning
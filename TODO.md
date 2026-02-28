# TODO.md

Kink Negotiator – Development Roadmap

---

## v0.7 – UX Stability & Dev Efficiency
Goal: Lock down layout consistency and speed up iteration.

### Adaptive Randomizer (Dev Tool)
- [ ] Extract scale inputs via `[id^="gs-"], [id^="rs-"]`
- [ ] Build `randomizeAll()` assigning 0–6
- [ ] Update visual state (dots + labels) after assignment
- [ ] Attach to `#btn-randomize`
- [ ] Add optional Weighted Mode (favor 3–5)
- [ ] Add production flag to disable

### Hero & Mobile Stability
- [ ] Remove duplicate nested mobile media query
- [ ] Fix invalid `h1 margin-top`
- [ ] Confirm `.controls-row` spacing after hero exit
- [ ] Test hero transition on iOS Safari
- [ ] Test hero transition on Android Chrome
- [ ] Confirm no layout shift when `#app-container` appears

### Layout Anchoring
- [ ] Remove fixed `width: 48%`
- [ ] Convert name/search to `flex: 1`
- [ ] Validate long-name overflow handling
- [ ] Confirm search alignment during expansion

### Accordion & Filter Hardening
- [ ] Preserve open state during filtering
- [ ] Debounce search input
- [ ] Ensure hidden cards don't collapse layout
- [ ] Validate subcategory filter independence
- [ ] Close filter menu on scroll

### Feedback System
- [ ] Add persistent “Report Feedback” button
- [ ] Build feedback modal (textarea + optional email)
- [ ] Implement submission via Formspree or EmailJS
- [ ] Capture metadata (UA, tab, version)
- [ ] Add submission success/failure states

---

## v0.8 – Identity Layer
Goal: Personalization and structured onboarding.

### Content Presets
- [ ] Build pre-survey gate screen
- [ ] Define preset objects (Vanilla, Kink-Lite, Deep Dive)
- [ ] Filter `masterData` before render
- [ ] Store preset in localStorage
- [ ] Add preset change option

### Profile Tab
- [ ] Add third tab (`#tab-profile`)
- [ ] Create profile slider page
- [ ] Generate:
  - [ ] Top 10 Favorites
  - [ ] Hard Limits
  - [ ] Curiosity Items
- [ ] Add compatibility readiness indicator
- [ ] Support 3-tab swipe navigation

### Emoji Export
- [ ] Build heatmap summary generator
- [ ] Map scale → emoji
- [ ] Add clipboard copy
- [ ] Add temporary copy confirmation
- [ ] Validate formatting in plain-text environments

### Swipe Navigation
- [ ] Implement touchstart/move/end
- [ ] Add horizontal threshold detection
- [ ] Sync swipe state with tab indicator
- [ ] Prevent vertical scroll conflict

---

## v0.9 – Beta Readiness
Goal: Make this shareable without embarrassment.

### State Persistence
- [ ] Auto-save responses to localStorage
- [ ] Add manual save/export JSON
- [ ] Add import JSON
- [ ] Validate corrupted import handling

### Performance Pass
- [ ] Profile renderSurvey()
- [ ] Reduce DOM reflows
- [ ] Minimize unnecessary event listeners
- [ ] Optimize large dataset rendering

### Accessibility Pass
- [ ] Add ARIA roles where missing
- [ ] Ensure keyboard navigation works
- [ ] Validate contrast ratios
- [ ] Confirm screen-reader compatibility basics

---

## Future Ideas (Unscheduled)
- [ ] Match comparison engine
- [ ] Server-based account system
- [ ] Shareable results link
- [ ] Themed UI skins
- [ ] Advanced filtering logic
- [ ] Darker "Velvet Interface" polish pass
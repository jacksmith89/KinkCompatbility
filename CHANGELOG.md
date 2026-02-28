Changelog v0.6
Architectural Changes
Data Hierarchy Migration: Refactored masterData from a flat category list to a nested object structure supporting Category > Subcategory > Activity.

Recursive Logic Engine: Updated survey rendering, code generation, and matrix comparison functions to recursively traverse nested data, ensuring compatibility with both flat and sub-categorized sections.

UI/UX (Velvet Interface Redesign)
Morphing Luxury Scale: Replaced the static row of 6 dots with a dynamic pill-shaped drawer.

Collapsed State: Displays only the selected dot.

Expanded State: Morphs into a selection pill using a velvet-smooth cubic-bezier transition.

Space Optimization: Reduced vertical footprint by nesting activities. Introduced a "Subcategory" header level with serif typography (Playfair Display) and a directional sub-chevron.

Refined Activity Cards: * Compressed card padding and font sizes for higher information density.

Implemented a horizontal grid for "Giving" and "Receiving" labels, allowing them to sit side-by-side on desktop.

Styling & Polish
Modernized Tooltips: Fixed a layout bug where tooltips would wrap prematurely. Tooltips now use width: max-content and feature a dynamic z-index to hover over accordion boundaries.

Thematic Consistency: Integrated --accent-violet borders for subcategories and custom halo glows for selected dots based on their specific value color.

Responsive Overrides: * Enhanced mobile layout to stack "Giving" and "Receiving" sections vertically below 600px.

Added app-wrapper constraints (max-width 1200px) to prevent layout stretching on ultra-wide desktop monitors.

Technical Fixes
Hero Transition Stability: Corrected a "jumping" issue during app reveal. The hero section now collapses its physical height and padding simultaneously with the app’s fade-in, creating a seamless upward slide.

Legend Intelligence: The sticky legend now dynamically shrinks on scroll to preserve screen real estate for survey navigation.
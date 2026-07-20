# SCROLLBAR SPEC

- Sidebar: 4px, transparent track, rounded thumb, no arrow buttons.
- Default sidebar thumb opacity is low; hover/scroll raises visibility.
- Page scrollbar: 10px visual gutter with a narrow padded thumb.
- Internal work areas: 7px for tables, calendars, kanban, tabs, modals, drawers, popovers and document preview.
- Firefox: `scrollbar-width: thin` and `scrollbar-color` fallback.
- Chromium／Edge／Safari: `::-webkit-scrollbar` rules.
- Mobile keeps native touch scrolling and horizontal overflow where data density requires it.

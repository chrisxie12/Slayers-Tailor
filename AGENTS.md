# AGENTS.md: Slayers Tailor website

## What this is
Marketing website for Slayers Tailor, a bespoke and made-to-measure
tailoring house. Goal: it should feel like a bespoke fashion house.
Editorial photography, confident typography, generous whitespace,
refined transitions, and a mobile experience as considered as desktop.

## Stack (locked)
Vite + React, plain CSS. Do NOT add Tailwind, UI kits, CSS-in-JS or other
libraries, and do not change the stack. If you think a new dependency is
needed, stop and ask first.

## Source of truth
- Design tokens: src/styles/design-system.css. Colours, type, spacing,
  buttons, containers and motion come from these tokens. Never hardcode
  colours, fonts or spacing in components. If a token is missing, add it
  to design-system.css.
- Visual and behaviour reference: reference/slayers-tailor-demo.html.
  Port its design and behaviour faithfully.
- Conflict rule: reference/slayers-tailor-demo.html wins over the PR
  branch (copilot/turn-slayers-tailor-demo-into-react) for all copy,
  the jacket SVG, section order and behaviour. Keep a PR-branch version
  only when it is a pure accessibility or code-quality improvement that
  do not alter the visual result, and list every place you kept it and
  why. Never invent copy; all text lives in src/content.js.

## Rules
1. Mobile-first: base styles for phones, then min-width media queries
   (640 / 768 / 1024 / 1440). Never use max-width overrides.
2. Hover effects go inside @media (hover: hover).
3. Respect prefers-reduced-motion.
4. Accessibility: semantic landmarks, visible focus, 48px tap targets,
   4.5:1 text contrast, aria-live for the picker summary.
5. No invented content: no fake prices, testimonials, stats, or bios.
   Unknown details stay as placeholders in src/config.js.
6. Images are captioned placeholders until the client's photos arrive.
   Use one Placeholder component with a src prop for easy swapping.
7. Colours are proposals (crimson, ink, ivory, gold) until the client's
   logo is confirmed. Keep them in tokens only.
8. Colour switcher (crimson, emerald, kente) renders only with ?demo.
9. Commit after each step so any step can be undone cleanly, and report
   the npm run build output plus a short list of what changed.
10. Dark mode: port the reference's theme tokens and both dark-mode
   blocks exactly (the prefers-color-scheme block and the
   [data-theme="dark"] block). Then check every component for hardcoded
   colours and replace them with semantic tokens. Report any component
   that looks wrong in dark mode.

## Working style
- Small, focused changes. Do only what the prompt asks, no extra features.
- After changes, run `npm run build`; fix all errors and warnings.
- Keep components in src/components with their own CSS file.
- Keep config (WhatsApp number, address, phone, hours, picker options)
  in src/config.js. Keep all text copy in src/content.js.
- Short commit-ready summary of what changed at the end of each task.

## Current status
- Working branch: feat/align-with-reference. The reference demo and this
  file are committed; the PR-branch port is being realigned to them.
- Next: design system fixes, then content, hero jacket, remaining
  sections, the ?demo switcher, then a final build and responsive check.

# Slayers Tailor

Website for Slayers Tailor, a bespoke and made-to-measure tailoring house.
The goal is a site that feels like a bespoke fashion house: editorial
photography, confident typography, generous whitespace, refined
transitions, and a mobile experience as considered as desktop.

> Status: in development. Photos, contact details and the WhatsApp number
> are placeholders until the client supplies them.

## Features

- Live suit preview: choose fabric, pattern (plain, pinstripe, check),
  lining and buttons, and the jacket updates instantly
- Booking by WhatsApp with the customer's choices prefilled
- Bespoke vs made-to-measure services
- Lookbook, process, about and FAQ sections
- Mobile-first, responsive from phone to desktop
- Accessible: semantic landmarks, visible focus, reduced-motion support

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- Plain CSS with shared design tokens (no UI framework)

## Getting started

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build     # production build in /dist
npm run preview   # preview the production build locally
```

## Project structure

```
slayers-tailor/
├── reference/            # Design reference (original HTML demo)
├── src/
│   ├── components/       # Nav, Hero, FabricPicker, Services, ...
│   ├── styles/
│   │   └── design-system.css   # Colour, type, spacing, motion tokens
│   ├── utils/            # Helpers (e.g. WhatsApp link builder)
│   ├── config.js         # Site details and picker options
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
└── package.json
```

## Configuration

Site details live in `src/config.js`:

- `WHATSAPP_NUMBER`: the number used for all booking buttons, in
  international format without `+` or spaces
- Studio address, phone number and opening hours
- Fabric, lining, button and pattern options for the suit preview

## Design system

All colours, typography, spacing and motion come from the tokens in
`src/styles/design-system.css`. Components must use these tokens instead
of hardcoded values, so the final palette and fonts can be changed in one
place once the client's brand assets are confirmed.

Mobile-first: write base styles for phones, then add `min-width` media
queries for tablet and desktop.

## Demo mode

Add `?demo` to the URL to show a colour switcher (crimson, emerald,
kente gold) for client presentations. It is hidden by default.

## Deployment

The site is a static build, suitable for Vercel or Netlify.

1. Import the repository
2. Build command: `npm run build`
3. Output directory: `dist`

## To do before launch

- [ ] Replace placeholder images with the client's photography
- [ ] Add the real WhatsApp number, address, phone and hours
- [ ] Confirm the brand palette and fonts against the client's logo
- [ ] Replace the About copy with the tailor's own story

## Credits

Creative direction by Vision61 Studios.

All rights reserved.

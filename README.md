# Mozo Design System

A design system for [Mozo](https://mozo.com.au/) (The Money Saving Zone), built with **Storybook** and **Bootstrap 5**.

## Primary color

- **`#11322c`** — Mozo brand green (used for primary buttons, links, and accents)

## Tech stack

- **React** + **TypeScript**
- **Bootstrap 5.3**
- **Vite**
- **Storybook 8**

## Quick start

```bash
npm install
npm run storybook
```

Then open [http://localhost:6006](http://localhost:6006).

## Scripts

| Command | Description |
|--------|-------------|
| `npm run storybook` | Start Storybook dev server (port 6006) |
| `npm run build-storybook` | Build static Storybook for deploy |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |

## Project structure

```
src/
  components/     # Button, Card, Badge, Input, Alert
  styles/         # mozo-theme.css (Bootstrap + primary override)
  design-tokens.ts
.storybook/       # Storybook config
```

## Using components

```tsx
import { Button, Card, Badge, Input, Alert } from '@/components'
```

Theme is applied via `src/styles/mozo-theme.css`, which overrides Bootstrap’s `--bs-primary` (and related variables) to `#11322c`.

## License

Private. Mozo Pty Ltd.

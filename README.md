# Mozo Design System

A **design system** built with [Storybook](https://storybook.js.org/) and based on **[Bootstrap 5.3](https://getbootstrap.com/docs/5.3/)** components and documentation.

## What's inside

- **React 18** + **TypeScript** + **Vite**
- **Storybook 8** for component documentation and development
- **Bootstrap 5.3** (CSS + JS) for all UI components and layout

Stories cover Bootstrap’s main building blocks with usage notes and links to the official docs:

| Category   | Components |
|-----------|------------|
| **Components** | Accordion, Alerts, Badge, Breadcrumb, Buttons, Cards, Dropdown, List Group, Modal, Navs & Tabs, Offcanvas, Pagination, Progress, Spinners, Toasts, Forms |
| **Layout**     | Grid (containers, rows, columns) |

## Quick start

```bash
# Install dependencies
npm install

# Run the Vite app
npm run dev

# Run Storybook (design system docs)
npm run storybook
```

Storybook runs at **http://localhost:6006** and includes:

- **Introduction** – overview and links to Bootstrap 5.3
- **Components** – all Bootstrap components with variants and examples
- **Layout** – grid and containers

## Scripts

| Command              | Description                    |
|----------------------|--------------------------------|
| `npm run dev`        | Start Vite dev server         |
| `npm run build`      | Build for production          |
| `npm run storybook`  | Start Storybook dev server    |
| `npm run build-storybook` | Build static Storybook |

## Bootstrap 5.3 reference

- [Components](https://getbootstrap.com/docs/5.3/components/)
- [Layout (Grid)](https://getbootstrap.com/docs/5.3/layout/grid/)
- [Forms](https://getbootstrap.com/docs/5.3/forms/overview/)
- [Utilities](https://getbootstrap.com/docs/5.3/utilities/api/)

## Customization

- **Theme**: Bootstrap is loaded from the `bootstrap` npm package. To customize, add your own Sass/overrides or swap to a custom build.
- **Storybook**: Bootstrap CSS is imported in `.storybook/preview.tsx`; Bootstrap JS is loaded via CDN in `.storybook/preview-head.html` so interactive components (dropdowns, modals, accordions, etc.) work in the canvas.

## License

Bootstrap is licensed under the MIT License. This project is for documentation and design system use.

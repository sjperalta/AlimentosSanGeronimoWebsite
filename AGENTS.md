# AGENTS.md

## Project Context
**Project Name:** Alimentos San Geronimo Website
**Description:** A modern, high-performance React application for an agricultural excellence company based in Central America.
**Primary Technologies:** React 18, Vite, Tailwind CSS, Framer Motion, Lucide React.
**Target Audience:** International wholesale buyers, regional distributors, and landscaping project managers.

## Agent Instructions
When working on this codebase, AI agents should adhere to the following standards:

### Coding Standards
- **Component Architecture:** Use a modular approach. Keep components small, focused, and reusable within the `src/components` directory.
- **Styling:** Exclusively use Tailwind CSS utility classes. Avoid inline styles or external CSS unless absolutely necessary (e.g., specific library requirements).
- **Animations:** Prefer `framer-motion` for all transitions and interactive feedback.
- **Icons:** Use `lucide-react` for system icons. Material Symbols (Outlined) are also available via the global `index.html` link.

### Design Principles
- **Aesthetics:** Maintain a premium, trustworthy, and organic feel. Use the custom color palette defined in `tailwind.config.js`.
- **Responsiveness:** All new components must be fully responsive (mobile-first approach).
- **SEO:** Ensure semantic HTML usage (`<header>`, `<main>`, `<footer>`, `<h1>`-`<h6>`) and descriptive alt tags for images.

### Workflow
- **State Management:** Use standard React hooks (`useState`, `useEffect`) for simple state. For more complex logic, consider context or lightweight state libraries if needed later.
- **Routing:** All navigation must be handled through `react-router-dom`.

## Maintainer Information
- **Steward:** Agentic AI Foundation Standard Compliance
- **Last Updated:** 2024-03-21

---
*This file follows the AGENTS.md world wide standard for AI-assisted development context.*

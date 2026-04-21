# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Design System — Alina Gordiy
A production-ready React component library with TypeScript, dark mode support, and smooth animations.
**[ Storybook Demo](https://your-storybook-url.chromatic.com)**
**[ npm Package](https://www.npmjs.com/package/@alinagordiy/design-system)**
## Features
- 15+ accessible components
- Full TypeScript support
- Dark/Light theme out of the box
- Smooth animations with Framer Motion
- 100% tested with Jest + React Testing Library
- Auto-generated docs with Storybook
## Install
\`\`\`bash
npm install @alinagordiy/design-system
\`\`\`
## Usage
\`\`\`tsx
import { Button, Modal, Badge } from '@alinagordiy/design-system';
function App() {
return <Button variant="primary">Click me</Button>;
}
\`\`\`
## Components
| Component | Description |
|-----------|-------------|
| Button | 5 variants, 3 sizes, loading state |
| Input | With validation, icons, error states |
| Modal | Animated with backdrop blur |
| Badge | Status indicators with dot option |
| Card | Hoverable cards with shadows |
| Table | Sortable, with skeleton loading |
| Spinner | Animated loading indicator |
| Switch | Toggle with spring animation |
| ...and 7 more |
# Contributing to Urban Institute Data Visualization Components

Thank you for contributing to this component library! This guide covers the development patterns, coding standards, and workflows for building and maintaining Svelte 5 components using runes.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
  - [Component Patterns](#component-patterns)
  - [Props](#props)
  - [State Management](#state-management)
  - [Event Handlers](#event-handlers)
  - [Slots and Snippets](#slots-and-snippets)
  - [Lifecycle](#lifecycle)
- [Testing](#testing)
- [Documentation](#documentation)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start Storybook development server: `npm run dev`
4. Run Storybook tests: `npm test-storybook-all`
5. Check types and linting: `npm run check && npm run lint`

## Project Structure

```
src/lib/              # Component source code
  ├── ComponentName/  # PascalCase component directories
  │   ├── ComponentName.svelte
  │   ├── ComponentName.stories.svelte
  │   ├── ComponentName.test.js (if applicable)
  │   └── ComponentName.docs.md
  ├── actions/        # Reusable Svelte actions
  ├── stores/         # Legacy stores (being migrated to state classes)
  ├── style/          # Global styles and theme CSS
  └── utils/          # Utility functions and helpers

src/docs/             # Documentation and guides
static/               # Static assets for Storybook
dist/                 # Compiled package (generated, do not edit)
```

## Development Workflow

### Building and Testing

- **Development**: `npm run dev` - Launch Storybook at http://localhost:6006
- **Build**: `npm run build` - Compile the package for distribution
- **Tests**: `npm test` - Run Vitest unit tests  and `npm run test-storybook-all` - Run component browser tests
- **Type checking**: `npm run check` - Validate Svelte components
- **Linting**: `npm run lint` - Check code style
- **Format**: `npm run format` - Auto-format code with Prettier

### Creating New Components

Use the scaffold script to generate a new component with proper structure:

```bash
npm run create-component
```

This creates the component directory with template files following our conventions.

## Coding Standards

### Component Patterns

All components in this library use Svelte 5 runes for props, state, reactivity, and lifecycle management. Follow the patterns below and existing components to stay consistent.

#### File Header Comment

When generative AI assists on a source or test file, add an appropriate comment to the file, either at the top, or near where the edits were made:

```svelte
<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
```

### Props

Use `$props()` for component props with destructuring and defaults. Always include JSDoc type annotations.

**Pattern:**

```svelte
<script>
  /**
   * @typedef {Object} Props
   * @property {string} name - User's name
   * @property {number} [age] - User's age (optional)
   * @property {'small' | 'large'} [size] - Component size
   */

  /** @type {Props} */
  let { name, age = 25, size = "small" } = $props();
</script>

<p>{name} is {age} years old</p>
```

**Rest props** (passing through attributes):

```svelte
<script>
  /** @type {Props} */
  let { label, disabled = false, ...restProps } = $props();
</script>

<button {disabled} {...restProps}>
  {label}
</button>
```

### State Management

#### Component-local State

Use `$state()` for reactive values within a component:

```svelte
<script>
  let count = $state(0);
  let isOpen = $state(false);
</script>

<button onclick={() => count++}>
  Count: {count}
</button>
```

#### Derived State

Use `$derived()` for values computed from other state:

```svelte
<script>
  let firstName = $state("");
  let lastName = $state("");

  // Simple derived value
  let fullName = $derived(`${firstName} ${lastName}`.trim());

  // Complex derived value with logic
  let status = $derived.by(() => {
    if (items.length === 0) return "empty";
    if (items.length > 10) return "busy";
    return "normal";
  });
</script>
```


#### Shared State (Context)

For state shared across components, create a state class and expose it via context. Place state files in the same directory as their related components with a `.svelte.js` extension.

```javascript
// state/my-state.svelte.js
import { getContext, hasContext, setContext } from "svelte";

const MY_STATE = Symbol("MyState");

class MyState {
  count = $state(0);
  doubleCount = $derived(this.count * 2);

  increment() {
    this.count++;
  }
}

export function createMyState() {
  const state = new MyState();
  setContext(MY_STATE, state); // expose instance to descendants
  return state;
}

export function useMyState() {
  if (!hasContext(MY_STATE)) {
    throw new Error("MyState not found. Call createMyState() in an ancestor component.");
  }

  return getContext(MY_STATE);
}
```

**Usage:**

```svelte
<!-- Root component -->
<script>
  import { createMyState } from './state/my-state.svelte.js';
  const myState = createMyState();
</script>

<!-- Child component -->
<script>
  import { useMyState } from './state/my-state.svelte.js';
  const myState = useMyState();
</script>

<p>Theme: {myState.theme}</p>
<button onclick={() => myState.theme = 'dark'}>
  Switch to Dark
</button>
```

**Important**: When migrating from stores to state classes, **do not modify external stores** from third-party libraries (e.g., Layercake). Subscribe to them using the legacy `$store` syntax instead.

### Event Handlers

**Use lowercase event names** matching DOM conventions: `onclick`, `onmouseenter`, `onkeydown`, etc.


### Storybook Stories

- All public-facing components should have stories
- Use `defineMeta` from `@storybook/addon-svelte-csf`
- Include interactive examples and edge cases

## Documentation

### Component Documentation

Each component should have:

1. JSDoc comments on props
2. A `.docs.md` file with usage examples
3. Storybook stories demonstrating variants

### Code References

When referencing code locations in documentation or issues, use the pattern `file_path:line_number`:

```
The error handling happens in src/lib/DataLoader/DataLoader.svelte:42
```

## Commit Guidelines

### Commit Message Format

Follow this pattern for commit messages:

```
<scope>: <summary>

<optional body with details>
```

**Examples:**

```
Button: add disabled state styling
Fix: correct event handler naming in Toggle component
Docs: refresh component usage guide
```

### Commit Requirements

Before committing:

1. Ensure tests pass: `npm test`
2. Check types: `npm run check`
3. Run linter: `npm run lint`
4. Format code: `npm run format`
5. Build succeeds: `npm run build`

## Pull Request Process

1. **Create a branch** following the pattern: `feature/component-name` or `fix/issue-description`

2. **Make your changes** following the patterns in this guide

3. **Update tests and stories** to reflect any API changes

4. **Document changes** in [`CHANGELOG.md`](./CHANGELOG.md)

5. **Run the full test suite**:

   ```bash
   npm run check
   npm run lint
   npm test
   npm run test-storybook-all
   ```

6. **Write a clear PR description**:

   - Link to related issues
   - Describe what changed and why
   - Include screenshots/GIFs for UI changes
   - Note any breaking changes
   - Call out packaging considerations

7. **Request review** from maintainers

### PR Checklist

- [ ] Code follows the Svelte 5 rune patterns
- [ ] Tests pass locally
- [ ] Storybook stories updated
- [ ] JSDoc types documented
- [ ] Breaking changes logged (if any)
- [ ] No linting errors
- [ ] Build completes successfully

## Style Guide

### Formatting

- **2 spaces** for indentation
- **Double quotes** in JavaScript
- **Trailing commas** in objects and arrays
- Run `npm run format` before committing

### Naming Conventions

- **Components/Directories**: PascalCase (`Button`, `ChartBlock`)
- **Files**: Match component name (`Button.svelte`, `Button.stories.svelte`)
- **Functions/Variables**: camelCase (`getData`, `isVisible`)
- **Constants**: SCREAMING_CASE (`MAX_WIDTH`, `DEFAULT_COLOR`)
- **Event handlers**: lowercase DOM names (`onclick`, `onkeydown`, `onmessage`)
- **State files**: `.svelte.js` extension (`app.svelte.js`, `map.svelte.js`)

### Component Organization

Order sections in your component as follows:

1. Component comment and AI header (if applicable)
2. `<script>` with imports first
3. Type definitions (JSDoc)
4. Props destructuring
5. State variables
6. Derived values
7. Effects
8. Helper functions
9. Lifecycle hooks
10. Template (`<div>...</div>`)
11. `<style>` (scoped by default)

## Additional Resources

- [Svelte 5 Official Docs](https://svelte.dev/docs/svelte/overview) - Official Svelte 5 documentation

## Questions?

If you have questions about contributing or need clarification on patterns:

1. Look at exemplar components: `Button`, `LogoUrbanWide`, `Tilemap`
2. Open an issue on GitHub for discussion

Thank you for contributing to the Urban Institute Data Visualization Components library!

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
4. Run tests: `npm test`
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
docs/                 # Migration guides and plans
static/               # Static assets for Storybook
dist/                 # Compiled package (generated, do not edit)
```

## Development Workflow

### Building and Testing

- **Development**: `npm run dev` - Launch Storybook at http://localhost:6006
- **Build**: `npm run build` - Compile the package for distribution
- **Tests**: `npm test` - Run Vitest unit tests
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

All components in this library use **Svelte 5 runes** for props, state, reactivity, and lifecycle management. For comprehensive migration patterns, see [`docs/svelte5-migration-guide.md`](./docs/svelte5-migration-guide.md).

#### File Header Comment

When modifying source or test files as part of the Svelte 5 migration, add this comment at the top of the file:

```svelte
<!-- Portions of this code have been written or edited by generative-AI tools. -->
```

**Note**: Documentation files (`.md`) do not require this comment.

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
  let { name, age = 25, size = 'small' } = $props();
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
  let firstName = $state('');
  let lastName = $state('');

  // Simple derived value
  let fullName = $derived(`${firstName} ${lastName}`.trim());

  // Complex derived value with logic
  let status = $derived.by(() => {
    if (items.length === 0) return 'empty';
    if (items.length > 10) return 'busy';
    return 'normal';
  });
</script>
```

#### Shared State (Context)

For state shared across components, create a state class and expose it via context. Place state files in the same directory as their related components with a `.svelte.js` extension.

```javascript
// state/app.svelte.js
import { getContext, setContext } from 'svelte';

const APP_STATE = Symbol('AppState');

class AppState {
  /** @type {User | null} */
  user = $state(null);

  /** @type {'light' | 'dark'} */
  theme = $state('light');

  // Derived property
  get isAuthenticated() {
    return this.user !== null;
  }
}

export function createAppState() {
  const state = new AppState();
  setContext(APP_STATE, state);
  return state;
}

export function useAppState() {
  const state = getContext(APP_STATE);
  if (!state) {
    throw new Error('AppState not found. Did you call createAppState()?');
  }
  return state;
}
```

**Usage:**

```svelte
<!-- Root component -->
<script>
  import { createAppState } from './state/app.svelte.js';
  const appState = createAppState();
</script>

<!-- Child component -->
<script>
  import { useAppState } from './state/app.svelte.js';
  const appState = useAppState();
</script>

<p>Theme: {appState.theme}</p>
<button onclick={() => appState.theme = 'dark'}>
  Switch to Dark
</button>
```

**Important**: When migrating from stores to state classes, **do not modify external stores** from third-party libraries (e.g., Layercake). Subscribe to them using `$effect.root()` instead.

### Event Handlers

**Use lowercase event names** matching DOM conventions: `onclick`, `onmouseenter`, `onkeydown`, etc.

#### Custom Events

Replace `createEventDispatcher()` with callback props:

```svelte
<script>
  /**
   * @typedef {Object} MessageData
   * @property {string} text
   */

  /**
   * @typedef {Object} Props
   * @property {(data: MessageData) => void} [onmessage]
   */

  /** @type {Props} */
  let { onmessage } = $props();

  function handleClick() {
    onmessage?.({ text: 'Hello from child' });
  }
</script>

<button onclick={handleClick}>Send Message</button>
```

**Parent usage:**

```svelte
<ChildComponent onmessage={(data) => console.log(data.text)} />
```

#### Event Modifiers

Svelte 5 doesn't support `|preventDefault` and similar modifiers. Handle them manually:

```svelte
<script>
  /** @type {Props} */
  let { onsubmit } = $props();

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    onsubmit?.(event);
  }
</script>

<form onsubmit={handleSubmit}>
  <!-- form contents -->
</form>
```

### Slots and Snippets

Replace `<slot>` with snippets. The default slot becomes a `children` snippet prop.

**Basic snippet:**

```svelte
<script>
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

{#if children}
  <div class="wrapper">
    {@render children()}
  </div>
{/if}
```

**Named snippets:**

```svelte
<script>
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [header]
   * @property {import('svelte').Snippet} [footer]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { header, footer, children } = $props();
</script>

<div class="card">
  {#if header}
    <header>{@render header()}</header>
  {/if}

  <main>{@render children()}</main>

  {#if footer}
    <footer>{@render footer()}</footer>
  {/if}
</div>
```

**Snippet parameters (like slot props):**

```svelte
<script>
  /**
   * @typedef {Object} Item
   * @property {string} name
   */

  /**
   * @typedef {Object} Props
   * @property {Item[]} items
   * @property {import('svelte').Snippet<[Item]>} children
   */

  /** @type {Props} */
  let { items, children } = $props();
</script>

{#each items as item}
  {@render children(item)}
{/each}
```

### Lifecycle

#### onMount

Still available and works the same, but with `$state()`:

```svelte
<script>
  import { onMount } from 'svelte';

  let data = $state(null);

  onMount(async () => {
    const response = await fetch('/api/data');
    data = await response.json();

    // Return cleanup function
    return () => {
      console.log('Component unmounted');
    };
  });
</script>
```

#### Effects

Use `$effect()` for reactive side effects:

```svelte
<script>
  let count = $state(0);

  $effect(() => {
    console.log(`Count changed to ${count}`);
    document.title = `Count: ${count}`;

    // Cleanup function (runs before next effect and on unmount)
    return () => {
      console.log('Cleaning up effect');
    };
  });
</script>
```

#### Browser-only Effects

Guard effects that use browser APIs:

```svelte
<script>
  let width = $state(0);

  $effect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      width = window.innerWidth;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
</script>
```

## Testing

### Unit Tests

- Use Vitest for unit testing
- Colocate tests with components: `ComponentName.test.js`
- Test behavior, not implementation details

```javascript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Button from './Button.svelte';

describe('Button', () => {
  it('renders with text', () => {
    render(Button, { children: () => 'Click me' });
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('calls onclick handler when clicked', async () => {
    const handleClick = vi.fn();
    const { component } = render(Button, {
      onclick: handleClick,
      children: () => 'Click me'
    });

    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

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
Docs: update Svelte 5 migration guide
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

4. **Document breaking changes** in [`docs/runes-breaking-changes.md`](./docs/runes-breaking-changes.md) if applicable

5. **Run the full test suite**:
   ```bash
   npm run check
   npm run lint
   npm test
   npm run build
   npm run build-storybook:test
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
- **Single quotes** in JavaScript
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

- [Svelte 5 Migration Guide](./docs/svelte5-migration-guide.md) - Comprehensive patterns and examples
- [Svelte 5 Official Docs](https://svelte.dev/docs/svelte/overview) - Official Svelte 5 documentation
- [Migration Tracker](./docs/runes-migration-tracker.md) - Current status of component migrations
- [Breaking Changes Log](./docs/runes-breaking-changes.md) - API changes during migration

## Questions?

If you have questions about contributing or need clarification on patterns:

1. Check the [Svelte 5 Migration Guide](./docs/svelte5-migration-guide.md)
2. Look at exemplar components: `Button`, `LogoUrbanWide`, `Tilemap`
3. Open an issue on GitHub for discussion

Thank you for contributing to the Urban Institute Data Visualization Components library!

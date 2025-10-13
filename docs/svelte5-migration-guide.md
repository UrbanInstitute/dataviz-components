# Svelte 5 Migration Guide

This guide covers common patterns for migrating from Svelte 4 to Svelte 5, with a focus on runes-based syntax and replacing stores with class-based state management. Use it alongside the sequencing outlined in [`docs/runes-plan-combined.md`](./runes-plan-combined.md), and log any intentional API changes in [`docs/runes-breaking-changes.md`](./runes-breaking-changes.md) as you go.

> Reminder: whenever you modify a source or test file during the migration, add the comment `Portions of this code have been written or edited by generative-AI tools.` at the top. Documentation files (including this guide) are exempt.

## Table of Contents

1. [Props](#props)
2. [Slots](#slots)
3. [State Management (Stores → Classes)](#state-management)
4. [Reactivity](#reactivity)
5. [Lifecycle](#lifecycle)
6. [Event Handlers](#event-handlers)
7. [Two-way Bindings](#two-way-bindings)

## Quick Reference (by Plan Phase)

- **Foundation & Tooling** → [Props](#props), [Event Handlers](#event-handlers)
- **Mid-tier Controls** → [State Management](#state-management), [Two-way Bindings](#two-way-bindings)
- **Presentation & Prop-only Components** → [Props](#props), [Slots](#slots)
- **Data & Wrapper Components** → [State Management](#state-management), [Reactivity](#reactivity), [Lifecycle](#lifecycle)
- **External Integrations & Complex Reactivity** → [Props](#props), [Lifecycle](#lifecycle), [Event Handlers](#event-handlers)
- **Visualization Suite** → [State Management](#state-management), [Reactivity](#reactivity), [Lifecycle](#lifecycle)
- **Docs & Stories** → [Props](#props), [Slots](#slots), [Event Handlers](#event-handlers)

---

## Props

> Record any prop name/default changes in [`docs/runes-breaking-changes.md`](./runes-breaking-changes.md) so downstream consumers can adapt.

### Basic Props

**Before (Svelte 4):**

```javascript
<script>
  /** @type {string} */
  export let name;

  /** @type {number} */
  export let age = 25; // with default
</script>

<p>{name} is {age} years old</p>
```

**After (Svelte 5):**

```javascript
<script>
  /**
   * @typedef {Object} Props
   * @property {string} name
   * @property {number} [age]
   */

  /** @type {Props} */
  let { name, age = 25 } = $props();
</script>

<p>{name} is {age} years old</p>
```

### Rest Props

**Before (Svelte 4):**

```javascript
<script>
  /** @type {string} */
  export let name;

  /** @type {string} */
  let className = '';
  export { className as class };

  // No built-in rest props
</script>
```

**After (Svelte 5):**

```javascript
<script>
  /**
   * @typedef {Object} Props
   * @property {string} name
   * @property {string} [class]
   */

  /** @type {Props} */
  let { name, class: className, ...restProps } = $props();
</script>

<div class={className} {...restProps}>
  {name}
</div>
```

### Spreading `$$restProps`

When a component spreads `$$restProps` onto markup, destructure the remaining props from `$props()` and spread them manually.

**Before (Svelte 4):**
```svelte
<script>
  export let label;
  export let disabled = false;
</script>

<button {disabled} {...$$restProps}>
  {label}
</button>
```

**After (Svelte 5):**
```svelte
<script>
  /**
   * @typedef {Object} Props
   * @property {string} label
   * @property {boolean} [disabled]
   */

  /** @type {Props} */
  let { label, disabled = false, ...restProps } = $props();
</script>

<button disabled={disabled} {...restProps}>
  {label}
</button>
```

If you need to merge class names before spreading:

```svelte
<script>
  let { class: externalClass = '', ...restProps } = $props();
  const className = ['button', externalClass].filter(Boolean).join(' ');
</script>

<button class={className} {...restProps}>
  <slot />
</button>
```

---

## Existing Directives & Elements

- **Transitions & animations**: `transition:`, `in:`, `out:`, and `animate:` directives work the same in Svelte 5—no migration changes required.
- **Special Svelte elements**: `<svelte:component>`, `<svelte:element>`, `<svelte:window>`, `<svelte:body>`, and similar constructs remain unchanged.
- **`bind:this`**: Element and component references bound via `bind:this` continue to behave as before.

---

## Component APIs & Instance Methods

`export`-ing functions from a component still exposes them on the component instance. No syntax changes are required—just ensure any internal state they touch now lives in `$state` fields or derived values.

```svelte
<script>
  let count = $state(0);

  export function reset() {
    count = 0;
  }
</script>
```

---

## Slots

### Checking if a Slot Exists

**Before (Svelte 4):**

```javascript
<script>
  import { onMount } from 'svelte';

  /** @type {boolean} */
  let hasSlot = false;

  onMount(() => {
    hasSlot = !!$$slots.default;
  });
</script>

{#if hasSlot}
  <div class="wrapper">
    <slot />
  </div>
{:else}
  <p>No content provided</p>
{/if}
```

**After (Svelte 5):**

```javascript
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
{:else}
  <p>No content provided</p>
{/if}
```

### Named Slots

**Before (Svelte 4):**

```javascript
<script>
  // Parent
</script>

<Card>
  <span slot="header">Title</span>
  <span slot="footer">Footer</span>
  <p>Body content</p>
</Card>

<!-- Card.svelte -->
<div class="card">
  <header><slot name="header" /></header>
  <main><slot /></main>
  <footer><slot name="footer" /></footer>
</div>
```

**After (Svelte 5):**

```javascript
<script>
  // Parent
  import Card from './Card.svelte';
</script>

<Card>
  {#snippet header()}
    <span>Title</span>
  {/snippet}

  {#snippet footer()}
    <span>Footer</span>
  {/snippet}

  <p>Body content</p>
</Card>

<!-- Card.svelte -->
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
  <header>{@render header()}</header>
  <main>{@render children()}</main>
  <footer>{@render footer()}</footer>
</div>
```

### Slot Props (Snippet Props)

**Before (Svelte 4):**

```javascript
<!-- List.svelte -->
<script>
  /** @type {Array<{name: string}>} */
  export let items;
</script>

{#each items as item}
  <slot {item} />
{/each}

<!-- Usage -->
<List {items} let:item>
  <p>{item.name}</p>
</List>
```

**After (Svelte 5):**

```javascript
<!-- List.svelte -->
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

<!-- Usage -->
<List {items}>
  {#snippet children(item)}
    <p>{item.name}</p>
  {/snippet}
</List>
```

---

## State Management

Replace Svelte stores with class-based state management using `$state` runes and context.

> If replacing a store changes the public API, document it in [`docs/runes-breaking-changes.md`](./runes-breaking-changes.md).

### Pattern Overview

Instead of creating stores, create a class with `$state` properties and expose it through context using `createState()` and `useState()` functions.

### Basic Store Replacement

**Before (Svelte 4):**

```javascript
// stores/app.js
import { writable } from 'svelte/store';

export const appStore = writable({
  user: null,
  theme: 'light'
});

// Component.svelte
<script>
  import { appStore } from './stores/app.js';

  function setTheme(newTheme) {
    $appStore.theme = newTheme;
  }
</script>

<p>User: {$appStore.user?.name}</p>
<p>Theme: {$appStore.theme}</p>
<button on:click={() => setTheme('dark')}>Toggle Theme</button>
```

**After (Svelte 5):**

```javascript
// state/app.svelte.js
import { getContext, setContext } from 'svelte';

const APP_STATE = Symbol('AppState');

/**
 * @typedef {Object} User
 * @property {string} name
 */

class AppState {
  /** @type {User | null} */
  user = $state(null);

  /** @type {'light' | 'dark'} */
  theme = $state('light');
}

/**
 * Create and set AppState into context
 * @returns {AppState}
 */
export function createAppState() {
  const state = new AppState();
  setContext(APP_STATE, state);
  return state;
}

/**
 * Get AppState from context
 * @returns {AppState}
 */
export function useAppState() {
  const state = getContext(APP_STATE);
  if (!state) {
    throw new Error('AppState not found. Did you call createAppState()?');
  }
  return state;
}

// Root component (e.g., +layout.svelte)
<script>
  import { createAppState } from './state/app.svelte.js';

  const appState = createAppState();

  // Initialize state
  appState.user = { name: 'John' };
</script>

<slot />

// Child component
<script>
  import { useAppState } from './state/app.svelte.js';

  const appState = useAppState();

  /**
   * @param {'light' | 'dark'} newTheme
   */
  function setTheme(newTheme) {
    appState.theme = newTheme;
  }
</script>

<p>User: {appState.user?.name}</p>
<p>Theme: {appState.theme}</p>
<button onclick={() => setTheme('dark')}>Toggle Theme</button>
```

> **Where should state files live?** Keep rune-based state classes wherever the legacy store lived. If a store was colocated with a feature (for example `src/lib/Scorecard/stores/`), place the new state module alongside that feature. If it lived in a shared `stores/` directory, use the same location with a `.svelte.js` suffix.

### Derived State

**Before (Svelte 4):**

```javascript
// stores/cart.js
import { writable, derived } from 'svelte/store';

export const cart = writable([]);

export const cartTotal = derived(cart, $cart =>
  $cart.reduce((sum, item) => sum + item.price, 0)
);

// Component
<script>
  import { cart, cartTotal } from './stores/cart.js';

  let total;
  cartTotal.subscribe(value => {
    total = value;
  });
</script>

<p>Total: ${total}</p>
```

**After (Svelte 5):**

```javascript
// state/cart.svelte.js
import { getContext, setContext } from 'svelte';

const CART_STATE = Symbol('CartState');

/**
 * @typedef {Object} CartItem
 * @property {string} id
 * @property {number} price
 */

class CartState {
  /** @type {CartItem[]} */
  items = $state([]);

  // Derived value
  get total() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

/**
 * Create and set CartState into context
 * @returns {CartState}
 */
export function createCartState() {
  const state = new CartState();
  setContext(CART_STATE, state);
  return state;
}

/**
 * Get CartState from context
 * @returns {CartState}
 */
export function useCartState() {
  const state = getContext(CART_STATE);
  if (!state) {
    throw new Error('CartState not found. Did you call createCartState()?');
  }
  return state;
}

// Component
<script>
  import { useCartState } from './state/cart.svelte.js';

  const cartState = useCartState();
</script>

<p>Total: ${cartState.total}</p>
```

### Consuming External Stores

Leave third-party or shared external stores in place and bridge them into rune-managed state with `$effect()` or `$effect.root()`. Subscribe inside the effect, update local `$state` or `$derived` values, and return the `unsubscribe` callback for cleanup.

```svelte
<script>
  import { highlightStore } from 'layercake'; // example external store

  let highlight = $state(null);

  $effect.root(() => {
    const unsubscribe = highlightStore.subscribe((value) => {
      highlight = value;
    });

    return unsubscribe;
  });
</script>

<p>Highlighted series: {highlight?.id ?? 'none'}</p>
```

If you only need to read a store synchronously, use `get` from `svelte/store`, but avoid template shorthand like `$storeName`. Explicit subscriptions keep teardown behavior predictable and work across non-SvelteKit environments.

> **Layercake note:** Layercake’s context helpers and stores are already Svelte 5-compatible. Keep those stores intact—subscribe to them with `$effect.root()` as shown above rather than rewriting them into rune classes.

### Complex State Example

**Before (Svelte 4):**

```javascript
// stores/map.js
import { writable, derived } from "svelte/store";

export const mapStore = writable({
  center: { lat: 0, lng: 0 },
  zoom: 10,
  markers: []
});

export const markerCount = derived(mapStore, ($map) => $map.markers.length);
```

**After (Svelte 5):**

```javascript
// state/map.svelte.js
import { getContext, setContext } from "svelte";

const MAP_STATE = Symbol("MapState");

/**
 * @typedef {Object} LatLng
 * @property {number} lat
 * @property {number} lng
 */

/**
 * @typedef {Object} Bounds
 * @property {number} north
 * @property {number} south
 * @property {number} east
 * @property {number} west
 */

class MapState {
  /** @type {LatLng} */
  center = $state({ lat: 0, lng: 0 });

  /** @type {number} */
  zoom = $state(10);

  /** @type {LatLng[]} */
  markers = $state([]);

  // Derived properties
  /** @type {number} */
  markerCount = $derived(this.markers.length);

  /** @type {Bounds | null} */
  bounds = $derived.by(() => {
    if (this.markers.length === 0) return null;

    const lats = this.markers.map((m) => m.lat);
    const lngs = this.markers.map((m) => m.lng);

    return {
      north: Math.max(...lats),
      south: Math.min(...lats),
      east: Math.max(...lngs),
      west: Math.min(...lngs)
    };
  });
}

/**
 * Create and set MapState into context
 * @returns {MapState}
 */
export function createMapState() {
  const state = new MapState();
  setContext(MAP_STATE, state);
  return state;
}

/**
 * Get MapState from context
 * @returns {MapState}
 */
export function useMapState() {
  const state = getContext(MAP_STATE);
  if (!state) {
    throw new Error("MapState not found. Did you call createMapState()?");
  }
  return state;
}
```

---

## Reactivity

### Reactive Statements

**Before (Svelte 4):**

```javascript
<script>
  let count = 0;
  let doubled;

  $: doubled = count * 2;

  $: {
    console.log('Count changed:', count);
  }
</script>
```

**After (Svelte 5):**

```javascript
<script>
  let count = $state(0);

  // For derived values
  let doubled = $derived(count * 2);

  // For side effects
  $effect(() => {
    console.log('Count changed:', count);
  });
</script>
```

### Reactive Statements with Dependencies

**Before (Svelte 4):**

```javascript
<script>
  let firstName = '';
  let lastName = '';
  let fullName;

  $: fullName = `${firstName} ${lastName}`.trim();

  $: if (fullName) {
    console.log('Name updated:', fullName);
  }
</script>
```

**After (Svelte 5):**

```javascript
<script>
  let firstName = $state('');
  let lastName = $state('');

  let fullName = $derived(`${firstName} ${lastName}`.trim());

  $effect(() => {
    if (fullName) {
      console.log('Name updated:', fullName);
    }
  });
</script>
```

### Choosing `$derived()` vs `$derived.by()`

- Use `$derived(expression)` for concise, single-expression values.
- Use `$derived.by(() => { ... })` when you need multiple statements, conditionals, or early returns.

```svelte
let fullName = $derived(`${firstName} ${lastName}`.trim());

let status = $derived.by(() => {
  if (items.length === 0) return 'empty';
  if (items.length > 10) return 'busy';
  return 'normal';
});
```

### Effect Ordering

Multiple `$effect()` calls run in declaration order after their dependencies change, matching the topological guarantees of Svelte 4’s `$:` labels. If ordering is critical, either combine related logic into a single effect or derive intermediate values explicitly before the dependent effect runs.

---

## Lifecycle

### onMount

**Before (Svelte 4):**

```javascript
<script>
  import { onMount } from 'svelte';

  let data;

  onMount(async () => {
    const response = await fetch('/api/data');
    data = await response.json();
  });
</script>
```

**After (Svelte 5):**

```javascript
<script>
  import { onMount } from 'svelte';

  let data = $state(null);

  onMount(async () => {
    const response = await fetch('/api/data');
    data = await response.json();
  });
</script>
```

Note: `onMount` still exists and works the same way. The main difference is using `$state()` for reactive variables.

### onDestroy / Cleanup

**Before (Svelte 4):**

```javascript
<script>
  import { onMount, onDestroy } from 'svelte';

  let interval;

  onMount(() => {
    interval = setInterval(() => {
      console.log('tick');
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>
```

**After (Svelte 5):**

```javascript
<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const interval = setInterval(() => {
      console.log('tick');
    }, 1000);

    // Return cleanup function
    return () => {
      clearInterval(interval);
    };
  });
</script>
```

Or using `$effect`:

```javascript
<script>
  $effect(() => {
    const interval = setInterval(() => {
      console.log('tick');
    }, 1000);

    // Return cleanup function
    return () => {
      clearInterval(interval);
    };
  });
</script>
```

### Browser-only Effects (SSR Guard)

When code touches browser APIs inside an effect, guard the logic so it skips during SSR or tests that run without `window`:

```javascript
<script>
  let width = $state(0);

  $effect(() => {
    if (typeof window === 'undefined') {
      return;
    }

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

This pattern keeps the effect inert during SSR while still providing cleanup for browser sessions.

### Using `$effect.root()`

Wrap long-lived subscriptions or resources inside `$effect.root()` when you need manual control over teardown. Anything created inside the callback stays alive until you return a disposer (or the component unmounts), which is perfect for bridging external stores or event emitters.

```svelte
$effect.root(() => {
  const unsubscribe = externalStore.subscribe((value) => {
    localValue = value;
  });

  return unsubscribe;
});
```

Avoid nesting additional `$effect()` calls inside a root effect—use plain callbacks to keep lifecycles explicit.

### Using `$effect.pre()`

`$effect.pre()` mirrors the old `beforeUpdate` timing. Run it when you must read layout or perform work *before* Svelte updates the DOM.

```svelte
$effect.pre(() => {
  previousHeight = element?.offsetHeight ?? 0;
});

$effect(() => {
  // runs after updates; compare heights or trigger follow-up work
});
```

### beforeUpdate & afterUpdate

`beforeUpdate` and `afterUpdate` still exist in Svelte 5, but you can replace both with a single `$effect()` by using its cleanup function. The effect body runs after DOM updates (like `afterUpdate`), and the cleanup runs before the next update or on destroy (like `beforeUpdate`).

**Before (Svelte 4):**
```javascript
<script>
  import { beforeUpdate, afterUpdate } from 'svelte';
  
  let count = 0;
  let previous = 0;
  
  beforeUpdate(() => {
    previous = count;
  });
  
  afterUpdate(() => {
    console.log(`count changed from ${previous} to ${count}`);
  });
</script>
```

**After (Svelte 5):**
```javascript
<script>
  let count = $state(0);
  let previous = 0;

  $effect(() => {
    console.log(`count changed from ${previous} to ${count}`);

    return () => {
      previous = count;
    };
  });
</script>
```

Keep importing `beforeUpdate`/`afterUpdate` when that best matches the use case (they remain available), but prefer `$effect` when you can consolidate the logic.

### `tick()` helper

The `tick()` function is still available from `svelte` and works the same way. Use it when you must wait for the DOM to flush after mutating state.

```javascript
<script>
  import { tick } from 'svelte';

  let isOpen = $state(false);

  async function toggle() {
    isOpen = !isOpen;
    await tick(); // DOM is now updated
    focusPanel();
  }

  function focusPanel() {
    // interact with the rendered DOM safely
  }
</script>
```

---

## Event Handlers

> When renaming events or changing payloads, update [`docs/runes-breaking-changes.md`](./runes-breaking-changes.md).

### Custom Events

**Before (Svelte 4):**

```javascript
<!-- Child.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('message', { text: 'Hello' });
  }
</script>

<button on:click={handleClick}>Send</button>

<!-- Parent.svelte -->
<Child on:message={(e) => console.log(e.detail.text)} />
```

**After (Svelte 5):**

```javascript
<!-- Child.svelte -->
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
    onmessage?.({ text: 'Hello' });
  }
</script>

<button onclick={handleClick}>Send</button>

<!-- Parent.svelte -->
<Child onmessage={(data) => console.log(data.text)} />
```

### Event Modifiers

Runes use standard DOM attributes (`onclick`, etc.), so Svelte’s modifier syntax (`on:click|preventDefault`) is no longer available. Wrap the handler and perform the modifier work yourself before calling the callback prop.

**Before (Svelte 4):**
```svelte
<!-- FormButton.svelte -->
<button on:click|preventDefault|stopPropagation={handleClick}>
  <slot />
</button>

<!-- Parent.svelte -->
<FormButton on:click={submitForm}>Submit</FormButton>
```

**After (Svelte 5):**
```svelte
<!-- FormButton.svelte -->
<script>
  /**
   * @typedef {Object} Props
   * @property {(event: MouseEvent) => void} [onclick]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { onclick, children } = $props();

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    onclick?.(event);
  }
</script>

<button onclick={handleClick}>
  {@render children?.()}
</button>

<!-- Parent.svelte -->
<FormButton onclick={submitForm}>Submit</FormButton>
```

Apply the same pattern for other modifiers (`|once`, `|capture`, etc.) by handling the logic manually or using native DOM APIs.

### Event Forwarding

**Before (Svelte 4):**

```javascript
<!-- Wrapper.svelte -->
<button on:click>
  <slot />
</button>

<!-- Parent.svelte -->
<Wrapper on:click={handleClick}>
  Click me
</Wrapper>
```

**After (Svelte 5):**

```javascript
<!-- Wrapper.svelte -->
<script>
  /**
   * @typedef {Object} Props
   * @property {(event: MouseEvent) => void} [onclick]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { onclick, children } = $props();
</script>

<button {onclick}>
  {@render children()}
</button>

<!-- Parent.svelte -->
<Wrapper onclick={handleClick}>
  Click me
</Wrapper>
```

---

## Two-way Bindings

### Component Bindings with $bindable()

**Before (Svelte 4):**

```javascript
<!-- Input.svelte -->
<script>
  /** @type {string} */
  export let value;
</script>

<input bind:value />

<!-- Parent.svelte -->
<script>
  /** @type {string} */
  let text = '';
</script>

<Input bind:value={text} />
<p>You typed: {text}</p>
```

**After (Svelte 5):**

```javascript
<!-- Input.svelte -->
<script>
  /**
   * @typedef {Object} Props
   * @property {string} value
   */

  /** @type {Props} */
  let { value = $bindable('') } = $props();
</script>

<input bind:value />

<!-- Parent.svelte -->
<script>
  /** @type {string} */
  let text = $state('');
</script>

<Input bind:value={text} />
<p>You typed: {text}</p>
```

### Notes on Bindings

- **Element bindings**: Standard DOM element bindings like `bind:value`, `bind:checked`, `bind:group` work the same way in Svelte 5
- **Component bindings**: Use `$bindable()` in the child component to allow two-way binding from the parent
- **Class/style directives**: Directives like `class:active={condition}` and `style:color={value}` work exactly the same - no changes needed
- **Actions**: The `use:action` directive works the same way in Svelte 5

---

## Key Differences Summary

| Svelte 4                  | Svelte 5                         |
| ------------------------- | -------------------------------- |
| `export let prop`         | `let { prop } = $props()`        |
| `<slot />`                | `{@render children()}`           |
| `<slot name="header" />`  | `{@render header()}`             |
| `$$slots.default`         | Check if `children` exists       |
| `writable()` store        | Class with `$state()` properties |
| `derived()` store         | Class getter or `$derived()`     |
| `$: x = y * 2`            | `let x = $derived(y * 2)`        |
| `$: { ... }` side effects | `$effect(() => { ... })`         |
| `createEventDispatcher()` | Callback props (`onmessage`)     |
| `on:click` forwarding     | Pass `onclick` as prop           |

---

## Tips

1. **State file naming**: Use `.svelte.js` extension for files containing runes (e.g., `state/app.svelte.js`)

2. **Context pattern**: Always use the `createState()` / `useState()` pattern for shared state rather than calling `setContext` / `getContext` directly

3. **Derived values**: Prefer class getters for derived state that belongs to the state class itself

4. **Effect cleanup**: Always return a cleanup function from `$effect()` when setting up subscriptions, intervals, or event listeners

5. **Props destructuring**: Destructure props at the top of your script tag for clarity

6. **Snippet naming**: When using snippets, name them clearly (e.g., `header`, `footer`, `item`) rather than generic names

7. **JSDoc for props**: Always define a `@typedef` for your component's props and apply it to the `$props()` destructuring:

   ```javascript
   /**
    * @typedef {Object} Props
    * @property {string} name
    * @property {number} [age] - Optional prop with bracket notation
    */

   /** @type {Props} */
   let { name, age = 25 } = $props();
   ```

8. **JSDoc for state classes**: Add type annotations to `$state()` properties for better IDE support:

   ```javascript
   class AppState {
     /** @type {User | null} */
     user = $state(null);

     /** @type {'light' | 'dark'} */
     theme = $state("light");
   }
   ```

9. **Snippet type annotations**: Use `import('svelte').Snippet` for basic snippets, and `Snippet<[ParamType]>` for snippets with parameters:

   ```javascript
   /**
    * @typedef {Object} Props
    * @property {import('svelte').Snippet} [children]
    * @property {import('svelte').Snippet<[Item]>} [itemSnippet]
    */
   ```

10. **Mixed codebase**: Old store-based components and new state class components can coexist during migration. There's no need to migrate everything at once - you can do this step-by-step.

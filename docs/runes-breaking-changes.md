# Runes Migration – Breaking Changes Log

Use this document to record any intentional breaking changes introduced while migrating to Svelte 5 runes. Update it as soon as a change is identified so downstream consumers can plan for updates.

## How to Record Entries

- Add a dated subsection per change or batch of related changes.
- Include component(s) affected, a concise description of the behavior/API difference, rationale for the change, and guidance for consumers on upgrading.
- Link to the relevant pull request or issue once available.

## Entries

### 2025-10-15: Media Query State Migration to Rune Context Helper (matchMedia)

**Components Affected**: SVGMap (internal), and any consumers using the `reducedMotion` store directly

**Status**: The legacy `reducedMotion` readable store is **deprecated** (not removed) for backward compatibility. It will be removed in a future major version (target: v2.0.0).

**Change**:

- The recommended API has changed from a readable store to a rune-based context helper with a more generic name to support future media queries.
- The new pattern requires calling `createMatchMedia()` at the app root and using `useMatchMedia()` to access the state.
- The reduced motion value is accessed via the `reducedMotion` property on the returned media query state object.
- The legacy `reducedMotion` readable store is still exported but deprecated. A console warning will appear in development when using the deprecated store.
- The module is now called `matchMedia` to reflect its broader purpose of tracking media query preferences (with future support for color scheme, contrast, etc.).

**Rationale**: Svelte 5 runes use context-based state management instead of stores. The new pattern provides better cleanup, explicit component hierarchy dependencies, and aligns with Svelte 5's reactivity model. The generic naming allows for future extensibility to track additional media queries in a single state object.

**Migration Guide**:

**Option 1: Keep using the deprecated store (temporary)**

The legacy store is still available for backward compatibility:

```svelte
<script>
  import { reducedMotion } from "@urbaninstitute/dataviz-components/stores";

  function animate() {
    if ($reducedMotion) {
      // Skip animation
    } else {
      // Perform animation
    }
  }
</script>
```

> **Note:** This will show a deprecation warning in development and will be removed in v2.0.0.

**Option 2: Migrate to the new matchMedia helpers (recommended)**

```svelte
<!-- In your root layout/app component -->
<script>
  import { createMatchMedia } from "@urbaninstitute/dataviz-components/stores";

  // Initialize the media query context once at app root
  createMatchMedia();
</script>

<!-- In any descendant component -->
<script>
  import { useMatchMedia } from "@urbaninstitute/dataviz-components/stores";

  const media = useMatchMedia();

  function animate() {
    if (media.reducedMotion) {
      // Skip animation
    } else {
      // Perform animation
    }
  }
</script>
```

**Impact**:

- **Non-breaking (for now):** The old `reducedMotion` store export remains available for consumers that cannot migrate immediately.
- **Migration required eventually:** The deprecated store will be removed in v2.0.0. A console warning is emitted in development today.
- **New setup required:** The rune pattern requires calling `createMatchMedia()` once at the root of your layout or app shell.
- **Access pattern changes:** Replace `$reducedMotion` checks with `media.reducedMotion` from the returned state object.
- **Benefits of migration:** Better SSR safety and cleanup, works across multiple component trees, and scales to additional media queries without new stores.

**Timeline**:

- **Current release (Phase 5)**: Rune helpers shipped and docs/stories updated. Deprecated store still exported with warning.
- **Target removal (v2.0.0)**: Legacy store slated for removal once downstream teams confirm adoption.
- **Recommended action**: Adopt `createMatchMedia()`/`useMatchMedia()` now to avoid churn during the v2.0.0 upgrade window.

**Reference**: Phase 5, Step 1 of the Svelte 5 migration.

---

### 2025-01-XX: DatawrapperIframe & PymChild Rune Migration

**Components Affected**: DatawrapperIframe, PymChild, `usePymChild()`

**Change**:

- DatawrapperIframe now exposes Datawrapper integration events via lowercase callback props (e.g., `onregionclick`, `onvisrendered`, `onstartrender`) instead of Svelte's `on:` directive.
- The legacy `pymChildStore` writable has been removed. Consumers should call the rune helpers `createPymChildState()` / `usePymChild()` instead.

**Rationale**: Svelte 5 rune components use DOM-style callback props instead of dispatchers/stores. The singleton helper keeps the Pym child instance in rune state without relying on Svelte 4 stores.

**Migration Guide**:

```svelte
<!-- Before -->
<DatawrapperIframe on:regionclick={handleRegion} />

<!-- After -->
<DatawrapperIframe onregionclick={(event) => handleRegion(event.detail)} />
```

```js
// Before
import { pymChildStore } from "@urbaninstitute/dataviz-components/stores";

if ($pymChildStore) {
  $pymChildStore.sendHeight();
}

// After
import { usePymChild } from "@urbaninstitute/dataviz-components/Pym/stores.js";

const pymChild = usePymChild();
pymChild.sendHeight();
```

**Impact**: Update any Storybook stories or consuming applications that relied on `on:` event syntax or the exported store. `usePymChild()` returns a singleton state; the helper mirrors the previous store API via `.child` and `.sendHeight()`.

**Reference**: Phase 4 migration – External Integrations & Complex Reactivity.

### `usePymChild()` Return Type

**Change**: `usePymChild()` now returns `PymChildState | undefined` instead of always returning a state object.

**Before**: The function maintained a module-level singleton and always returned an initialized state, even when called outside a `<PymChild>` component tree.

**After**: The function returns `undefined` if called without a `<PymChild>` ancestor in the component tree.

**Migration**: Use optional chaining when accessing methods:

```javascript
const pymChild = usePymChild();

// Before
pymChild.sendHeight();

// After
pymChild?.sendHeight();
```

**Rationale**: This change makes the component hierarchy dependency explicit, prevents bugs from uninitialized state, and aligns with Svelte 5's context patterns. Multiple `<PymChild>` instances can now coexist in different component trees without interference.

### 2025-01-XX: Event Handler Naming Convention Change

**Components Affected**: Button (and all future migrated components)

**Change**: Event handler callback props now use **lowercase names** matching DOM conventions (e.g., `onclick`, `onmouseenter`, `onmouseleave`) instead of camelCase names (e.g., `onClick`, `onMouseenter`, `onMouseleave`).

**Rationale**: Svelte 5 uses native DOM event attributes, which are lowercase. Using lowercase for custom event callbacks maintains consistency with the framework's direction and reduces cognitive overhead when distinguishing between DOM events and component events.

**Migration Guide**:

Before (Svelte 4 / old Button):

```svelte
<Button onClick={handleClick} onMouseenter={handleHover} onMouseleave={handleUnhover}>
  Click me
</Button>
```

After (Svelte 5 / updated Button):

```svelte
<Button onclick={handleClick} onmouseenter={handleHover} onmouseleave={handleUnhover}>
  Click me
</Button>
```

**Impact**: All consumers using Button with event handlers must update their prop names to lowercase. This is a straightforward find-and-replace operation, but will affect existing code.

**Reference**: Updated in Phase 0 of the Svelte 5 migration. See [runes-migration-tracker.md](./runes-migration-tracker.md) for implementation status.

---

### 2025-01-XX: Toggle Component Migration to Svelte 5 Runes

**Components Affected**: Toggle

**Changes**:

1. **Event handler**: Custom event dispatched via `createEventDispatcher()` replaced with `onclick` callback prop
2. **Two-way binding**: `active` prop now uses `$bindable()` to support two-way binding with `bind:active`

**Rationale**: Svelte 5 runes replace event dispatchers with callback props and use `$bindable()` for two-way binding support.

**Migration Guide**:

Before (Svelte 4):

```svelte
<script>
  let isActive = false;
</script>

<Toggle bind:active={isActive} on:click={() => console.log("toggled")} />
```

After (Svelte 5):

```svelte
<script>
  let isActive = $state(false);
</script>

<Toggle bind:active={isActive} onclick={() => console.log("toggled")} />
```

**Impact**: Consumers must update `on:click` to `onclick`. Two-way binding with `bind:active` continues to work as before.

**Reference**: Completed in Phase 1 of the Svelte 5 migration.

---

### 2025-01-XX: BasicDropdown Component Migration to Svelte 5 Runes

**Components Affected**: BasicDropdown

**Changes**:

1. **Event handler**: `on:change` forwarding replaced with `onchange` callback prop
2. **Custom icon slot**: `<slot name="icon">` replaced with snippet prop pattern
3. **Two-way binding**: `value` prop now uses `$bindable()` to support two-way binding with `bind:value`

**Rationale**: Svelte 5 runes replace slot forwarding with callback props and use snippets instead of named slots.

**Migration Guide**:

Before (Svelte 4):

```svelte
<BasicDropdown {data} bind:value={selectedValue} on:change={handleChange}>
  <CustomIcon slot="icon" />
</BasicDropdown>
```

After (Svelte 5):

```svelte
<BasicDropdown {data} bind:value={selectedValue} onchange={handleChange}>
  {#snippet icon()}
    <CustomIcon />
  {/snippet}
</BasicDropdown>
```

**Impact**:

- Consumers must update `on:change` to `onchange` callback
- Custom icon usage requires snippet syntax instead of slot
- Two-way binding with `bind:value` continues to work as before

**Reference**: Completed in Phase 1 of the Svelte 5 migration.

---

### 2025-10-15: SVGMap Background Click Handling

**Components Affected**: SVGMap and any consumers listening for map-level click events

**Change**: Introduced a dedicated `onbgclick` callback prop that fires only when the map background (not a feature) is clicked. The existing `onclick` callback now fires exclusively for feature interactions propagated from layers.

**Rationale**: Downstream apps need to distinguish between background deselection and feature selection. Splitting the callbacks removes the need for defensive checks in every handler and matches the DOM-style event naming pattern adopted across the migration.

**Migration Guide**:

```svelte
<!-- Before -->
<SVGMap {features} on:click={handleClick}>
  <!-- Both background and feature clicks routed to handleClick -->
</SVGMap>

<!-- After -->
<SVGMap
  {features}
  onclick={(event) => handleFeatureClick(event.detail.props)}
  onbgclick={() => clearSelection()}
>
  <!-- Background clicks are now isolated to onbgclick -->
</SVGMap>
```

**Impact**:

- **Breaking**: Any handler previously wired to `on:click` must now accept two callbacks (`onclick` for features, `onbgclick` for the background).
- **Non-breaking**: Event payloads remain `{ detail: { e, props } }`, so handler bodies require only the new dispatch location.

**Timeline**:

- **Released**: Phase 5 (2025-10-15) alongside the SVGMap rune migration.
- **Action**: Update consuming apps immediately; the old `on:click` signature is no longer invoked for background clicks.

**Reference**: Phase 5 – Visualization Suite background click decision.

---

### 2025-10-15: Map & Layer Snippet Prop Migration

**Components Affected**: SVGMap, SVGPolygonLayer, SVGPointLayer, SVGLabelLayer, ZoomControls, associated docs/stories

**Change**:

1. All Svelte 4 named slots (`tooltip`, `children`, etc.) are now snippet props.
2. Layer interaction hooks moved from Svelte 4 `on:` directives to lowercase callback props (`onclick`, `onmousemove`, `onmouseout`).

**Rationale**: Snippet props and lowercase callbacks are the standard Svelte 5 patterns. They remove reliance on `let:` slot props, simplify TypeScript inference, and align with the migration guide so Storybook args and docs illustrate the canonical rune approach.

**Migration Guide**:

```svelte
<!-- Tooltip customization -->
<!-- Before -->
<SVGMap {features}>
  <div slot="tooltip" let:props>
    <h3>{props.name}</h3>
  </div>
</SVGMap>

<!-- After -->
<SVGMap {features}>
  {#snippet tooltip(props)}
    <h3>{props.name}</h3>
  {/snippet}
</SVGMap>
```

```svelte
<!-- Layer events -->
<!-- Before -->
<SVGPolygonLayer on:click={handleClick} on:mousemove={handleHover} />

<!-- After -->
<SVGPolygonLayer onclick={handleClick} onmousemove={handleHover} />
```

```svelte
<!-- Label content -->
<!-- Before -->
<SVGLabelLayer let:props>
  <span slot="children">{props.name}</span>
</SVGLabelLayer>

<!-- After -->
<SVGLabelLayer>
  {#snippet children(props)}
    <span>{props.name}</span>
  {/snippet}
</SVGLabelLayer>
```

**Impact**:

- **Breaking**: Named slots must be rewritten as snippet props; Storybook stories now demonstrate the new syntax.
- **Breaking**: Layer callbacks must use lowercase props; `on:` directives no longer fire.
- **Docs/Stories**: Updated examples highlight snippet usage and lowercase callbacks so downstream teams can copy/paste.

**Timeline**:

- **Released**: Phase 5 (2025-10-15) with updated docs and Storybook stories.
- **Action**: Refactor custom map implementations to snippet props before upgrading.

**Reference**: Phase 5 – Visualization Suite snippet conversion spec.

---

### 2025-10-15: SVGMap Rune Context Helpers

**Components Affected**: SVGMap internals, SVGPolygonLayer, SVGPointLayer, SVGLabelLayer, and third-party custom layers

**Change**: Replaced the legacy Svelte 4 context stores (`projectionStore`, `transformStore`, etc.) with a rune-based context class exposed via `createSVGMapContext()`/`useSVGMapContext()`.

**Rationale**: Rune classes provide lifecycle-aware cleanup, remove implicit store subscriptions, and expose a single state object that can be extended in future map iterations. This mirrors the migration guide guidance for complex shared state.

**Migration Guide**:

```svelte
<!-- Before -->
<script>
  import { getContext } from "svelte";

  const { projection, transform } = getContext("map");

  const path = geoPath($projection);
</script>

<!-- After -->
<script>
  import { useSVGMapContext } from "@urbaninstitute/dataviz-components/maps";
  import { geoPath } from "d3-geo";

  const map = useSVGMapContext();
  const path = $derived(geoPath(map.projection));
</script>

<path d={path(feature)} />
```

**Impact**:

- **Breaking**: Custom layers that referenced the legacy `"map"` context key must switch to `useSVGMapContext()`.
- **Non-breaking**: Built-in layers already migrated; consumers only need to update external overrides.
- **Extension point**: The rune context exposes helper methods (`onPointerMove`, `onPointerDown`, `onPointerOut`) and shared state in one place.

**Timeline**:

- **Released**: Phase 5 (2025-10-15). Legacy context stores removed in the same release.
- **Action**: Update any custom layers or forks immediately to avoid runtime errors when `getContext("map")` is undefined.

**Reference**: Phase 5 – SVGMap context refactor.

---

### 2025-10-15: Scrolly Component Migration to Svelte 5 Runes

**Components Affected**: Scrolly

**Changes**:

1. **Context API**: Scrolly no longer exposes Svelte stores via context. Instead, it provides a rune-based state class accessible via the `useScrollyState()` helper function.
2. **Background slot → snippet**: The `background` named slot is replaced with a `background` snippet prop.
3. **Foreground slot → snippet**: The `foreground` named slot is replaced with a `foreground` snippet prop that receives `(slide, index)` parameters.
4. **State properties**: All scrolly state properties (`index`, `offset`, `progress`, `slideHeight`, `slideWidth`, `innerHeight`) are now reactive `$state` fields on the state object returned by `useScrollyState()`.

**Rationale**: Svelte 5 runes use context-based state management with rune classes instead of stores. Snippets replace named slots for content customization. This provides better type safety, clearer component hierarchy dependencies, and aligns with Svelte 5's reactivity model.

**Migration Guide**:

**1. Background slot → snippet:**

```svelte
<!-- Before -->
<Scrolly {slides}>
  <div slot="background">Background content</div>
</Scrolly>

<!-- After -->
<Scrolly {slides}>
  {#snippet background()}
    <div>Background content</div>
  {/snippet}
</Scrolly>
```

**2. Foreground slot → snippet:**

```svelte
<!-- Before -->
<Scrolly {slides}>
  <div slot="foreground" let:slide>
    <h2>{slide.title}</h2>
  </div>
</Scrolly>

<!-- After -->
<Scrolly {slides}>
  {#snippet foreground(slide, index)}
    <div>
      <h2>{slide.title}</h2>
    </div>
  {/snippet}
</Scrolly>
```

**3. Accessing scrolly state in background components:**

```svelte
<!-- Before -->
<script>
  import { getContext } from "svelte";

  const { index, offset, progress, slideHeight, slideWidth } = getContext("scrolly");

  // Use with $ store syntax
  $: currentSlide = $index;
</script>

<div>Current slide: {$index}</div>

<!-- After -->
<script>
  import { useScrollyState } from "@urbaninstitute/dataviz-components";

  const scrolly = useScrollyState();

  // Use properties directly (reactive)
  $derived(currentSlide = scrolly.index);
</script>

<div>Current slide: {scrolly.index}</div>
```

**Impact**:

- **Breaking**: Background and foreground customization now requires snippet syntax instead of named slots.
- **Breaking**: Context API changed from Svelte stores (`getContext("scrolly")`) to rune state helper (`useScrollyState()`).
- **Breaking**: State access changed from `$storeName` to `scrolly.propertyName`.
- **New export**: `useScrollyState` is exported from the package root for reuse across backgrounds/foregrounds.
- **Non-breaking**: Prop names and core behavior remain the same; only customization and context APIs changed.

**Timeline**:

- **Released**: Phase 5 (2025-10-15) with updated docs and stories demonstrating `useScrollyState()`.
- **Action**: Migrate background components before upgrading to the Phase 5 release to avoid runtime errors.

**Reference**: Completed in Phase 5, Step 6 of the Svelte 5 migration.

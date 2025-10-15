# Runes Migration – Breaking Changes Log

Use this document to record any intentional breaking changes introduced while migrating to Svelte 5 runes. Update it as soon as a change is identified so downstream consumers can plan for updates.

## How to Record Entries

- Add a dated subsection per change or batch of related changes.
- Include component(s) affected, a concise description of the behavior/API difference, rationale for the change, and guidance for consumers on upgrading.
- Link to the relevant pull request or issue once available.

## Entries

### 2025-01-XX: Media Query State Migration to Rune Context Helper (matchMedia)

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

- **Non-breaking (for now):** The old `reducedMotion` store export is still available
- **Migration required eventually:** The deprecated store will be removed in v2.0.0
- **New setup required:** The rune pattern requires setting up the context provider in your root component
- **Access pattern changes:** From `$reducedMotion` to `media.reducedMotion`
- **Benefits of migration:** Better cleanup, supports multiple component trees, more explicit dependencies, extensible for future media queries

**Timeline**:

- **Current release:** Deprecated store available with warning
- **Target removal:** v2.0.0 (major version bump)
- **Recommended action:** Begin migration to new helpers at your earliest convenience

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

### 2025-01-XX: SVGMap Component Migration to Svelte 5 Runes

**Components Affected**: SVGMap, SVGPolygonLayer, SVGPointLayer, SVGLabelLayer, ZoomControls

**Changes**:

1. **Background event**: New `onbgclick` callback prop for background clicks; background clicks no longer invoke `onclick`
2. **Tooltip customization**: Named slot `tooltip` replaced with snippet prop `tooltip`
3. **Event handlers (staged)**:
   - Map-level events: `SVGMap` now uses lowercase callback props (e.g., `onclick`, `onmousemove`, `onmouseout`, `onbgclick`).
   - Layer events: remain Svelte 4 `on:` custom event directives in Step 2; will migrate to callback props in Phase 5 Step 3.
4. **Internal implementation**: SVGMap internals now use a rune-based context class instead of Svelte stores (internal change, public API updated as noted above)

**Rationale**: Svelte 5 runes use callback props instead of event dispatchers and snippets instead of named slots. The new `onbgclick` handler provides clearer separation between feature clicks and background clicks.

**Migration Guide**:

**Background click handling:**

```svelte
<!-- Before -->
<SVGMap {features} on:click={handleClick}>
  <!-- Background clicks and feature clicks both called handleClick -->
</SVGMap>

<!-- After -->
<SVGMap {features} onclick={handleFeatureClick} onbgclick={handleBackgroundClick}>
  <!-- Background clicks now use separate handler -->
</SVGMap>
```

**Tooltip customization:**

```svelte
<!-- Before -->
<SVGMap {features}>
  <div slot="tooltip" let:props>
    <h3>{props.name}</h3>
    <p>{props.value}</p>
  </div>
</SVGMap>

<!-- After -->
<SVGMap {features}>
  {#snippet tooltip(props)}
    <div>
      <h3>{props.name}</h3>
      <p>{props.value}</p>
    </div>
  {/snippet}
</SVGMap>
```

**Event handlers:**

```svelte
<!-- Before -->
<SVGMap {features} on:mousemove={handleMouseMove} on:mouseout={handleMouseOut}>
  <SVGPolygonLayer {data} on:click={handleClick} on:mousemove={handleHover} />
</SVGMap>

<!-- After (Step 2) -->
<SVGMap {features} onmousemove={handleMouseMove} onmouseout={handleMouseOut}>
  <!-- Layers still dispatch custom events in Step 2 -->
  <SVGPolygonLayer {data} on:click={handleClick} on:mousemove={handleHover} />
</SVGMap>

<!-- After (Step 3) -->
<SVGMap {features} onmousemove={handleMouseMove} onmouseout={handleMouseOut}>
  <!-- Layers migrated to callback props -->
  <SVGPolygonLayer {data} onclick={handleClick} onmousemove={handleHover} />
</SVGMap>
```

**Impact**:

- **Breaking**: `on:click` on the map background now requires `onbgclick` callback; `onclick` only fires for feature clicks
- **Breaking**: Tooltip customization requires snippet syntax instead of named slot
- **Breaking (staged)**: Map event handlers use lowercase callback props; layer event handlers remain `on:` until Step 3
- **Non-breaking**: Internal context implementation changed to runes but maintains functional parity

**Reference**: Completed in Phase 5 of the Svelte 5 migration.

---

### 2025-01-XX: Scrolly Component Migration to Svelte 5 Runes

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

- **Breaking**: Background and foreground customization now requires snippet syntax instead of named slots
- **Breaking**: Context API changed from Svelte stores (`getContext("scrolly")`) to rune state helper (`useScrollyState()`)
- **Breaking**: State access changed from `$storeName` to `scrolly.propertyName`
- **New export**: `useScrollyState` is now exported from the package root for use in background/foreground components
- **Non-breaking**: All prop names and behavior remain the same; only the customization API has changed

**Reference**: Completed in Phase 5, Step 6 of the Svelte 5 migration.

# Runes Migration – Breaking Changes Log

Use this document to record any intentional breaking changes introduced while migrating to Svelte 5 runes. Update it as soon as a change is identified so downstream consumers can plan for updates.

## How to Record Entries

- Add a dated subsection per change or batch of related changes.
- Include component(s) affected, a concise description of the behavior/API difference, rationale for the change, and guidance for consumers on upgrading.
- Link to the relevant pull request or issue once available.

## Entries

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

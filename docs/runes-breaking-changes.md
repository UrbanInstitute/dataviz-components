# Runes Migration – Breaking Changes Log

Use this document to record any intentional breaking changes introduced while migrating to Svelte 5 runes. Update it as soon as a change is identified so downstream consumers can plan for updates.

## How to Record Entries

- Add a dated subsection per change or batch of related changes.
- Include component(s) affected, a concise description of the behavior/API difference, rationale for the change, and guidance for consumers on upgrading.
- Link to the relevant pull request or issue once available.

## Entries

### 2025-01-XX: Event Handler Naming Convention Change

**Components Affected**: Button (and all future migrated components)

**Change**: Event handler callback props now use **lowercase names** matching DOM conventions (e.g., `onclick`, `onmouseenter`, `onmouseleave`) instead of camelCase names (e.g., `onClick`, `onMouseenter`, `onMouseleave`).

**Rationale**: Svelte 5 uses native DOM event attributes, which are lowercase. Using lowercase for custom event callbacks maintains consistency with the framework's direction and reduces cognitive overhead when distinguishing between DOM events and component events.

**Migration Guide**:

Before (Svelte 4 / old Button):
```svelte
<Button
  onClick={handleClick}
  onMouseenter={handleHover}
  onMouseleave={handleUnhover}
>
  Click me
</Button>
```

After (Svelte 5 / updated Button):
```svelte
<Button
  onclick={handleClick}
  onmouseenter={handleHover}
  onmouseleave={handleUnhover}
>
  Click me
</Button>
```

**Impact**: All consumers using Button with event handlers must update their prop names to lowercase. This is a straightforward find-and-replace operation, but will affect existing code.

**Reference**: Updated in Phase 0 of the Svelte 5 migration. See [runes-migration-tracker.md](./runes-migration-tracker.md) for implementation status.

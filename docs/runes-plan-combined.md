# Svelte Runes Migration – Combined Plan

## Goals

- Convert the component library, supporting docs, and stories to Svelte 5 rune syntax without regressing behavior or API contracts.
- Document canonical patterns for props, state, events, slots, lifecycle, and store usage so every component follows the same playbook.
- Stage migration work so that tests, Storybook stories, and consuming apps can be validated incrementally.
- Preserve existing APIs wherever possible and capture any unavoidable breaking changes in [`docs/runes-breaking-changes.md`](./runes-breaking-changes.md) as soon as they are discovered.
- Only introduce breaking changes when supporting Svelte 5 runes leaves no reasonable alternative, and document the rationale alongside the change.

## How to Use This Plan

- Treat this document as the roadmap for sequencing work and tracking coverage.
- Use [`docs/svelte5-migration-guide.md`](./svelte5-migration-guide.md) as the authoritative migration playbook (formerly “runes-migration-playbook”). It contains the up-to-date code patterns referenced throughout this plan.
- Keep [`docs/runes-migration-tracker.md`](./runes-migration-tracker.md) current; each row is pre-populated by phase so the team can update the `todo` → `in-progress` → `review` → `done` statuses as work advances.
- When you pick up a component or phase below, jump to the matching sections in the migration guide (see the reference map that follows).
- Phases outline a recommended order; teams can work in parallel as long as overlapping dependencies are coordinated.
- Every code or test file modified during the migration must start with `Portions of this code have been written or edited by generative AI tools.`; documentation like this plan is exempt.

## Project Snapshot

- **Already migrated**: `src/lib/Button/Button.svelte`, `src/lib/LogoUrbanWide/LogoUrbanWide.svelte`, `src/lib/maps/Tilemap/Tilemap.svelte`, `src/docs/stories/DatawrapperSwitching.stories.svelte`. These serve as examples for `$props()`, `$state()`, `$derived()`, `$effect()`, and rune-style event attributes.
- **Outstanding components** (~50 library files + docs/stories) fall into three buckets:
  - _Presentation-only_: typography, icons, logos, section wrappers, font loaders.
  - _Interactive controls & data wrappers_: Toggle, BasicDropdown, ReturnTop, SocialShare, Scorecard, DatawrapperIframe, Navbar, Tooltip, Analytics.
  - _Complex visualization suite_: Layercake axes, ChartBlock, Scrolly, SVG map system (map + layers + legends), PymChild integration.
- **Cross-cutting concerns**: legacy `on:` directives, `createEventDispatcher`, `$:` reactive labels, `$$slots`, `$$restProps`, store shorthand (`$store`), lifecycle hooks (`onMount`, `afterUpdate`), and context usage.

### Migration Guide Reference Map

| Plan Phase                                 | Migration Guide Sections                                                                                                                                                      |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Foundation & Tooling                       | [Props](./svelte5-migration-guide.md#props), [Event Handlers](./svelte5-migration-guide.md#event-handlers)                                                                    |
| Mid-tier Controls                          | [State Management](./svelte5-migration-guide.md#state-management), [Two-way Bindings](./svelte5-migration-guide.md#two-way-bindings)                                          |
| Presentation & Prop-only Components        | [Props](./svelte5-migration-guide.md#props), [Slots](./svelte5-migration-guide.md#slots)                                                                                      |
| Data & Wrapper Components                  | [State Management](./svelte5-migration-guide.md#state-management), [Reactivity](./svelte5-migration-guide.md#reactivity), [Lifecycle](./svelte5-migration-guide.md#lifecycle) |
| External Integrations & Complex Reactivity | [Props](./svelte5-migration-guide.md#props), [Lifecycle](./svelte5-migration-guide.md#lifecycle), [Event Handlers](./svelte5-migration-guide.md#event-handlers)               |
| Visualization Suite                        | [State Management](./svelte5-migration-guide.md#state-management), [Reactivity](./svelte5-migration-guide.md#reactivity), [Lifecycle](./svelte5-migration-guide.md#lifecycle) |
| Docs & Stories                             | [Props](./svelte5-migration-guide.md#props), [Slots](./svelte5-migration-guide.md#slots), [Event Handlers](./svelte5-migration-guide.md#event-handlers)                       |

## Migration Phases

1. **Phase 0 – Foundation & Tooling**
   - [ ] Codify rune patterns (props, state, events, slots, lifecycle) in CONTRIBUTING.
   - [ ] Review the pre-populated migration tracker in [`docs/runes-migration-tracker.md`](./runes-migration-tracker.md), circulate it to the team, and confirm kickoff statuses.
   - [ ] Patch missing Storybook stories/tests uncovered during the audit so every component has basic coverage before migration.
   - [ ] Review the already-migrated components (`Button`, `LogoUrbanWide`, `Tilemap`, `DatawrapperSwitching`) to confirm they still represent the desired patterns; align them if they drifted.
2. **Phase 1 – Pattern Validation on Mid-tier Controls**
   - [ ] Migrate `Toggle`, `BasicDropdown`, and shared chevron icons using the state + event patterns from the migration guide.
   - [ ] Update accompanying stories/docs to demonstrate rune listener naming (`onclick`, etc.).
   - [ ] Capture playbook notes and blockers before moving on.
3. **Phase 2 – Presentation & Prop-Only Components**
   - [ ] Sweep typography, iconography, logos, font wrappers, and layout shells.
   - [ ] Apply `$props()` destructuring and defaults per the migration guide; verify parity with existing exports.
   - [ ] Smoke-test mixed rune/non-rune imports to confirm interoperability.
4. **Phase 3 – Data & Wrapper Components**
   - [ ] Migrate `Meta`, `Analytics`, `ProjectCredits`, `LoadingWrapper`, `Theme`, `Navbar`, `Scorecard`, `SocialShare`, `ReturnTop`.
   - [ ] Standardize derived values with `$derived()` and convert event forwarding to callback props (`onShare`, `onReturnTop`, etc.).
   - [ ] Guard browser-only logic with `$effect` checks and log any breaking changes discovered.
5. **Phase 4 – External Integrations & Complex Reactivity**
   - [ ] Convert `DatawrapperIframe` and `PymChild`, ensuring rest props and postMessage handlers match rune expectations.
   - [ ] Migrate `Tooltip` and similar reactive chains, replacing `$:` with `$derived()`/`$effect()` while preserving ordering.
   - [ ] Validate integrations in Storybook or dedicated sandboxes before closing tasks.
6. **Phase 5 – Visualization Suite**
   - [ ] Tackle `ChartBlock`, Layercake axes, `Scrolly`, and the `maps` directory (SVG map, layers, color legend, zoom controls).
   - [ ] Rebuild context + store subscriptions manually (e.g., `subscribe` within `$effect.root()`) and convert custom dispatchers to callback props (`onregionclick`, `onhover`, etc.).
   - [ ] Keep Layercake-provided stores/context helpers intact and bridge their values via `$effect.root()` subscriptions instead of rewriting them.
   - [ ] Run interaction smoke tests in Storybook and any existing regression suites.
7. **Phase 6 – Docs & Stories**
   - [ ] Update `src/docs` content and Storybook stories to rune syntax, highlighting listener/slot changes.
   - [ ] Run `npm run build-storybook` and `npm run build-storybook:test` for the docs batch once updates are complete.

## Technical Guidelines (Key Reminders)

- **Props & passthrough**: Follow the [$props patterns](./svelte5-migration-guide.md#props) (including [rest/spread handling](./svelte5-migration-guide.md#spreading-restprops)) and mirror existing defaults; flag deviations in [`docs/runes-breaking-changes.md`](./runes-breaking-changes.md).
- **State & stores**: Replace internal stores with the [class-based `$state` approach](./svelte5-migration-guide.md#state-management); when consuming third-party stores (including Layercake), leave them intact and subscribe via the [external store pattern](./svelte5-migration-guide.md#consuming-external-stores).
- **Reactivity & lifecycle**: Translate `$:` work to [`$derived()` or `$effect()`](./svelte5-migration-guide.md#reactivity), apply the guidance on [`$derived.by()`](./svelte5-migration-guide.md#choosing-derived-vs-derivedby) and [effect ordering](./svelte5-migration-guide.md#effect-ordering), and lean on the [lifecycle section](./svelte5-migration-guide.md#lifecycle) for `$effect.root()`, `$effect.pre()`, and update hook replacements.
- **Events & slots**: Adopt [callback props + DOM listener names](./svelte5-migration-guide.md#event-handlers), wrap handlers to recreate [event modifiers](./svelte5-migration-guide.md#event-modifiers), and replace slot checks with [snippet props](./svelte5-migration-guide.md#slots); document renamed events in the breaking-changes log.
- **Component APIs & directives**: `bind:this`, transitions/animations, `<svelte:*>` elements, and exported instance methods behave the same; see [Existing Directives & Elements](./svelte5-migration-guide.md#existing-directives--elements) and [Component APIs](./svelte5-migration-guide.md#component-apis--instance-methods) for quick reminders.
- **Testing hooks & typing**: Preserve action/event modifier semantics in tests, keep prop/state typing up to date, and note that no tooling upgrades are required beyond adjusting component imports.
- **Mixed syntax**: Rune components can still consume legacy Svelte 4 components (and vice versa). Ensure parents pass DOM-style handlers to rune children and keep `on:` listeners for legacy children until they are migrated.

## Per-Component Checklist

- [ ] Update the component (and any siblings) using the patterns linked above; replace internal stores and bridge external store subscriptions with the rune patterns.
- [ ] Add the comment `Portions of this code have been written or edited by generative AI tools.` at the top of every source or test file you touch as part of the migration (plan/docs files are excluded).
- [ ] Refresh colocated tests and Storybook stories to rune syntax only if the component change requires it; expect existing tests to pass without adjustment unless issues are discovered.
- [ ] Note any API or behavior changes in [`docs/runes-breaking-changes.md`](./runes-breaking-changes.md) and update the migration tracker row with status and supporting links.
- [ ] Run targeted lint/tests locally; once the batch is complete, execute the full suite before committing.
- [ ] Move the migration tracker entry through `in-progress`, `review`, and `done`, adding PR links or follow-up notes for the next agent.

## Tooling & Workflow

- Standardize formatting with Prettier after each migration batch; run targeted lint/tests as you iterate and reserve the full suite for completed component batches.
- Add temporary scripts (if helpful) to scan for legacy patterns (`rg "on:" src/lib` or `rg "\$\$slots"`). Remove or document scripts once the migration completes.
- Update Storybook stories concurrently with component changes to avoid mixed syntax in the same PR.
- Maintain a changelog entry summarizing rune adoption milestones, particularly for components with API adjustments (event names, removed dispatchers).
- Document any intentional breaking API changes as they surface in [`docs/runes-breaking-changes.md`](./runes-breaking-changes.md) so downstream consumers can prepare updates.

## QA & Validation

- For each migrated component, manually verify Storybook stories and run targeted unit tests (Vitest) before marking the checklist item complete.
- When a component (or batch of related components) is fully migrated and ready to commit, run the full suite: `npm test`, `npm run lint`, `npm run check`, `npm run build`, `npm run build-storybook:test`.
- Capture regression risks (event payload changes, store behavior, SSR issues) in PR descriptions and request design/QA sign-off for visual components.
- Before release, smoke-test the `dist` build and ensure consuming applications are updated with new event attribute names.

## Deliverables & Sign-off

- [`docs/svelte5-migration-guide.md`](./svelte5-migration-guide.md) maintained as the canonical migration playbook (covers the former “runes-migration-playbook” deliverable).
- [`docs/runes-breaking-changes.md`](./runes-breaking-changes.md) capturing any intentional API changes encountered during migration.
- Updated Storybook stories and docs reflecting rune syntax.
- Final migration report summarizing outstanding work, risks, and recommended follow-ups (e.g., adopting new rune-friendly utility helpers).
- Confirmed handoff to maintainers with guidance on enforcing rune patterns in new contributions.

# Runes Migration Tracker

Use this tracker to coordinate task status and surface follow-up actions as the team migrates components to Svelte 5 runes. Update the relevant row whenever you start, hand off, or finish work so progress stays clear for the next agent.

## Legend

-+- **Status**: `todo`, `in-progress`, `review`, `done`
- **Notes**: call out links, blockers, or follow-ups

## Phase 0 – Foundation & Tooling

| Component / Area                               | Status      | Notes |
| ---------------------------------------------- | ----------- | ----- |
| Codify rune patterns in `CONTRIBUTING`         | `done`      | CONTRIBUTING.md created with comprehensive Svelte 5 patterns |
| Circulate tracker & confirm kickoff workflow   | `done`      | Tracker confirmed ready; no new stories/tests needed for migration |
| Patch missing baseline Storybook stories/tests | `done`      | Working with existing test/story coverage; no new additions required |
| Revalidate migrated exemplars (`Button`, etc.) | `done`      | Button, DatawrapperSwitching fixed; LogoUrbanWide, Tilemap validated |

## Phase 1 – Pattern Validation on Mid-tier Controls

| Component / Area                               | Status      | Notes |
| ---------------------------------------------- | ----------- | ----- |
| Toggle                                         | `todo`      |       |
| BasicDropdown                                  | `todo`      |       |
| Shared chevron icons                           | `todo`      |       |
| Update companion docs/stories for rune events  | `todo`      |       |

## Phase 2 – Presentation & Prop-only Components

| Component / Area                          | Status      | Notes |
| ----------------------------------------- | ----------- | ----- |
| Typography components                     | `todo`      |       |
| Iconography set                           | `todo`      |       |
| Logo components                           | `todo`      |       |
| Font wrappers & loaders                   | `todo`      |       |
| Layout shells & wrappers                  | `todo`      |       |
| Mixed rune/non-rune interoperability pass | `todo`      |       |

## Phase 3 – Data & Wrapper Components

| Component / Area  | Status      | Notes |
| ----------------- | ----------- | ----- |
| Meta              | `todo`      |       |
| Analytics         | `todo`      |       |
| ProjectCredits    | `todo`      |       |
| LoadingWrapper    | `todo`      |       |
| Theme             | `todo`      |       |
| Navbar            | `todo`      |       |
| Scorecard         | `todo`      |       |
| SocialShare       | `todo`      |       |
| ReturnTop         | `todo`      |       |

## Phase 4 – External Integrations & Complex Reactivity

| Component / Area                            | Status      | Notes |
| ------------------------------------------- | ----------- | ----- |
| DatawrapperIframe                           | `todo`      |       |
| PymChild                                    | `todo`      |       |
| Tooltip                                     | `todo`      |       |
| Reactive utility components & helpers pass  | `todo`      |       |
| Integration validation in Storybook/sandbox | `todo`      |       |

## Phase 5 – Visualization Suite

| Component / Area               | Status      | Notes |
| ------------------------------ | ----------- | ----- |
| ChartBlock                     | `todo`      |       |
| Layercake axes                 | `todo`      |       |
| Scrolly                        | `todo`      |       |
| Maps suite (map, layers, legend) | `todo`      |       |
| Zoom & interaction controls    | `todo`      |       |

## Phase 6 – Docs & Stories

| Component / Area                         | Status      | Notes |
| ---------------------------------------- | ----------- | ----- |
| Docs content updates (`src/docs`)        | `todo`      |       |
| Storybook story migrations               | `todo`      |       |
| `build-storybook` + smoke test batch run | `todo`      |       |

## Follow-ups / Blockers

### Phase 0 Decisions & Notes

- **Event naming convention**: Standardized on **lowercase event names** (onclick, onmouseenter, onkeydown) to match DOM conventions and Svelte 5 recommendations. This is a breaking change for components like Button that previously used camelCase (onClick, onMouseenter). All future components should follow lowercase convention.

- **Exemplar component fixes**:
  - Button.svelte: Removed unused createEventDispatcher import, converted event props to lowercase
  - Button.stories.svelte: Updated tests to use lowercase event names
  - DatawrapperSwitching.stories.svelte: Fixed inconsistent event syntax (on: vs callback props)

- **Test/Story strategy**: No new tests or stories created for Phase 0. Migration will work with existing coverage and add tests/stories only where explicitly needed for new functionality.

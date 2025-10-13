# Repository Guidelines

## Project Structure & Module Organization

The Svelte component source lives under `src/lib`, organized by feature (e.g., `ChartBlock`, `Layercake`, `maps`, `utils`). Shared stores/actions sit in `src/lib/stores` and `src/lib/actions`, while global styles live in `src/lib/style`. Docs and Storybook stories are tracked in `src/docs`. Package entry points compile into `dist` during release; never edit generated artifacts there by hand. Build helpers and scaffolding scripts reside in `bin`. Static assets for Storybook belong in `static`, and generated previews land in `storybook-static`. During the Svelte 5 migration, plan to replace any remaining legacy stores in `src/lib/stores` with rune-based state classes rather than extending the old store modules.

## Build, Test, and Development Commands

Use `npm run dev` to launch Storybook for interactive development at `http://localhost:6006`. Run `npm run build` before publishing to produce the Vite bundle and package exports. `npm run preview` serves the built demo if you need to inspect the compiled package locally. Create static Storybook snapshots with `npm run build-storybook` and smoke-test them using `npm run build-storybook:test`. Regenerate shared theme CSS after updating design tokens via `npm run compile-theme-styles`. The `npm run create-component` scaffold seeds new component directories under `src/lib`.

## Coding Style & Naming Conventions

Honor the Prettier rules (2-space indentation, single quotes in JS, trailing commas) and Svelte's `<script>/<style>` conventions. Components and directories use PascalCase (`Scorecard`, `LogoUrban`), while exported stores, utils, and actions use camelCase; constants stay in SCREAMING_CASE. Keep TypeScript declarations alongside their source and let packaging emit `.d.ts` files into `dist`. Run `npm run lint` and `npm run format` before committing to avoid churn in review.

## Testing Guidelines

Vitest powers unit tests; mirror component files with `Component.test.js` or colocate specs in the nearest directory. Prefer descriptive `describe`/`it` blocks and assert rendered behavior rather than snapshots. Execute `npm test` for the unit suite and `npm run check` for Svelte type validation. For interaction or visual regressions, rely on Storybook's runner via `npm run test-storybook-run` after updating stories.

## Commit & Pull Request Guidelines

Commit messages trend toward `<scope>: <summary>` or concise imperatives (`Fix: set pointer-events style properly`). Keep subject lines under 72 characters and include body details when behavior changes. Before opening a PR, ensure lint, tests, and `npm run build` succeed, link related issues, and attach Storybook screenshots or GIFs for UI changes. Highlight any packaging considerations and note follow-up work in the PR description so reviewers can respond quickly.

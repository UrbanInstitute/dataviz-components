// Portions of this code have been written or edited by generative AI tools.
// Reexport your entry components here

// New rune-based media query state helpers (recommended)
// Generic matchMedia API supports multiple media query properties
export { createMatchMedia, useMatchMedia } from "./matchMedia.svelte.js";

// Deprecated: Legacy readable store for backward compatibility
// @deprecated Use createMatchMedia()/useMatchMedia() instead
export { reducedMotion } from "./reducedMotion.js";

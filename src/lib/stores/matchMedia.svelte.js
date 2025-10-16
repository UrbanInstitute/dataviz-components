// A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review.
// Rune-based state module for tracking media query preferences
// Replaces the legacy Svelte 4 store implementation

import { getContext, setContext, hasContext } from "svelte";

const MATCH_MEDIA_KEY = Symbol("MatchMedia");

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

/**
 * State class for tracking media query preferences
 */
class MatchMediaState {
  /** @type {boolean} - Whether the user prefers reduced motion */
  reducedMotion = $state(false);

  #reducedMotionQuery = null;

  constructor() {
    if (typeof window !== "undefined") {
      this.#reducedMotionQuery = window.matchMedia(reducedMotionQuery);
      this.reducedMotion = this.#reducedMotionQuery.matches;
    }
  }

  /**
   * Start listening for media query changes. Returns cleanup function.
   * @returns {() => void}
   */
  listen() {
    if (!this.#reducedMotionQuery) return () => {};

    const handler = (/** @type {MediaQueryListEvent} */ event) => {
      this.reducedMotion = event.matches;
    };

    this.#reducedMotionQuery.addEventListener("change", handler);
    return () => this.#reducedMotionQuery.removeEventListener("change", handler);
  }
}

/**
 * Create and initialize the match media state, setting it into context.
 * Call this at the root of your component tree (e.g., in your app layout).
 * This function is idempotent - if called multiple times, it returns the existing state.
 * @returns {MatchMediaState}
 */
export function createMatchMedia() {
  // Return existing state if already initialized (idempotent)
  if (hasContext(MATCH_MEDIA_KEY)) {
    return getContext(MATCH_MEDIA_KEY);
  }

  const state = new MatchMediaState();
  $effect(() => state.listen());

  setContext(MATCH_MEDIA_KEY, state);
  return state;
}

/**
 * Get the match media state from context.
 * Must be called within a component tree that has called createMatchMedia().
 * @returns {MatchMediaState}
 * @throws {Error} if createMatchMedia() has not been called in an ancestor component
 */
export function useMatchMedia() {
  if (!hasContext(MATCH_MEDIA_KEY)) {
    // if a component wants to use MatchMedia and no ancestor has initialized it in the contex, go ahead and create a new context
    return createMatchMedia();
  }
  return getContext(MATCH_MEDIA_KEY);
}

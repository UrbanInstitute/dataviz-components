// A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review.
// Rune-based context module for tracking media query preferences
// Replaces the legacy Svelte 4 store implementation

import { getContext, setContext, hasContext } from "svelte";

const MATCH_MEDIA_CONTEXT_KEY = Symbol("MatchMediaContext");

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

/**
 * Context class for tracking media query preferences
 */
class MatchMediaContext {
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
 * Create and initialize the match media context, setting it into context.
 * Call this at the root of your component tree (e.g., in your app layout).
 * This function is idempotent - if called multiple times, it returns the existing context.
 * @returns {MatchMediaContext}
 */
export function createMatchMediaContext() {
  // Return existing state if already initialized (idempotent)
  if (hasContext(MATCH_MEDIA_CONTEXT_KEY)) {
    return getContext(MATCH_MEDIA_CONTEXT_KEY);
  }

  const context = new MatchMediaContext();
  $effect(() => context.listen());

  setContext(MATCH_MEDIA_CONTEXT_KEY, context);
  return context;
}

/**
 * Get the match media context from context.
 * Must be called within a component tree that has called createMatchMediaContext().
 * @returns {MatchMediaContext}
 * @throws {Error} if createMatchMediaContext() has not been called in an ancestor component
 */
export function useMatchMediaContext() {
  if (!hasContext(MATCH_MEDIA_CONTEXT_KEY)) {
    // If no ancestor has initialized the context, lazily create a new one.
    return createMatchMediaContext();
  }
  return getContext(MATCH_MEDIA_CONTEXT_KEY);
}

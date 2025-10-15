// Portions of this code have been written or edited by generative AI tools.
import { getContext, hasContext, setContext } from "svelte";

export const SCROLLY_STATE = Symbol("SCROLLY_STATE");

/**
 * Rune-based state class for Scrolly component context.
 * Tracks scroll position, dimensions, and progress through slides.
 */
class ScrollyState {
  /**
   * The index of the current slide
   * @type {number}
   */
  index = $state(0);

  /**
   * How far the section has scrolled past the threshold, as a value between 0 and 1
   * @type {number}
   */
  offset = $state(0);

  /**
   * How far the foreground has travelled, where 0 is the top of the foreground crossing top, and 1 is the bottom crossing bottom
   * @type {number}
   */
  progress = $state(0);

  /**
   * The height of the slide, set to window.outerHeight - outer not inner because inner changes on some devices causing user to jump out of sequence
   * @type {number}
   */
  slideHeight = $state(0);

  /**
   * The width of the slide
   * @type {number}
   */
  slideWidth = $state(0);

  /**
   * Set to window.innerHeight - the viewable area of the window
   * @type {number}
   */
  innerHeight = $state(0);
}

/**
 * Creates a new ScrollyState instance and sets it into context.
 * Call this once from within the Scrolly component.
 * @returns {ScrollyState}
 */
export function createScrollyState() {
  const state = new ScrollyState();
  setContext(SCROLLY_STATE, state);
  return state;
}

/**
 * Retrieves the Scrolly state from context.
 * Must be called from within a component that is a descendant of a Scrolly component.
 * @returns {ScrollyState}
 * @throws {Error} If called outside of a Scrolly component tree
 */
export function useScrollyState() {
  if (!hasContext(SCROLLY_STATE)) {
    throw new Error(
      "useScrollyState() must be called from within a Scrolly component tree. " +
        "Make sure your component is a child of <Scrolly>."
    );
  }
  return getContext(SCROLLY_STATE);
}

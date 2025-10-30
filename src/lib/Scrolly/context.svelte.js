// A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review.
import { getContext, hasContext, setContext } from "svelte";

export const SCROLLY_CONTEXT_KEY = Symbol("SCROLLY_CONTEXT");

/**
 * Rune-based context class for the Scrolly component.
 * Tracks scroll position, dimensions, and progress through slides.
 */
class ScrollyContext {
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
 * Creates a new Scrolly context instance and sets it into context.
 * Call this once from within the Scrolly component.
 * @returns {ScrollyContext}
 */
export function createScrollyContext() {
  const context = new ScrollyContext();
  setContext(SCROLLY_CONTEXT_KEY, context);
  return context;
}

/**
 * Retrieves the Scrolly context from Svelte context.
 * Must be called from within a component that is a descendant of a Scrolly component.
 * @returns {ScrollyContext}
 * @throws {Error} If called outside of a Scrolly component tree
 */
export function useScrollyContext() {
  if (!hasContext(SCROLLY_CONTEXT_KEY)) {
    throw new Error(
      "useScrollyContext() must be called from within a Scrolly component tree. " +
        "Make sure your component is a child of <Scrolly>."
    );
  }
  return getContext(SCROLLY_CONTEXT_KEY);
}

// A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review.
import { getContext, hasContext, setContext } from "svelte";

const PYM_CHILD_CONTEXT_KEY = Symbol("pym-child-context");

class PymChildContext {
  /**
   * @type {import("pym.js").Child | null}
   */
  child = $state(null);

  /**
   * @param {import("pym.js").Child | null} instance
   */
  setChild(instance) {
    this.child = instance;
  }

  clear() {
    this.child = null;
  }

  /**
   * Proxy helper that mirrors pym.js#sendHeight for convenience.
   * @param  {...any} args
   */
  sendHeight(...args) {
    this.child?.sendHeight?.(...args);
  }
}

/**
 * Ensure a global Pym child context exists and seed it into Svelte context so descendants can access it.
 * @returns {PymChildContext}
 */
export function createPymChildContext() {
  const context = new PymChildContext();
  setContext(PYM_CHILD_CONTEXT_KEY, context);
  return context;
}

/**
 * Consume the Pym child context from Svelte context.
 * Returns undefined if called outside a <PymChild> component tree.
 * @returns {PymChildContext | undefined}
 */
export function usePymChildContext() {
  return hasContext(PYM_CHILD_CONTEXT_KEY)
    ? getContext(PYM_CHILD_CONTEXT_KEY)
    : undefined;
}

// A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review.
import { getContext, hasContext, setContext } from "svelte";

const PYM_CHILD_CONTEXT = Symbol("pym-child-context");

class PymChildState {
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
 * Ensure a global Pym child state exists and seed it into context so descendants can access it.
 * @returns {PymChildState}
 */
export function createPymChildState() {
  const state = new PymChildState();
  setContext(PYM_CHILD_CONTEXT, state);
  return state;
}

/**
 * Consume the Pym child state from context.
 * Returns undefined if called outside a <PymChild> component tree.
 * @returns {PymChildState | undefined}
 */
export function usePymChild() {
  return hasContext(PYM_CHILD_CONTEXT) ? getContext(PYM_CHILD_CONTEXT) : undefined;
}

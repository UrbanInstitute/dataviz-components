// A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review.
// Shared utilities for MapLibre layer components

import { getContext, setContext } from "svelte";

/**
 * Merge convenience paint props with explicit paint object.
 * Explicit paint properties take precedence.
 * @param {Object} conveniencePaint - Paint derived from convenience props
 * @param {Object} [explicitPaint] - User-provided raw paint object
 * @returns {Object}
 */
export function mergePaint(conveniencePaint, explicitPaint) {
  if (!explicitPaint) return conveniencePaint;
  return { ...conveniencePaint, ...explicitPaint };
}

/**
 * Merge convenience layout props with explicit layout object.
 * Explicit layout properties take precedence.
 * @param {Object} convenienceLayout - Layout derived from convenience props
 * @param {Object} [explicitLayout] - User-provided raw layout object
 * @returns {Object}
 */
export function mergeLayout(convenienceLayout, explicitLayout) {
  if (!explicitLayout) return convenienceLayout;
  return { ...convenienceLayout, ...explicitLayout };
}

/**
 * Generate a unique layer/source ID.
 * @param {string} [prefix="maplibre"] - Prefix for the generated ID
 * @returns {string}
 */
// Note: idCounter is module-level and increments across SSR requests.
// This is intentional - IDs only need uniqueness within a single page render.
let idCounter = 0;
export function generateId(prefix = "maplibre") {
  return `${prefix}-${++idCounter}`;
}

// Source context for layers to access their source ID
const SOURCE_CONTEXT = Symbol("MapLibreSourceContext");

/**
 * Set the source context for child layers
 * @param {string} sourceId - The source ID
 */
export function setSourceContext(sourceId) {
  setContext(SOURCE_CONTEXT, { id: sourceId });
}

/**
 * Get the source context from a parent MapLibreSource
 * @returns {{ id: string }}
 * @throws {Error} if called outside of a MapLibreSource component
 */
export function useSourceContext() {
  const context = getContext(SOURCE_CONTEXT);
  if (!context) {
    throw new Error("useSourceContext() must be called within a MapLibreSource component.");
  }
  return context;
}

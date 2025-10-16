// A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review.
// Rune-based context module for SVGMap state
// Replaces the legacy Svelte 4 store implementation

import { getContext, setContext, hasContext } from "svelte";

const SVG_MAP_CONTEXT = Symbol("SVGMapContext");

/**
 * State class for managing SVGMap context
 */
class SVGMapContext {
  /** @type {Function | null} - D3 projection function */
  projection = $state(null);

  /** @type {Object} - D3 zoom transform (default zoomIdentity) */
  transform = $state({ k: 1, x: 0, y: 0 });

  /** @type {Object[]} - Array of GeoJSON features */
  features = $state([]);

  /** @type {any | null} - Props of the currently highlighted feature */
  stickyHighlight = $state(null);

  /** @type {Function | null} - Private callback for tooltip updates */
  #tooltipCallback = null;

  /** @type {Function | null} - Map-level onclick callback */
  onclick = null;

  /** @type {Function | null} - Map-level onmousemove callback */
  onmousemove = null;

  /** @type {Function | null} - Map-level onmouseout callback */
  onmouseout = null;

  /**
   * Set the tooltip callback function
   * @param {Function} callback - Function to call when tooltip should be updated
   */
  setTooltipCallback(callback) {
    this.#tooltipCallback = callback;
  }

  /**
   * Handle pointer move events from layers
   * @param {PointerEvent} e - The pointer event
   * @param {any} props - Feature properties
   * @param {Object} [opts] - Options
   * @param {boolean} [opts.tooltip] - Whether to show tooltip
   */
  onPointerMove(e, props, opts) {
    // Show tooltip if enabled and not sticky highlighted
    if (opts?.tooltip && !this.stickyHighlight) {
      this.#tooltipCallback?.({ x: e.pageX, y: e.pageY, props });
    }
    // Fire map-level callback
    this.onmousemove?.(new CustomEvent("mousemove", { detail: { e, props } }));
  }

  /**
   * Handle pointer down events from layers
   * @param {PointerEvent} e - The pointer event
   * @param {any} props - Feature properties
   * @param {Object} [opts] - Options
   * @param {boolean} [opts.tooltip] - Whether to show tooltip
   */
  onPointerDown(e, props, opts) {
    // Toggle sticky highlight
    if (this.stickyHighlight) {
      // Clear sticky highlight and tooltip
      this.#tooltipCallback?.(undefined);
      this.stickyHighlight = null;
    } else {
      // Set sticky highlight
      this.stickyHighlight = props;
      if (opts?.tooltip) {
        this.#tooltipCallback?.({ x: e.pageX, y: e.pageY, props });
      }
    }
    // Fire map-level callback
    this.onclick?.(new CustomEvent("click", { detail: { e, props } }));
  }

  /**
   * Handle pointer out events from layers
   * @param {PointerEvent} e - The pointer event
   */
  onPointerOut(e) {
    // Fire map-level callback
    this.onmouseout?.(new CustomEvent("mouseout", { detail: { e } }));
  }

  /**
   * Update the projection function
   * @param {Function} projectionFn - D3 projection function
   */
  setProjection(projectionFn) {
    this.projection = projectionFn;
  }

  /**
   * Update the transform
   * @param {Object} transform - D3 zoom transform
   */
  setTransform(transform) {
    this.transform = transform;
  }

  /**
   * Update the features array
   * @param {Object[]} features - Array of GeoJSON features
   */
  setFeatures(features) {
    this.features = features;
  }

  /**
   * Clear the sticky highlight
   */
  clearStickyHighlight() {
    this.stickyHighlight = null;
  }
}

/**
 * Create and initialize the SVGMap context, setting it into context.
 * Call this within SVGMap.svelte.
 * @returns {SVGMapContext}
 */
export function createSVGMapContext() {
  // Return existing context if already initialized (idempotent)
  if (hasContext(SVG_MAP_CONTEXT)) {
    return getContext(SVG_MAP_CONTEXT);
  }

  const context = new SVGMapContext();
  setContext(SVG_MAP_CONTEXT, context);
  return context;
}

/**
 * Get the SVGMap context from context.
 * Must be called within a component tree that has called createSVGMapContext().
 * @returns {SVGMapContext}
 * @throws {Error} if createSVGMapContext() has not been called in an ancestor component
 */
export function useSVGMapContext() {
  if (!hasContext(SVG_MAP_CONTEXT)) {
    throw new Error(
      "useSVGMapContext() must be called within a component tree that has called createSVGMapContext(). " +
        "This should be automatically set up by SVGMap.svelte."
    );
  }
  return getContext(SVG_MAP_CONTEXT);
}

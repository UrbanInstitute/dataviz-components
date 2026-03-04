// A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review.
// Rune-based context module for MapLibreMap state
// Follows the pattern from SVGMap/context.svelte.js

import { getContext, setContext, hasContext } from "svelte";

const MAPLIBRE_MAP_CONTEXT = Symbol("MapLibreMapContext");

/**
 * State class for managing MapLibreMap context
 */
class MapLibreMapContext {
  /** @type {import("maplibre-gl").Map | null} - MapLibre GL map instance */
  map = $state(null);

  /** @type {boolean} - Whether the map style has loaded */
  loaded = $state(false);

  /** @type {any | null} - Props of the currently highlighted feature */
  stickyHighlight = $state(null);

  /** @type {{ x: number, y: number, props: any } | undefined} - Current tooltip data */
  tooltipData = $state(undefined);

  /** @type {Function | null} - Map-level onclick callback */
  onclick = null;

  /** @type {Function | null} - Map-level onmousemove callback */
  onmousemove = null;

  /** @type {Function | null} - Map-level onmouseout callback */
  onmouseout = null;

  /**
   * Handle pointer move events from layers
   * @param {any} e - The MapLibre event
   * @param {any} props - Feature properties
   * @param {Object} [opts] - Options
   * @param {boolean} [opts.tooltip] - Whether to show tooltip
   */
  onPointerMove(e, props, opts) {
    // Show tooltip if enabled and not sticky highlighted
    if (opts?.tooltip && !this.stickyHighlight) {
      this.tooltipData = {
        x: e.originalEvent?.pageX,
        y: e.originalEvent?.pageY,
        props
      };
    }
    // Fire map-level callback
    this.onmousemove?.(new CustomEvent("mousemove", { detail: { e, props } }));
  }

  /**
   * Handle pointer down events from layers
   * @param {any} e - The MapLibre event
   * @param {any} props - Feature properties
   * @param {Object} [opts] - Options
   * @param {boolean} [opts.tooltip] - Whether to show tooltip
   */
  onPointerDown(e, props, opts) {
    // Toggle sticky highlight
    if (this.stickyHighlight) {
      // Clear sticky highlight and tooltip
      this.tooltipData = undefined;
      this.stickyHighlight = null;
    } else {
      // Set sticky highlight
      this.stickyHighlight = props;
      if (opts?.tooltip) {
        this.tooltipData = {
          x: e.originalEvent?.pageX,
          y: e.originalEvent?.pageY,
          props
        };
      }
    }
    // Fire map-level callback
    this.onclick?.(new CustomEvent("click", { detail: { e, props } }));
  }

  /**
   * Handle pointer out events from layers
   * @param {any} e - The MapLibre event
   */
  onPointerOut(e) {
    // Clear tooltip if no sticky highlight
    if (!this.stickyHighlight) {
      this.tooltipData = undefined;
    }
    // Fire map-level callback
    this.onmouseout?.(new CustomEvent("mouseout", { detail: { e } }));
  }

  /**
   * Update the map instance
   * @param {import("maplibre-gl").Map} mapInstance - MapLibre GL map instance
   */
  setMap(mapInstance) {
    this.map = mapInstance;
  }

  /**
   * Update the loaded state
   * @param {boolean} value - Whether the map style has loaded
   */
  setLoaded(value) {
    this.loaded = value;
  }

  /**
   * Clear the sticky highlight
   */
  clearStickyHighlight() {
    this.stickyHighlight = null;
  }
}

/**
 * Create and initialize the MapLibreMap context, setting it into context.
 * Call this within MapLibreMap.svelte.
 * @returns {MapLibreMapContext}
 */
export function createMapLibreMapContext() {
  // Return existing context if already initialized (idempotent)
  if (hasContext(MAPLIBRE_MAP_CONTEXT)) {
    return getContext(MAPLIBRE_MAP_CONTEXT);
  }

  const context = new MapLibreMapContext();
  setContext(MAPLIBRE_MAP_CONTEXT, context);
  return context;
}

/**
 * Get the MapLibreMap context from context.
 * Must be called within a component tree that has called createMapLibreMapContext().
 * @returns {MapLibreMapContext}
 * @throws {Error} if createMapLibreMapContext() has not been called in an ancestor component
 */
export function useMapLibreMapContext() {
  if (!hasContext(MAPLIBRE_MAP_CONTEXT)) {
    throw new Error(
      "useMapLibreMapContext() must be called within a component tree that has called createMapLibreMapContext(). " +
        "This should be automatically set up by MapLibreMap.svelte."
    );
  }
  return getContext(MAPLIBRE_MAP_CONTEXT);
}

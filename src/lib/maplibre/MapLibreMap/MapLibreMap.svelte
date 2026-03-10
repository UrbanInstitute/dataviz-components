<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script>
  import "maplibre-gl/dist/maplibre-gl.css";
  import maplibregl, { Map as MapLibreGLMap, NavigationControl } from "maplibre-gl";
  import { Protocol } from "pmtiles";
  import { onMount } from "svelte";
  import { createMapLibreMapContext } from "./context.svelte.js";
  import Tooltip from "$lib/Tooltip/Tooltip.svelte";

  /**
   * Minimal empty style for rendering without a basemap.
   * Provides a transparent canvas for custom GeoJSON layers.
   */
  const EMPTY_STYLE = {
    version: 8,
    sources: {},
    layers: []
  };

  /**
   * @typedef {Object} Props
   * @property {string | Object} [style] A MapLibre style URL or style object. Defaults to an empty style (no basemap).
   * @property {[number, number]} [center=[0, 0]] Initial map center [lng, lat].
   * @property {number} [zoom=1] Initial zoom level.
   * @property {number} [minZoom] Minimum zoom level.
   * @property {number} [maxZoom] Maximum zoom level.
   * @property {import("maplibre-gl").LngLatBoundsLike} [bounds] Initial bounds to fit. Overrides center/zoom.
   * @property {import("maplibre-gl").FitBoundsOptions} [fitBoundsOptions] Options for fitBounds.
   * @property {boolean} [interactive=true] Enable/disable all map interactions.
   * @property {number} [height=400] Map container height in pixels.
   * @property {number} [aspectRatio] Compute height from width (overrides height).
   * @property {boolean} [navigationControl=false] Show zoom/rotation navigation controls.
   * @property {boolean} [cooperativeGestures=false] Require ctrl+scroll to zoom.
   * @property {string} [ariaLabel] Accessibility label for the map container.
   * @property {boolean} [tooltipContainParent=false] Constrain tooltip to parent.
   * @property {"small" | "large"} [tooltipSize="small"] Tooltip width.
   * @property {(e: any) => void} [onclick] Map-level click callback.
   * @property {(e: any) => void} [onmousemove] Map-level mousemove callback.
   * @property {(e: any) => void} [onmouseout] Map-level mouseout callback.
   * @property {(map: import("maplibre-gl").Map) => void} [onload] Fires when map style loads.
   * @property {import('svelte').Snippet<[any]>} [tooltip] Tooltip content snippet.
   * @property {import('svelte').Snippet} [children] Slot for source/layer children.
   */

  /** @type {Props} */
  let {
    style = EMPTY_STYLE,
    center = [0, 0],
    zoom = 1,
    minZoom = undefined,
    maxZoom = undefined,
    bounds = undefined,
    fitBoundsOptions = undefined,
    interactive = true,
    height = 400,
    aspectRatio = undefined,
    navigationControl = false,
    cooperativeGestures = false,
    ariaLabel = undefined,
    tooltipContainParent = false,
    tooltipSize = "small",
    onclick = undefined,
    onmousemove = undefined,
    onmouseout = undefined,
    onload = undefined,
    tooltip = undefined,
    children
  } = $props();

  // Create the rune-based map context
  const mapState = createMapLibreMapContext();

  // Internal state
  let width = $state(500);
  let containerEl;
  let mapEl;
  let mounted = $state(false);

  // Track previous values to avoid redundant updates
  let prevStyle = style;
  let prevCenter = center;
  let prevZoom = zoom;
  let prevBounds = bounds;

  // Derived map height
  const mapHeight = $derived(getMapHeight(width, height, aspectRatio));

  function getMapHeight(width, height, aspectRatio) {
    if (aspectRatio) {
      return width / aspectRatio;
    }
    return height;
  }

  // Register map-level callbacks in context
  $effect(() => {
    mapState.onclick = onclick;
    mapState.onmousemove = onmousemove;
    mapState.onmouseout = onmouseout;
  });

  onMount(() => {
    // Register PMTiles protocol
    const protocol = new Protocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);

    // Create the map
    const map = new MapLibreGLMap({
      container: mapEl,
      style,
      center,
      zoom,
      interactive,
      cooperativeGestures,
      minZoom,
      maxZoom
    });

    // Apply bounds if provided
    if (bounds) {
      map.fitBounds(bounds, fitBoundsOptions);
    }

    // Add navigation control if requested
    if (navigationControl) {
      map.addControl(new NavigationControl());
    }

    // Handle load event
    const handleLoad = () => {
      mapState.setMap(map);
      mapState.setLoaded(true);
      mounted = true;
      onload?.(map);
    };

    map.on("load", handleLoad);

    // Background click handler to clear sticky highlight
    map.on("click", (e) => {
      // If a layer already handled this click, skip
      if (e.originalEvent._layerHandled) return;
      // Clear sticky highlight and tooltip
      mapState.clearStickyHighlight();
      mapState.tooltipData = undefined;
    });

    // Cleanup on unmount
    return () => {
      map.remove();
      maplibregl.removeProtocol("pmtiles");
    };
  });

  // Reactive updates for map properties
  // Track previous values to avoid redundant updates on initial render
  $effect(() => {
    if (mapState.map && mapState.loaded && mounted) {
      if (center !== prevCenter) {
        mapState.map.setCenter(center);
        prevCenter = center;
      }
    }
  });

  $effect(() => {
    if (mapState.map && mapState.loaded && mounted) {
      if (zoom !== prevZoom) {
        mapState.map.setZoom(zoom);
        prevZoom = zoom;
      }
    }
  });

  $effect(() => {
    if (mapState.map && mapState.loaded && bounds) {
      if (bounds !== prevBounds) {
        mapState.map.fitBounds(bounds, fitBoundsOptions);
        prevBounds = bounds;
      }
    }
  });

  // Style changes need special handling - setStyle reloads the entire style
  $effect(() => {
    if (mapState.map && mounted && style) {
      if (style !== prevStyle) {
        mapState.map.setStyle(style);
        // Re-listen for load event after style change
        const handleStyleLoad = () => {
          mapState.setLoaded(true);
          onload?.(mapState.map);
        };
        mapState.map.once("style.load", handleStyleLoad);
        prevStyle = style;
      }
    }
  });
</script>

<div
  class="maplibre-container"
  bind:this={containerEl}
  bind:clientWidth={width}
  style:height="{mapHeight}px"
  aria-label={ariaLabel}
>
  <div class="maplibre-map" bind:this={mapEl}></div>
  {#if mapState.loaded}
    {@render children?.()}
  {/if}
  {#if mapState.tooltipData}
    <Tooltip
      x={mapState.tooltipData.x}
      y={mapState.tooltipData.y}
      containParent={tooltipContainParent}
      size={tooltipSize}
    >
      {#if tooltip}
        {@render tooltip(mapState.tooltipData.props)}
      {/if}
    </Tooltip>
  {/if}
</div>

<style>
  .maplibre-container {
    position: relative;
    overflow: hidden;
  }
  .maplibre-map {
    width: 100%;
    height: 100%;
  }
</style>

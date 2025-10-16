<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script>
  import { useMatchMediaContext } from "../../context";
  import { onMount } from "svelte";
  import { geoAlbersUsa } from "d3-geo";
  import { zoom, zoomIdentity } from "d3-zoom";
  import { select } from "d3-selection";
  import { createSVGMapContext } from "./context.svelte.js";
  import ZoomControls from "./ZoomControls.svelte";
  import Tooltip from "$lib/Tooltip/Tooltip.svelte";

  /**
   * @typedef {Object} Props
   * @property {Object[]} features - An array of geojson features to be displayed on the map. The map will scale the projection to fit this set of features.
   * @property {function} [projection = geoAlbersUsa] - A D3 geo projection to use with this map. Defaults to geoAlbersUsa.
   * @property {"bottom-left" | "bottom-right" | "top-left" | "top-right"} [controlPosition = "bottom-right"] - Where the zoom control UI should be positioned.
   * @property {number} [height = 600] - The height of the map in pixels.
   * @property {number} [aspectRatio = undefined] - Set the height of the map to a fixed aspect ratio based on width. This overrides the `height` property.
   * @property {string} [ariaRole = undefined] - Optional aria role string to be applied to SVG container. By default, the SVG is hidden from the accessibility tree. If you add an ariaRole here, any layers should also be given an ariaRole.
   * @property {string} [ariaLabel = undefined] - Optional aria label string to be applied to SVG container. By default, the SVG is hidden from the accessibility tree and should include a descriptive label. If you add an ariaRole this property can be left undefined;
   * @property {boolean} [zoomable = false] - Should the map allow zoom and pan?
   * @property {number} [maxZoom = 8] - If map is zoomable, sets a maximum zoom factor relative to the initial view.
   * @property {"no" | "yes" | "ctrl"} [scrollWheel = "ctrl"] - Whether or not the map should zoom when scroll wheel is used on map.
   * @property {string} [backgroundColor = "transparent"] - Fill for the background of the map
   * @property {boolean} [tooltipContainParent = false] - If there is a tooltip on the map, should it be contained to the parent element
   * @property {"small" | "large"} [tooltipSize = "small"] - whether to use a small (138px) or large (198px) width tooltip
   * @property {(e: CustomEvent<{ e: PointerEvent; props: any }>) => void} [onclick] - Callback fired when a layer element is clicked
   * @property {(e: CustomEvent<{ e: PointerEvent; props: any }>) => void} [onmousemove] - Callback fired when mouse moves over layer elements
   * @property {(e: CustomEvent<{ e: PointerEvent }>) => void} [onmouseout] - Callback fired when mouse leaves layer elements
   * @property {(e: CustomEvent<{ e: PointerEvent }>) => void} [onbgclick] - Callback fired when the map background is clicked
   * @property {import('svelte').Snippet<[any]>} [tooltip] - Snippet for rendering tooltip content
   * @property {import('svelte').Snippet} [children] - Default slot content (map layers)
   */

  /** @type {Props} */
  let {
    features,
    projection = geoAlbersUsa,
    controlPosition = "bottom-right",
    height = 600,
    aspectRatio = undefined,
    ariaRole = undefined,
    ariaLabel = undefined,
    zoomable = false,
    maxZoom = 8,
    scrollWheel = "ctrl",
    backgroundColor = "transparent",
    tooltipContainParent = false,
    tooltipSize = "small",
    onclick = undefined,
    onmousemove = undefined,
    onmouseout = undefined,
    onbgclick = undefined,
    tooltip = undefined,
    children
  } = $props();

  // Get media query context
  const media = useMatchMediaContext();

  // Create the rune-based map context
  const mapState = createSVGMapContext();

  // Internal state
  let width = $state(500);
  let tooltipState = $state(undefined);

  // Set the tooltip callback in the context
  mapState.setTooltipCallback((tooltipProps) => {
    tooltipState = tooltipProps;
  });

  // Derived map height
  const mapHeight = $derived(getMapHeight(width, height, aspectRatio));

  // Derived projection
  const projectionFn = $derived(
    projection().fitSize([width, mapHeight], {
      type: "FeatureCollection",
      features: features
    })
  );

  // Update context when projection or features change
  $effect(() => {
    mapState.setProjection(projectionFn);
  });

  $effect(() => {
    mapState.setFeatures(features);
  });

  // Register map-level callbacks in context
  $effect(() => {
    mapState.onclick = onclick;
    mapState.onmousemove = onmousemove;
    mapState.onmouseout = onmouseout;
  });

  // Zoom-related state
  let mapZoom;
  let svgSelection;

  function setupZoom(el) {
    // Create d3 selection of the svg
    svgSelection = select(el.querySelector("svg"));
    // Create zoom instance
    mapZoom = zoom()
      .scaleExtent([1, maxZoom])
      .filter((event) => {
        if (scrollWheel === "ctrl") {
          // Only allow zooming with wheel when ctrlKey or metaKey is pressed
          return event.type === "wheel" ? event.ctrlKey || event.metaKey : true;
        } else if (scrollWheel === "no") {
          // No scroll wheel events
          return event.type !== "wheel";
        }
        // All events
        return true;
      })
      .on("zoom", ({ transform }) => mapState.setTransform(transform));
    svgSelection.call(mapZoom);
  }

  function zoomIn() {
    if (media.reducedMotion) {
      svgSelection.call(mapZoom.scaleBy, 2);
    } else {
      svgSelection.transition().call(mapZoom.scaleBy, 2);
    }
  }

  function zoomOut() {
    if (media.reducedMotion) {
      svgSelection.call(mapZoom.scaleBy, 0.5);
    } else {
      svgSelection.transition().call(mapZoom.scaleBy, 0.5);
    }
  }

  function zoomReset() {
    if (media.reducedMotion) {
      svgSelection.call(mapZoom.transform, zoomIdentity);
    } else {
      svgSelection.transition().call(mapZoom.transform, zoomIdentity);
    }
  }

  function getMapHeight(width, height, aspectRatio) {
    if (aspectRatio) {
      return width / aspectRatio;
    }
    return height;
  }

  function handleBgPointermove(e) {
    if (!mapState.stickyHighlight) {
      tooltipState = undefined;
    }
    onmousemove?.(new CustomEvent("mousemove", { detail: { e } }));
  }

  function handleBgPointerdown(e) {
    mapState.clearStickyHighlight();
    tooltipState = undefined;
    onbgclick?.(new CustomEvent("click", { detail: { e } }));
  }

  function handleBgPointerout(e) {
    onmouseout?.(new CustomEvent("mouseout", { detail: { e } }));
  }

  // To hold reference to root dom node via bind:this
  let el;

  onMount(() => {
    // If zoom is enabled, initialize
    if (zoomable) {
      setupZoom(el);
    }
  });
</script>

<div
  class="map-container"
  bind:this={el}
  bind:clientWidth={width}
  style:height="{getMapHeight(width, height, aspectRatio)}px"
  aria-hidden={typeof ariaRole === "undefined"}
  role={ariaRole}
  aria-label={ariaLabel}
>
  <svg {width} height={mapHeight}>
    <rect
      role="presentation"
      class="map-bg"
      x="0"
      y="0"
      {width}
      height={mapHeight}
      fill={backgroundColor}
      onpointermove={handleBgPointermove}
      onpointerdown={handleBgPointerdown}
      onpointerout={handleBgPointerout}
      onblur={handleBgPointerout}
    ></rect>
    <g
      class="zoom-group"
      transform="translate({mapState.transform.x}, {mapState.transform.y}) scale({mapState.transform
        .k})"
    >
      {@render children()}
    </g>
  </svg>
  {#if zoomable}
    <div class="map-controls {controlPosition}">
      <ZoomControls
        {controlPosition}
        showReset={mapState.transform.k !== zoomIdentity.k ||
          mapState.transform.x !== zoomIdentity.x ||
          mapState.transform.y !== zoomIdentity.y}
        {zoomIn}
        {zoomOut}
        {zoomReset}
        disableZoomOut={mapState.transform.k === zoomIdentity.k}
        disableZoomIn={mapState.transform.k === maxZoom}
      />
    </div>
  {/if}
  {#if tooltipState}
    <Tooltip
      x={tooltipState.x}
      y={tooltipState.y}
      containParent={tooltipContainParent}
      size={tooltipSize}
    >
      {#if tooltip}
        {@render tooltip(tooltipState.props)}
      {/if}
    </Tooltip>
  {/if}
</div>

<style>
  .map-container {
    overflow: hidden;
    position: relative;
  }
  .map-controls {
    position: absolute;
  }
  .map-controls.bottom-right {
    bottom: var(--spacing-2);
    right: var(--spacing-2);
  }
  .map-controls.bottom-left {
    bottom: var(--spacing-2);
    left: var(--spacing-2);
  }
  .map-controls.top-left {
    top: var(--spacing-2);
    left: var(--spacing-2);
  }
  .map-controls.top-right {
    top: var(--spacing-2);
    right: var(--spacing-2);
  }
  .zoom-group:focus,
  .map-bg:focus {
    outline: none;
  }
</style>

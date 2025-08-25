<script>
  import { reducedMotion } from "../../stores";
  import { readable, writable } from "svelte/store";
  import { setContext, onMount, createEventDispatcher } from "svelte";
  import { geoAlbersUsa } from "d3-geo";
  import { zoom, zoomIdentity } from "d3-zoom";
  import { select } from "d3-selection";
  import ZoomControls from "./ZoomControls.svelte";
  import Tooltip from "$lib/Tooltip/Tooltip.svelte";

  /**
   * An array of geojson features to be displayed on the map. The map will scale the projection to fit this set of features.
   * @type {Object[]}
   */
  export let features;

  /**
   * A D3 geo projection to use with this map. Defaults to geoAlbersUsa.
   * @type { function } [projection = geoAlbersUsa]
   */
  export let projection = geoAlbersUsa;

  /**
   * Where the zoom control UI should be positioned.
   * @type {"bottom-left" | "bottom-right" | "top-left" | "top-right"} [ controlPosition = "bottom-right" ]
   */
  export let controlPosition = "bottom-right";

  /**
   * The height of the map in pixels.
   * @type { number } [ height = 600 ]
   */
  export let height = 600;

  /**
   * Set the height of the map to a fixed aspect ratio based on width. This overrides the `height` property.
   * @type { number } [ aspectRatio = undefined ]
   */
  export let aspectRatio = undefined;

  /**
   * Optional aria role string to be applied to SVG container. By default, the SVG is hidden from the accessiblity tree. If you add an ariaRole here, any layers should also be given an ariaRole.
   * @type { string } [ariaRole = undefined]
   */
  export let ariaRole = undefined;

  /**
   * Optional aria label string to be applied to SVG container. By default, the SVG is hidden from the accessiblity tree and should include a descriptive label. If you add an ariaRole this property can be left undefined;
   * @type { string } [ariaRole = undefined]
   */
  export let ariaLabel = undefined;

  /**
   * Should the map allow zoom and pan?
   * @type { boolean } [zoomable = false]
   */
  export let zoomable = false;

  /**
   * If map is zoomable, sets a maximum zoom factor relative to the initial view.
   * @type { number } [maxZoom = 8]
   */
  export let maxZoom = 8;

  /**
   * Whether or not the map should zoom when scroll wheel is used on map.
   * @type {"no" | "yes" | "ctrl"}
   */
  export let scrollWheel = "ctrl";

  /**
   * Fill for the background of the map
   * @type { string } [backgroundColor = "transparent"]
   */
  export let backgroundColor = "transparent";

  /**
   * If there is a tooltip on the map, should it be contained to the parent element
   * @type { boolean } [tooltipContainParent = false]
   */
  export let tooltipContainParent = false;

  /**
   * whether to use a small (138px) or large (198px) width tooltip
   * @type {"small" | "large"}
   * @default "small"
   */
  export let tooltipSize = "small";

  const dispatch = createEventDispatcher();

  // create stores of map global settings to add to context
  $: featuresStore = readable(features);
  let width = 500;

  $: mapHeight = getMapHeight(width, height, aspectRatio);

  // size to fit projection to
  $: fitSizeRange = [width, mapHeight];

  // setup the scaled projection function
  $: projectionFn = projection().fitSize(fitSizeRange, {
    type: "FeatureCollection",
    features: features
  });

  // set up a store to hold the scaled projection function
  const projectionStore = writable(projectionFn);
  // update the store any time the projection function updates
  $: projectionStore.set(projectionFn);

  // initialize a transform store in case zoom is turned on
  // this will be where we store the output of the d3-zoom behaviour and broadcast it
  let transformStore = writable(zoomIdentity);

  // will hold d3.zoom instance if zoomable
  let mapZoom;

  // will hold svg selection if zoomable
  let svgSelection;

  // internal tooltip state, only used for default tooltip functionality

  // will hold the tooltip Obj if set
  let tooltip;

  // will hold the map highlight feature if set
  let stickyHighlightStore = writable(null);

  // function to provide via context to children layers
  function handleLayerMousemove(tooltipProps) {
    // if map has a current highlight, mousemove should do nothing and return
    if ($stickyHighlightStore) {
      return;
    }
    // otherwise, show a tooltip based on this event
    tooltip = tooltipProps;
  }

  // function to provide via context to children layers
  function handleLayerClick(tooltipProps) {
    // if map has a current highlight, clear it and clear the tooltip on click and return
    if ($stickyHighlightStore) {
      tooltip = undefined;
      $stickyHighlightStore = null;
      return;
    }
    // if map doesn't have a current highlight, set it and render the tooltip based on this event
    $stickyHighlightStore = tooltipProps.props;
    tooltip = tooltipProps;
  }

  // how do we store the sticky highlgiht in the context or something similar?
  // or can we just do away with the need for the ID, by just storing the entire object? or at least the props, especially since this is internal?
  // may need to add the callbacks to the context

  // add global stores to context
  $: setContext("map", {
    projection: projectionStore,
    features: featuresStore,
    transform: transformStore,
    stickyHighlight: stickyHighlightStore,
    handleLayerMousemove,
    handleLayerClick
  });

  function setupZoom(el) {
    // create d3 selection of the svg
    svgSelection = select(el.querySelector("svg"));
    // create zoom instance
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
      .on("zoom", ({ transform }) => transformStore.set(transform));
    svgSelection.call(mapZoom);
  }

  function zoomIn() {
    if ($reducedMotion) {
      svgSelection.call(mapZoom.scaleBy, 2);
    } else {
      svgSelection.transition().call(mapZoom.scaleBy, 2);
    }
  }

  function zoomOut() {
    if ($reducedMotion) {
      svgSelection.call(mapZoom.scaleBy, 0.5);
    } else {
      svgSelection.transition().call(mapZoom.scaleBy, 0.5);
    }
  }

  function zoomReset() {
    if ($reducedMotion) {
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

  function handleBgMousemove(e) {
    if (!$stickyHighlightStore) {
      tooltip = undefined;
    }
    dispatch("mousemove");
  }
  function handleBgClick(e) {
    $stickyHighlightStore = null;
    tooltip = undefined;
    dispatch("click");
  }

  // to hold reference to root dom node via bind:this
  let el;

  onMount(() => {
    // if zoom is enabled, initialize
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
      on:mousemove={handleBgMousemove}
      on:click={handleBgClick}
      on:mouseout={(e) => dispatch("mouseout")}
      on:blur={(e) => dispatch("mouseout")}
    ></rect>
    <g
      class="zoom-group"
      transform="translate({$transformStore.x}, {$transformStore.y}) scale({$transformStore.k})"
    >
      <slot />
    </g>
  </svg>
  {#if zoomable}
    <div class="map-controls {controlPosition}">
      <ZoomControls
        {controlPosition}
        showReset={$transformStore.k !== zoomIdentity.k ||
          $transformStore.x !== zoomIdentity.x ||
          $transformStore.y !== zoomIdentity.y}
        {zoomIn}
        {zoomOut}
        {zoomReset}
        disableZoomOut={$transformStore.k === zoomIdentity.k}
        disableZoomIn={$transformStore.k === maxZoom}
      />
    </div>
  {/if}
  {#if tooltip}
    <Tooltip x={tooltip.x} y={tooltip.y} containParent={tooltipContainParent} size={tooltipSize}>
      <slot name="tooltip" props={tooltip.props}></slot>
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

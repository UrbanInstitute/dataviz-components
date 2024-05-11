<script>
  import { reducedMotion } from "../../stores";
  import { readable, writable } from "svelte/store";
  import { setContext, onMount } from "svelte";
  import { geoAlbersUsa } from "d3-geo";
  import { zoom, zoomIdentity } from "d3-zoom";
  import { select } from "d3-selection";
  import ZoomControls from "./ZoomControls.svelte";

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

  /*
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

  // add global stores to context
  $: setContext("map", {
    projection: projectionStore,
    features: featuresStore,
    transform: transformStore
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
          return event.type === "wheel" ? (event.ctrlKey || event.metaKey) : true;
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
      return width / aspectRatio
    }
    return height;
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
  class="chart-container"
  bind:this={el}
  bind:clientWidth={width}
  style:height="{getMapHeight(width, height, aspectRatio)}px"
  aria-hidden={typeof ariaRole === "undefined"}
  role={ariaRole}
  aria-label={ariaLabel}
>
  <svg {width} height={mapHeight}>
    <g
      class="zoom-group"
      transform="translate({$transformStore.x}, {$transformStore.y}) scale({$transformStore.k})"
    >
      <slot transform={$transformStore} />
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
</div>

<style>
  .chart-container {
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
  .zoom-group:focus {
    outline: none;
  }
</style>
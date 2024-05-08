<script>
  import { reducedMotion } from "../stores";
  import { readable, writable } from "svelte/store";
  import { setContext, onMount } from "svelte";
  import { geoAlbersUsa } from "d3-geo";
  import { zoom, zoomIdentity } from "d3-zoom";
  import { select } from "d3-selection";
  import ZoomControls from "./ZoomControls.svelte";

  /*
   * An array of geojson features to be displayed on the map. The map will scale the projection to fit this set of features.
   */
  export let features;
  export let projection = geoAlbersUsa;
  export let zoomable = false;

  /*
   * Where the zoom control UI should be positioned.
   * @type {"bottom-left" | "bottom-right" | "top-left" | "top-right"}
   */
  export let controlPosition = "bottom-right";
  export let height = 800;

  /*
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
   * Whether or not the map should zoom when scroll wheel is used on map.
   * @type {"no" | "yes" | "ctrl"}
   */
  export let scrollWheel = "no";

  // create stores of map global settings to add to context
  $: featuresStore = readable(features);
  let width = 500;

  // size to fit projection to
  $: fitSizeRange = [width, height];

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
      .scaleExtent([1, 8])
      .filter((event) => {
        if (scrollWheel === "ctrl") {
          // Only allow zooming with wheel when ctrlKey is pressed
          return event.type === "wheel" ? event.ctrlKey : true;
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
  style:height="{height}px"
  aria-hidden={typeof ariaRole === "undefined"}
  role={ariaRole}
  aria-label={ariaLabel}
>
  <svg {width} {height}>
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
        showReset={$transformStore != zoomIdentity}
        {zoomIn}
        {zoomOut}
        {zoomReset}
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

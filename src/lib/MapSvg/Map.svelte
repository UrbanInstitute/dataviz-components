<script>
  import { LayerCake, Svg } from "layercake";
  import { reducedMotion } from "../stores";
  import { readable, writable } from "svelte/store";
  import { setContext, onMount } from "svelte";
  import { geoAlbersUsa } from "d3-geo";
  import { zoom, zoomIdentity } from "d3-zoom";
  import { select } from "d3-selection";

  /*
   * An array of geojson features to be displayed on the map. The map will scale the projection to fit this set of features.
   */
  export let features;
  export let projection = geoAlbersUsa;
  export let zoomable = false;
  export let height = 800;

  // create stores of map global settings to add to context
  $: projectionStore = readable(projection);
  $: featuresStore = readable(features);
  $: widthStore = writable(500);
  $: heightStore = writable(300);

  // initialize a transform store in case zoom is turned on
  // this will be where we store the output of the d3-zoom behaviour and broadcast it
  console.log("zoomIdentity", zoomIdentity)
  let transformStore = writable(zoomIdentity);

  // will hold d3.zoom instance if zoomable
  let mapZoom;

  // will hold svg selection if zoomable
  let svgSelection;

  // add global stores to context
  $: setContext("map", {
    projection: projectionStore,
    features: featuresStore,
    width: widthStore,
    height: heightStore,
    transform: transformStore
  });

  function setupZoom(el) {
    // create d3 selection of the svg
    svgSelection = select(el.querySelector("svg"));
    // create zoom instance
    mapZoom = zoom()
      .scaleExtent([1, 8])
      .on("zoom", ({ transform }) => transformStore.set(transform));
    // svgSelection.call(mapZoom).on("wheel.zoom", null);
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
  bind:clientWidth={$widthStore}
  bind:clientHeight={$heightStore}
  style:height="{height}px"
>
  <LayerCake>
    <Svg>
      <g
        class="zoom-group"
        transform="translate({$transformStore.x}, {$transformStore.y}) scale({$transformStore.k})"
      >
        >

        <slot transform={$transformStore}/>
      </g>
    </Svg>
  </LayerCake>
</div>
{#if zoomable}
  <div class="zoom-controls">
    <button on:click={zoomIn}>zoom in</button>
    <button on:click={zoomOut}>zoom out</button>
    <button on:click={zoomReset}>reset</button>
  </div>
{/if}

<style>
  .chart-container {
    overflow: hidden;
  }
</style>

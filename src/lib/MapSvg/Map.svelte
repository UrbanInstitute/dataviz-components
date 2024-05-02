<script>
  import { LayerCake, Svg } from "layercake";
  import { readable, writable } from "svelte/store";
  import { setContext } from "svelte";
  import { geoAlbersUsa } from "d3-geo";

  /*
   * An array of geojson features to be displayed on the map. The map will scale the projection to fit this set of features.
   */
  export let features;
  export let projection = geoAlbersUsa;

  // create stores of map global settings to add to context
  $: projectionStore = readable(projection);
  $: featuresStore = readable(features);
  $: widthStore = writable(500);
  $: heightStore = writable(300);

  // add global stores to context
  $: setContext("map", {
    projection: projectionStore,
    features: featuresStore,
    width: widthStore,
    height: heightStore
  });
</script>

<div class="chart-container" bind:clientWidth={$widthStore} bind:clientHeight={$heightStore}>
  <LayerCake >
    <Svg>
      <slot />
    </Svg>
  </LayerCake>
</div>

<style>
  .chart-container {
    height: 500px;
  }
</style>

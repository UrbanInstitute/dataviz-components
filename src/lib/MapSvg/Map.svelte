<script>
  import { LayerCake, Svg } from "layercake";
  import { writable, readable } from "svelte/store";
  import { setContext } from "svelte";
  import { geoAlbersUsa } from "d3-geo";

  export let features = [];
  export let data = [];
  export let projection = geoAlbersUsa;

  // create stores of map global settings to add to context
  $: projectionStore = readable(projection);
  $: featuresStore = readable(features);

  // add global stores to context
  $: setContext("map", {
    projection: projectionStore,
    features: featuresStore
  });
</script>

<div class="chart-container">
  <LayerCake {data} >
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

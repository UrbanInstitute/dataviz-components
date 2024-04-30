<script>
import { LayerCake, Svg, Canvas, Html } from 'layercake';
import {writable} from "svelte/store";
import { setContext } from "svelte";
import { geoAlbersUsa } from "d3-geo";

export let geojson;
export let projection = geoAlbersUsa;

$: projectionStore = writable(projection);
$: console.log($projectionStore)
$: setContext("map", {
  projection: projectionStore
});

const flatData = geojson.features.map(d => d.properties);
</script>
<div class="chart-container">
  <LayerCake
    data={geojson}
    {flatData}
  >
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

<script>
import { LayerCake, Svg, Canvas, Html } from 'layercake';
import { setContext } from "svelte";
import { geoAlbersUsa } from "d3-geo";

export let geojson;
export let projection = geoAlbersUsa;
const flatData = geojson.features.map(d => d.properties);
$: setContext("map", {
  projection: projection
});
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

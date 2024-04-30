<script>
import { LayerCake, Svg, Canvas, Html } from 'layercake';
import { geoAlbersUsa } from 'd3-geo';
import states from "../../docs/sample-data/cb_2023_us_state.geojson";
console.log(states);

export let geojson = states;
const flatData = geojson.features.map(d => d.properties);
</script>
<p>Map component</p>
<div class="chart-container">
  <LayerCake
    {data}
    {flatData}
  >
    <Svg>
      <slot />
    </Svg>
  </LayerCake>
</div>


A tilemap component for displaying state-level data using hex or rect tiles. Accepts FIPS codes for state identification and supports custom coloring, tooltips, and interactivity.

## Usage

```svelte
<script>
  import { Tilemap } from "@urbaninstitute/dataviz-components/maps";
  import { getMapBlues } from "@urbaninstitute/dataviz-components/utils";
  import mapData from "./docs/test_data.json";
  import { scaleQuantile } from "d3-scale";

  const colorScale = scaleQuantile().domain(mapData.map((d) => d.value)).range(urbanColors.getMapBlues())
</script>

<Tilemap data={mapData} shape="hex" fill={(feature) => colorScale(feature.properties.value)} stroke={urbanColors.white}" />
```

## Data Format

The `data` prop should be an array of objects with a `map_id` (FIPS code) property. This property will be used to join your data to the correct states:

```json
[
  { "map_id": "06", "value": 28 },
  { "map_id": "36", "value": 13 },
  ...
]
```

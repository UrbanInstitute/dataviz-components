A polygon layer for use in an `<SVGMap>` component. Renders each `feature` as an svg `path` element, leveraging d3's geoPath function. If no `features` are passed directly to this layer, it will render the features of the parent `SVGMap` component.

## Usage

```svelte
<script>
  import { SVGMap, PolygonLayer } from "@urbaninstitute/dataviz-components";
  import states from "./path/to/geojson/states.json";
</script>
<SVGMap features={states.features}>
  <PolygonLayer />
</SVGMap>

```

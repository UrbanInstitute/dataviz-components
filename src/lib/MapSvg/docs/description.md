A basic map component that can render geojson features as SVG elements. It supports 3 layer types:
- Polygon
- Point
- Label

This component is useful for simple, thematic maps, especially choropleths. When you need just a bit more control than a no-code solution might provide, you might find this useful. 

## Basic usage

Import the component and the layers you'll need. Load in some geojson - however you want to load it is up to you. Either you can pre-project your geojson data, or you can load a d3-compatable projection function of your choice and pass it to the map component. Finally, set up some layers, providing any additional data and properties.

```svelte
<script>
import { SVGMap, PolygonLayer } from "@urbaninstitute/dataviz-components";
import { albersUsa } from "d3-geo";

import states from "./path/to/geojson/states.json";

</script>

<SVGMap features={states.featues} projection={albersUsa}>
  <PolygonLayer />
</SVGMap>
```


## Stories

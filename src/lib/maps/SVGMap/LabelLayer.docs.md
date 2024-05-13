A layer that works inside an `SVGMap` component that displays data as a text label layer. If polygon features are passed to this layer, the centroid will be computed with `d3.geoPath.centroid`.

## Basic usage

Import `PointLayer` and `SVGMap` from this library:

```js
import { SVGMap, PointLayer } from "@urbaninstitute/dataviz-components/maps";

```
Add your own GeoJSON data and specify configuration and props seen below. The `getLabel` prop should be a function that receives a `feature` as an argument and returns a string to be displayed on the map.


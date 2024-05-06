A layer that works inside an `SVGMap` component that displays data as a point/symbol layer. If polygon features are passed to this layer, the centroid will be computed with `d3.geoPath.centroid`.

## Basic usage

Import `PointLayer` and `SVGMap` from this library:

```js
import { SVGMap, PointLayer } from "@urbaninstitute/dataviz-components";

```
Add your own GeoJSON data and specify configuration and props seen below.


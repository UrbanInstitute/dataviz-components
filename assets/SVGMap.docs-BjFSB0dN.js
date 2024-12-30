import{j as o}from"./jsx-runtime-0mqYSzCS.js";import{u as i}from"./index-D1_jMibn.js";import{S as s,a as r,C as l,Z as p,F as c,B as d}from"./SVGMap.stories-DhammSKx.js";import{M as h,b as m,C as n}from"./index-BD5CtlDD.js";import"./index-CIjOG5ey.js";import"./iframe-CTGPT5OD.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DXimoRZY.js";import"./index-Dy1J9qof.js";import"./lifecycle-mCW1c9RL.js";import"./spread-CgU5AtxT.js";import"./SVGPointLayer-OpUGHb4O.js";import"./each-CjkgdRJJ.js";import"./urbanColors-BkxYcPwH.js";import"./lib-FvRCknQ7.js";import"./collect-stories-DS3D1-He.js";import"./string-Cinc0syZ.js";import"./Tooltip-B6661lyx.js";import"./globals-D0QH3NT1.js";import"./SVGLabelLayer-DvfhlV2r.js";import"./SVGPolygonLayer-Ct6RhZyn.js";import"./states_geo-Cwuy5VwI.js";import"./us_cities-D4hZlMCj.js";import"./linear-CIErNTRy.js";import"./quantile-08mpu7mT.js";import"./pow-BdkU5FPm.js";import"./index-B4WlZuP_.js";import"./index-DrFu-skq.js";function a(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(h,{component:void 0,of:s}),`
`,o.jsx(e.h1,{id:"svgmap",children:"SVGMap"}),`
`,o.jsx(e.p,{children:"A basic map component that can render GeoJSON features as SVG elements. It supports 3 layer types: Polygons, Points or Labels."}),`
`,o.jsx(e.p,{children:"This component is useful for simple, thematic maps, especially choropleths. When you need just a bit more control than a no-code solution might provide, you might find this useful."}),`
`,o.jsx(e.h2,{id:"basic-usage",children:"Basic usage"}),`
`,o.jsxs(e.p,{children:["Import the component and the layers you'll need. Load in some GeoJSON - however you want to load it is up to you. But you should probably make sure your date is in the ",o.jsx(e.code,{children:"WGS84"})," projection. That way, you can load any ",o.jsx(e.a,{href:"https://d3js.org/d3-geo/projection",rel:"nofollow",children:"D3-compatable projection"})," function and pass it to the map component. Finally, set up some layers, providing any additional data and properties."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-javascript",children:`import { SVGMap, SVGPolygonLayer } from "@urbaninstitute/dataviz-components/maps";
`})}),`
`,o.jsx(e.h2,{id:"component-props",children:"Component props"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"SVGMap"})," supports the following props."]}),`
`,o.jsx(m,{}),`
`,o.jsx(e.h2,{id:"simple-map-example",children:"Simple map example"}),`
`,o.jsx(e.p,{children:"The simplest way to create a map is to load some pre-projected GeoJSON data. For instance, to create a US state map, load the data in your page or component like this:"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-javascript",children:`import states from "./path/to/geojson/states.json";
`})}),`
`,o.jsx(e.p,{children:"And then render your data into a map like this:"}),`
`,o.jsx(n,{of:r,sourceState:"shown"}),`
`,o.jsx(e.h2,{id:"loading-topojson-custom-color-scales",children:"Loading topojson, custom color scales"}),`
`,o.jsxs(e.p,{children:["It is sometimes tricky to correctly prepare GeoJSON data for usage with D3. Using topojson may improve loading time, simplification options and help avoid issues like ",o.jsx(e.a,{href:"https://observablehq.com/@d3/winding-order",rel:"nofollow",children:"winding"})," ",o.jsx(e.a,{href:"https://github.com/mbloch/mapshaper/issues/432",rel:"nofollow",children:"order"})," when working with raw GeoJSON data."]}),`
`,o.jsxs(e.p,{children:["If you're loading topojson data, you should make use of the ",o.jsx(e.code,{children:"topojson-client"})," package to convert the data back to GeoJSON before passing it into this component. As an example, loading several datasets for a US county choropleth map might look something like this:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-javascript",children:`// import topojson library
import topojson from "topojson-client";

// import prepared topojson data
import county_air_quality_topo from "../path/to/topojson/county_air_quality_topo.json";
import us_cities from "./path/to/topojson/us_cities.json";

// convert topojson back to GeoJSON
const county_air_quality = topojson.feature(county_air_quality_topo, "county_air_quality_geo");
const us_cities_geo = topojson.feature(us_cities, "us_cities");
`})}),`
`,o.jsxs(e.p,{children:["Finally, in order to create a custom color scale, you can use D3's built in scale functions. First, import the scale you'd like to use, then create a scale based on your color palette and input data. For this example we'll use this library's ",o.jsx(e.code,{children:"urbanColors"})," utility module."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-javascript",children:`// import scale
import { scaleQuantile } from "d3-scale";
// import color palette utility
import { urbanColors } from "@urbaninstitute/dataviz-components";

// create a scale for the map
let airQualityScale = scaleQuantile()
  .domain(county_air_quality.features.map((d) => d.properties.index_air_quality))
  .range(urbanColors.getDivergingColors());
`})}),`
`,o.jsx(e.p,{children:"Putting these all together, you can render your map like this:"}),`
`,o.jsx(n,{of:l,sourceState:"shown"}),`
`,o.jsx(e.h2,{id:"zoomable-maps-custom-projections-and-limiting-labels-to-higher-zoom",children:"Zoomable maps, custom projections and limiting labels to higher zoom"}),`
`,o.jsxs(e.p,{children:["Maps can include zoom and pan functionality out of the box by passing the ",o.jsx(e.code,{children:"zoomable"})," prop to the ",o.jsx(e.code,{children:"SVGMap"}),". Some times you may want to limit the visibility of a ",o.jsx(e.code,{children:"SVGLabelLayer"})," to a minumum zoom multiplyer. Consider this example of mapping average household income in New York City at the census tract level. You may want to display labels if the user has zoomed in far enough, but hide them when zoomed out to avoid overlapping text."]}),`
`,o.jsx(e.p,{children:"Loading the data for this map would look something like this:"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-javascript",children:`// import topojson library
import topojson from "topojson-client";

// load prepared topojson
import nyc_income_topo from "./path/to/topojson/nyc_income_topo.json";
import nyc_ntas from "./path/to/topojson/nyc_ntas.json";

// load color utility to create a custom scale
import { urbanColors } from "@urbaninstitute/dataviz-components";

// Import a D3 scale function
import { scaleQuantize } from "d3-scale";
// Import the extent utility from d3-array to compute the scale
import { extent } from "d3-array";
const nyc_income = topojson.feature(nyc_income_topo, "nyc_income_geo1");
const nyc_neighborhoods = topojson.feature(nyc_ntas, "nyc_ntas");

const incomeScale = scaleQuantize()
  .domain(extent(nyc_income.features, (d) => d.properties.estimate))
  .range(urbanColors.getGreens());
`})}),`
`,o.jsxs(e.p,{children:["Next, you'll want to import the D3 projection you'd like to use. By default this component uses ",o.jsx(e.code,{children:"AlbersUSA"}),", which is a good choice for national-extent US data. This map is a city-level example, so something else might make more sense."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-javascript",children:`import { geoMercator } from "d3-geo";
`})}),`
`,o.jsx(e.p,{children:"At this point, you're ready to render a map like this:"}),`
`,o.jsx(n,{of:p,sourceState:"shown"}),`
`,o.jsx(e.h2,{id:"setting-a-highlighted-feature",children:"Setting a highlighted feature"}),`
`,o.jsxs(e.p,{children:["Sometimes you'll need to set a specific feature to a highlighted state based on some external state in your application. In order to do this, you can pass a function to the prop ",o.jsx(e.code,{children:"highlightFeature"}),". This function will be called with each ",o.jsx(e.code,{children:"feature"})," in the layer, and if it returns ",o.jsx(e.code,{children:"true"}),", it will display that feature as if it was being hovered."]}),`
`,o.jsx(e.p,{children:"For this example, we'll load some 2022 5-year ACS data from Cleveland, Ohio that contains the share of workers who commute to work by bicycle."}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-javascript",children:`import topojson from "topojson-client";
import cleveland_bike_data_topo from "./path/top/topojson/cleveland_bike_to_work.json";
import { urbanColors } from "@urbaninstitute/dataviz-components";
import { geoMercator } from "d3-geo";
import { scaleQuantize, scaleQuantile, scaleLinear } from "d3-scale";
import { extent } from "d3-array";

const cleveland_bike_data = topojson.feature(cleveland_bike_data_topo, "cleveland_bike_to_work");
const clevelandBikeScale = scaleQuantize()
    .domain(extent(cleveland_bike_data.features, (d) => d.properties.bike_to_work))
    .range(urbanColors.getMapBlues());
let clevelandHighlight = "39035197700";
`})}),`
`,o.jsxs(e.p,{children:["Now you can pass a ",o.jsx(e.code,{children:"featureHighlight"})," object that sets the highlighted feature based on the ",o.jsx(e.code,{children:"clevelandHighlight"})," variable. We can also update the value of this variable in the ",o.jsx(e.code,{children:"on:click"})," handler, allowing the user to set a highlighted feature when clicking. Combining this together would like like the following example:"]}),`
`,o.jsx(n,{of:c,sourceState:"shown"}),`
`,o.jsx(e.h2,{id:"bubble-map",children:"Bubble map"}),`
`,o.jsxs(e.p,{children:["You can use the ",o.jsx(e.code,{children:"<SVGPointLayer>"})," feature to create a bubble map based on a data value. In order to do this, you'll just need to use a D3 scale and pass a data value to it for the ",o.jsx(e.code,{children:"r"})," property of the layer. Looking at county popluation for the state of Pennsylvania, you could set this up by importing your data and setting up the scale:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-javascript",children:`import pa_population_topo from "./path/top/topojson/pa_popluation_topo.json";
import { urbanColors } from "@urbaninstitute/dataviz-components";
import { geoMercator } from "d3-geo";
import { scaleSqrt } from "d3-scale";
import { extent } from "d3-array";

// pa population
const pa_population_geo = topojson.feature(pa_population_topo, "pa_county_population");
const paPopRadiusScale = scaleSqrt().domain(extent(pa_population_geo.features, d => d.properties.value)).range([2, 50]);
`})}),`
`,o.jsx(e.p,{children:"And then you can render the bubble map here:"}),`
`,o.jsx(n,{of:d,sourceState:"shown"})]})}function T(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(a,{...t})}):a(t)}export{T as default};

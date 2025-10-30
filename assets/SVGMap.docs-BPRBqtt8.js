import{j as e}from"./iframe-BjxEKEQH.js";import{useMDXComponents as s}from"./index-IebOMRBN.js";import{S as i,$ as r,a as l,b as c,c as p,d}from"./SVGMap.stories-CBBRuhtO.js";import{M as h,b as u,C as t}from"./blocks-BUt1p2bg.js";import"./create-runtime-stories-HPq0r60h.js";import"./lifecycle-hO6jUP98.js";import"./lib-CgGEPiW4.js";import"./attributes-UJeNkN1P.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./size-C1syiTDZ.js";import"./this-DGLcOT4Q.js";import"./string-BqOgh9tw.js";import"./Tooltip-DQtD7qmK.js";import"./html-CDri68dQ.js";import"./window-C-tkelu3.js";import"./SVGPolygonLayer-BgMp1_rr.js";import"./each-DC_8OmU5.js";import"./urbanColors-BkxYcPwH.js";import"./SVGLabelLayer-DlN-Z4yY.js";import"./SVGPointLayer-Dudgp-WP.js";import"./states_geo-DARvmaCd.js";import"./us_cities-DYyFK5C6.js";import"./linear-zaFmwBME.js";import"./init-DewmRu03.js";import"./quantile-Bh9554at.js";import"./quantile-Dc72mZUz.js";import"./pow-BRLi4QyV.js";function a(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:i}),`
`,e.jsx(o.h1,{id:"svgmap",children:"SVGMap"}),`
`,e.jsx(o.p,{children:"A basic map component that can render GeoJSON features as SVG elements. It supports 3 layer types: Polygons, Points or Labels."}),`
`,e.jsx(o.p,{children:"This component is useful for simple, thematic maps, especially choropleths. When you need just a bit more control than a no-code solution might provide, you might find this useful."}),`
`,e.jsx(o.h2,{id:"basic-usage",children:"Basic usage"}),`
`,e.jsxs(o.p,{children:["Import the component and the layers you'll need. Load in some GeoJSON - however you want to load it is up to you. But you should probably make sure your date is in the ",e.jsx(o.code,{children:"WGS84"})," projection. That way, you can load any ",e.jsx(o.a,{href:"https://d3js.org/d3-geo/projection",rel:"nofollow",children:"D3-compatable projection"})," function and pass it to the map component. Finally, set up some layers, providing any additional data and properties."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`import { SVGMap, SVGPolygonLayer } from "@urbaninstitute/dataviz-components/maps";
`})}),`
`,e.jsx(o.h2,{id:"component-props",children:"Component props"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"SVGMap"})," supports the following props."]}),`
`,e.jsx(u,{}),`
`,e.jsx(o.h2,{id:"simple-map-example",children:"Simple map example"}),`
`,e.jsx(o.p,{children:"The simplest way to create a map is to load some pre-projected GeoJSON data. For instance, to create a US state map, load the data in your page or component like this:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`import states from "./path/to/geojson/states.json";
`})}),`
`,e.jsx(o.p,{children:"And then render your data into a map like this:"}),`
`,e.jsx(t,{of:r,sourceState:"shown"}),`
`,e.jsx(o.h2,{id:"loading-topojson-custom-color-scales",children:"Loading topojson, custom color scales"}),`
`,e.jsxs(o.p,{children:["It is sometimes tricky to correctly prepare GeoJSON data for usage with D3. Using topojson may improve loading time, simplification options and help avoid issues like ",e.jsx(o.a,{href:"https://observablehq.com/@d3/winding-order",rel:"nofollow",children:"winding"})," ",e.jsx(o.a,{href:"https://github.com/mbloch/mapshaper/issues/432",rel:"nofollow",children:"order"})," when working with raw GeoJSON data."]}),`
`,e.jsxs(o.p,{children:["If you're loading topojson data, you should make use of the ",e.jsx(o.code,{children:"topojson-client"})," package to convert the data back to GeoJSON before passing it into this component. As an example, loading several datasets for a US county choropleth map might look something like this:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`// import topojson library
import topojson from "topojson-client";

// import prepared topojson data
import county_air_quality_topo from "../path/to/topojson/county_air_quality_topo.json";
import us_cities from "./path/to/topojson/us_cities.json";

// convert topojson back to GeoJSON
const county_air_quality = topojson.feature(county_air_quality_topo, "county_air_quality_geo");
const us_cities_geo = topojson.feature(us_cities, "us_cities");
`})}),`
`,e.jsxs(o.p,{children:["Finally, in order to create a custom color scale, you can use D3's built in scale functions. First, import the scale you'd like to use, then create a scale based on your color palette and input data. For this example we'll use this library's ",e.jsx(o.code,{children:"urbanColors"})," utility module."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`// import scale
import { scaleQuantile } from "d3-scale";
// import color palette utility
import { urbanColors } from "@urbaninstitute/dataviz-components";

// create a scale for the map
let airQualityScale = scaleQuantile()
  .domain(county_air_quality.features.map((d) => d.properties.index_air_quality))
  .range(urbanColors.getDivergingColors());
`})}),`
`,e.jsx(o.p,{children:"Putting these all together, you can render your map like this:"}),`
`,e.jsx(t,{of:l,sourceState:"shown"}),`
`,e.jsxs(o.p,{children:["Note: The tooltip is rendered using Svelte 5's snippet syntax. Pass a snippet prop to ",e.jsx(o.code,{children:"SVGMap"})," instead of using a named slot:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-svelte",children:`<SVGMap features={county_air_quality.features}>
  <SVGPolygonLayer tooltip />
  {#snippet tooltip(props)}
    <h5>{props.NAME}</h5>
    <p>Air quality index: <strong>{props.index_air_quality}</strong></p>
  {/snippet}
</SVGMap>
`})}),`
`,e.jsx(o.h2,{id:"zoomable-maps-custom-projections-and-limiting-labels-to-higher-zoom",children:"Zoomable maps, custom projections and limiting labels to higher zoom"}),`
`,e.jsxs(o.p,{children:["Maps can include zoom and pan functionality out of the box by passing the ",e.jsx(o.code,{children:"zoomable"})," prop to the ",e.jsx(o.code,{children:"SVGMap"}),". Some times you may want to limit the visibility of a ",e.jsx(o.code,{children:"SVGLabelLayer"})," to a minumum zoom multiplyer. Consider this example of mapping average household income in New York City at the census tract level. You may want to display labels if the user has zoomed in far enough, but hide them when zoomed out to avoid overlapping text."]}),`
`,e.jsx(o.p,{children:"Loading the data for this map would look something like this:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`// import topojson library
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
`,e.jsxs(o.p,{children:["Next, you'll want to import the D3 projection you'd like to use. By default this component uses ",e.jsx(o.code,{children:"AlbersUSA"}),", which is a good choice for national-extent US data. This map is a city-level example, so something else might make more sense."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`import { geoMercator } from "d3-geo";
`})}),`
`,e.jsx(o.p,{children:"At this point, you're ready to render a map like this:"}),`
`,e.jsx(t,{of:c,sourceState:"shown"}),`
`,e.jsx(o.h2,{id:"setting-a-highlighted-feature",children:"Setting a highlighted feature"}),`
`,e.jsxs(o.p,{children:["Sometimes you'll need to set a specific feature to a highlighted state based on some external state in your application. In order to do this, you can pass a function to the prop ",e.jsx(o.code,{children:"highlightFeature"}),". This function will be called with each ",e.jsx(o.code,{children:"feature"})," in the layer, and if it returns ",e.jsx(o.code,{children:"true"}),", it will display that feature as if it was being hovered."]}),`
`,e.jsx(o.p,{children:"For this example, we'll load some 2022 5-year ACS data from Cleveland, Ohio that contains the share of workers who commute to work by bicycle."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`import topojson from "topojson-client";
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
`,e.jsxs(o.p,{children:["Now you can pass a ",e.jsx(o.code,{children:"featureHighlight"})," object that sets the highlighted feature based on the ",e.jsx(o.code,{children:"clevelandHighlight"})," variable. We can also update the value of this variable in the ",e.jsx(o.code,{children:"onclick"})," callback, allowing the user to set a highlighted feature when clicking. Combining this together would like like the following example:"]}),`
`,e.jsx(t,{of:p,sourceState:"shown"}),`
`,e.jsx(o.h2,{id:"event-handling",children:"Event handling"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"SVGMap"})," and its layers use lowercase callback props for event handling. Both map-level and layer-level events can be handled using ",e.jsx(o.code,{children:"onclick"}),", ",e.jsx(o.code,{children:"onmousemove"}),", and ",e.jsx(o.code,{children:"onmouseout"})," props."]}),`
`,e.jsx(o.p,{children:"Layer and map callbacks fire from pointer events internally (pointerdown/move/out), exposed as onclick, onmousemove, onmouseout props for API compatibility."}),`
`,e.jsx(o.p,{children:"Layer events use callback props:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-svelte",children:`<SVGPolygonLayer
  onclick={(e) => {
    console.log("Feature clicked:", e.detail.props);
  }}
  onmousemove={(e) => {
    console.log("Mouse over feature:", e.detail.props);
  }}
  onmouseout={() => {
    console.log("Mouse left feature");
  }}
/>
`})}),`
`,e.jsx(o.p,{children:"Map-level callbacks:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-svelte",children:`<SVGMap
  features={myFeatures}
  onclick={(e) => {
    console.log("Feature clicked (from layer)");
  }}
  onbgclick={(e) => {
    console.log("Background clicked");
  }}
  onmousemove={(e) => {
    console.log("Mouse moved over map");
  }}
  onmouseout={(e) => {
    console.log("Mouse left map");
  }}
>
  <SVGPolygonLayer />
</SVGMap>
`})}),`
`,e.jsxs(o.p,{children:["Note: Background clicks trigger ",e.jsx(o.code,{children:"onbgclick"})," only - they do not trigger ",e.jsx(o.code,{children:"onclick"}),". This allows you to handle background and feature clicks separately."]}),`
`,e.jsx(o.h2,{id:"bubble-map",children:"Bubble map"}),`
`,e.jsxs(o.p,{children:["You can use the ",e.jsx(o.code,{children:"<SVGPointLayer>"})," feature to create a bubble map based on a data value. In order to do this, you'll just need to use a D3 scale and pass a data value to it for the ",e.jsx(o.code,{children:"r"})," property of the layer. Looking at county popluation for the state of Pennsylvania, you could set this up by importing your data and setting up the scale:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`import pa_population_topo from "./path/top/topojson/pa_popluation_topo.json";
import { urbanColors } from "@urbaninstitute/dataviz-components";
import { geoMercator } from "d3-geo";
import { scaleSqrt } from "d3-scale";
import { extent } from "d3-array";

// pa population
const pa_population_geo = topojson.feature(pa_population_topo, "pa_county_population");
const paPopRadiusScale = scaleSqrt()
  .domain(extent(pa_population_geo.features, (d) => d.properties.value))
  .range([2, 50]);
`})}),`
`,e.jsx(o.p,{children:"And then you can render the bubble map here:"}),`
`,e.jsx(t,{of:d,sourceState:"shown"}),`
`,e.jsx(o.h2,{id:"advanced-custom-layers-with-rune-based-context",children:"Advanced: Custom layers with rune-based context"}),`
`,e.jsxs(o.p,{children:["For developers creating custom map layers, ",e.jsx(o.code,{children:"SVGMap"})," uses a rune-based context system via ",e.jsx(o.code,{children:"createSVGMapContext()"})," and ",e.jsx(o.code,{children:"useSVGMapContext()"}),". The map component calls ",e.jsx(o.code,{children:"createSVGMapContext()"})," internally, so layer components (including external ones) only need to call ",e.jsx(o.code,{children:"useSVGMapContext()"})," to access the shared state. The legacy Svelte 4 context has been removed."]}),`
`,e.jsx(o.p,{children:"The context provides:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"projection"})," - The D3 projection function (updated via ",e.jsx(o.code,{children:"fitSize"}),")"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"transform"})," - The D3 zoom transform state"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"features"})," - The feature collection used for fitting"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"stickyHighlight"})," - Currently highlighted feature props (or ",e.jsx(o.code,{children:"null"}),")"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"onPointerMove(e, props, opts)"})," - Method for layers to call on pointer move"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"onPointerDown(e, props, opts)"})," - Method for layers to call on pointer down"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"onPointerOut(e)"})," - Method for layers to call on pointer out"]}),`
`]}),`
`,e.jsx(o.h3,{id:"external-custom-layer-example",children:"External custom layer example"}),`
`,e.jsx(o.p,{children:"To create a custom layer outside this component library:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`import { useSVGMapContext } from "@urbaninstitute/dataviz-components/maps";
import { geoPath } from "d3-geo";

// Inside your custom layer component:
const map = useSVGMapContext();

// Derive a geoPath generator from the projection
const pathGenerator = $derived(geoPath(map.projection));

// Respect transform.k for size/width adjustments
const scaledStrokeWidth = $derived(1 / map.transform.k);

// Use map.onPointerMove, onPointerDown, and onPointerOut for interaction
function handleFeaturePointerdown(event, feature) {
  // Call context method with tooltip option
  map.onPointerDown(event, feature.properties, { tooltip: true });
}

function handleFeaturePointermove(event, feature) {
  map.onPointerMove(event, feature.properties, { tooltip: true });
}

function handleFeaturePointerout(event) {
  map.onPointerOut(event);
}
`})}),`
`,e.jsxs(o.p,{children:["All built-in layers (",e.jsx(o.code,{children:"SVGPolygonLayer"}),", ",e.jsx(o.code,{children:"SVGPointLayer"}),", ",e.jsx(o.code,{children:"SVGLabelLayer"}),") now use this rune-based context internally."]})]})}function $(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(a,{...n})}):a(n)}export{$ as default};

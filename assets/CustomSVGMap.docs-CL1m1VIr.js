import{j as e}from"./iframe-D_iF5c85.js";import{useMDXComponents as s}from"./index-hTQgkHaY.js";import{M as l,S as a,a as o}from"./blocks-BjWm_H-J.js";import{Primary as r}from"./CustomSVGMap.stories-Bo0iek7y.js";import"./lifecycle-DPT9lhMs.js";import"./create-runtime-stories-cJTTi5Jk.js";import"./BasicDropdown-BV9-kScM.js";import"./each-B1oKFb8M.js";import"./attributes-BlXGg7Yy.js";import"./attributes-q36Eg1F8.js";import"./class-B9SFUanI.js";import"./style-CNURdi_Z.js";import"./misc-B3v2RBLd.js";import"./urbanColors-BkxYcPwH.js";import"./Block-DaVU3fpD.js";import"./DatawrapperIframe-CELrtceV.js";import"./HeadingAlt-B3s-cwVt.js";import"./IconPlus-H3PVDhId.js";import"./IconMinus-C_ALby8P.js";import"./IconClose-0BE569Ao.js";import"./IconSearch-D2taTaTp.js";import"./LogoTPCBadge-Cv3HojDc.js";import"./LogoUrbanBadge-Bi-xGI2B.js";import"./LogoUrbanAnimated-CMdd7yyu.js";import"./LogoUrban-BMoE0jVd.js";import"./LogoUrbanWide-BHp9lSVx.js";import"./Navbar-CuQe5N91.js";import"./ProjectCredits-ZoBGb6Qv.js";import"./html-HzSgVQlL.js";import"./TextBlock-DH-7zvxt.js";import"./ReturnTop-BZ2xwKgh.js";import"./Scorecard-BPpEdO58.js";import"./SocialShare-DP__719P.js";import"./Button-BaoQD_bw.js";import"./this-BBCWgB8B.js";import"./ChartBlock-BSxk159m.js";import"./Meta-UJtWWVZM.js";import"./svelte-head-CrqWe_fm.js";import"./Toggle-kFPVefLV.js";import"./Scrolly-B3tX4heq.js";import"./window-DPTPwaep.js";import"./Analytics-BtQvuFGM.js";import"./Headline-FQMShgyj.js";import"./PymChild-DrAZ8mRg.js";import"./LoadingWrapper-BtRosSEG.js";import"./Tooltip-Dc-_iO2O.js";import"./AxisY-BU7-4rF7.js";import"./AxisX-D93YsPX7.js";import"./lib-SbtGGwAb.js";import"./size-TzohQyBJ.js";import"./string-BqOgh9tw.js";import"./SVGPolygonLayer-GsssbKkD.js";import"./SVGPointLayer-CMVarROK.js";import"./SVGLabelLayer-CmNXNRlT.js";import"./ColorLegend-ST9eZb3y.js";import"./linear-zaFmwBME.js";import"./init-DewmRu03.js";import"./index-_doEQLKC.js";import"./quantile-Dc72mZUz.js";import"./Tilemap-CyAPBYeh.js";import"./us_cities-DYyFK5C6.js";import"./quantile-Bh9554at.js";function n(i){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Examples/CustomSVGMap"}),`
`,e.jsx(t.h1,{id:"custom-svgmap-example",children:"Custom SVGMap example"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"SVGMap"})," component and the associated layer components make it easy to create custom choropleth maps rendered with D3 projections and color scales. This example walks through the creation of a county level U.S. map showing the Urban Institute Upward Mobility Framework's Air Quality Index metric."]}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(t.h2,{id:"data-pre-processing",children:"Data pre-processing"}),`
`,e.jsx(t.p,{children:"To begin, first prepare your geographic data for browser mapping. In general there are a few things that will help keep your workflow consistent and efficient:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Simplify any source data to a reasonable degree of detail. The smaller the filesize, the better the performance of your map wil be. ",e.jsx(t.a,{href:"https://mapshaper.org/",rel:"nofollow",children:"Mapshaper"})," is a great tool for this."]}),`
`,e.jsxs(t.li,{children:['Make sure your data is "unprojected", (ie projected into ',e.jsx(t.code,{children:"WGS84"}),"). This will allow you to take advantage of any ",e.jsx(t.a,{href:"https://d3js.org/d3-geo/projection",rel:"nofollow",children:"D3-compatable projection function"}),". Using mapshaper this is as simple as running ",e.jsx(t.code,{children:"mapshaper -proj wgs84"})," on your data."]}),`
`,e.jsxs(t.li,{children:["Joining any external data to your geographic data can either be done during the pre-processing step or it can be done client-side. The needs of your project will dictate which is the better choice, but pre-joining data will make your application code simpler when this is an option. Mapshaper can also ",e.jsx(t.a,{href:"https://github.com/mbloch/mapshaper/wiki/Command-Reference#-join",rel:"nofollow",children:"be used here"})," with ",e.jsx(t.code,{children:"mapshaper -join"}),"."]}),`
`,e.jsxs(t.li,{children:["It is usually best to format your data as topojson, as this will result in smaller filesize over the wire and avoids some complexities of dealing directly with GeoJSON in D3. Mapshaper allows for this with ",e.jsx(t.code,{children:"mapshaper -o format=topojson"}),". If you do need to use GeoJSON directly, you'll need to factor in the fact that ",e.jsx(t.a,{href:"https://observablehq.com/@d3/winding-order?collection=@d3/d3-geo",rel:"nofollow",children:"D3 has the opposite definition"})," of correct winding order compared with ",e.jsx(t.a,{href:"https://macwright.com/2015/03/23/geojson-second-bite#winding",rel:"nofollow",children:"the GeoJSON specification"}),", meaning you'll need to add an additional flag to tools like ",e.jsx(t.code,{children:"mapshaper"})," to output a D3-friendly file: ",e.jsx(t.code,{children:"mapshaper -o format=geojson gj2008"}),"."]}),`
`]}),`
`,e.jsxs(t.p,{children:["Putting this all together, for this example we'll take a ",e.jsx(t.a,{href:"https://www.census.gov/geographies/mapping-files/time-series/geo/cartographic-boundary.html",rel:"nofollow",children:"Census Bureau Cartographic Boundary file"})," of U.S. counties and join it to our Upward Mobility Air Quality Index data. Working with a file structure like this:"]}),`
`,e.jsx(o,{dark:!0,code:`
.
├── air_quality.csv
└── cb_2019_us_county_500k
  ├── cb_2019_us_county_500k.cpg
  ├── cb_2019_us_county_500k.dbf
  ├── cb_2019_us_county_500k.prj
  ├── cb_2019_us_county_500k.shp
  ├── cb_2019_us_county_500k.shp.ea.iso.xml
  ├── cb_2019_us_county_500k.shp.iso.xml
  └── cb_2019_us_county_500k.shx
`}),`
`,e.jsxs(t.p,{children:["Run the following mapshaper command to create a data file that is ready for mapping. Note the use of Mapshaper's filter-fields to limit the properties to just what is relevant for this map. We also need to tell mapshaper to treat the GEOID column the the CSV as a string instead of a number to make sure the join works correctly. Finally, we'll give the object a simpler name than ",e.jsx(t.code,{children:"cb_2019_us_county_500k"})," for easier reference later."]}),`
`,e.jsx(o,{dark:!0,code:`
mapshaper -i cb_2019_us_county_500k/cb_2019_us_county_500k.shp \\
-join air_quality.csv string-fields=GEOID keys=GEOID,GEOID \\
-simplify 20% \\
-filter-fields GEOID,NAME,index_air_quality \\
-rename-layers county_air_quality \\
-o format=topojson county_air_quality_topo.json
`}),`
`,e.jsx(t.p,{children:"At this point, you should now have a topojson file that is ready to map."}),`
`,e.jsx(t.h2,{id:"creating-a-map-component",children:"Creating a map component"}),`
`,e.jsx(t.p,{children:"Now you're ready to start loading these data into your Svelte application. In addition to the data we just prepared, for this example we'll load one additional topojson file of large U.S. cities that has also been created with a similar process to the county file above, but without the need to join any external data. We can load both of these topojson files into our Svelte project like this:"}),`
`,e.jsx(o,{dark:!0,code:`
import county_air_quality_topo from "./county_air_quality_topo.json";
import us_cities from "./us_cities.json";
`,language:"javascript"}),`
`,e.jsxs(t.p,{children:["We'll need to use the ",e.jsx(t.code,{children:"topojson-client"})," library to handle the topojson format. Make sure you have it installed with:"]}),`
`,e.jsx(o,{dark:!0,code:`
npm install topojson-client
`}),`
`,e.jsx(t.p,{children:"You can import this library with the following line:"}),`
`,e.jsx(o,{dark:!0,code:`
import * as topojson from "topojson-client";
`,language:"javascript"}),`
`,e.jsxs(t.p,{children:["Next parse your source topojson with the ",e.jsx(t.code,{children:"topojson-client"})," library:"]}),`
`,e.jsx(o,{dark:!0,code:`
const county_air_quality = topojson.feature(county_air_quality_topo, "county_air_quality");
const us_cities_geo = topojson.feature(us_cities, "us_cities");
`,language:"javascript"}),`
`,e.jsx(t.p,{children:"These objects are now formatted as GeoJSON features that will play well with D3."}),`
`,e.jsxs(t.p,{children:["The next thing we'll need to create the map is a D3 color scale. For this example, we'll use D3's ",e.jsx(t.code,{children:"scaleQuantile"})," combined with the color utilities included in this library to create a diverging scale centered on the median value of our data:"]}),`
`,e.jsx(o,{dark:!0,code:`
import { urbanColors } from "@urbaninstitute/dataviz-components/utils";

const airQualityScale = scaleQuantile()
.domain(county_air_quality.features.map((d) => d.properties.index_air_quality))
.range(urbanColors.getDivergingColors());
`,language:"javascript"}),`
`,e.jsx(t.p,{children:"At this point, we have everything we need to render the map, but we want to combine a few more components to create a formatted graphic with information about our map, as well as a color legend that explains the scale we just created. Import the map components as well as these additional components from the library:"}),`
`,e.jsx(o,{dark:!0,code:`
import { ChartBlock } from "@urbaninstitute/dataviz-components";
import { ColorLegend, SVGLabelLayer, SVGMap, SVGPointLayer } from "@urbaninstitute/dataviz-components/maps";
`,language:"javascript"}),`
`,e.jsx(t.p,{children:"And now you can render your map the following Svelte code:"}),`
`,e.jsx(o,{of:r,dark:!0,language:"svelte"}),`
`,e.jsx(t.p,{children:"This results in an interactive, zoomable map with multiple layers, a custom color scale, a legend, and tooltip that displays details about each county:"}),`
`,e.jsx(a,{of:r})]})}function ye(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{ye as default};

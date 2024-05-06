<script context="module">
  import SVGMap from "./SVGMap.svelte";
  import PolygonLayer from "./PolygonLayer.svelte";
  import LabelLayer from "./LabelLayer.svelte";
  import PointLayer from "./PointLayer.svelte";
  import docs from "./SVGMap.docs.md?raw";

  export const meta = {
    title: "Components/SVGMap",
    component: SVGMap,
    tags: ["autodocs"],
    argTypes: {
      features: { control: "array" },
      controlPosition: { control: "select", options: ["bottom-right", "bottom-left", "top-right", "top-left"] }
    },
    parameters: {
      docs: {
        description: {
          component: docs
        }
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import states from "../../docs/sample-data/states_geo.json";
  import us_cities from "../../docs/sample-data/us_cities.json";
  import nyc_income_topo from "../../docs/sample-data/nyc_income_topo.json";
  import nyc_ntas from "../../docs/sample-data/nyc_ntas.json";
  import county_air_quality_topo from "../../docs/sample-data/county_air_quality_topo.json";
  import cleveland_bike_data_topo from "../../docs/sample-data/cleveland_bike_to_work.json";
  import { urbanColors } from "$lib/utils";
  import { geoMercator, geoAlbersUsa } from "d3-geo";
  import { scaleQuantize, scaleQuantile, scaleLinear } from "d3-scale";
  import { extent, max } from "d3-array";

  // nyc census tracts with average hh income
  const nyc_income = topojson.feature(nyc_income_topo, "nyc_income_geo1");
  const nyc_neighborhoods = topojson.feature(nyc_ntas, "nyc_ntas");

  let incomeScale = scaleQuantize()
    .domain(extent(nyc_income.features, (d) => d.properties.estimate))
    .range(urbanColors.getGreens());

  // county air quality data
  const county_air_quality = topojson.feature(county_air_quality_topo, "county_air_quality_geo");

  let airQualityScale = scaleQuantile()
    .domain(county_air_quality.features.map((d) => d.properties.index_air_quality))
    // .range([urbanColors.yellow_shade_darkest, urbanColors.yellow_shade_dark, urbanColors.yellow, urbanColors.yellow_shade_light, urbanColors.yellow_shade_lighter]);
    .range(urbanColors.getDivergingColors());

  let cleveland_bike_data = topojson.feature(cleveland_bike_data_topo, "cleveland_bike_to_work");
  let bikeScale = scaleQuantize()
    .domain(extent(cleveland_bike_data.features
      , (d) => d.properties.bike_to_work))
    .range(urbanColors.getMapBlues())

  const us_cities_geo = topojson.feature(us_cities, "us_cities");
</script>

<Template let:args>
  <SVGMap {...args}>
    <PolygonLayer />
    <PointLayer />
    <LabelLayer getLabel={(d) => d.properties.STUSPS}/>
  </SVGMap>
</Template>

<Story name="default"
  args={{
    features: states.features
  }}
>
</Story>

<Story name="county air quality">
  <SVGMap scrollWheel="ctrl" zoomable projection={geoAlbersUsa} features={county_air_quality.features}>
    <PolygonLayer
      fill={(d) => airQualityScale(d.properties.index_air_quality)}
      stroke={urbanColors.gray_shade_dark}
      hoverStroke={urbanColors.magenta}
      hoverStrokeWidth={2}
    />
    <PolygonLayer features={states.features} fill="none" stroke={urbanColors.gray_shade_dark} strokeWidth={1}/>
    <PointLayer features={us_cities_geo.features} fill={urbanColors.gray_shade_lighter} />
    <LabelLayer
      features={us_cities_geo.features}
      getLabel={(d) => d.properties.name}
      fontSize={13}
    />
  </SVGMap>
</Story>

<Story name="nyc-income">
  <SVGMap zoomable projection={geoMercator} features={nyc_income.features}>
    <PolygonLayer
      fill={(d) => incomeScale(d.properties.estimate)}
      stroke={(d) => incomeScale(d.properties.estimate)}
      hoverStroke={urbanColors.gray_shade_darker}
      hoverStrokeWidth={2}
    />
    <LabelLayer 
      features={nyc_neighborhoods.features}
      getLabel={(d) => d.properties.ntaname}
      minZoom={3}
      />
  </SVGMap>
</Story>
<Story name="Cleveland bike to work">
  <SVGMap zoomable features={cleveland_bike_data.features} projection={geoMercator}>
    <PolygonLayer
      fill={(d) => bikeScale(d.properties.bike_to_work)}
      stroke="white"
      hoverStroke={urbanColors.gray_shade_darker}
      hoverStrokeWidth={2}
    />
  </SVGMap>
</Story>

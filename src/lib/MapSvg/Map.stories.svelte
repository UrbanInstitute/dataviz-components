<script context="module">
  import SVGMap from "./Map.svelte";
  import PolygonLayer from "./PolygonLayer.svelte";
  import LabelLayer from "./LabelLayer.svelte";
  import PointLayer from "./PointLayer.svelte";
  import description from "./docs/description.md?raw";

  export const meta = {
    title: "Components/SVGMap",
    component: SVGMap,
    tags: ["autodocs"],
    argTypes: {
      features: { control: "array" }
    },
    parameters: {
      docs: {
        description: {
          component: description
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
  import county_air_quality_topo from "../../docs/sample-data/county_air_quality_topo.json";
  import { urbanColors } from "$lib/utils";
  import { geoMercator, geoAlbersUsa } from "d3-geo";
  import { scaleQuantize } from "d3-scale";
  import { extent, max } from "d3-array";

  // nyc census tracts with average hh income
  const nyc_income = topojson.feature(nyc_income_topo, "nyc_income_geo1");

  let incomeScale = scaleQuantize()
    .domain(extent(nyc_income.features, (d) => d.properties.estimate))
    .range(urbanColors.getGreens());

  // county air quality data
  const county_air_quality = topojson.feature(county_air_quality_topo, "county_air_quality_geo");

  let airQualityScale = scaleQuantize()
    .domain(extent(county_air_quality.features, (d) => d.properties.index_air_quality))
    // .range([urbanColors.yellow_shade_darkest, urbanColors.yellow_shade_dark, urbanColors.yellow, urbanColors.yellow_shade_light, urbanColors.yellow_shade_lighter]);
    .range(urbanColors.getDivergingColors());

  const us_cities_geo = topojson.feature(us_cities, "us_cities");
</script>

<Template let:args>
  <SVGMap {...args}></SVGMap>
</Template>

<Story name="county air quality">
  <SVGMap zoomable projection={geoAlbersUsa} features={county_air_quality.features}>
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
  </SVGMap>
</Story>

<script context="module">
  import SVGMap from "./SVGMap.svelte";
  import SVGPolygonLayer from "../SVGPolygonLayer/SVGPolygonLayer.svelte";
  import SVGLabelLayer from "../SVGLabelLayer/SVGLabelLayer.svelte";
  import SVGPointLayer from "../SVGPointLayer/SVGPointLayer.svelte";
  import {defineMeta} from "@storybook/addon-svelte-csf";

  const {Story} = defineMeta({
    title: "Maps/SVGMap",
    component: SVGMap,
    argTypes: {
      features: { control: "array" },
      controlPosition: {
        control: "select",
        options: ["bottom-right", "bottom-left", "top-right", "top-left"]
      },
      scrollWheel: {
        control: "select",
        options: ["no", "yes", "ctrl"]
      }
    },
    parameters: {
      githubLink: {
        url: "/maps/SVGMap/SVGMap.svelte"
      }
    }
  });
</script>

<script>
  import states from "../../../docs/sample-data/states_geo.json";
  import us_cities from "../../../docs/sample-data/us_cities.json";
  import nyc_income_topo from "../../../docs/sample-data/nyc_income_topo.json";
  import nyc_ntas from "../../../docs/sample-data/nyc_ntas.json";
  import county_air_quality_topo from "../../../docs/sample-data/county_air_quality_topo.json";
  import { urbanColors } from "$lib/utils";
  import { geoMercator } from "d3-geo";
  import { scaleQuantize, scaleQuantile, scaleSqrt } from "d3-scale";
  import { extent, max } from "d3-array";
  import cleveland_bike_data_topo from "../../../docs/sample-data/cleveland_bike_to_work.json";
  import pa_population_topo from "../../../docs/sample-data/pa_county_population_topo.json";

  // nyc census tracts with average hh income
  const nyc_income = topojson.feature(nyc_income_topo, "nyc_income_geo1");
  const nyc_neighborhoods = topojson.feature(nyc_ntas, "nyc_ntas");

  // nyc income scale
  let incomeScale = scaleQuantize()
    .domain(extent(nyc_income.features, (d) => d.properties.estimate))
    .range(urbanColors.getGreens());

  // county air quality data
  const county_air_quality = topojson.feature(county_air_quality_topo, "county_air_quality");

  let airQualityScale = scaleQuantile()
    .domain(county_air_quality.features.map((d) => d.properties.index_air_quality))
    .range(urbanColors.getDivergingColors());

  const us_cities_geo = topojson.feature(us_cities, "us_cities");

  // cleveland biking
  const cleveland_bike_data = topojson.feature(cleveland_bike_data_topo, "cleveland_bike_to_work");
  const clevelandBikeScale = scaleQuantize()
    .domain(extent(cleveland_bike_data.features, (d) => d.properties.bike_to_work))
    .range(urbanColors.getMapBlues());

  let clevelandHighlight = "39035197700";

  // pa population
  const pa_population_geo = topojson.feature(pa_population_topo, "pa_county_population");
  const paPopRadiusScale = scaleSqrt()
    .domain(extent(pa_population_geo.features, (d) => d.properties.value))
    .range([2, 50]);
</script>

<Story
  name="Simple map"
  asChild
  source={`<SVGMap features={states.features}>
  <SVGPolygonLayer />
  <SVGPointLayer />
  <SVGLabelLayer getLabel={(d) => d.properties.STUSPS}/>
</SVGMap>`}
>
  <SVGMap features={states.features}>
    <SVGPolygonLayer />
    <SVGPointLayer />
    <SVGLabelLayer getLabel={(d) => d.properties.STUSPS} />
  </SVGMap>
</Story>

<Story name="Colors layers and tooltips" asChild>
  <SVGMap features={county_air_quality.features} aspectRatio={4 / 2.3333}>
    <SVGPolygonLayer
      fill={(d) => airQualityScale(d.properties.index_air_quality)}
      stroke={urbanColors.gray_shade_dark}
      hoverStroke={urbanColors.magenta}
      hoverStrokeWidth={2}
      tooltip
    />
    <SVGPointLayer features={us_cities_geo.features} fill={urbanColors.gray_shade_lighter} />
    <SVGLabelLayer
      features={us_cities_geo.features}
      pointerEvents={false}
      getLabel={(d) => d.properties.name}
      fontSize={13}
    />
    <div slot="tooltip" let:props>
      <h5>{props.NAME}</h5>
      <p>Air quality index:<strong>{props.index_air_quality}</strong></p>
    </div>
  </SVGMap>
</Story>

<Story name="Zoomable" asChild>
  <SVGMap scrollWheel="ctrl" zoomable projection={geoMercator} features={nyc_income.features}>
    <SVGPolygonLayer
      fill={(d) => incomeScale(d.properties.estimate)}
      stroke={(d) => incomeScale(d.properties.estimate)}
      hoverStroke={urbanColors.gray_shade_darker}
      hoverStrokeWidth={2}
    />
    <SVGLabelLayer
      features={nyc_neighborhoods.features}
      getLabel={(d) => d.properties.ntaname}
      minZoom={3}
    />
  </SVGMap>
</Story>

<Story name="Feature highlight" asChild>
  <SVGMap features={cleveland_bike_data.features} projection={geoMercator}>
    <SVGPolygonLayer
      fill={(d) => clevelandBikeScale(d.properties.bike_to_work)}
      stroke="white"
      hoverStroke={urbanColors.yellow}
      hoverStrokeWidth={2}
      highlightFeature={{ GEOID: clevelandHighlight }}
      on:click={(e) => {
        if (clevelandHighlight === e.detail.props.GEOID) {
          clevelandHighlight = null;
        } else {
          clevelandHighlight = e.detail.props.GEOID;
        }
      }}
    />
  </SVGMap>
</Story>

<Story name="Bubble map" asChild>
  <SVGMap features={pa_population_geo.features} projection={geoMercator}>
    <SVGPolygonLayer fill={urbanColors.gray_shade_lighter} stroke={urbanColors.gray_shade_dark} />
    <SVGPointLayer
      fill={urbanColors.blue}
      opacity={0.5}
      r={(d) => paPopRadiusScale(d.properties.value)}
      stroke={urbanColors.blue_shade_darker}
      strokeWidth={2}
      hoverStroke={urbanColors.yellow}
      hoverStrokeWidth={4}
    />
  </SVGMap>
</Story>

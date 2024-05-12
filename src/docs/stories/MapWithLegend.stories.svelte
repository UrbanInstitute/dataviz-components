<script context="module">
  export const meta = {
    title: "Examples/Stories/MapWithLegend",
    parameters: {
      docs: {
        description: {
          component: "An SVGMap with a ColorLegend"
        }
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import {
    ChartBlock,
    PolygonLayer,
    LabelLayer,
    PointLayer,
    SVGMap
  } from "$lib";
  import ColorLegend from "$lib/ColorLegend/ColorLegend.svelte";
  import county_air_quality_topo from "../../docs/sample-data/county_air_quality_topo.json";
  import { urbanColors } from "$lib/utils";
  import { geoAlbersUsa } from "d3-geo";
  import us_cities from "../../docs/sample-data/us_cities.json";
  import { scaleQuantile } from "d3-scale";

  const county_air_quality = topojson.feature(county_air_quality_topo, "county_air_quality_geo");

  const us_cities_geo = topojson.feature(us_cities, "us_cities");

  let airQualityScale = scaleQuantile()
    .domain(county_air_quality.features.map((d) => d.properties.index_air_quality))
    .range(urbanColors.getDivergingColors());
</script>

<Template></Template>

<Story name="Primary">
<ChartBlock title="Air quality index by U.S. county" source="Urban Institute Updward Mobility Framework">
  <div style="max-width: 300px; margin: 1em auto 0;">
    <ColorLegend scale={airQualityScale} height={10} tickLineColor={"white"} tickLineWidth="2"/>
  </div>
  <SVGMap projection={geoAlbersUsa} features={county_air_quality.features} height="400">
    <PolygonLayer
      fill={(d) => airQualityScale(d.properties.index_air_quality)}
      stroke={urbanColors.gray_shade_dark}
    />
    <PointLayer features={us_cities_geo.features} fill={urbanColors.gray_shade_lighter} />
    <LabelLayer
      features={us_cities_geo.features}
      getLabel={(d) => d.properties.name}
      fontSize={13}
    />
  </SVGMap>
</ChartBlock>

</Story>

<script context="module">
  export const meta = {
    title: "Examples/Stories/CustomSVGMap",
    parameters: {
      docs: {
        description: {
          component: "An custom SVGMap with a ColorLegend and tooltip."
        }
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import { ChartBlock } from "$lib";
  import {
    SVGPolygonLayer,
    SVGLabelLayer,
    SVGPointLayer,
    SVGMap
  } from "$lib/maps";
  import ColorLegend from "$lib/maps/ColorLegend/ColorLegend.svelte";
  import county_air_quality_topo from "../../docs/sample-data/county_air_quality_topo.json";
  import { urbanColors } from "$lib/utils";
  import us_cities from "../../docs/sample-data/us_cities.json";
  import { scaleQuantile } from "d3-scale";

  const county_air_quality = topojson.feature(county_air_quality_topo, "county_air_quality");

  const us_cities_geo = topojson.feature(us_cities, "us_cities");

  let airQualityScale = scaleQuantile()
    .domain(county_air_quality.features.map((d) => d.properties.index_air_quality))
    .range(urbanColors.getDivergingColors());

</script>

<Template></Template>

<Story name="Primary">
  <ChartBlock
    title="Air quality index by U.S. county"
    source="Urban Institute Upward Mobility Framework"
  >
    <div style="max-width: 300px; margin: 1em auto 0;">
      <ColorLegend scale={airQualityScale} height={10} tickLineColor={"white"} tickLineWidth="2" />
    </div>
    <SVGMap
      zoomable
      features={county_air_quality.features}
      aspectRatio={4 / 2.5}
      tooltipContainParent={true}
    >
      <SVGPolygonLayer
        fill={(d) => airQualityScale(d.properties.index_air_quality)}
        hoverStroke={urbanColors.magenta}
        hoverStrokeWidth={2}
        tooltip
        stroke={urbanColors.gray_shade_dark}
      />
      <SVGPointLayer
        features={us_cities_geo.features}
        pointerEvents={false}
        fill={urbanColors.gray_shade_lighter}
      />
      <SVGLabelLayer
        features={us_cities_geo.features}
        getLabel={(d) => d.properties.name}
        fontSize={13}
        pointerEvents={false}
      />
      <div slot="tooltip" let:props>
        <h5>{props.NAME} county</h5>
        <p>Air quality index: <strong>{props.index_air_quality}</strong></p>
      </div>
    </SVGMap>
  </ChartBlock>
</Story>

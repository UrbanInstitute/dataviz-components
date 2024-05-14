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
  import { ChartBlock } from "$lib";
  import Tooltip from "$lib/Tooltip/Tooltip.svelte";
<<<<<<< HEAD
  import {
    SVGPolygonLayer,
    SVGLabelLayer,
    SVGPointLayer,
    SVGMap
  } from "$lib/maps";
=======
  import { PolygonLayer, LabelLayer, PointLayer, SVGMap } from "$lib/maps";
>>>>>>> 42691a6 (Add pointer events options to all map layers)
  import ColorLegend from "$lib/maps/ColorLegend/ColorLegend.svelte";
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

  let tooltip = undefined;

  function showTooltip(x, y, content) {
    tooltip = {
      x,
      y,
      content
    };
  }
</script>

<Template></Template>

<Story name="Primary">
  <ChartBlock
    title="Air quality index by U.S. county"
    source="Urban Institute Updward Mobility Framework"
  >
    <div style="max-width: 300px; margin: 1em auto 0;">
      <ColorLegend scale={airQualityScale} height={10} tickLineColor={"white"} tickLineWidth="2" />
    </div>
    <SVGMap
      zoomable
      projection={geoAlbersUsa}
      features={county_air_quality.features}
      aspectRatio={4 / 2.666}
    >
      <PolygonLayer
        fill={(d) => airQualityScale(d.properties.index_air_quality)}
        on:mousemove={(e) => {
          showTooltip(
            e.detail.e.x,
            e.detail.e.y,
            `Air quality index: <strong>${e.detail.props.index_air_quality}<strong>`
          );
        }}
        on:mouseout={(e) => {
          tooltip = undefined;
        }}
        stroke={urbanColors.gray_shade_dark}
      />
      <PointLayer features={us_cities_geo.features} fill={urbanColors.gray_shade_lighter} />
      <LabelLayer
        features={us_cities_geo.features}
        getLabel={(d) => d.properties.name}
        fontSize={13}
        pointerEvents={false}
      />
    </SVGMap>
    {#if tooltip}
      <Tooltip {...tooltip} />
    {/if}
  </ChartBlock>
</Story>

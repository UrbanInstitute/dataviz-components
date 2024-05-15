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

  // will hold the tooltip Obj if set
  let tooltip;
  // will hold the map highlight ID if set
  let stickyHighlight;

  // translate an event object into a tooltip object and set it
  function showTooltip(e) {
    const content = `<h5>${e.detail.props.fips}</h5>Air quality index: <strong>${e.detail.props.index_air_quality}<strong>`;
    const { x, y } = e.detail.e;
    tooltip = {
      x,
      y,
      content
    };
  }

  function handleMousemove(e) {
    // if map has a current highlight, mousemove should do nothing and return
    if (stickyHighlight) {
      return;
    }
    // otherwise, show a tooltip based on this event
    showTooltip(e);
  }

  function handleClick(e) {
    // if map has a current highlight, clear it and clear the tooltip on click and return
    if (stickyHighlight) {
      tooltip = undefined;
      stickyHighlight = "";
      return;
    }
    // if map doesn't have a current highlight, set it and render the tooltip based on this event
    stickyHighlight = e.detail.props.fips;
    showTooltip(e);
  }

  function handleMouseout(e) {
    if (!stickyHighlight) {
      tooltip = undefined;
    }
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
      aspectRatio={4 / 2.5}
    >
      <PolygonLayer
        fill={(d) => airQualityScale(d.properties.index_air_quality)}
        hoverStroke={urbanColors.magenta}
        hoverStrokeWidth={2}
        highlightFeature={(d) => d.properties.fips === stickyHighlight}
        on:click={handleClick}
        on:mousemove={handleMousemove}
        on:mouseout={handleMouseout}
        stroke={urbanColors.gray_shade_dark}
      />
      <PointLayer
        pointerEvents={false}
        features={us_cities_geo.features}
        fill={urbanColors.gray_shade_lighter}
      />
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

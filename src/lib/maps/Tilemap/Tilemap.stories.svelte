<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Tilemap from "./Tilemap.svelte";
  import testData from "./docs/test_data.json";
  import { urbanColors } from "$lib/utils";
  import { scaleQuantile } from "d3-scale";

  const { Story } = defineMeta({
    title: "Maps/Tilemap",
    component: Tilemap,
    tags: ["autodocs"],
    argTypes: {
      shape: {
        default: "hex",
        options: ["hex", "rect"],
        control: "select"
      },
      fill: { control: "color" },
      stroke: { control: "color" },
      width: { control: "number" }
    },
    parameters: {
      githubLink: {
        url: "/maps/Tilemap/Tilemap.svelte"
      }
    }
  });

  // Example data for demonstration
  const demoData = [
    { map_id: "CA", value: 1 },
    { map_id: "TX", value: 2 },
    { map_id: "NY", value: 3 },
    { map_id: "FL", value: 4 }
  ];

  const mapColorScale = scaleQuantile()
    .domain(testData.map(d => d.value))
    .range(urbanColors.getMapBlues());
</script>

<Story
  name="Basic"
  args={{
    data: demoData,
    shape: "hex",
    fill: urbanColors.blue,
    stroke: urbanColors.white,
    hoverStroke: urbanColors.blue_shade_darker,
    hoverStrokeWidth: 3,
  }}
/>

<Story
  name="All States"
  asChild
>
<Tilemap {...{
    data: testData,
    shape: "hex",
    fill: (d) => mapColorScale(d.value),
    stroke: urbanColors.white,
    hoverStroke: urbanColors.yellow,
    hoverStrokeWidth: 3,
  }}>
    {#snippet tooltip(props)}
        <strong>{props.map_id}: </strong>{props.value} 
    {/snippet}
</Tilemap>
</Story>

<Story
  name="Rect States"
  args={{
    data: testData,
    shape: "rect",
    fill: (d) => mapColorScale(d.value),
    stroke: urbanColors.white,
    hoverStroke: urbanColors.yellow,
    hoverStrokeWidth: 3,
  }}
/>

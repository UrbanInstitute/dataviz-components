<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Tilemap from "./Tilemap.svelte";
  import testData from "../../../docs/sample-data/tilemap_sample_data.json";
  import docs from "./Tilemap.docs.md?raw";
  import { urbanColors } from "$lib/utils";
  import { scaleQuantile } from "d3-scale";
  import { userEvent, expect, fn } from "storybook/test";

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
      stroke: { control: "color" },
      width: { control: "number" }
    },
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/maps/Tilemap/Tilemap.svelte"
      }
    }
  });

  const mapColorScale = scaleQuantile()
    .domain(testData.map((d) => d.value))
    .range(urbanColors.getMapBlues())
    .unknown(urbanColors.gray_shade_lighter);

  let mousemoveHandler = fn();
  let mouseoutHandler = fn();
  let clickHandler = fn();
  let bgClickHandler = fn();
</script>

{#snippet template(args)}
  <Tilemap {...args}>
    {#snippet tooltip(props)}
      <strong>{props.map_id}: </strong>{props.value}
    {/snippet}
  </Tilemap>
{/snippet}

<Story
  name="Basic"
  args={{
    data: testData,
    shape: "hex",
    stroke: urbanColors.white,
    fill: (d) => mapColorScale(d?.value),
    hoverStroke: urbanColors.yellow,
    hoverStrokeWidth: 3,
    onBgclick: bgClickHandler,
    onMousemove: mousemoveHandler,
    onMouseout: mouseoutHandler,
    onClick: clickHandler
  }}
  play={async ({ canvasElement }) => {
    const feature = canvasElement.querySelector(".tile-shape");
    await userEvent.hover(feature);
    await expect(mousemoveHandler).toHaveBeenCalled();
    await userEvent.unhover(feature);
    await expect(mouseoutHandler).toHaveBeenCalled();
    await userEvent.click(feature);
    await expect(clickHandler).toHaveBeenCalled();
  }}
  {template}
/>

<Story
  name="Rect States"
  args={{
    data: testData,
    shape: "rect",
    fill: (d) => mapColorScale(d?.value),
    stroke: urbanColors.white,
    hoverStroke: urbanColors.yellow,
    hoverStrokeWidth: 3
  }}
/>

<Story name="Territories Example" asChild>
  <Tilemap
    {...{
      data: testData,
      shape: "hex",
      featureOption: "territories",
      fill: (d) => mapColorScale(d?.value),
      stroke: urbanColors.white,
      hoverStroke: urbanColors.yellow,
      hoverStrokeWidth: 3
    }}
  >
    {#snippet tooltip(props)}
      <strong>{props.map_id}: </strong>{props.value}
    {/snippet}
  </Tilemap>
</Story>

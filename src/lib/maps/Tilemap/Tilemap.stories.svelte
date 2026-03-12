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

<script>
  let highlightedFips = $state(null);
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
    ariaTitle: "U.S. state-level tilemap showing sample values by state",
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
    hoverStrokeWidth: 3,
    ariaTitle: "U.S. state-level tilemap using rectangular tiles showing sample values by state"
  }}
  {template}
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
      hoverStrokeWidth: 3,
      ariaTitle: "U.S. state and territory tilemap showing sample values"
    }}
  >
    {#snippet tooltip(props)}
      <strong>{props.map_id}: </strong>{props.value}
    {/snippet}
  </Tilemap>
</Story>

<Story name="Highlight Feature" asChild>
  <Tilemap
    data={testData}
    shape="hex"
    fill={(d) => mapColorScale(d?.value)}
    stroke={urbanColors.white}
    hoverStroke={urbanColors.yellow}
    hoverStrokeWidth={3}
    highlightFeature={highlightedFips}
    ariaTitle="U.S. state-level tilemap — click a state to highlight it"
    onClick={(_, props) => {
      highlightedFips = highlightedFips === props?.map_id ? null : props?.map_id;
    }}
  >
    {#snippet tooltip(props)}
      <strong>{props.map_id}: </strong>{props.value}
    {/snippet}
  </Tilemap>
</Story>

<Story
  name="Hover Fill"
  args={{
    data: testData,
    shape: "hex",
    fill: (d) => mapColorScale(d?.value),
    stroke: urbanColors.white,
    hoverFill: urbanColors.yellow,
    hoverStroke: urbanColors.yellow,
    hoverStrokeWidth: 3,
    highlightFeature: "06",
    ariaTitle: "U.S. state-level tilemap demonstrating hover fill — California is pre-highlighted"
  }}
  {template}
/>

<Story
  name="Accessibility"
  args={{
    data: testData,
    shape: "hex",
    fill: (d) => mapColorScale(d?.value),
    stroke: urbanColors.white,
    hoverStroke: urbanColors.yellow,
    hoverStrokeWidth: 3,
    ariaTitle: "U.S. state-level tilemap showing sample values by state",
    ariaDescription:
      "States in the Northeast and West Coast tend to have higher values in this dataset."
  }}
  play={async ({ canvasElement }) => {
    const svg = canvasElement.querySelector("svg");
    await expect(svg).toHaveAttribute("role", "img");
    await expect(svg).not.toHaveAttribute("aria-hidden");
    const labelledBy = svg.getAttribute("aria-labelledby");
    await expect(labelledBy).toBeTruthy();
    const titleEl = canvasElement.querySelector(`#${labelledBy.split(" ")[0]}`);
    await expect(titleEl).toBeTruthy();
    await expect(titleEl.textContent).toBe(
      "U.S. state-level tilemap showing sample values by state"
    );
  }}
  {template}
/>

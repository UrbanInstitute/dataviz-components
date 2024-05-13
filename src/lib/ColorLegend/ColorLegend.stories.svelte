<script context="module">
  import ColorLegend from "./ColorLegend.svelte";

  export const meta = {
    title: "Components/ColorLegend",
    description: "A basic headline",
    component: ColorLegend,
    tags: ["autodocs"],
    argTypes: {
      swatchLayout: {
        control: "select",
        options: ["row", "column"]
      },
      swatchAlign: {
        control: "select",
        options: ["flex-start", "center", "flex-end"]
      },
      margin: {
        control: "object"
      },
    },
    parameters: {
      docs: {
        description: {
          component: "This component generates a color legend based on a D3 scale."
        }
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import urbanColors from "../utils/urbanColors.js";
  import {
    scaleLinear,
    scaleSequential,
    scaleDiverging,
    scaleThreshold,
    scaleOrdinal
  } from "d3-scale";

  const sampleScale = scaleLinear()
    .domain([1, 50, 100])
    .range([urbanColors.blue_shade_lightest, urbanColors.blue, urbanColors.blue_shade_darkest]);

  const sampleSequentialScale = scaleSequential()
    .domain([1, 100])
    .range([urbanColors.blue_shade_lightest, urbanColors.blue]);
</script>

<Template let:args>
  <ColorLegend {...args} />
</Template>

<Story
  name="Linear"
  args={{
    scale: sampleScale
  }}
/>
<Story
  name="Sequential"
  args={{
    scale: sampleSequentialScale
  }}
/>
<Story
  name="Diverging continuous"
  args={{
    scale: scaleDiverging([-1, 0, 1], [urbanColors.yellow, urbanColors.white, urbanColors.blue])
  }}
/>

<Story
  name="Threshold"
  args={{
    scale: scaleThreshold(
      [2, 3, 4, 5],
      [
        urbanColors.blue_shade_lightest,
        urbanColors.blue_shade_lighter,
        urbanColors.blue,
        urbanColors.blue_shade_darker,
        urbanColors.black
      ]
    )
  }}
/>

<Story
  name="Ordinal"
  args={{
    scale: scaleOrdinal(
      ["cat 1", "cat 2", "cat 3", "cat 4"],
      [urbanColors.blue, urbanColors.yellow, urbanColors.black, urbanColors.magenta]
    )
  }}
/>
<Story
  name="Ordinal swatches"
  args={{
    scale: scaleOrdinal(
      ["cat 1", "cat 2", "cat 3", "cat 4"],
      [urbanColors.blue, urbanColors.yellow, urbanColors.black, urbanColors.magenta]
    ),
    swatch: true,
  }}
/>
<Story
  name="Ordinal swatches column"
  args={{
    scale: scaleOrdinal(
      ["cat 1", "cat 2", "cat 3", "cat 4"],
      [urbanColors.blue, urbanColors.yellow, urbanColors.black, urbanColors.magenta]
    ),
    swatch: true,
    swatchLayout: "column",
    swatchCircle: true
  }}
/>

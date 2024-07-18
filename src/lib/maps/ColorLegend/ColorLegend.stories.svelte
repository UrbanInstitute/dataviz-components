<script context="module">
  import ColorLegend from "./ColorLegend.svelte";
  import urbanColors from "$lib/utils/urbanColors.js";
  import docs from "./ColorLegend.docs.md?raw";

  export const meta = {
    title: "Maps/ColorLegend",
    component: ColorLegend,
    tags: ["autodocs"],
    argTypes: {
      tickPosition: {
        control: "select",
        options: ["bottom", "top"]
      },
      tickTextAnchor: {
        control: "select",
        options: ["auto", "middle", "start", "end"]
      },
      swatchLayout: {
        control: "select",
        options: ["row", "column"]
      },
      swatchAlign: {
        control: "select",
        options: ["flex-start", "center", "flex-end"]
      },
      tickLineColor: {
        control: {
          type: "color",
          presetColors: [urbanColors.black, urbanColors.white, urbanColors.gray]
        },
        defaultValue: urbanColors.black
      },
      margin: {
        control: "object"
      }
    },
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/maps/ColorLegend/ColorLegend.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import {
    scaleLinear,
    scaleSequential,
    scaleDiverging,
    scaleThreshold,
    scaleOrdinal
  } from "d3-scale";

  const sampleScale = scaleLinear()
    .domain([0, 50, 100])
    .range([urbanColors.blue_shade_lightest, urbanColors.blue, urbanColors.blue_shade_darkest]);

  const sampleSequentialScale = scaleSequential()
    .domain([1, 100])
    .range([urbanColors.blue_shade_lightest, urbanColors.blue]);
</script>

<Template let:args>
  <ColorLegend {...args} />
</Template>

<Story
  name="Linear scale"
  args={{
    scale: sampleScale
  }}
/>
<Story
  name="With title"
  args={{
    scale: sampleScale,
    title: "Legend title"
  }}
/>
<Story
  name="With custom ticks"
  args={{
    scale: sampleScale,
    tickValues: [0, 25, 50, 75, 100]
  }}
/>
<Story
  name="Sequential scale"
  args={{
    scale: sampleSequentialScale
  }}
/>
<Story
  name="Diverging scale"
  args={{
    scale: scaleDiverging([-1, 0, 1], [urbanColors.yellow, urbanColors.white, urbanColors.blue])
  }}
/>

<Story
  name="Threshold scale"
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
  name="Ordinal scale"
  args={{
    scale: scaleOrdinal(
      ["cat 1", "cat 2", "cat 3", "cat 4"],
      [urbanColors.blue, urbanColors.yellow, urbanColors.black, urbanColors.magenta]
    )
  }}
/>
<Story
  name="Ordinal scale with buckets"
  args={{
    scale: scaleOrdinal(
      [
        "$0 to $20,000",
        "$20,000 to $50,000",
        "$50,000 to $75,000",
        "$75,000 to $100,000",
        "$100,000 or more"
      ],
      [
        urbanColors.green_shade_lightest,
        urbanColors.green_shade_lighter,
        urbanColors.green,
        urbanColors.green_shade_dark,
        urbanColors.green_shade_darkest
      ]
    )
  }}
/>
<Story
  name="Ordinal scale swatches"
  args={{
    scale: scaleOrdinal(
      ["cat 1", "cat 2", "cat 3", "cat 4"],
      [urbanColors.blue, urbanColors.yellow, urbanColors.black, urbanColors.magenta]
    ),
    swatch: true
  }}
/>
<Story
  name="Ordinal scale swatches column"
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
<Story
  name="Ordinal scale swatches with buckets"
  args={{
    scale: scaleOrdinal(
      [
        "$0 to $20,000",
        "$20,000 to $50,000",
        "$50,000 to $75,000",
        "$75,000 to $100,000",
        "$100,000 or more"
      ],
      [
        urbanColors.green_shade_lightest,
        urbanColors.green_shade_lighter,
        urbanColors.green,
        urbanColors.green_shade_dark,
        urbanColors.green_shade_darkest
      ]
    ),
    swatch: true,
    swatchLayout: "column"
  }}
/>

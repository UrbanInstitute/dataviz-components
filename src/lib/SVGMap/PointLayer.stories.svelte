<script context="module">
  import SVGMap from "./SVGMap.svelte";
  import PointLayer from "./PointLayer.svelte";
  import docs from "./PointLayer.docs.md?raw";

  export const meta = {
    title: "Components/SVGMap/PointLayer",
    component: PointLayer,
    tags: ["autodocs"],
    argTypes: {
      features: { control: "array" },
      fill: { control: "text" },
      stroke: { control: "text" }
    },
    parameters: {
      docs: {
        description: {
          component: docs
        }
      }
    }
  };
</script>

<script>
  import { userEvent, expect, fn } from "@storybook/test";
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import states from "../../docs/sample-data/states_geo.json";
  import { urbanColors } from "$lib/utils";

  let mousemoveHandler = fn();
  let mouseoutHandler = fn();
  let clickHandler = fn();
</script>

<Template let:args>
  <SVGMap>
    <PointLayer
      {...args}
      on:click
      on:mouseout
      on:mousemove
      on:click={clickHandler}
      on:mouseout={mouseoutHandler}
      on:mousemove={mousemoveHandler}
    ></PointLayer>
  </SVGMap>
</Template>

<Story
  name="Default"
  args={{
    features: states.features,
    stroke: urbanColors.blue_shade_darker,
    fill: urbanColors.blue,
    hoverFill: urbanColors.magenta,
  }}
  play={async ({ canvasElement, args }) => {
    const feature = canvasElement.querySelector(".point-feature");
    await userEvent.hover(feature);
    await expect(mousemoveHandler).toHaveBeenCalled();
    await userEvent.unhover(feature);
    await expect(mouseoutHandler).toHaveBeenCalled();
    await userEvent.click(feature);
    await expect(clickHandler).toHaveBeenCalled();
  }}
/>

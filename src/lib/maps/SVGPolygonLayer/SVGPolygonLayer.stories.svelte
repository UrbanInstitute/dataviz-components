<script context="module">
  import SVGMap from "../SVGMap/SVGMap.svelte";
  import SVGPolygonLayer from "./SVGPolygonLayer.svelte";
  import docs from "./SVGPolygonlayer.docs.md?raw";

  export const meta = {
    title: "Maps/PolygonLayer",
    component: PolygonLayer,
    tags: ["autodocs"],
    argTypes: {
      features: { control: "array" },
      fill: { control: "text" },
      stroke: { control: "number" }
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
  import states from "../../../docs/sample-data/states_geo.json";
  import { urbanColors } from "$lib/utils";

  let mousemoveHandler = fn();
  let mouseoutHandler = fn();
  let clickHandler = fn();
</script>

<Template let:args>
  <SVGMap features={args.features}>
    <SVGPolygonLayer
      {...args}
      on:click
      on:mouseout
      on:mousemove
      on:click={clickHandler}
      on:mouseout={mouseoutHandler}
      on:mousemove={mousemoveHandler}
    />
  </SVGMap>
</Template>

<Story
  name="Simple"
  args={{
    features: states.features,
    fill: urbanColors.blue
  }}
  play={async ({ canvasElement, args }) => {
    const feature = canvasElement.querySelector(".polygon-feature");
    await userEvent.hover(feature);
    await expect(mousemoveHandler).toHaveBeenCalled();
    await userEvent.unhover(feature);
    await expect(mouseoutHandler).toHaveBeenCalled();
    await userEvent.click(feature);
    await expect(clickHandler).toHaveBeenCalled();
  }}
/>
<Story
  name="With highlighted feature"
  args={{
    features: states.features,
    fill: urbanColors.blue,
    hoverStroke: urbanColors.yellow,
    hoverStrokeWidth: 3,
    highlightFeature: (d) => d.properties.GEOID === "01"
  }}
/>

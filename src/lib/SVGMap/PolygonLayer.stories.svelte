<script context="module">
  import SVGMap from "./SVGMap.svelte";
  import PolygonLayer from "./PolygonLayer.svelte";

  export const meta = {
    title: "Components/SVGMap/PolygonLayer",
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
          component: "A polygon layer for use in an `<SVGMap>` component. Renders each `feature` as an svg `path` element, leveraging d3's geoPath function."
        }
      }
    }
  };
</script>

<script>
  import { within, userEvent, expect, fn } from "@storybook/test";
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import states from "../../docs/sample-data/states_geo.json";
  import { urbanColors } from "$lib/utils";

  let mousemoveHandler = fn();
  let mouseoutHandler = fn();
</script>

<Template let:args >
  <SVGMap features={args.features} on:mouseout on:mousemove>
    <PolygonLayer {...args} on:mouseout={mouseoutHandler} on:mousemove={mousemoveHandler}/>
  </SVGMap>
</Template>

<Story
  name="Default"
  args={{
    features: states.features,
    fill: urbanColors.blue,
  }}
/>

<Story
  name="With event listeners"
  args={{
    features: states.features,
    fill: urbanColors.blue
  }}
  play={async ({ canvasElement, args }) => {
    const feature = canvasElement.querySelector(".feature-path");
    await userEvent.hover(feature);
    await expect(mousemoveHandler).toHaveBeenCalled();
    await userEvent.unhover(feature);
    await expect(mouseoutHandler).toHaveBeenCalled();
  }}
/>

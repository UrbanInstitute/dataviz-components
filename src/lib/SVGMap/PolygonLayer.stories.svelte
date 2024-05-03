<script context="module">
  import SVGMap from "./SVGMap.svelte";
  import PolygonLayer from "./PolygonLayer.svelte";

  export const meta = {
    title: "Components/SVGMap/PolygonLayer",
    description: "A polygon layer for use in an `<SVGMap>` component.",
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
          component: "A polygon layer for use in an `<SVGMap>` component. Renders each `feature` as an svg `path` element."
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
</script>

<Template let:args>
  <SVGMap features={args.features}>
    <PolygonLayer {...args} on:mouseout on:mousemove/>
  </SVGMap>
</Template>

<Story
  name="Default"
  args={{
    features: states.features,
    fill: urbanColors.blue
  }}
/>

<Story
  name="With event listeners"
  args={{
    event_mousemove: fn(),
    event_mouseout: fn(),
    features: states.features,
    fill: urbanColors.blue
  }}
/>

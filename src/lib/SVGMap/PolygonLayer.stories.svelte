<script context="module">
  import Map from "./Map.svelte";
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
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import states from "../../docs/sample-data/states_geo.json";
  import { urbanColors } from "$lib/utils";
</script>

<Template let:args>
  <Map features={args.features}>
    <PolygonLayer {...args} />
  </Map>
</Template>

<Story
  name="Default"
  args={{
    features: states.features,
    fill: urbanColors.blue
  }}
/>

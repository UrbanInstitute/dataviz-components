<script context="module">
  import Map from "./Map.svelte";
  import PolygonLayer from "./PolygonLayer.svelte";

  export const meta = {
    title: "Components/Map",
    description: "An SVG map",
    component: Map,
    tags: ["autodocs"],
    argTypes: {
      arrowFillColor: { control: "color" },
      data: { control: "object" }
    },
    parameters: {
      docs: {
        description: {
          component: "SVG Map component"
        }
      }
    }
  };
</script>
<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import states from "../../docs/sample-data/cb_2023_us_state.geojson";
  console.log(states);
</script>

<Template let:args>
  <Map {...args}>
    <PolygonLayer />
  </Map>
</Template>

<Story
  name="Default"
/>

<script context="module">
  import Map from "./Map.svelte";
  import PolygonLayer from "./PolygonLayer.svelte";

  export const meta = {
    title: "Components/SVGMap/PolygonLayer",
    description: "A polygon layer for use in a Map component.",
    component: PolygonLayer,
    tags: ["autodocs"],
    argTypes: {
      geojson: { control: "array" }
    },
    parameters: {
      docs: {
        description: {
          component: "A polygon layer for use in a Map component."
        }
      }
    }
  };
</script>
<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import states from "../../docs/sample-data/states_geo.json";
  import {urbanColors} from "$lib/utils";

  const highlightStates = ["Maryland", "New York", "Pennsylvania", "Ohio"];


  function getColor(feature) {
    if (highlightStates.includes(feature.properties.NAME)) {
      return urbanColors.blue;
    }
    return urbanColors.blue_shade_lightest;
  }

</script>

<Template let:args>
  <Map>
    <PolygonLayer {...args} fill={getColor}/>
  </Map>
</Template>

<Story
  name="Default"
  args={{
    geojson: states
  }}
/>

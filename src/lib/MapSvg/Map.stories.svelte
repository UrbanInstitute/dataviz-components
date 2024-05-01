<script context="module">
  import Map from "./Map.svelte";
  import PolygonLayer from "./PolygonLayer.svelte";
  import LabelLayer from "./LabelLayer.svelte";
  import PointLayer from "./PointLayer.svelte";

  export const meta = {
    title: "Components/SVGMap",
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
  import states from "../../docs/sample-data/states_geo.json";
  import {urbanColors} from "$lib/utils";

  const highlightStates = ["Maryland", "New York", "Pennsylvania", "Ohio"];

  const highlightFeatures = states.features.filter((d) => highlightStates.includes(d.properties.NAME))

  function getColor(feature) {
    if (highlightStates.includes(feature.properties.NAME)) {
      return urbanColors.blue;
    }
    return urbanColors.blue_shade_lightest;
  }

</script>

<Template let:args>
  <Map {...args}>
    <PolygonLayer fill={getColor} />
    <PointLayer features={highlightFeatures} fill={urbanColors.blue_shade_darker}/>
    <LabelLayer features={highlightFeatures} getLabel={(feature) => feature.properties.NAME}/>
  </Map>
</Template>

<Story
  name="Default"
  args={{
    features: states.features
  }}
/>

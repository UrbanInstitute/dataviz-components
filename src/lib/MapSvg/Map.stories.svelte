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
  import nyc_income from "../../docs/sample-data/nyc_income_geo.json";
  import { urbanColors } from "$lib/utils";
  import { geoIdentity } from "d3-geo";
  import { scaleQuantize } from "d3-scale";
  import { extent, max } from "d3-array";

  console.log(nyc_income);

  const highlightStates = ["Maryland", "New York", "Pennsylvania", "Ohio"];

  const highlightFeatures = states.features.filter((d) =>
    highlightStates.includes(d.properties.NAME)
  );

  function getColor(feature) {
    if (highlightStates.includes(feature.properties.NAME)) {
      return urbanColors.blue;
    }
    return urbanColors.gray_shade_lighter;
  }

  let incomeScale = scaleQuantize().domain(extent(nyc_income.features, d => d.properties.estimate)).range(urbanColors.getMapBlues());

  console.log(incomeScale.range())
</script>

<Template let:args>
  <Map {...args}></Map>
</Template>

<Story
  name="Default"
  args={{
    features: states.features
  }}
>
  <Map features={states.features}>
    <PolygonLayer fill={getColor} />
    <PointLayer features={highlightFeatures} fill={urbanColors.blue_shade_darker} />
    <LabelLayer features={highlightFeatures} getLabel={(feature) => feature.properties.NAME} />
  </Map>
</Story>

<Story
  name="NYC Income"
>
  <Map projection={geoIdentity} features={nyc_income.features}>
    <PolygonLayer reflectY fill={(d) => incomeScale(d.properties.estimate)} />
  </Map>
</Story>

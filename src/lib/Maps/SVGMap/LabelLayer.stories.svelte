<script context="module">
  import SVGMap from "./SVGMap.svelte";
  import LabelLayer from "./LabelLayer.svelte";
  import docs from "./LabelLayer.docs.md?raw";

  export const meta = {
    title: "Maps/LabelLayer",
    component: LabelLayer,
    tags: ["autodocs"],
    argTypes: {
      features: { control: "array" },
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
  import states from "../../../docs/sample-data/states_geo.json";

  let mousemoveHandler = fn();
  let mouseoutHandler = fn();
  let clickHandler = fn();
</script>

<Template let:args>
  <SVGMap features={states.features}>
    <LabelLayer
      {...args}
      on:click
      on:mouseout
      on:mousemove
      on:click={clickHandler}
      on:mouseout={mouseoutHandler}
      on:mousemove={mousemoveHandler}
    ></LabelLayer>
  </SVGMap>
</Template>

<Story
  name="Default"
  args={{
    getLabel: (feature) => feature.properties.STUSPS
  }}
  play={async ({ canvasElement, args }) => {
    const feature = canvasElement.querySelector(".label-feature text");
    await userEvent.hover(feature);
    await expect(mousemoveHandler).toHaveBeenCalled();
    await userEvent.unhover(feature);
    await expect(mouseoutHandler).toHaveBeenCalled();
    await userEvent.click(feature);
    await expect(clickHandler).toHaveBeenCalled();
  }}
  source={`<SVGMap features={states.features}>
  <LabelLayer getLabel={(feature) => feature.properties.STUSPS}/>
</SVGMap>`}
/>

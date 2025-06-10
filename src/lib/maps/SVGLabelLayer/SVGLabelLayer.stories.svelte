<script context="module">
  import SVGMap from "../SVGMap/SVGMap.svelte";
  import SVGLabelLayer from "./SVGLabelLayer.svelte";
  import docs from "./SVGLabelLayer.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import { expect, fn } from "storybook/test";

  const { Story } = defineMeta({
    title: "Maps/SVGLabelLayer",
    component: SVGLabelLayer,
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
      },
      githubLink: {
        url: "/maps/SVGLabelLayer/SVGLabelLayer.svelte"
      }
    }
  });
</script>

<script>
  import states from "../../../docs/sample-data/states_geo.json";

  let mousemoveHandler = fn();
  let mouseoutHandler = fn();
  let clickHandler = fn();
</script>

{#snippet template(args)}
  <SVGMap features={states.features}>
    <SVGLabelLayer
      {...args}
      on:click
      on:mouseout
      on:mousemove
      on:click={clickHandler}
      on:mouseout={mouseoutHandler}
      on:mousemove={mousemoveHandler}
    >
      <svelte:fragment let:props>{props.STUSPS}</svelte:fragment>
    </SVGLabelLayer>
  </SVGMap>
{/snippet}

<Story
  name="Default"
  args={{
    getLabel: (feature) => feature.properties.STUSPS
  }}
  {template}
  play={async ({ canvasElement, userEvent }) => {
    const feature = canvasElement.querySelector(".label-feature text");
    await userEvent.hover(feature);
    await expect(mousemoveHandler).toHaveBeenCalled();
    await userEvent.unhover(feature);
    await expect(mouseoutHandler).toHaveBeenCalled();
    await userEvent.click(feature);
    await expect(clickHandler).toHaveBeenCalled();
  }}
  source={`<SVGMap features={states.features}>
  <SVGLabelLayer getLabel={(feature) => feature.properties.STUSPS}>
    <svelte:fragment let:props>{props.STUSPS}</svelte:fragment>
  </SVGLabelLayer>
</SVGMap>`}
/>
<Story
  name="Slot"
  }}
  asChild
  play={async ({ canvasElement, userEvent }) => {
    const feature = canvasElement.querySelector(".label-feature text");
    await userEvent.hover(feature);
    await expect(mousemoveHandler).toHaveBeenCalled();
    await userEvent.unhover(feature);
    await expect(mouseoutHandler).toHaveBeenCalled();
    await userEvent.click(feature);
    await expect(clickHandler).toHaveBeenCalled();
  }}
>
  <SVGMap features={states.features}>
    <SVGLabelLayer
      on:click
      on:mouseout
      on:mousemove
      on:click={clickHandler}
      on:mouseout={mouseoutHandler}
      on:mousemove={mousemoveHandler}
      ><svelte:fragment let:props>{props.STUSPS}</svelte:fragment></SVGLabelLayer
    >
  </SVGMap>
</Story>

<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script module>
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
  import { createMatchMedia } from "$lib/stores";

  let mousemoveHandler = fn();
  let mouseoutHandler = fn();
  let clickHandler = fn();

  createMatchMedia();
</script>

{#snippet template(args)}
  <SVGMap features={states.features}>
    <SVGLabelLayer
      {...args}
      onclick={clickHandler}
      onmouseout={mouseoutHandler}
      onmousemove={mousemoveHandler}
    >
      {#snippet children(props)}
        {props.STUSPS}
      {/snippet}
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
  <SVGLabelLayer
    getLabel={(feature) => feature.properties.STUSPS}
  >
    {#snippet children(props)}
      {props.STUSPS}
    {/snippet}
  </SVGLabelLayer>
</SVGMap>`}
/>
<Story
  name="Slot"
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
      onclick={clickHandler}
      onmouseout={mouseoutHandler}
      onmousemove={mousemoveHandler}
    >
      {#snippet children(props)}
        {props.STUSPS}
      {/snippet}
    </SVGLabelLayer>
  </SVGMap>
</Story>

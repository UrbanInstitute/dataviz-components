<!-- Portions of this code have been written or edited by generative AI tools. -->
<script module>
  import SVGMap from "../SVGMap/SVGMap.svelte";
  import SVGPolygonLayer from "./SVGPolygonLayer.svelte";
  import docs from "./SVGPolygonlayer.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Maps/SVGPolygonLayer",
    component: SVGPolygonLayer,
    tags: ["autodocs"],
    argTypes: {
      features: { control: "array" },
      fill: { control: "text" },
      stroke: { control: "number" }
    },
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/maps/SVGPolygonLayer/SVGPolygonLayer.svelte"
      }
    }
  });
</script>

<script>
  import { userEvent, expect, fn } from "storybook/test";
  import states from "../../../docs/sample-data/states_geo.json";
  import { urbanColors } from "$lib/utils";
  import { createMatchMedia } from "$lib/stores";

  let mousemoveHandler = fn();
  let mouseoutHandler = fn();
  let clickHandler = fn();

  createMatchMedia();
</script>

{#snippet template(args)}
  <SVGMap features={args.features}>
    <SVGPolygonLayer
      {...args}
      onclick={clickHandler}
      onmouseout={mouseoutHandler}
      onmousemove={mousemoveHandler}
    />
  </SVGMap>
{/snippet}

<Story
  name="Simple"
  args={{
    features: states.features,
    fill: urbanColors.blue
  }}
  {template}
  play={async ({ canvasElement, args }) => {
    const feature = canvasElement.querySelector(".polygon-feature");
    await userEvent.hover(feature);
    await expect(mousemoveHandler).toHaveBeenCalled();
    await userEvent.unhover(feature);
    await expect(mouseoutHandler).toHaveBeenCalled();
    await userEvent.click(feature);
    await expect(clickHandler).toHaveBeenCalled();
  }}
/>
<Story
  name="With highlighted feature"
  {template}
  args={{
    features: states.features,
    fill: urbanColors.blue,
    hoverStroke: urbanColors.yellow,
    hoverStrokeWidth: 3,
    highlightFeature: { GEOID: "06" }
  }}
/>

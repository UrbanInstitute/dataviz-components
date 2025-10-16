<!-- Portions of this code have been written or edited by generative AI tools. -->
<script module>
  import SVGMap from "../SVGMap/SVGMap.svelte";
  import SVGPointLayer from "./SVGPointLayer.svelte";
  import docs from "./SVGPointLayer.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import { userEvent, expect, fn } from "storybook/test";

  const { Story } = defineMeta({
    title: "Maps/SVGPointLayer",
    component: SVGPointLayer,
    tags: ["autodocs"],
    argTypes: {
      features: { control: "array" },
      fill: { control: "text" },
      stroke: { control: "text" }
    },
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/maps/SVGPointLayer/SVGPointLayer.svelte"
      }
    }
  });
</script>

<script>
  import states from "../../../docs/sample-data/states_geo.json";
  import { urbanColors } from "$lib/utils";
  import { createMatchMedia } from "$lib/stores";

  let mousemoveHandler = fn();
  let mouseoutHandler = fn();
  let clickHandler = fn();

  createMatchMedia();
</script>

<Story
  name="simple"
  args={{
    features: states.features,
    stroke: urbanColors.blue_shade_darker,
    fill: urbanColors.blue,
    hoverFill: urbanColors.magenta
  }}
  play={async ({ canvasElement, args }) => {
    const feature = canvasElement.querySelector(".point-feature");
    await userEvent.hover(feature);
    await expect(mousemoveHandler).toHaveBeenCalled();
    await userEvent.unhover(feature);
    await expect(mouseoutHandler).toHaveBeenCalled();
    await userEvent.click(feature);
    await expect(clickHandler).toHaveBeenCalled();
  }}
>
  {#snippet template(args)}
    <SVGMap features={args.features}>
      <SVGPointLayer
        {...args}
        onclick={clickHandler}
        onmouseout={mouseoutHandler}
        onmousemove={mousemoveHandler}
      ></SVGPointLayer>
    </SVGMap>
  {/snippet}
</Story>

<script context="module">
  import Tooltip from "./Tooltip.svelte";

  export const meta = {
    title: "Components/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    argTypes: {
      style: {
        control: "select",
        options: ["light", "dark"]
      },
      size: {
        control: "select",
        options: ["small", "large"]
      },
      orientation: {
        control: "select",
        options: [
          "dynamic",
          "left",
          "right",
          "top",
          "bottom",
          "bottom-left",
          "bottom-right",
          "top-left",
          "top-right"
        ]
      }
    },
    parameters: {
      docs: {
        description: {
          component: "A basic tooltip."
        }
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import { Button } from "$lib";
  import { urbanColors } from "$lib/utils";

  let x = 100;
  let y = 100;

  let dynamicX = 100;
  let dynamicY = 100;

  let pinEl;
  let showPinned = false;

  function handleMousemove(e) {
    const x = e.pageX;
    const y = e.pageY;
    dynamicX = x;
    dynamicY = y;
  }
</script>

<Template let:args>
  <div class="wrapper" style="width: 100%; height: 300px" on:mousemove={handleMousemove}>
    <Tooltip {...args} x={dynamicX} y={dynamicY}>{args.content || "This is a tooltip"}</Tooltip>
  </div>
</Template>

<Story
  name="Default"
  args={{
    x: dynamicX,
    y: dynamicY
  }}
/>

<Story
  name="Dark mode"
  args={{
    content: "This is a dark style tooltip",
    style: "dark",
    x: x,
    y: y
  }}
/>

<Story name="Custom HTML">
  <div class="wrapper" style="width: 100%; height: 300px" on:mousemove={handleMousemove}>
    <Tooltip x={dynamicX} y={dynamicY} size="large">
      <h2>HTML Formatting</h2>
      <p>For <em>fancier</em> tooltip structure</p>
    </Tooltip>
  </div>
</Story>

<Story
  name="Set static orientation"
  args={{
    content: "This tooltip is oriented to the left",
    style: "dark",
    orientation: "left",
    x: x,
    y: y
  }}
/>

<Story name="Contain inside parent">
  <div
    class="wrapper"
    style="position: relative; width: 800px; height: 300px; border: solid 1px black; margin: 100px;"
    on:mousemove={(e) => {
      const x = e.pageX;
      const y = e.pageY;
      dynamicX = x;
      dynamicY = y;
    }}
  >
    <Tooltip
      content="This tooltip is contained by parent"
      containParent
      x={dynamicX}
      y={dynamicY}
    />
  </div>
</Story>
<Story name="Pinned to element">
  <div
    class="wrapper"
    style="position: relative; width: 800px; height: 300px; display: grid; place-content: center;"
  >
    <div bind:this={pinEl} style="display: inline-block">
      <Button on:click={() => (showPinned = !showPinned)}>Click me</Button>
    </div>
    {#if showPinned}
      <Tooltip elOffset={5} content="This tooltip is pinned to an existing element" el={pinEl} />
    {/if}
  </div>
</Story>

<Story name="Tooltip override">
  <div class="wrapper" style="width: 100%; height: 100vh" on:mousemove={handleMousemove}>
    <Tooltip x={dynamicX} y={dynamicY} size="large">
      <svelte:fragment let:orientation slot="tooltipOverride">
        <div
          class="custom-tooltip {orientation}"
          style="background: {urbanColors.gray_shade_lighter}; padding: var(--spacing-2); border: solid 2px {urbanColors.magenta}"
        >
          <h5 style="margin: 0;">This is a completely custom tooltip</h5>
          <p style="font-size: var(--font-size-small);">
            Markup and style is up to me, but positioning is still provided by the component.
          </p>
          <Button>Custom</Button>
        </div>
      </svelte:fragment>
    </Tooltip>
  </div>
</Story>

<script context="module">
  import Tooltip from "./Tooltip.svelte";

  export const meta = {
    title: "Components/Tooltip",
    component: Tooltip,
    // tags: ["autodocs"],
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
      },
      githubLink: {
        url: "/Tooltip/Tooltip.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import { Button } from "$lib";
  import { urbanColors } from "$lib/utils";

  let tooltipX;
  let tooltipY;

  let pinEl;
  let showPinned = false;

  function handleMousemove(e) {
    const x = e.pageX;
    const y = e.pageY;
    tooltipX = x;
    tooltipY = y;
  }

  function handleMouseout(_) {
    tooltipX = null;
    tooltipY = null;
  }
</script>

<Template let:args>
  <div
    class="wrapper"
    style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"
    on:mousemove={handleMousemove}
    on:mouseout={handleMouseout}
  >
    <p>Hover me to see tooltip</p>
  </div>
  {#if tooltipX && tooltipY}
    <Tooltip {...args} x={tooltipX} y={tooltipY}>{args.content || "This is a tooltip"}</Tooltip>
  {/if}
</Template>

<Story
  name="Mouse event"
  args={{
    x: tooltipX,
    y: tooltipY
  }}
/>

<Story
  name="Dark mode"
  args={{
    content: "This is a dark style tooltip",
    style: "dark",
    x: tooltipX,
    y: tooltipY
  }}
/>

<Story name="Custom HTML">
  <div
    class="wrapper"
    style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"
    on:mousemove={handleMousemove}
  >
    <p>Hover me to see tooltip</p>
  </div>
  {#if tooltipX && tooltipY}
    <Tooltip x={tooltipX} y={tooltipY} size="large">
      <h2>HTML Formatting</h2>
      <p>For <em>fancier</em> tooltip structure</p>
    </Tooltip>
  {/if}
</Story>

<Story
  name="Static orientation"
  args={{
    content: "This tooltip is oriented to the left",
    style: "dark",
    orientation: "left",
    x: tooltipX,
    y: tooltipY
  }}
/>

<Story name="Contain inside parent">
  <div
    class="wrapper"
    style="display: grid; place-content: center; background: var(--color-gray-shade-lighter); position: relative; width: 800px; height: 300px; border: solid 1px black; margin: 100px;"
    on:mousemove={handleMousemove}
    on:mouseout={handleMouseout}
  >
    <p>Hover me to see tooltip</p>
    {#if tooltipX && tooltipY}
      <Tooltip
        content="This tooltip is contained by parent"
        containParent
        x={tooltipX}
        y={tooltipY}
      />
    {/if}
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
  </div>
  {#if showPinned}
    <Tooltip elOffset={5} el={pinEl}>This tooltip is pinned to an existing element</Tooltip>
  {/if}
</Story>

<Story name="Tooltip override">
  <div
    class="wrapper"
    style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"
    on:mousemove={handleMousemove}
    on:mouseout={handleMouseout}
  >
    <p>Hover me to see tooltip</p>
  </div>
  {#if tooltipX && tooltipY}
    <Tooltip x={tooltipX} y={tooltipY} size="large">
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
  {/if}
</Story>

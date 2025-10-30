<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script module>
  import Tooltip from "./Tooltip.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import { Button } from "$lib";
  import { urbanColors } from "$lib/utils";

  const { Story } = defineMeta({
    title: "Components/Tooltip",
    component: Tooltip,
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
  });
</script>

<script>
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

{#snippet template(args)}
  <!-- svelte-ignore a11y_no_static_element_interactions --> --
  <div
    class="wrapper"
    style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"
    onmousemove={handleMousemove}
    onmouseout={handleMouseout}
    onblur={handleMouseout}
  >
    <p>Hover me to see tooltip</p>
  </div>
  {#if tooltipX && tooltipY}
    <Tooltip {...args} x={tooltipX} y={tooltipY}>{args.content || "This is a tooltip"}</Tooltip>
  {/if}
{/snippet}

<Story
  name="Mouse event"
  args={{
    x: tooltipX,
    y: tooltipY
  }}
  {template}
/>

<Story
  name="Dark mode"
  args={{
    content: "This is a dark style tooltip",
    style: "dark",
    x: tooltipX,
    y: tooltipY
  }}
  {template}
/>

<Story name="Custom HTML" asChild>
  <!-- svelte-ignore a11y_no_static_element_interactions --> --
  <div
    class="wrapper"
    style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"
    onmousemove={handleMousemove}
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
  {template}
/>

<Story name="Contain inside parent" asChild>
  <!-- svelte-ignore a11y_no_static_element_interactions --> --
  <div
    class="wrapper"
    style="display: grid; place-content: center; background: var(--color-gray-shade-lighter); position: relative; width: 800px; height: 300px; border: solid 1px black; margin: 100px;"
    onmousemove={handleMousemove}
    onmouseout={handleMouseout}
    onblur={handleMouseout}
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

<Story name="Pinned to element" asChild>
  <div
    class="wrapper"
    style="position: relative; width: 800px; height: 300px; display: grid; place-content: center;"
  >
    <div bind:this={pinEl} style="display: inline-block">
      <Button onclick={() => (showPinned = !showPinned)}>Click me</Button>
    </div>
  </div>
  {#if showPinned}
    <Tooltip elOffset={5} el={pinEl}>This tooltip is pinned to an existing element</Tooltip>
  {/if}
</Story>

<Story name="Tooltip override" asChild>
  <!-- svelte-ignore a11y_no_static_element_interactions --> --
  <div
    class="wrapper"
    style="background: var(--color-gray-shade-lighter); width: 100%; height: 300px; display: grid; place-content: center;"
    onmousemove={handleMousemove}
    onmouseout={handleMouseout}
    onblur={handleMouseout}
  >
    <p>Hover me to see tooltip</p>
  </div>
  {#if tooltipX && tooltipY}
    <Tooltip x={tooltipX} y={tooltipY} size="large">
      {#snippet tooltipOverride({ orientation })}
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
      {/snippet}
    </Tooltip>
  {/if}
</Story>

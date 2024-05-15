<script>
  /**
   * Content to render inside the tooltip
   * @type { string }
   */
  export let content;

  /**
   * The color style of the tooltip
   * @type {"dark" | "light"} [style = "light"]
   */
  export let style = "light";

  /**
   * @type {number}
   */
  export let x = 0;

  /**
   * @type {number}
   */
  export let y = 0;

  /**
   * whether to use a small (138px) or large (198px) width
   * @type {"small" | "large"}
   * @default "small"
   */
  export let size = "small";

  /**
   * Font size for tooltip as CSS string.
   * @type {string} [fontSize="--var(font-size-small)"]
   */
  export let fontSize = "var(--font-size-small)";

  /**
   * Whether to use a box shadow
   * @type {boolean}
   * @default false
   */
  export let boxShadow = false;

  /**
   * Color of tooltip background. Overrides the default style.
   * @type { string } [backgroundColor = undefined]
   */
  export let backgroundColor = undefined;

  /**
   * Color of tooltip text. Overrides the default style.
   * @type { string } [fontColor = undefined]
   */
  export let fontColor = undefined;

  /**
   * Color of tooltip border
   * @type { string } [borderColor = "var(--color-gray)"]
   */
  export let borderColor = "var(--color-gray)"

  /**
   * Size of the tooltip triangle. Set to 0 for no triangle.
   * @type { number } [triangleSize = 0]
   */
  export let triangleSize = 8;

  /**
   * Orientation of the tooltip. Default to dynamic, which attempts to prevent tooltip from overflowing the bounds of the window or container element.
   * @type {"top" | "bottom" | "left" | "right" | "dynamic"} [orientation = "dynamic"]
   */
  export let orientation = "dynamic";

  // lookup to convert semantic sizes to pixel widths
  const sizes = {
    small: 138,
    large: 198
  };

  // bind to wrapper element
  let tooltipEl;

  // store width and height of the tooltip
  $: tooltipWidth = sizes[size];
  $: tooltipHeight = tooltipEl ? tooltipEl.offsetHeight : 20;

  const defaultFontColors = {
    light: "var(--color-gray-shade-darkest)",
    dark: "var(--color-white)"
  }

  // font and background colors
  $: tooltipFontColor = fontColor ? fontColor : defaultFontColors[style]

  const defaultBgColors = {
    light: "var(--color-white)",
    dark: "var(--color-black)"
  }

  // font and background colors
  $: tooltipBackgroundColor = backgroundColor || defaultBgColors[style]

  // bound to window height and width
  let windowWidth = 0;
  let windowHeight = 0;


  /**
   * Calculate which direction the tooltip should go based on the window size and the provided x and y position
   * @param {number} x - the x position of the tooltip
   * @param {number} y - the y position of the tooltip
   * @param {number} containerWidth - the width of the container the tooltip is in
   * @returns {"top" | "bottom" | "left" | "right"}
   */
  function getTooltipOrientation(x, y, containerWidth) {
    // first check if tooltip is too far to the left
    if (x < tooltipWidth / 2) {
      return "right";
    }
    // next check if tooltip is too far to the right
    if (x > containerWidth - tooltipWidth / 2) {
      return "left";
    }
    // next check if tooltip is too far up
    if (y < tooltipHeight + triangleSize) {
      return "bottom";
    }
    // default to top
    return "top";
  }

  // the direction of the tooltip in relation to the mouse
  // defaults to "top", but will move if the tooltip reaches any edge
  $: tooltipOrientation = orientation === "dynamic" ? getTooltipOrientation(x, y, windowWidth) : orientation;
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />
<div
  bind:this={tooltipEl}
  class="tooltip tooltip-{tooltipOrientation} tooltip-{style} tooltip-{size}"
  class:box-shadow={boxShadow}
  style={`left: ${x}px; top: ${y}px; width: ${sizes[size]}px;`}
  style:--tooltip-font-size={fontSize}
  style:--tooltip-border-color={borderColor}
  style:--tooltip-border-width="{1}px"
  style:--tooltip-triangle-size="{triangleSize}px"
  style:--tooltip-font-color={tooltipFontColor}
  style:--tooltip-background-color={tooltipBackgroundColor}
>
  <div class="tooltip-text">{@html content}</div>
</div>

<style>
  .tooltip {
    padding: var(--spacing-2);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 500;
    color: var(--tooltip-font-color);
    background: var(--tooltip-background-color);
    border: solid var(--tooltip-border-width) var(--tooltip-border-color);
    pointer-events: none;
  }

  .tooltip.box-shadow {
    box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.08);
  }

  .tooltip.tooltip-top {
    transform: translate(-50%, calc(-100% - var(--tooltip-triangle-size)));
  }

  .tooltip.tooltip-right {
    transform: translate(var(--tooltip-triangle-size), -50%);
  }

  .tooltip.tooltip-left {
    transform: translate(calc(-100% - var(--tooltip-triangle-size)), -50%);
  }

  .tooltip.tooltip-bottom {
    transform: translate(-50%, var(--tooltip-triangle-size));
  }

  .tooltip .tooltip-text {
    font-size: var(--tooltip-font-size);
    line-height: var(--line-height-tight);
  }

  /* reset type margins inside tooltip */
  .tooltip :global(p) {
    margin: 0;
    margin-bottom: var(--spacing-1);
    font-size: var(--tooltip-font-size);
  }
  .tooltip :global(h1),
  .tooltip :global(h2),
  .tooltip :global(h3),
  .tooltip :global(h4),
  .tooltip :global(h5),
  .tooltip :global(h6) {
    margin: 0;
    margin-bottom: var(--spacing-1);
    font-size: var(--font-size-normal);
  }

  .tooltip-shape {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 500;
  }

  /* triangle styles */

  /* top */
  .tooltip.tooltip-top::after,
  .tooltip.tooltip-top::before {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 0;
    height: 0;
    border: solid transparent;
    content: " ";
    pointer-events: none;
  }

  /* top inner */
  .tooltip.tooltip-top::after {
    margin-left: calc(0px - var(--tooltip-triangle-size));
    border-width: var(--tooltip-triangle-size);
    border-top-color: var(--tooltip-background-color); 
    transform: translateY(calc(0px - var(--tooltip-border-width)))
  }

  /* top outer */
  .tooltip.tooltip-top::before {
    margin-left: calc(0px - var(--tooltip-triangle-size));
    border-width: var(--tooltip-triangle-size);
    border-top-color: var(--tooltip-border-color);
  }

  /* bottom */
  .tooltip.tooltip-bottom::after,
  .tooltip.tooltip-bottom::before {
    position: absolute;
    bottom: 100%;
    left: 50%;
    width: 0;
    height: 0;
    border: solid transparent;
    content: " ";
    pointer-events: none;
  }

  /* bottom inner */
  .tooltip.tooltip-bottom::after {
    margin-left: calc(0px - var(--tooltip-triangle-size));
    border-width: var(--tooltip-triangle-size);
    border-bottom-color: var(--tooltip-background-color);
    transform: translateY(calc(var(--tooltip-border-width)))
  }

  /* bottom outer */
  .tooltip.tooltip-bottom::before {
    margin-left: calc(0px - var(--tooltip-triangle-size) - 1px);
    border-width: calc(var(--tooltip-triangle-size) + 1px);
    border-bottom-color: var(--tooltip-border-color);
  }

  /* right */
  .tooltip.tooltip-right::after,
  .tooltip.tooltip-right::before {
    position: absolute;
    right: 100%;
    top: 50%;
    width: 0;
    height: 0;
    border: solid transparent;
    content: " ";
    pointer-events: none;
  }

  /* right inner */
  .tooltip.tooltip-right::after {
    margin-top: calc(0px - var(--tooltip-triangle-size));
    border-width: var(--tooltip-triangle-size);
    border-right-color: var(--tooltip-background-color);
  }

  /* right outer */
  .tooltip.tooltip-right::before {
    margin-top: calc(0px - var(--tooltip-triangle-size) - 1px);
    border-width: calc(var(--tooltip-triangle-size) + 1px);
    border-right-color: var(--tooltip-border-color);
  }

  /* left */
  .tooltip.tooltip-left::after,
  .tooltip.tooltip-left::before {
    position: absolute;
    left: 100%;
    top: 50%;
    width: 0;
    height: 0;
    border: solid transparent;
    content: " ";
    pointer-events: none;
  }

  /* left inner */
  .tooltip.tooltip-left::after {
    margin-top: calc(0px - var(--tooltip-triangle-size));
    border-width: var(--tooltip-triangle-size);
    border-left-color: var(--tooltip-background-color);
  }

  /* left outer */
  .tooltip.tooltip-left::before {
    margin-top: calc(0px - var(--tooltip-triangle-size) - 1px);
    border-width: calc(var(--tooltip-triangle-size) + 1px);
    border-left-color: var(--tooltip-border-color);
  }

</style>

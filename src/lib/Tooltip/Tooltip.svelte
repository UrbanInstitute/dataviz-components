<script>
  /**
   * Content to render inside the tooltip. This can include custom HTML.
   * @type { string }
   */
  export let content = "";

  /**
   * The color style of the tooltip
   * @type {"dark" | "light"} [style = "light"]
   */
  export let style = "light";

  /**
   * The x position of the tooltip. This should be an absolute position relative to the page, like you would get from a pointer event's `pageX` property.
   * @type {number}
   */
  export let x = 0;

  /**
   * The y position of the tooltip. This should be an absolute position relative to the page, like you would get from a pointer event's `pageY` property.
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
  export let borderColor = "var(--color-gray)";

  /**
   * Size of the tooltip triangle. Set to 0 for no triangle.
   * @type { number } [triangleSize = 0]
   */
  export let triangleSize = 8;

  /**
   * Orientation of the tooltip. Default to dynamic, which attempts to prevent tooltip from overflowing the bounds of the viewport or parent element if `containParent` is true.
   * @type {"top" | "bottom" | "left" | "right" | "bottom-left" | "bottom-right" | "top-left" | "top-right" | "dynamic"} [orientation = "dynamic"]
   */
  export let orientation = "dynamic";

  /**
   * Should the tooltip contain with the parent element instead of the window?
   * @type { boolean } [ containParent = false ]
   */
  export let containParent = false;

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
  };

  // font and background colors
  $: tooltipFontColor = fontColor ? fontColor : defaultFontColors[style];

  const defaultBgColors = {
    light: "var(--color-white)",
    dark: "var(--color-black)"
  };

  // font and background colors
  $: tooltipBackgroundColor = backgroundColor || defaultBgColors[style];

  // bound to window height and width and scroll values
  let windowWidth = 0;
  let windowHeight = 0;
  let windowScrollY = 0;
  let windowScrollX = 0;

  // Hold a reference to parent element if necessary
  let parentEl;

  function measureParent(scrollX, scrollY) {
    // if the parentEl isn't stored already, grab a reference to it
    if (!parentEl) {
      parentEl = tooltipEl.parentNode;
    }

    // get the bounding box of the parentEl.
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const parentBbox = parentEl.getBoundingClientRect();

    // return bounding box, adjusting for x and y scroll of window
    return {
      top: parentBbox.top + scrollY,
      right: parentBbox.right + scrollX,
      bottom: parentBbox.bottom + scrollY,
      left: parentBbox.left + scrollX
    };
  }

  function findRelativeAncestor(el) {
    if (!el) return;
    // traverse the tree upwards to see if there are any absolutely, fixed or relatively positioned ancestors
    let ancestor = el.parentNode;
    while (ancestor && ancestor !== document.documentElement) {
      const position = window.getComputedStyle(ancestor).position;
      if (position === "relative" || position === "absolute" || position === "fixed") {
        return ancestor;
      }
      ancestor = ancestor.parentNode;
    }
    return null;
  }

  /**
   * Take the provided coordinates and adjust them if necessary.
   * @param {number} x
   * @param {number} y
   * @returns {[number, number]}
   **/
  function getTooltipCoords(el, x, y) {
    const relativeParent = findRelativeAncestor(el);
    if (relativeParent) {
      // check for padding on the ancestor
      const ancestorStyles = window.getComputedStyle(relativeParent);
      const leftPadding = parseInt(ancestorStyles.paddingLeft.replace("px", ""));
      const topPadding = parseInt(ancestorStyles.paddingTop.replace("px", ""));
      const ancestorBbox = relativeParent.getBoundingClientRect();
      const adjustedX = x - ancestorBbox.left - windowScrollX - leftPadding;
      const adjustedY = y - ancestorBbox.top - windowScrollY - topPadding;
      return [adjustedX, adjustedY];
    }
    return [x, y];
  }

  $: tooltipBounds =
    containParent && tooltipEl
      ? measureParent(windowScrollX, windowScrollY)
      : {
          top: windowScrollY,
          right: windowWidth,
          bottom: windowHeight + windowScrollY,
          left: windowScrollX
        };

  $: tooltipCoords = getTooltipCoords(tooltipEl, x, y);

  /**
   * Calculate which direction the tooltip should go based on the provided x and y position and a given bounding box relative to the document.
   * @param {number} x - the x position of the tooltip
   * @param {number} y - the y position of the tooltip
   * @param {{top: number, right: number, bottom: number, left: number}} - the bounds to contain within, relative to the entire document
   * @returns {"top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right"}
   */
  function getTooltipOrientation(x, y, bounds) {
    const leftIntersect = x < tooltipWidth / 2 + bounds.left;
    const rightIntersect = x > bounds.right - tooltipWidth / 2;
    const topIntersect = y < tooltipHeight + triangleSize + bounds.top;
    const bottomIntersect = y > bounds.bottom - (tooltipHeight / 2 + triangleSize);

    // check for corner cases first
    if (leftIntersect && topIntersect) {
      return "bottom-right";
    }
    if (rightIntersect && topIntersect) {
      return "bottom-left";
    }

    if (bottomIntersect && leftIntersect) {
      return "top-right";
    }

    if (bottomIntersect && rightIntersect) {
      return "top-left";
    }

    // first check if tooltip is too far to the left
    if (leftIntersect) {
      return "right";
    }
    // next check if tooltip is too far to the right
    if (rightIntersect) {
      return "left";
    }
    // next check if tooltip is too far up
    if (topIntersect) {
      return "bottom";
    }
    // default to top
    return "top";
  }

  // the direction of the tooltip in relation to the mouse
  // defaults to "top", but will move if the tooltip reaches any edge
  $: tooltipOrientation =
    orientation === "dynamic" ? getTooltipOrientation(x, y, tooltipBounds) : orientation;
</script>

<svelte:window
  bind:scrollY={windowScrollY}
  bind:scrollX={windowScrollX}
  bind:innerWidth={windowWidth}
  bind:innerHeight={windowHeight}
/>
<div
  bind:this={tooltipEl}
  class="tooltip tooltip-{tooltipOrientation} tooltip-{style} tooltip-{size}"
  class:box-shadow={boxShadow}
  style={`left: ${tooltipCoords[0]}px; top: ${tooltipCoords[1]}px; width: ${sizes[size]}px;`}
  style:--tooltip-font-size={fontSize}
  style:--tooltip-border-color={borderColor}
  style:--tooltip-border-width="{1}px"
  style:--tooltip-triangle-size="{triangleSize}px"
  style:--tooltip-font-color={tooltipFontColor}
  style:--tooltip-background-color={tooltipBackgroundColor}
>
  <div class="tooltip-text">
    <slot>
      {@html content}
    </slot>
  </div>
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

  .tooltip.tooltip-bottom-left {
    transform: translate(-100%, 0);
  }

  .tooltip.tooltip-bottom-right {
    transform: translate(0, 0);
  }

  .tooltip.tooltip-top-left {
    transform: translate(-100%, -100%);
  }

  .tooltip.tooltip-top-right {
    transform: translate(0, -100%);
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
    transform: translateY(calc(0px - var(--tooltip-border-width)));
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
    transform: translateY(calc(var(--tooltip-border-width)));
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

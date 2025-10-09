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
   * An optional HTMLElement to bind the tooltip position to
   * @type {HTMLElement} [el = undefined]
   */
  export let el = undefined;

  /**
   * The offset distance from the el in pixels
   * @type {number}
   */
  export let elOffset = 0;

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

  /**
   * Whether the tooltip container should allow pointer events. Set to true when rendering interactive content like links.
   * @type {boolean} [pointerEvents = false]
   */
  export let pointerEvents = false;

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

  // Hold the current state of the orientation of the tooltip
  let tooltipOrientation;

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
    // loop through all ancestors until we reach the document element
    while (ancestor && ancestor !== document.documentElement) {
      // check if ancestor is a shadow root with a host element
      if (ancestor instanceof ShadowRoot) {
        // if it is, set ancestor to the host element instead
        ancestor = ancestor.host;
      }
      // make sure ancestor is instance of element
      if (ancestor instanceof Element) {
        // if it is, check if it is relative, absolute or fixed position
        const position = window.getComputedStyle(ancestor).position;
        // return it if so
        if (position === "relative" || position === "absolute" || position === "fixed") {
          return ancestor;
        }
        // check next ancestor
        ancestor = ancestor.parentNode;
      } else {
        // if ancestor is not an element, break the loop
        break;
      }
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

  // simple utilities to detect edge collision
  // used in getTooltipOrientation and getPositionFromEl
  function leftIntersect(x, bounds) {
    return x < tooltipWidth / 2 + bounds.left;
  }

  function rightIntersect(x, bounds) {
    return x > bounds.right - tooltipWidth / 2;
  }

  function topIntersect(y, bounds) {
    return y < tooltipHeight + triangleSize + bounds.top;
  }

  function bottomIntersect(y, bounds) {
    return y > bounds.bottom - (tooltipHeight / 2 + triangleSize);
  }

  /**
   * Get the center of an element
   * @param {HTMLElement} el
   * @param {"top" | "bottom" | "left" | "right"} alignment
   * @returns {{x: number, y: number, orientation: string}}
   */
  function getPositionFromEl(el, bounds, scrollX, scrollY) {
    const elBbox = el.getBoundingClientRect();

    // adjust positions for scroll to convert to absolute coordinates on the page
    const elLeftX = elBbox.left + scrollX;
    const elRightX = elBbox.right + scrollX;
    const elTopY = elBbox.top + scrollY;
    const elBottomY = elBbox.bottom + scrollY;
    const elCenterX = elLeftX + elBbox.width / 2;
    const elCenterY = elTopY + elBbox.height / 2;

    let xPos = elCenterX;
    let yPos = elCenterY;
    let newOrientation = "top";

    // if orientation is not dynamic, just calculate the correct position
    if (orientation !== "dynamic") {
      newOrientation = orientation;
      if (orientation.includes("left")) {
        xPos = elLeftX - elOffset;
      }
      if (orientation.includes("right")) {
        xPos = elRightX + elOffset;
      }
      if (orientation.includes("bottom")) {
        yPos = elBottomY + elOffset;
      }
      if (orientation.includes("top")) {
        yPos = elTopY - elOffset;
      }
    } else {
      // if position is dynamic, things are more complicated. We'll need to check for intersections based on the dynamic positions until we find one that works
      if (topIntersect(elTopY, bounds) && leftIntersect(elCenterX, bounds)) {
        xPos = elRightX + elOffset;
        yPos = elBottomY + elOffset;
        newOrientation = "bottom-right";
      } else if (topIntersect(elTopY, bounds) && rightIntersect(elCenterX, bounds)) {
        xPos = elLeftX - elOffset;
        yPos = elBottomY + elOffset;
        newOrientation = "bottom-left";
      } else if (bottomIntersect(elBottomY, bounds) && leftIntersect(elCenterX, bounds)) {
        xPos = elRightX + elOffset;
        yPos = elTopY - elOffset;
        newOrientation = "top-right";
      } else if (bottomIntersect(elBottomY, bounds) && rightIntersect(elCenterX, bounds)) {
        xPos = elLeftX - elOffset;
        yPos = elTopY - elOffset;
        newOrientation = "top-left";
      } else if (leftIntersect(elCenterX, bounds)) {
        xPos = elRightX + elOffset;
        yPos = elCenterY;
        newOrientation = "right";
      } else if (rightIntersect(elCenterX, bounds)) {
        xPos = elLeftX - elOffset;
        yPos = elCenterY;
        newOrientation = "left";
      } else if (topIntersect(elTopY, bounds)) {
        xPos = elCenterX;
        yPos = elBottomY + elOffset;
        newOrientation = "bottom";
      } else {
        xPos = elCenterX;
        yPos = elTopY - elOffset;
        newOrientation = "top";
      }
    }
    return { x: xPos, y: yPos, orientation: newOrientation };
  }

  /**
   * Calculate which direction the tooltip should go based on the provided x and y position and a given bounding box relative to the document.
   * @param {number} x - the x position of the tooltip
   * @param {number} y - the y position of the tooltip
   * @param {{top: number, right: number, bottom: number, left: number}} - the bounds to contain within, relative to the entire document
   * @returns {"top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right"}
   */
  function getTooltipOrientation(x, y, bounds) {
    const left = leftIntersect(x, bounds);
    const top = topIntersect(y, bounds);
    const right = rightIntersect(x, bounds);
    const bottom = bottomIntersect(y, bounds);

    // check for corner cases first
    if (left && top) {
      return "bottom-right";
    }
    if (right && top) {
      return "bottom-left";
    }

    if (bottom && left) {
      return "top-right";
    }

    if (bottom && right) {
      return "top-left";
    }

    // first check if tooltip is too far to the left
    if (left) {
      return "right";
    }
    // next check if tooltip is too far to the right
    if (right) {
      return "left";
    }
    // next check if tooltip is too far up
    if (top) {
      return "bottom";
    }
    // default to top
    return "top";
  }

  // compute the bounding box the tooltip should stay within
  // either a parent Element or the current viewport
  $: tooltipBounds =
    containParent && tooltipEl
      ? measureParent(windowScrollX, windowScrollY)
      : {
          top: windowScrollY,
          right: windowWidth + windowScrollX,
          bottom: windowHeight + windowScrollY,
          left: windowScrollX
        };

  // hold calculated tooltip x an y positions
  let tooltipX;
  let tooltipY;
  // if el is provided, calculate the position for the tooltip
  // getPositionFromEl also sets the tooltipOrientation variable based on its own calculations
  $: if (el) {
    // calculate position and orientation from element
    const { x, y, orientation } = getPositionFromEl(
      el,
      tooltipBounds,
      windowScrollX,
      windowScrollY
    );
    // set global state
    tooltipX = x;
    tooltipY = y;
    tooltipOrientation = orientation;
  }

  // if tooltipOrientation isn't determined by the element placement already and is dynamic, set it here
  $: if (!el) {
    if (orientation === "dynamic") {
      tooltipOrientation = getTooltipOrientation(tooltipX, tooltipY, tooltipBounds);
    } else {
      tooltipOrientation = orientation;
    }
    tooltipX = x;
    tooltipY = y;
  }

  // calculate tooltipCoords, which are based on tooltipX and tooltipY and adjusted for any positioned ancestor elements with the getTooltipCoords function
  $: tooltipCoords = getTooltipCoords(tooltipEl, tooltipX, tooltipY);
</script>

<svelte:window
  bind:scrollY={windowScrollY}
  bind:scrollX={windowScrollX}
  bind:innerWidth={windowWidth}
  bind:innerHeight={windowHeight}
/>
<div
  class="tooltip-outer tooltip-orientation-{tooltipOrientation}"
  style={`left: ${tooltipCoords[0]}px; top: ${tooltipCoords[1]}px; width: ${sizes[size]}px;`}
  bind:this={tooltipEl}
  style:--tooltip-triangle-size="{$$slots.tooltipOverride ? 0 : triangleSize}px"
  style:pointer-events={pointerEvents ? "auto" : "none"}
>
  <!-- The tooltipOverride slot allows you to provide custom markup that will override all of the default styling of the tooltip while still adhering to the positioning logic -->
  <slot name="tooltipOverride" orientation={tooltipOrientation}>
    <div
      class="tooltip tooltip-{tooltipOrientation} tooltip-{style} tooltip-{size}"
      class:box-shadow={boxShadow}
      style:--tooltip-font-size={fontSize}
      style:--tooltip-border-color={borderColor}
      style:--tooltip-border-width="{1}px"
      style:--tooltip-font-color={tooltipFontColor}
      style:--tooltip-background-color={tooltipBackgroundColor}
    >
      <div class="tooltip-text">
        <!-- Content in the default slot renders inside the styled tooltop -->
        <slot>
          {@html content}
        </slot>
      </div>
    </div>
  </slot>
</div>

<style>
  .tooltip-outer {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 500;
  }
  .tooltip {
    padding: var(--spacing-2);
    color: var(--tooltip-font-color);
    background: var(--tooltip-background-color);
    border: solid var(--tooltip-border-width) var(--tooltip-border-color);
    z-index: 500;
  }

  .tooltip.box-shadow {
    box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.08);
  }

  .tooltip-orientation-top {
    transform: translate(-50%, calc(-100% - var(--tooltip-triangle-size, 0px)));
  }

  .tooltip-orientation-right {
    transform: translate(var(--tooltip-triangle-size, 0px), -50%);
  }

  .tooltip-orientation-left {
    transform: translate(calc(-100% - var(--tooltip-triangle-size, 0px)), -50%);
  }

  .tooltip-orientation-bottom {
    transform: translate(-50%, var(--tooltip-triangle-size, 0px));
  }

  .tooltip-orientation-bottom-left {
    transform: translate(-100%, 0);
  }

  .tooltip-orientation-bottom-right {
    transform: translate(0, 0);
  }

  .tooltip-orientation-top-left {
    transform: translate(-100%, -100%);
  }

  .tooltip-orientation-top-right {
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

  .tooltip::after,
  .tooltip::before {
    position: absolute;
    z-index: 501;
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
    right: calc(100% - 1px);
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
    left: calc(100% - 1px);
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

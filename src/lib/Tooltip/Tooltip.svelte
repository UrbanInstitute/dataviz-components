<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  /**
   * @typedef {"dark" | "light"} TooltipStyle
   * @typedef {"small" | "large"} TooltipSize
   * @typedef {"top" | "bottom" | "left" | "right" | "bottom-left" | "bottom-right" | "top-left" | "top-right" | "dynamic"} TooltipOrientation
   * @typedef {Object} TooltipProps
   * @property {string} [content=""]
   * @property {TooltipStyle} [style="light"]
   * @property {number} [x=0]
   * @property {number} [y=0]
   * @property {HTMLElement | undefined} [el]
   * @property {number} [elOffset=0]
   * @property {TooltipSize} [size="small"]
   * @property {string} [fontSize="var(--font-size-small)"]
   * @property {boolean} [boxShadow=false]
   * @property {string | undefined} [backgroundColor]
   * @property {string | undefined} [fontColor]
   * @property {string} [borderColor="var(--color-gray)"]
   * @property {number} [triangleSize=8]
   * @property {TooltipOrientation} [orientation="dynamic"]
   * @property {boolean} [containParent=false]
   * @property {boolean} [pointerEvents=false]
   * @property {import("svelte").Snippet<[void]> | undefined} [children]
   * @property {import("svelte").Snippet<[ { orientation: TooltipOrientation } ]> | undefined} [tooltipOverride]
   */

  let {
    content = "",
    style: styleVariant = "light",
    x = 0,
    y = 0,
    el = undefined,
    elOffset = 0,
    size = "small",
    fontSize = "var(--font-size-small)",
    boxShadow = false,
    backgroundColor = undefined,
    fontColor = undefined,
    borderColor = "var(--color-gray)",
    triangleSize = 8,
    orientation = "dynamic",
    containParent = false,
    pointerEvents = false,
    children,
    tooltipOverride
  } = $props();

  const sizes = {
    small: 138,
    large: 198
  };

  const defaultFontColors = {
    light: "var(--color-gray-shade-darkest)",
    dark: "var(--color-white)"
  };

  const defaultBgColors = {
    light: "var(--color-white)",
    dark: "var(--color-black)"
  };

  let pointerEventsValue = $derived(pointerEvents ? "auto" : "none");

  let tooltipEl;
  let parentEl;

  let tooltipX = $state(x);
  let tooltipY = $state(y);
  let tooltipOrientation = $state(orientation === "dynamic" ? "top" : orientation);

  let windowWidth = $state(0);
  let windowHeight = $state(0);
  let windowScrollY = $state(0);
  let windowScrollX = $state(0);

  let tooltipWidth = $derived(sizes[size] ?? sizes.small);
  let tooltipHeight = $derived(tooltipEl ? tooltipEl.offsetHeight : 20);
  let tooltipFontColor = $derived(fontColor ?? defaultFontColors[styleVariant]);
  let tooltipBackgroundColor = $derived(backgroundColor ?? defaultBgColors[styleVariant]);
  let triangleSizeValue = $derived(tooltipOverride ? 0 : triangleSize);

  let tooltipBounds = $derived(
    containParent && tooltipEl
      ? measureParent(windowScrollX, windowScrollY, windowWidth, windowHeight)
      : {
          top: windowScrollY,
          right: windowWidth + windowScrollX,
          bottom: windowHeight + windowScrollY,
          left: windowScrollX
        }
  );

  let tooltipCoords = $derived(
    getTooltipCoords(tooltipEl, tooltipX ?? 0, tooltipY ?? 0, windowScrollX, windowScrollY)
  );

  $effect(() => {
    if (!el || typeof el.getBoundingClientRect !== "function") return;

    const {
      x: elementX,
      y: elementY,
      orientation: elementOrientation
    } = getPositionFromEl(
      el,
      tooltipBounds,
      windowScrollX,
      windowScrollY,
      orientation,
      elOffset,
      tooltipWidth,
      tooltipHeight,
      triangleSize
    );

    tooltipX = elementX;
    tooltipY = elementY;
    tooltipOrientation = elementOrientation;
  });

  $effect(() => {
    if (el) return;

    const nextX = x ?? 0;
    const nextY = y ?? 0;

    tooltipX = nextX;
    tooltipY = nextY;
    tooltipOrientation =
      orientation === "dynamic"
        ? getTooltipOrientation(
            nextX,
            nextY,
            tooltipBounds,
            tooltipWidth,
            tooltipHeight,
            triangleSize
          )
        : orientation;
  });

  function measureParent(scrollX, scrollY, winWidth, winHeight) {
    if (!tooltipEl) {
      return { top: 0, right: 0, bottom: 0, left: 0 };
    }

    if (!parentEl) {
      parentEl = tooltipEl.parentNode;
    }

    if (!parentEl || typeof parentEl.getBoundingClientRect !== "function") {
      return {
        top: scrollY,
        right: winWidth + scrollX,
        bottom: winHeight + scrollY,
        left: scrollX
      };
    }

    const parentBbox = parentEl.getBoundingClientRect();

    return {
      top: parentBbox.top + scrollY,
      right: parentBbox.right + scrollX,
      bottom: parentBbox.bottom + scrollY,
      left: parentBbox.left + scrollX
    };
  }

  function findRelativeAncestor(element) {
    if (typeof window === "undefined" || !element) return null;
    let ancestor = element.parentNode;
    while (ancestor && ancestor !== document.documentElement) {
      if (ancestor instanceof ShadowRoot) {
        ancestor = ancestor.host;
      }
      if (ancestor instanceof Element) {
        const position = window.getComputedStyle(ancestor).position;
        if (position === "relative" || position === "absolute" || position === "fixed") {
          return ancestor;
        }
        ancestor = ancestor.parentNode;
      } else {
        break;
      }
    }
    return null;
  }

  function getTooltipCoords(element, xPos, yPos, scrollX, scrollY) {
    if (typeof window === "undefined") {
      return [xPos, yPos];
    }
    const relativeParent = findRelativeAncestor(element);
    if (relativeParent) {
      const ancestorStyles = window.getComputedStyle(relativeParent);
      const leftPadding = parseInt(ancestorStyles.paddingLeft.replace("px", ""), 10) || 0;
      const topPadding = parseInt(ancestorStyles.paddingTop.replace("px", ""), 10) || 0;
      const ancestorBbox = relativeParent.getBoundingClientRect();
      const adjustedX = xPos - ancestorBbox.left - scrollX - leftPadding;
      const adjustedY = yPos - ancestorBbox.top - scrollY - topPadding;
      return [adjustedX, adjustedY];
    }
    return [xPos, yPos];
  }

  function leftIntersect(xPos, bounds, width) {
    return xPos < width / 2 + bounds.left;
  }

  function rightIntersect(xPos, bounds, width) {
    return xPos > bounds.right - width / 2;
  }

  function topIntersect(yPos, bounds, height, triangle) {
    return yPos < height + triangle + bounds.top;
  }

  function bottomIntersect(yPos, bounds, height, triangle) {
    return yPos > bounds.bottom - (height / 2 + triangle);
  }

  function getPositionFromEl(
    element,
    bounds,
    scrollX,
    scrollY,
    orientationPref,
    offset,
    width,
    height,
    triangle
  ) {
    if (!element || typeof element.getBoundingClientRect !== "function") {
      return { x: tooltipX, y: tooltipY, orientation: tooltipOrientation };
    }

    const elBbox = element.getBoundingClientRect();
    const elLeftX = elBbox.left + scrollX;
    const elRightX = elBbox.right + scrollX;
    const elTopY = elBbox.top + scrollY;
    const elBottomY = elBbox.bottom + scrollY;
    const elCenterX = elLeftX + elBbox.width / 2;
    const elCenterY = elTopY + elBbox.height / 2;

    let xPos = elCenterX;
    let yPos = elCenterY;
    let newOrientation = "top";

    if (orientationPref !== "dynamic") {
      newOrientation = orientationPref;
      if (orientationPref.includes("left")) {
        xPos = elLeftX - offset;
      }
      if (orientationPref.includes("right")) {
        xPos = elRightX + offset;
      }
      if (orientationPref.includes("bottom")) {
        yPos = elBottomY + offset;
      }
      if (orientationPref.includes("top")) {
        yPos = elTopY - offset;
      }
    } else {
      if (
        topIntersect(elTopY, bounds, height, triangle) &&
        leftIntersect(elCenterX, bounds, width)
      ) {
        xPos = elRightX + offset;
        yPos = elBottomY + offset;
        newOrientation = "bottom-right";
      } else if (
        topIntersect(elTopY, bounds, height, triangle) &&
        rightIntersect(elCenterX, bounds, width)
      ) {
        xPos = elLeftX - offset;
        yPos = elBottomY + offset;
        newOrientation = "bottom-left";
      } else if (
        bottomIntersect(elBottomY, bounds, height, triangle) &&
        leftIntersect(elCenterX, bounds, width)
      ) {
        xPos = elRightX + offset;
        yPos = elTopY - offset;
        newOrientation = "top-right";
      } else if (
        bottomIntersect(elBottomY, bounds, height, triangle) &&
        rightIntersect(elCenterX, bounds, width)
      ) {
        xPos = elLeftX - offset;
        yPos = elTopY - offset;
        newOrientation = "top-left";
      } else if (leftIntersect(elCenterX, bounds, width)) {
        xPos = elRightX + offset;
        yPos = elCenterY;
        newOrientation = "right";
      } else if (rightIntersect(elCenterX, bounds, width)) {
        xPos = elLeftX - offset;
        yPos = elCenterY;
        newOrientation = "left";
      } else if (topIntersect(elTopY, bounds, height, triangle)) {
        xPos = elCenterX;
        yPos = elBottomY + offset;
        newOrientation = "bottom";
      } else {
        xPos = elCenterX;
        yPos = elTopY - offset;
        newOrientation = "top";
      }
    }

    return { x: xPos, y: yPos, orientation: /** @type {TooltipOrientation} */ (newOrientation) };
  }

  function getTooltipOrientation(xPos, yPos, bounds, width, height, triangle) {
    const left = leftIntersect(xPos, bounds, width);
    const top = topIntersect(yPos, bounds, height, triangle);
    const right = rightIntersect(xPos, bounds, width);
    const bottom = bottomIntersect(yPos, bounds, height, triangle);

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
    if (left) {
      return "right";
    }
    if (right) {
      return "left";
    }
    if (top) {
      return "bottom";
    }
    return "top";
  }
</script>

<svelte:window
  bind:scrollY={windowScrollY}
  bind:scrollX={windowScrollX}
  bind:innerWidth={windowWidth}
  bind:innerHeight={windowHeight}
/>

<div
  class="tooltip-outer tooltip-orientation-{tooltipOrientation}"
  bind:this={tooltipEl}
  style:left={`${tooltipCoords[0]}px`}
  style:top={`${tooltipCoords[1]}px`}
  style:width={`${tooltipWidth}px`}
  style:--tooltip-triangle-size={`${triangleSizeValue}px`}
  style:pointer-events={pointerEventsValue}
>
  {#if tooltipOverride}
    {@render tooltipOverride({ orientation: tooltipOrientation })}
  {:else}
    <div
      class="tooltip tooltip-{tooltipOrientation} tooltip-{styleVariant} tooltip-{size}"
      class:box-shadow={boxShadow}
      style:--tooltip-font-size={fontSize}
      style:--tooltip-border-color={borderColor}
      style:--tooltip-border-width="1px"
      style:--tooltip-font-color={tooltipFontColor}
      style:--tooltip-background-color={tooltipBackgroundColor}
    >
      <div class="tooltip-text">
        {#if typeof children === "function"}
          {@render children()}
        {:else}
          {@html content}
        {/if}
      </div>
    </div>
  {/if}
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

<script>
  /**
   * Content to render inside the tooltip
   * @type { string }
   */
  export let content;

  /**
   * @type {"dark" | "light"}
   * @default
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

  // lookup to convert semantic sizes to pixel widths
  const sizes = {
    small: 138,
    large: 198,
  };

  // bind to wrapper element
  let tooltipEl;

  // store width and height of the tooltip
  $: tooltipWidth = sizes[size];
  $: tooltipHeight = tooltipEl ? tooltipEl.offsetHeight : 20;

  // triangle sizes
  const triangleSizes = {
    small: 21,
    large: 29,
  };

  // store triangle width for easy reference
  $: triangleWidth = triangleSizes[size];

  // tooltip triangles are 18px tall for both large and small variants
  const triangleHeight = 18;

  // bound to window height and width
  let windowWidth = 0;
  let windowHeight = 0;

  /**
   * Calculate which direction the tooltip should go based on the window size and the provided x and y position
   * @param {number} x - the x position of the tooltip
   * @param {number} y - the y position of the tooltip
   * @param {number} containerHeight - the height of the container the tooltip is in
   * @param {number} containerWidth - the width of the container the tooltip is in
   * @returns {"top" | "bottom" | "left" | "right"}
   */
  function getTooltipDirection(x, y, containerHeight, containerWidth) {
    // first check if tooltip is too far to the left
    if (x < tooltipWidth / 2) {
      return "right";
    }
    // next check if tooltip is too far to the right
    if (x > (windowWidth - tooltipWidth / 2)) {
      return "left";
    }
    // next check if tooltip is too far up
    if (y < tooltipHeight + triangleHeight) {
      return "bottom";
    }
    // default to top
    return "top";
  }

  // the direction of the tooltip in relation to the mouse
  // defaults to "top", but will move if the tooltip reaches any edge
  $: tooltipDirection = getTooltipDirection(x, y, windowWidth, windowHeight);

  /**
   * Calculate the SVG shape of the tooltip based on size and direction
   * @param {number} width - the width of the tooltip
   * @param {number} height - the height of the tooltip
   * @param {"top" | "bottom" | "left" | "right"} direction - the direction of the tooltip

  */
  function getTooltipShape(width, height, direction) {
    if (direction === "bottom") {
      return `M0,${triangleHeight}H${width / 2 - triangleWidth / 2}L${width / 2},0L${width / 2 + triangleWidth / 2},${triangleHeight}H${width}V${height + triangleHeight}H0Z`
    }
    if (direction === "right") {
      return `M${triangleHeight},0H${width}V${height}H${triangleHeight}V${height / 2 + triangleWidth / 2}L0,${height / 2}L${triangleHeight},${height / 2 - triangleWidth / 2}Z`
    }
    if (direction === "left") {
      return `M0,0H${width - triangleHeight}V${height / 2 - triangleWidth / 2}L${width},${height / 2}L${width - triangleHeight},${height / 2 + triangleWidth / 2}V${height}H0Z`
    }
    // default to top
    return `M0,0H${width}V${height}H${width / 2 + triangleWidth / 2}L${width / 2},${height + triangleHeight}L${width / 2 - triangleWidth / 2},${height}H0Z`
  }

</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />
<div
  bind:this={tooltipEl}
  class="tooltip tooltip-{tooltipDirection} tooltip-{style} tooltip-{size}"
  style={`left: ${x}px; top: ${y}px; width: ${sizes[size]}px;`}
>
  <!-- <svg -->
  <!--   class="tooltip-shape" -->
  <!--   width={tooltipWidth + triangleHeight} -->
  <!--   height={tooltipHeight + triangleHeight} -->
  <!--   viewBox="0 0 {tooltipWidth + triangleHeight} {tooltipHeight + triangleHeight}" -->
  <!-- > -->
    <!-- tooltip background path calculated based on size and height of content and direction of tooltip-->
  <!--   <path -->
  <!--     d={getTooltipShape(tooltipWidth, tooltipHeight, tooltipDirection)} -->
  <!--   /> -->
  <!-- </svg> -->
  <p class="tooltip-text">{@html content}</p>
</div>

<style>
  .tooltip {
    padding: var(--spacing-2);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 500;
    /* box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.25); */
    color: var(--color-gray-shade-darkest);
    background: var(--color-white, "#FFFFFF");
    border: solid 1px var(--color-gray);
    pointer-events: none;
  }
  .tooltip.tooltip-top {
    transform: translate(-50%, calc(-100% - 10px));
  }
  .tooltip.tooltip-right {
    transform: translate(10px, -50%);
  }
  .tooltip.tooltip-left {
    transform: translate(calc(-100% - 10px), -50%);
  }
  .tooltip.tooltip-bottom {
    transform: translate(-50%, calc(10px));
  }
  .tooltip.tooltip-right .tooltip-text {
    transform: translateX(10px);
  }
  .tooltip.tooltip-bottom .tooltip-text {
    transform: translateY(10px);
  }
  .tooltip p.tooltip-text {
    font-size: var(--font-size-small, 0.75rem);
    font-weight: var(--font-weight-normal, 400);
    line-height: var(--line-height-tight);
    position: relative;
    margin: 0;
    z-index: 501;
  }
  .tooltip.tooltip-light p.tooltip-text {
    color: var(--color-black, "#000000");
  }
  .tooltip.tooltip-dark p.tooltip-text {
    color: var(--color-white, "#FFFFFF");
  }
  .tooltip-shape {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 500;
  }
  .tooltip.tooltip-dark .tooltip-shape path {
    fill: var(--color-black, "#000000");
  }
  .tooltip.tooltip-light .tooltip-shape path {
    fill: var(--color-gray-shade-lighter, "#FFFFFF");
    stroke: var(--color-gray);
  }
</style>

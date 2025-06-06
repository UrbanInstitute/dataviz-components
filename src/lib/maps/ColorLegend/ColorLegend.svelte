<script context="module">
  /**
   * @typedef { "continuous" | "sequential" | "threshold" | "ordinal" } scaleType
   */
</script>

<script>
  import { interpolate, quantize, interpolateRound } from "d3-interpolate";
  import { scaleLinear, scaleBand } from "d3-scale";
  import { range as d3Range, quantile } from "d3-array";
  import { format } from "d3-format";
  import urbanColors from "$lib/utils/urbanColors.js";

  /**
   * D3 scale to base legend on
   * @type { Function } [scale]
   */
  export let scale;

  /**
   * Optional title for the legend
   * @type { string } [title = undefined]
   */
  export let title = undefined;

  /**
   * Height of the visual element of the legend
   * @type { number } [height = 20]
   */
  export let height = 10;

  /**
   * Optional number of ticks to pass to d3's generator
   * @type { number } [ticks = 3]
   */
  export let ticks = 5;

  /**
   * Optional array of exact values to use as ticks
   * @type {Array<any>} [tickValues = undefined]
   */
  export let tickValues = undefined;

  /**
   * Optional size for tick labels
   * @type { number } [ticksSize = 14]
   */
  export let tickSize = 14;

  /**
   * Should ticks be positioned above or below the color bars?
   * @type { "top" | "bottom" } [ticksPosition = "bottom"]
   */
  export let tickPosition = "bottom";

  /**
   * Optional size of space between color and tick labels
   * @type { number } [ticksMargin = 6]
   */
  export let tickMargin = 5;

  /**
   * Optionally set the `text-anchor` of all tick marks in the legend. If set to auto, tick marks use `text-anchor: middle` unless they represent the minumum or maximum value of the scale. Min value is set to `text-anchor: start` and max value is set to `text-anchor: end`.
   * @type { "auto" | "middle" | "start" | "end" } [tickTextAnchor = "auto"]
   */
  export let tickTextAnchor = "auto";

  /**
   * Optional tick formatting string or function
   * @type { string | (a: Object) => string } [tickFormat = undefined]
   */
  export let tickFormat = undefined;

  /**
   * Width of tick line. Set to 0 if no line is needed.
   * @type { number } [tickLineWidth = 1]
   */
  export let tickLineWidth = 1;

  /**
   * Color of tick line.
   * @type { string } [tickLineColor = urbanColors.black]
   */
  export let tickLineColor = urbanColors.black;

  /**
   * Optional margin object that defines space around legend within the SVG element
   * @type {{top: Number, right: Number, bottom: Number, left: Number}}
   */
  export let margin = {
    top: 0,
    right: 0,
    bottom: 5,
    left: 0
  };

  /**
   * Optional max width for the legend. Legend will resize to fill the space of the container by default.
   * @type { number } [ maxWidth = undefined ]
   */
  export let maxWidth = undefined;

  /**
   * Display ordinal scale as swatches rather than bars. Does nothing for other scale types.
   * @type { boolean } [swatch = false]
   */
  export let swatch = false;

  /**
   * Display swatches in a row or column layout.
   * @type { "row" | "column" } [swatchLayout = "row"]
   */
  export let swatchLayout = "row";

  /**
   * A flexbox alignment value for the swatch layout.
   * @type { "flex-start" | "center" | "flex-end" } [swatchAlign = "flex-start"]
   */
  export let swatchAlign = "flex-start";

  /**
   * Size of swatch in pixels
   * @type { number } [swatchSize = 16]
   */
  export let swatchSize = 16;

  /**
   * Display swatches as circles rather than squares.
   * @type { boolean } [swatchCircle = false]
   */
  export let swatchCircle = false;

  /**
   * Optional override space between swatch items. Should be a css compatable string.
   * @type { string } [swatchSpacing = undefined]
   */
  export let swatchSpacing = undefined;

  /**
   * Optional color to indicate for NA values
   * @type { string } [naFill = undefined]
   */
  export let naFill = undefined;

  /**
   * Optional string label for NA values
   * @type { string } [naLabel = "NA"]
   */
  export let naLabel = "NA";

  /**
   * Optional size in pixels for naLabel
   * @type { string } [naLabel = "NA"]
   */
  export let naSize = 16;

  /**
   * Optional amount of spacing in pixels for NA swatch and label
   * @type { number}  [naSpacing = 16]
   */
  export let naSpacing = 16;

  // will hold width of DOM element
  let width;

  $: domain = scale.domain();
  $: range = scale.range();

  $: legendWidth = naFill
    ? width - margin.left - margin.right - naSize - naSpacing
    : width - margin.left - margin.right;

  /**
   * @type { scaleType }
   */
  $: scaleType = getScaleType(scale);

  // will hold scale to compute x position of labels
  // set by `updateScales`
  $: xScale = getXScale(scale, scaleType, legendWidth);

  let scaleId = uid();

  // holds reference to scale thresholds when a threshold scale is used
  let thresholds;

  $: if (scaleType === "threshold") {
    thresholds = scale.thresholds
      ? scale.thresholds() // scaleQuantize
      : scale.quantiles
        ? scale.quantiles() // scaleQuantile
        : scale.domain(); // scaleThreshold
  } else {
    thresholds = undefined;
  }

  $: tickFormatFn = getTickFormatFn(tickFormat, thresholds);
  $: legendTicks = getTicks(scaleType, xScale, thresholds);

  function getTickFormatFn(tickFormat, thresholds) {
    // respect any user provided options first
    if (thresholds) {
      // if we have a threshold scale without any use-provided formatting, generate threshold ticks
      const thresholdFormat =
        tickFormat === undefined
          ? (d) => d
          : typeof tickFormat === "string"
            ? format(tickFormat)
            : tickFormat;

      return (i) => thresholdFormat(thresholds[i], i);
    }
    if (typeof tickFormat === "string") {
      return format(tickFormat);
    }
    if (tickFormat && !thresholds) {
      return tickFormat;
    }
    return (d) => d;
  }

  function getXScale(scale, scaleType, legendWidth) {
    if (scaleType === "continuous") {
      const n = Math.min(scale.domain().length, scale.range().length);
      return scale.copy().rangeRound(quantize(interpolate(0, legendWidth), n));
    } else if (scaleType === "sequential") {
      return Object.assign(scale.copy().interpolator(interpolateRound(0, legendWidth)), {
        range() {
          return [0, legendWidth];
        }
      });
    } else if (scaleType === "threshold") {
      return scaleLinear()
        .domain([-1, range.length - 1])
        .rangeRound([0, legendWidth]);
    } else {
      return scaleBand().domain(scale.domain()).rangeRound([0, legendWidth]);
    }
  }

  /**
   * @param { Object } scale
   * @returns { scaleType }
   */
  function getScaleType(scale) {
    // method for determining type inspired by: https://observablehq.com/@d3/color-legend
    if (scale.interpolate) {
      return "continuous";
    } else if (scale.interpolator) {
      return "sequential";
    } else if (scale.invertExtent) {
      return "threshold";
    } else {
      return "ordinal";
    }
  }

  function getTicks(scaleType, xScale, thresholds) {
    if (tickValues) {
      return tickValues;
    }
    let xDomain = xScale.domain();
    if (scaleType === "sequential" && !xScale.ticks) {
      // if the scale doesn’t implement ticks, generate tick values manually
      // https://observablehq.com/@d3/color-legend
      const n = Math.round(ticks + 1);
      return d3Range(n).map((i) => quantile(xDomain, i / (n - 1)));
    } else if (scaleType === "threshold") {
      return d3Range(thresholds.length);
    } else if (scaleType === "ordinal") {
      return xDomain;
    }
    return xScale.ticks(ticks);
  }

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  function getTextAnchor(val, domain) {
    if (tickTextAnchor !== "auto") {
      return tickTextAnchor;
    }
    if (scaleType === "ordinal" || thresholds) {
      return "middle";
    }
    if (val === domain[0]) {
      return "start";
    } else if (val === domain[domain.length - 1]) {
      return "end";
    } else {
      return "middle";
    }
  }
</script>

<div
  class="legend-wrapper"
  bind:clientWidth={width}
  style:max-width="{maxWidth}px"
  style:padding-bottom="10px"
>
  {#if title}
    <p class="legend-title">{title}</p>
  {/if}
  {#if width}
    {#if !(scaleType === "ordinal" && swatch)}
      <svg {width} height={height + tickSize + tickMargin + margin.top + margin.bottom}>
        <g class="legend-inner" transform="translate({margin.left}, {margin.top})">
          {#if scaleType === "continuous"}
            <defs>
              <linearGradient id={scaleId}>
                {#each range as color, i}
                  <stop offset="{(100 / (range.length - 1)) * i}%" stop-color={color} />
                {/each}
              </linearGradient>
            </defs>
            <rect
              fill="url(#{scaleId})"
              width={legendWidth}
              {height}
              y={tickPosition === "bottom" ? 0 : tickSize + tickMargin}
            ></rect>
          {:else if scaleType === "sequential"}
            <defs>
              <linearGradient id={scaleId}>
                {#each domain as stop, i}
                  <stop offset="{100 * (i / (domain.length - 1))}%" stop-color={scale(stop)} />
                {/each}
              </linearGradient>
            </defs>
            <rect
              fill="url(#{scaleId})"
              width={legendWidth}
              {height}
              y={tickPosition === "bottom" ? 0 : tickSize + tickMargin}
            ></rect>
          {:else if scaleType === "threshold"}
            {#each range as color, i}
              <rect x={xScale(i - 1)} y="0" width={xScale(i) - xScale(i - 1)} {height} fill={color}
              ></rect>
            {/each}
          {:else if scaleType === "ordinal"}
            {#each domain as cat, i}
              <rect
                x={xScale(cat)}
                y={tickPosition === "bottom" ? 0 : tickSize + tickMargin}
                width={Math.max(0, xScale.bandwidth() - 1)}
                {height}
                fill={scale(cat)}
              ></rect>
            {/each}
          {/if}
          {#if naFill}
            <rect
              x={legendWidth + margin.left + naSpacing}
              y="0"
              width={naSize}
              {height}
              fill={naFill}
            />
          {/if}
          {#if scaleType && width && xScale}
            <g class="legend-ticks">
              {#each legendTicks as tick}
                {@const xPosition =
                  scaleType === "ordinal" ? xScale(tick) + xScale.bandwidth() / 2 : xScale(tick)}
                {@const yPosition = tickPosition === "top" ? 0 : height + tickMargin + tickSize}
                {#if scaleType !== "ordinal" && tickLineWidth}
                  <line
                    x1={xPosition}
                    x2={xPosition}
                    y1={tickPosition === "bottom" ? 0 : height + tickMargin + tickSize}
                    y2={tickPosition === "bottom" ? height + tickMargin : tickSize}
                    stroke={tickLineColor}
                    stroke-width={tickLineWidth}
                  ></line>
                {/if}
                <text
                  fill="black"
                  alignment-baseline={tickPosition === "top" ? "hanging" : "baseline"}
                  y={yPosition}
                  x={xPosition}
                  font-size="{tickSize}px"
                  text-anchor={getTextAnchor(tick, domain)}>{tickFormatFn(tick)}</text
                >
              {/each}
              {#if naFill}
                <text
                  fill="black"
                  alignment-baseline={tickPosition === "top" ? "hanging" : "baseline"}
                  y={tickPosition === "top" ? 0 : height + tickMargin + tickSize}
                  x={legendWidth + margin.left + naSpacing + naSize / 2}
                  font-size="{tickSize}px"
                  text-anchor={"middle"}>{naLabel}</text
                >
              {/if}
            </g>
          {/if}
        </g>
      </svg>
    {:else}
      <div
        class="swatch-wrap swatch-layout-{swatchLayout}"
        style:--swatch-font-size="{tickSize}px"
        style:--swatch-color-size="{swatchSize}px"
        style:--swatch-align={swatchAlign}
        style:--swatch-spacing={swatchSpacing}
      >
        {#each domain as cat, i}
          <div class="swatch-item" class:swatch-circle={swatchCircle}>
            <div class="swatch-color" style:background-color={scale(cat)}></div>
            <span class="swatch-label">{cat}</span>
          </div>
        {/each}
      </div>
    {/if}
  {/if}
</div>

<style>
  .swatch-wrap {
    display: flex;
    gap: var(--swatch-spacing, var(--spacing-4));
    flex-wrap: wrap;
    justify-content: var(--swatch-align);
  }

  .swatch-wrap.swatch-layout-column {
    flex-direction: column;
    gap: var(--swatch-spacing, var(--spacing-2));
  }

  .swatch-item {
    display: flex;
    gap: var(--spacing-2);
    align-items: center;
  }

  .swatch-color {
    width: var(--swatch-color-size);
    height: var(--swatch-color-size);
  }

  .swatch-circle .swatch-color {
    border-radius: 50%;
  }

  .swatch-label {
    font-size: var(--swatch-font-size);
  }
  .legend-title {
    font-size: var(--font-size-normal);
    margin-bottom: var(--spacing-2);
    font-weight: var(--font-weight-bold);
  }
</style>

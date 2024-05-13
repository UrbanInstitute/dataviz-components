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

  /*
   * D3 scale to base legend on
   * @type { Function } [scale]
   */
  export let scale;

  /*
   * Height of the visual element of the legend
   * @type { Number } [height = 20]
   */
  export let height = 10;

  /*
   * Optional array of exact values to use as ticks
   * {Array<any>}
   */
  export let tickValues = undefined;

  /*
   * Optional number of ticks to pass to d3's generator
   * @type { Number } [ticks = 3]
   */
  export let ticks = 5;

  /*
   * Optional size for tick labels
   * @type { Number } [ticksSize = 12]
   */
  export let tickSize = 12;

  /*
   * Optional size of space between color and tick labels
   * @type { Number } [ticksMargin = 6]
   */
  export let tickMargin = 5;

  /*
   * Optional tick formatting string or function
   * @type { string | (Object) => string } [tickFormat = undefined]
   */
  export let tickFormat = undefined;

  /*
   * Width of tick line. Set to 0 if no line is needed.
   * @type { Number } [tickLineWidth = 1]
   */
  export let tickLineWidth = 1;

  /*
   * Color of tick line.
   * @type { string } [tickLineColor = urbanColors.black]
   */
  export let tickLineColor = urbanColors.black;

  /*
   * Optional margin object that defines space around legend within the SVG element
   * @type {{top: Number, right: Number, bottom: Number, left: Number}}
   */
  export let margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  /*
   * Optional max width for the legend. Legend will resize to fill the space of the container by default.
   * @type { Number } [ maxWidth = undefined ]
   */
  export let maxWidth = undefined;

  // will hold width of DOM element
  let width;

  $: domain = scale.domain();
  $: range = scale.range();

  $: legendWidth = width - margin.left - margin.right;

  /*
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
  }

  $: tickFormatFn = getTickFormatFn(tickFormat, thresholds);
  $: legendTicks = getTicks(scaleType, xScale, thresholds);

  function getTickFormatFn(tickFormat, thresholds) {
    // respect any user provided options first
    if (typeof tickFormat === "string") {
      return format(tickFormat);
    } else if (tickFormat) {
      return tickFormat;
    } else if (thresholds) {
      // if we have a threshold scale without any use-provided formatting, generate threshold ticks
      const thresholdFormat =
        tickFormat === undefined
          ? (d) => d
          : typeof tickFormat === "string"
            ? format(tickFormat)
            : tickFormat;

      return (i) => thresholdFormat(thresholds[i], i);
    }
    return (d) => d;
  }

  // debug
  $: console.log("scaleType", scaleType);
  $: console.log("domain", domain);
  $: console.log("range", range);
  $: console.log("xScale", xScale);
  $: console.log("legendTicks", legendTicks);

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

  /*
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
</script>

<div class="legend-wrapper" bind:clientWidth={width} style:max-width="{maxWidth}px">
  {#if width}
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
          <rect fill="url(#{scaleId})" width={legendWidth} {height}></rect>
        {:else if scaleType === "sequential"}
          <defs>
            <linearGradient id={scaleId}>
              {#each domain as stop, i}
                <stop offset="{100 * (i / (domain.length - 1))}%" stop-color={scale(stop)} />
              {/each}
            </linearGradient>
          </defs>
          <rect fill="url(#{scaleId})" width={legendWidth} {height}></rect>
        {:else if scaleType === "threshold"}
          {#each range as color, i}
            <rect x={xScale(i - 1)} y="0" width={xScale(i) - xScale(i - 1)} {height} fill={color}
            ></rect>
          {/each}
        {:else if scaleType === "ordinal"}
          {#each domain as cat, i}
            <rect
              x={xScale(cat)}
              y={0}
              width={Math.max(0, xScale.bandwidth() - 1)}
              {height}
              fill={scale(cat)}
            ></rect>
          {/each}
        {/if}
        {#if scaleType && width && xScale}
          <g class="legend-ticks">
            {#each legendTicks as tick}
            {@const xPosition = scaleType === "ordinal" ? xScale(tick) + xScale.bandwidth() / 2 : xScale(tick)}
              {#if scaleType !== "ordinal" && tickLineWidth}
                <line
                  x1={xPosition}
                  x2={xPosition}
                  y1={0}
                  y2={height + tickMargin}
                  stroke={tickLineColor}
                  stroke-width={tickLineWidth}
                ></line>
              {/if}
                <text
                  fill="black"
                  y={height + tickSize + tickMargin}
                  x={xPosition}
                  text-anchor="middle">{tickFormatFn(tick)}</text
                >
            {/each}
          </g>
        {/if}
      </g>
    </svg>
  {/if}
</div>

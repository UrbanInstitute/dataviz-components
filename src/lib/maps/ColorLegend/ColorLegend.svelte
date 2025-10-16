<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script module>
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
   * @typedef {Object} Props
   * @property {Function} scale - D3 scale to base legend on
   * @property {string} [title] - Optional title for the legend
   * @property {number} [height=10] - Height of the visual element of the legend
   * @property {number} [ticks=5] - Optional number of ticks to pass to d3's generator
   * @property {Array<any>} [tickValues] - Optional array of exact values to use as ticks
   * @property {number} [tickSize=14] - Optional size for tick labels
   * @property {"top" | "bottom"} [tickPosition="bottom"] - Should ticks be positioned above or below the color bars?
   * @property {number} [tickMargin=5] - Optional size of space between color and tick labels
   * @property {"auto" | "middle" | "start" | "end"} [tickTextAnchor="auto"] - Optionally set the text-anchor of all tick marks
   * @property {string | ((a: Object) => string)} [tickFormat] - Optional tick formatting string or function
   * @property {number} [tickLineWidth=1] - Width of tick line. Set to 0 if no line is needed.
   * @property {string} [tickLineColor=urbanColors.black] - Color of tick line.
   * @property {{top: number, right: number, bottom: number, left: number}} [margin={ top: 0, right: 0, bottom: 5, left: 0 }] - Optional margin object
   * @property {number} [maxWidth] - Optional max width for the legend
   * @property {boolean} [swatch=false] - Display ordinal scale as swatches rather than bars
   * @property {"row" | "column"} [swatchLayout="row"] - Display swatches in a row or column layout
   * @property {"flex-start" | "center" | "flex-end"} [swatchAlign="flex-start"] - A flexbox alignment value
   * @property {number} [swatchSize=16] - Size of swatch in pixels
   * @property {boolean} [swatchCircle=false] - Display swatches as circles rather than squares
   * @property {string} [swatchSpacing=undefined] - Optional override space between swatch items
   * @property {string} [naFill=undefined] - Optional color to indicate for NA values
   * @property {string} [naLabel="NA"] - Optional string label for NA values
   * @property {number} [naSize=16] - Optional size in pixels for naLabel
   * @property {number} [naSpacing=16] - Optional amount of spacing in pixels for NA swatch and label
   */

  /** @type {Props} */
  let {
    scale,
    title = undefined,
    height = 10,
    ticks = 5,
    tickValues = undefined,
    tickSize = 14,
    tickPosition = "bottom",
    tickMargin = 5,
    tickTextAnchor = "auto",
    tickFormat = undefined,
    tickLineWidth = 1,
    tickLineColor = urbanColors.black,
    margin = {
      top: 0,
      right: 0,
      bottom: 5,
      left: 0
    },
    maxWidth = undefined,
    swatch = false,
    swatchLayout = "row",
    swatchAlign = "flex-start",
    swatchSize = 16,
    swatchCircle = false,
    swatchSpacing = undefined,
    naFill = undefined,
    naLabel = "NA",
    naSize = 16,
    naSpacing = 16
  } = $props();

  // will hold width of DOM element
  let width = $state(0);

  // Derived values
  let domain = $derived(scale.domain());
  let range = $derived(scale.range());

  let legendWidth = $derived(
    naFill
      ? width - margin.left - margin.right - naSize - naSpacing
      : width - margin.left - margin.right
  );

  /**
   * @type { scaleType }
   */
  let scaleType = $derived(getScaleType(scale));

  // holds reference to scale thresholds when a threshold scale is used
  let thresholds = $derived(
    scaleType === "threshold"
      ? scale.thresholds
        ? scale.thresholds() // scaleQuantize
        : scale.quantiles
          ? scale.quantiles() // scaleQuantile
          : scale.domain() // scaleThreshold
      : undefined
  );

  // will hold scale to compute x position of labels
  let xScale = $derived(getXScale(scale, scaleType, legendWidth, range));

  let tickFormatFn = $derived(getTickFormatFn(tickFormat, thresholds));
  let legendTicks = $derived(getTicks(scaleType, xScale, thresholds, tickValues, ticks));

  const scaleId = uid();

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

  function getXScale(scale, scaleType, legendWidth, range) {
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

  function getTicks(scaleType, xScale, thresholds, tickValues, ticks) {
    if (tickValues) {
      return tickValues;
    }
    let xDomain = xScale.domain();
    if (scaleType === "sequential" && !xScale.ticks) {
      // if the scale doesn't implement ticks, generate tick values manually
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

  function getTextAnchor(val, domain, tickTextAnchor, scaleType, thresholds) {
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
  style:max-width={maxWidth != null ? maxWidth + "px" : null}
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
                  text-anchor={getTextAnchor(tick, domain, tickTextAnchor, scaleType, thresholds)}
                  >{tickFormatFn(tick)}</text
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

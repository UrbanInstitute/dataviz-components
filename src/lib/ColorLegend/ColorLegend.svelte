<script context="module">
  /**
   * @typedef { "continuous" | "sequential" | "threshold" | "ordinal" } scaleType
   */
</script>

<script>
  import { onMount } from "svelte";
  import { interpolate, quantize, interpolateRound } from "d3-interpolate";
  import { scaleLinear, scaleBand } from "d3-scale";
  import { range as d3Range, quantile } from "d3-array";
  import { format } from "d3-format";
  /*
   * D3 scale to base legend on
   * @type { Function } [scale]
   */
  export let scale;
  /*
   * Height of the visual element of the legend
   * @type { Number } [height = 20]
   */
  export let height = 20;

  /*
   * Optional array of exact values to use as ticks
   * {Array<any>}
   */
  export let tickValues = undefined;

  /*
   * Optional number of ticks to pass to d3's generator
   * @type { Number } [ticks = 3]
   */
  export let ticks = 3;

  /*
   * Optional tick formatting string or function
   * { string | (Object) => string } [tickFormat = (d) => d]
   */
  export let tickFormat = (d) => d;

  let tickFormatFn = typeof tickFormat === "string" ? format(string) : tickFormat;

  $: domain = scale.domain();
  $: range = scale.range();

  // will hold width of DOM element
  let width;

  // will hold scale to compute x position of labels
  // set by `initializeScale`
  let xScale;

  /*
   * will hold scale type string, set by `initializeScale`
   * @type { scaleType }
   */
  let scaleType;

  let scaleId = uid();

  // debug
  $: console.log("scaleType", scaleType);
  $: console.log("domain", domain);
  $: console.log("range", range);
  $: console.log("xScale", xScale);

  /**
   * Initialize the scaleType and xScale variables in order to render the legend elements
   */
  function initializeScale(scale) {
    // method for determining type inspired by: https://observablehq.com/@d3/color-legend

    // Continuous
    if (scale.interpolate) {
      const n = Math.min(scale.domain().length, scale.range().length);
      xScale = scale.copy().rangeRound(quantize(interpolate([0, width]), n));
      return "continuous";
    }
    // Sequential
    else if (scale.interpolator) {
      xScale = Object.assign(scale.copy().interpolator(interpolateRound(0, width)), {
        range() {
          scaleType = [0, width];
        }
      });
      // if the scale doesn’t implement ticks, generate tick values manually
      // https://observablehq.com/@d3/color-legend
      if (!xScale.ticks) {
        if (tickValues === undefined) {
          const n = Math.round(ticks + 1);
          tickValues = d3Range(n).map((i) => quantile(scale.domain(), i / (n - 1)));
          console.log("tickValues", tickValues);
        }
      }

      return "sequential";
    }
    // Threshold
    else if (scale.invertExtent) {
      xScale = scaleLinear()
        .domain([-1, range.length - 1])
        .rangeRound([0, width]);


      const thresholds = scale.thresholds
        ? scale.thresholds() // scaleQuantize
        : scale.quantiles
          ? scale.quantiles() // scaleQuantile
          : scale.domain(); // scaleThreshold

      // setup tickFormat to point to thresholds
      const thresholdFormat
        = tickFormat === undefined ? d => d
        : typeof tickFormat === "string" ? format(tickFormat)
        : tickFormat;

      tickFormatFn = (i) => thresholdFormat(thresholds[i], i);
      // generate tickValues
      tickValues = d3Range(thresholds.length);

      return "threshold";
    }
    // Ordinal
    else {
      xScale = scaleBand().domain(scale.domain()).rangeRound([0, width]);
      tickValues = domain;
      return "ordinal";
    }
  }

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
  onMount(() => {
    scaleType = initializeScale(scale, width);
  });
</script>

<div class="scale-wrapper" bind:clientWidth={width}>
  <svg {width} {height}>
    {#if scaleType === "continuous"}
      <defs>
        <linearGradient id={scaleId}>
          {#each range as color, i}
            <stop offset="{(100 / (range.length - 1)) * i}%" stop-color={color} />
          {/each}
        </linearGradient>
      </defs>
      <rect fill="url(#{scaleId})" {width} {height}></rect>
    {:else if scaleType === "sequential"}
      <defs>
        <linearGradient id={scaleId}>
          {#each domain as stop, i}
            <stop offset="{100 * (i / (domain.length - 1))}%" stop-color={scale(stop)} />
          {/each}
        </linearGradient>
      </defs>
      <rect fill="url(#{scaleId})" {width} {height}></rect>
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
    {#if scaleType}
    <g class="legend-ticks"> 
      {#each tickValues || scale.ticks(ticks) as tick}
        <text fill="black" y={height} x={xScale(tick)}>{tickFormatFn(tick)}</text>
      {/each}
    </g>
    {/if}
  </svg>
</div>

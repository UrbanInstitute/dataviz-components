<!--
  @component
  Generates an SVG y-axis. This component is also configured to detect if your y-scale is an ordinal scale. If so, it will place the markers in the middle of the bandwidth.
 -->
<script>
  import { getContext } from "svelte";

  const { padding, xRange, yScale, yDomain, xDomain, xScale, width } = getContext("LayerCake");

  /** 
   * Extend lines from the ticks into the chart space
   * @type {boolean} [gridlines=true] */
  export let gridlines = true;

  /** 
   * Show a vertical mark for each tick.
   * @type {boolean} [tickMarks=false] */
  export let tickMarks = false;

  /** 
   * A function that passes the current tick value and expects a nicely formatted value in return.
   * @type {Function} [formatTick=d => d] */
  export let formatTick = (d) => d;

  /** 
   * If this is a number, it passes that along to the [d3Scale.ticks](https://github.com/d3/d3-scale) function. If this is an array, hardcodes the ticks to those values. If it"s a function, passes along the default tick values and expects an array of tick values in return.
   * @type {number|Array|Function} [ticks=4] */
  export let ticks = 4;

  /**
   * How far over to position the text marker.
   *  @type {number} [xTick=0] */
  export let xTick = 0;

  /** 
   * How far up and down to position the text marker.
   * @type {number} [yTick=0] */
  export let yTick = 0;

  /** 
   * Any optional value passed to the `dx` attribute on the text marker and tick mark (if visible). This is ignored on the text marker if your scale is ordinal.
   * @type {number} [dxTick=-4] */
  export let dxTick = -4;

  /** 
   * Any optional value passed to the `dy` attribute on the text marker and tick mark (if visible). This is ignored on the text marker if your scale is ordinal.
   * @type {number} [dyTick=0] */
  export let dyTick = 0;

  /**
   * The CSS `text-anchor` passed to the label. This is automatically set to "end" if the scale has a bandwidth method, like in ordinal scales.
   * @type {string} [textAnchor="end"] */
  export let textAnchor = "end";

  export let tickLabelColor = "#000000";

  /** 
   * An optional label for the y axis
   * @type {string|null} [axisLabel=null] */
  export let axisLabel = "";

  export let labelDx = 0;

  $: isBandwidth = typeof $yScale.bandwidth === "function";

  $: tickVals = Array.isArray(ticks)
    ? ticks
    : isBandwidth
      ? $yScale.domain()
      : typeof ticks === "function"
        ? ticks($yScale.ticks())
        : $yScale.ticks(ticks);
</script>

<g class="axis y-axis" transform="translate({-$padding.left}, 0)">
  {#each tickVals as tick (tick)}
    <g
      class="tick tick-{tick}"
      transform="translate({$xRange[0] + $padding.left}, {$yScale(tick)})"
    >
      {#if gridlines !== false}
        <line
          class="gridline"
          x1={0}
          x2={$width}
          y1={isBandwidth ? $yScale.bandwidth() / 2 : 0}
          y2={isBandwidth ? $yScale.bandwidth() / 2 : 0}
        />
      {/if}
      {#if tickMarks === true}
        <line
          class="tick-mark"
          x1="0"
          x2={isBandwidth ? -6 : 6}
          y1={isBandwidth ? $yScale.bandwidth() / 2 : 0}
          y2={isBandwidth ? $yScale.bandwidth() / 2 : 0}
        />
      {/if}
      <text
        x={xTick}
        y={isBandwidth ? $yScale.bandwidth() / 2 + yTick : yTick}
        dx={isBandwidth ? -9 : dxTick}
        dy={isBandwidth ? 4 : dyTick}
        fill={tickLabelColor}
        style="text-anchor:{isBandwidth ? 'end' : textAnchor}; alignment-baseline:middle;"
        >{formatTick(tick)}</text
      >
    </g>
  {/each}
  {#if axisLabel}
    <text class="axis-label" x={$padding.left} y="0" dy="-8" dx={labelDx} fill={tickLabelColor}
      >{axisLabel}</text
    >
  {/if}
</g>

<style>
  .tick,
  .axis-label {
    font-size: 12px;
    font-family: var(--font-family-sans-serif);
  }

  .tick line {
    stroke: #dedddd;
  }
  .tick:first-of-type line {
    stroke: #000000;
  }
</style>

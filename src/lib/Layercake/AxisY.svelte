<!--
  @component
  Generates an SVG y-axis. This component is also configured to detect if your y-scale is an ordinal scale. If so, it will place the markers in the middle of the bandwidth.
 -->
<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script>
  import { getContext } from "svelte";

  const { padding, xRange, yScale, yDomain, xDomain, xScale, width } = getContext("LayerCake");

  /**
   * @typedef {Object} Props
   * @property {boolean} [gridlines=true] Extend lines from the ticks into the chart space
   * @property {boolean} [tickMarks=false] Show a vertical mark for each tick.
   * @property {Function} [formatTick=d => d] A function that passes the current tick value and expects a nicely formatted value in return.
   * @property {number | Array | Function} [ticks=4] If this is a number, it passes that along to the [d3Scale.ticks](https://github.com/d3/d3-scale) function. If this is an array, hardcodes the ticks to those values. If it's a function, passes along the default tick values and expects an array of tick values in return.
   * @property {number} [xTick=0] How far over to position the text marker.
   * @property {number} [yTick=0] How far up and down to position the text marker.
   * @property {number} [dxTick=-4] Any optional value passed to the `dx` attribute on the text marker and tick mark (if visible). This is ignored on the text marker if your scale is ordinal.
   * @property {number} [dyTick=0] Any optional value passed to the `dy` attribute on the text marker and tick mark (if visible). This is ignored on the text marker if your scale is ordinal.
   * @property {string} [textAnchor="end"] The CSS `text-anchor` passed to the label. This is automatically set to "end" if the scale has a bandwidth method, like in ordinal scales.
   * @property {string} [tickLabelColor="#000000"] The color of the tick labels and axis label
   * @property {string} [axisLabel=""] An optional label for the y axis
   * @property {number} [labelDx=0] Optional dx offset for the axis label
   */

  /** @type {Props} */
  let {
    gridlines = true,
    tickMarks = false,
    formatTick = (d) => d,
    ticks = 4,
    xTick = 0,
    yTick = 0,
    dxTick = -4,
    dyTick = 0,
    textAnchor = "end",
    tickLabelColor = "#000000",
    axisLabel = "",
    labelDx = 0
  } = $props();

  let isBandwidth = $derived(typeof $yScale.bandwidth === "function");

  let tickVals = $derived.by(() => {
    if (Array.isArray(ticks)) {
      return ticks;
    }
    if (isBandwidth) {
      return $yScale.domain();
    }
    if (typeof ticks === "function") {
      return ticks($yScale.ticks());
    }
    return $yScale.ticks(ticks);
  });
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

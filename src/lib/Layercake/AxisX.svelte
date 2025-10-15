<!--
  @component
  Generates an SVG x-axis. This component is also configured to detect if your x-scale is an ordinal scale. If so, it will place the markers in the middle of the bandwidth.
 -->
<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  import { getContext } from "svelte";
  const { width, height, xScale, yRange } = getContext("LayerCake");

  /**
   * @typedef {Object} Props
   * @property {boolean} [gridlines=false] - Extend lines from the ticks into the chart space
   * @property {boolean} [tickMarks=true] - Show a vertical mark for each tick.
   * @property {boolean} [baseline=true] - Show a solid line at the bottom.
   * @property {boolean} [snapTicks=false] - Instead of centering the text on the first and the last items, align them to the edges of the chart.
   * @property {Function} [formatTick=d => d] - A function that passes the current tick value and expects a nicely formatted value in return.
   * @property {number | Array | Function} [ticks=undefined] - If this is a number, it passes that along to the [d3Scale.ticks](https://github.com/d3/d3-scale) function. If this is an array, hardcodes the ticks to those values. If it's a function, passes along the default tick values and expects an array of tick values in return. If nothing, it uses the default ticks supplied by the D3 function.
   * @property {number} [xTick=0] - How far over to position the text marker.
   * @property {number} [yTick=16] - The distance from the baseline to place each tick value.
   * @property {string} [axisLabel=""] - An optional label for the y axis
   */

  /** @type {Props} */
  let {
    gridlines = false,
    tickMarks = true,
    baseline = true,
    snapTicks = false,
    formatTick = (d) => d,
    ticks = undefined,
    xTick = 0,
    yTick = 16,
    axisLabel = ""
  } = $props();

  let isBandwidth = $derived(typeof $xScale.bandwidth === "function");

  let tickVals = $derived.by(() => {
    if (Array.isArray(ticks)) {
      return ticks;
    }
    if (isBandwidth) {
      return $xScale.domain();
    }
    if (typeof ticks === "function") {
      return ticks($xScale.ticks());
    }
    return $xScale.ticks(ticks);
  });

  function textAnchor(i) {
    if (snapTicks === true) {
      if (i === 0) {
        return "start";
      }
      if (i === tickVals.length - 1) {
        return "end";
      }
    }
    return "middle";
  }
</script>

<g class="axis x-axis" class:snapTicks>
  {#each tickVals as tick, i (tick)}
    <g class="tick tick-{i}" transform="translate({$xScale(tick)},{Math.max(...$yRange)})">
      {#if gridlines !== false}
        <line class="gridline" y1={$height * -1} y2="0" x1="0" x2="0" />
      {/if}
      {#if tickMarks === true}
        <line
          class="tick-mark"
          y1={0}
          y2={6}
          x1={isBandwidth ? $xScale.bandwidth() / 2 : 0}
          x2={isBandwidth ? $xScale.bandwidth() / 2 : 0}
        />
      {/if}
      <text
        x={isBandwidth ? $xScale.bandwidth() / 2 + xTick : xTick}
        y={yTick}
        dx=""
        dy=""
        text-anchor={textAnchor(i)}>{formatTick(tick)}</text
      >
    </g>
  {/each}
  {#if baseline === true}
    <line class="baseline" y1={$height + 0.5} y2={$height + 0.5} x1="0" x2={$width} />
  {/if}
  {#if axisLabel}
    <text
      class="axis-label"
      x={$width / 2}
      y={$height + 40}
      dy="-4"
      fill={"#000"}
      text-anchor="middle">{axisLabel}</text
    >
  {/if}
</g>

<style>
  .tick {
    font-size: 12px;
    font-weight: 400;
    font-family: var(--font-family-sans-serif);
  }

  line,
  .tick line {
    stroke: #dedddd;
  }

  .tick text {
    fill: #000000;
  }

  .tick .tick-mark,
  .baseline {
    stroke: #000000;
  }
  /* This looks slightly better */
  .axis.snapTicks .tick:last-child text {
    transform: translateX(3px);
  }
  .axis.snapTicks .tick.tick-0 text {
    transform: translateX(-3px);
  }
  .axis-label {
    font-size: 12px;
  }
</style>

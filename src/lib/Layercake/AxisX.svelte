<!--
  @component
  Generates an SVG x-axis. This component is also configured to detect if your x-scale is an ordinal scale. If so, it will place the markers in the middle of the bandwidth.
 -->
<script>
  import { getContext } from "svelte";
  const { width, height, xScale, yRange } = getContext("LayerCake");

  /**
   * Extend lines from the ticks into the chart space
   * @type {boolean} [gridlines=true] */
  export let gridlines = false;

  /**
   * Show a vertical mark for each tick.
   * @type {boolean} [tickMarks=false] */
  export let tickMarks = true;

  /**
   * Show a solid line at the bottom.
   * @type {boolean} [baseline=false] */
  export let baseline = true;

  /**
   * Instead of centering the text on the first and the last items, align them to the edges of the chart.
   * @type {boolean} [snapTicks=false] */
  export let snapTicks = false;

  /**
   * A function that passes the current tick value and expects a nicely formatted value in return.
   * @type {Function} [formatTick=d => d] */
  export let formatTick = (d) => d;

  /**
   * If this is a number, it passes that along to the [d3Scale.ticks](https://github.com/d3/d3-scale) function. If this is an array, hardcodes the ticks to those values. If it's a function, passes along the default tick values and expects an array of tick values in return. If nothing, it uses the default ticks supplied by the D3 function.
   * @type {number|Array|Function} [ticks] */
  export let ticks = undefined;

  /**
   * How far over to position the text marker.
   * @type {number} [xTick=0] */
  export let xTick = 0;

  /**
   * The distance from the baseline to place each tick value.
   * @type {number} [yTick=16] */
  export let yTick = 16;

  /**
   * An optional label for the y axis
   * @type {string|null} [axisLabel=null] */
  export let axisLabel = "";

  $: isBandwidth = typeof $xScale.bandwidth === "function";

  $: tickVals = Array.isArray(ticks)
    ? ticks
    : isBandwidth
      ? $xScale.domain()
      : typeof ticks === "function"
        ? ticks($xScale.ticks())
        : $xScale.ticks(ticks);

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

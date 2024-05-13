<script>
  import { interpolate, quantize, interpolateRound } from "d3-interpolate";
  /**
   * @typedef { "continuous" | "sequential" | "threshold" | "ordinal" } scaleType
   */

  /*
   * D3 scale to base legend on
   * @type { Function } scale
   */
  export let scale;

  $: domain = scale.domain();
  $: range = scale.range ? scale.range() : null;

  // will hold width of DOM element
  let width;

  // will hold scale to compute x position of labels
  // set by `setScaleType`
  let xScale;

  let height = 20;

  // will hold scale type string
  // set by `setScaleType`
  let scaleType;

  $: scaleType = setScaleType(scale);

  $: console.log("scaleType", scaleType);
  $: console.log("domain", domain);
  $: console.log("range", range);

  /**
   * Determine what type of scale is being used
   * @param { Object } scale the d3 scale in question
   * @returns { scaleType }
   */
  function setScaleType(scale) {
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
          return [0, width];
        }
      });
      return "sequential";
    }
    // Threshold
    else if (scale.invertExtent) {
      return "threshold";
    }
    // Ordinal
    else {
      return "oridnal";
    }
  }
</script>

<div class="scale-wrapper" bind:clientWidth={width}>
  <svg {width} {height}>
    {#if scaleType === "continuous"}
      <defs>
        <linearGradient id="continuous-gradient">
          {#each range as color, i}
            <stop offset="{(100 / (range.length - 1)) * i}%" stop-color={color} />
          {/each}
        </linearGradient>
      </defs>
      <rect fill="url(#continuous-gradient)" {width} {height}></rect>
    {:else if scaleType === "sequential"}
      <defs>
        <linearGradient id="sequential-gradient">
        <!-- @TODO figure out how to make this work for sequential AND diverging -->
          {#each domain as stop, i}
            {@const interpolate = scale.interpolator()}
            <stop offset="{100 * (i/(domain.length - 1))}%" stop-color={interpolate(i)} />
          {/each}
        </linearGradient>
      </defs>
      <rect fill="url(#sequential-gradient)" {width} {height}></rect>
    {/if}
  </svg>
</div>

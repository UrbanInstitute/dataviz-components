<!--
  @component
  Generates an SVG map using the `geoPath` function from [d3-geo](https://github.com/d3/d3-geo).
 -->
<script>
  import { getContext, createEventDispatcher } from "svelte";
  import urbanColors from "$lib/utils/urbanColors.js";
  import { geoPath } from "d3-geo";
  import { raise } from "layercake";

  const { data, width, height, zGet } = getContext("LayerCake");
  const { projection, features: globalFeatures } = getContext("map");

  /**
   * A color string or a function that takes a feature and returns a color string
   * @type { (Object) => string | string } [fill = urbanColors.blue] A string or function that returns a string to use as this layers fill color.
   */
  export let fill = urbanColors.blue;

  /**
   * A color string or a function that takes a feature and returns a color string
   * @type { (Object) => string | string } [fill = urbanColors.blue] A string or function that returns a string to use as this layers stroke color.
   */
  export let stroke = urbanColors.white;

  export let strokeWidth = 0.5;

  /** @type {Array} [features] - A list of GeoJSON features. Use this if you want to draw a subset of the features in `$data` while keeping the zoom on the whole GeoJSON feature set. By default, it plots everything in `$data.features` if left unset. */
  export let features = undefined;

  /* --------------------------------------------
   * Here's how you would do cross-component hovers
   */
  const dispatch = createEventDispatcher();

  function getFill(feature) {
    if (typeof fill === "string") {
      return fill;
    }
    return fill(feature);
  }

  function getStroke(feature) {
    if (typeof stroke === "string") {
      return stroke;
    }
    return stroke(feature);
  }

  $: fitSizeRange = [$width, $height];

  $: console.log($globalFeatures);
  $: projectionFn = $projection().fitSize(fitSizeRange, {type: "FeatureCollection", features: $globalFeatures});

  $: geoPathFn = geoPath(projectionFn);

  function handleMousemove(feature) {
    return function handleMousemoveFn(e) {
      raise(this);
      // When the element gets raised, it flashes 0,0 for a second so skip that
      if (e.layerX !== 0 && e.layerY !== 0) {
        dispatch("mousemove", { e, props: feature.properties });
      }
    };
  }
</script>

<g
  class="map-group"
  on:mouseout={(e) => dispatch("mouseout")}
  on:blur={(e) => dispatch("mouseout")}
>
  {#each features || $globalFeatures as feature}
    <path
      class="feature-path"
      fill={getFill(feature)}
      stroke={getStroke(feature)}
      stroke-width={strokeWidth}
      d={geoPathFn(feature)}
      on:mousemove={handleMousemove(feature)}
    ></path>
  {/each}
</g>

<style>
  .feature-path:hover {
    stroke: #000;
    stroke-width: 2px;
  }
  /**
   * Disable the outline on feature click.
   * Depending on map funtionality and accessiblity issues,
   * you may not want this rule. Read more:
   * https://developer.mozilla.org/en-US/docs/Web/CSS/:focus
   * https://github.com/mhkeller/layercake/issues/63
   */
  .feature-path:focus {
    outline: none;
  }
</style>

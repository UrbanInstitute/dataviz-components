<script>
  import { getContext, createEventDispatcher } from "svelte";
  import urbanColors from "$lib/utils/urbanColors.js";
  import { geoPath } from "d3-geo";
  import { raise } from "layercake";

  const { width, height } = getContext("LayerCake");
  const { projection, features: globalFeatures, transform } = getContext("map");

  /**
   * A color string or a function that takes a feature and returns a color string
   * @type { (Object) => string | string } [fill = urbanColors.blue] A string or function that returns a string to use as this layers fill color.
   */
  export let fill = urbanColors.blue;

  /**
   * Optional color to use for a feature's fill when hovered
   * @type { string }
   */
  export let hoverFill = undefined;

  /**
   * Color to use for values that are NA or otherwise undefined in the color scale
   * @type { string }
   */
  export let naFill = urbanColors.gray_shade_light;

  /**
   * A color string or a function that takes a feature and returns a color string
   * @type { (Object) => string | string } [fill = urbanColors.blue] A string or function that returns a string to use as this layers stroke color.
   */
  export let stroke = urbanColors.white;

  /*
   * Optional color string for hovered feature stroke
   * @type { string }
   */
  export let hoverStroke = undefined;

  /*
   * Stroke width of each feature
   * @type { number } [strokeWidth = 0.5]
   */
  export let strokeWidth = 0.5;

  /*
   * Stroke width of each feature when hovered
   * @type { number } [strokeWidth = undefined]
   */
  export let hoverStrokeWidth = undefined;

  /**
   * Should the project flip the Y axis?
   * @type { boolean } [reflectY = false]
   */
  export let reflectY = false;

  /** @type {Array} [features] - A list of GeoJSON features. Use this if you want to draw a subset of the features in `$data` while keeping the zoom on the whole GeoJSON feature set. By default, it plots everything in `$data.features` if left unset. */
  export let features = undefined;


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

  $: projectionFn = reflectY
    ? $projection()
        .reflectY(true)
        .fitSize(fitSizeRange, { type: "FeatureCollection", features: $globalFeatures })
    : $projection().fitSize(fitSizeRange, { type: "FeatureCollection", features: $globalFeatures });

  $: geoPathFn = geoPath(projectionFn);

  const dispatch = createEventDispatcher();

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
  class="map-layer"
  on:mouseout={(e) => dispatch("mouseout")}
  on:blur={(e) => dispatch("mouseout")}
  style:--hover-fill={hoverFill || null}
  style:--hover-stroke={hoverStroke || stroke}
  style:--hover-stroke-width="{(hoverStrokeWidth || strokeWidth)/$transform.k}px"
  class:hover-fill={hoverFill}
>
  {#each features || $globalFeatures as feature}
    <path
      class="feature-path"
      fill={getFill(feature) || naFill}
      stroke={getStroke(feature)}
      stroke-width={strokeWidth/$transform.k}
      d={geoPathFn(feature)}
      on:mousemove={handleMousemove(feature)}
    ></path>
  {/each}
</g>

<style>
  .feature-path:hover {
    stroke: var(--hover-stroke);
    stroke-width: var(--hover-stroke-width);
  }
  .hover-fill .feature-path:hover {
    fill: var(--hover-fill);
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

<script>
  import { getContext, createEventDispatcher } from "svelte";
  import urbanColors from "$lib/utils/urbanColors.js";
  import { geoPath } from "d3-geo";
  import { raise } from "layercake";
  import { getFill, getStroke } from "./lib.js";

  const { width, height, projection, features: globalFeatures, transform } = getContext("map");

  /**
   * A color string or a function that takes a feature and returns a color string. Use in combination with a D3 scale for a dynamic color encoding.
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

  /**
   * A list of GeoJSON features. By default this component will render the features set in the parent SVGMap, but if `features` is defined, it plots those instead.
   * @type {Array} [features]
   */
  export let features = undefined;

  /**
   * Boolean that determines if this layer should respond to pointer events and dispatch events.
   * @type {boolean} [pointerEvents]
   */
  export let pointerEvents = true;

  /*
   * Optional aria role string to be applied to each feature. Defaults to no role, assuming that SVG is hidden from the accessiblity tree.
   * @type { string } [ariaRole = undefined]
   */
  export let ariaRole = undefined;

  /*
   * Optional aria label string or function to be applied to each feature. Defaults to no label, assuming that SVG is hidden from the accessiblity tree. If a function is passed, it should take a `feature` as an argument and return a label string.
   * @type { string | (Object) => string } [ariaLabel = undefined]
   */
  export let ariaLabel = undefined;

  $: fitSizeRange = [$width, $height];

  $: projectionFn = reflectY
    ? $projection()
        .reflectY(true)
        .fitSize(fitSizeRange, { type: "FeatureCollection", features: $globalFeatures })
    : $projection().fitSize(fitSizeRange, { type: "FeatureCollection", features: $globalFeatures || features });

  $: geoPathFn = geoPath(projectionFn);

  const dispatch = createEventDispatcher();

  function getAriaLabel(feature) {
    if (typeof ariaLabel === "string" || typeof ariaLabel === "undefined") {
      return ariaLabel;
    }
    return ariaLabel(feature);
  }

  function handleMousemove(e, feature) {
    raise(e.target);
    // When the element gets raised, it flashes 0,0 for a second so skip that
    if (e.layerX !== 0 && e.layerY !== 0) {
      dispatch("mousemove", { e, props: feature.properties });
    }
  }

  function handleClick(e, feature) {
    raise(e.target)
    dispatch("click", {e, props: feature.properties})
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<g
  class="map-layer polygon-layer"
  on:mouseout={(e) => dispatch("mouseout")}
  on:blur={(e) => dispatch("mouseout")}
  style:--hover-fill={hoverFill || null}
  style:--hover-stroke={hoverStroke || null}
  style:--hover-stroke-width="{(hoverStrokeWidth || strokeWidth) / $transform.k}px"
  style:pointe-events={pointerEvents ? "auto" : "none"}
  class:hover-fill={hoverFill}
>
  {#each features || $globalFeatures as feature}
    <path
      class="feature-path"
      role={ariaRole}
      label={getAriaLabel(feature)}
      style:--hover-stroke={hoverStroke || getStroke(feature, stroke)}
      fill={getFill(feature, fill, naFill)}
      stroke={getStroke(feature, stroke)}
      stroke-width={strokeWidth / $transform.k}
      d={geoPathFn(feature)}
      on:mousemove={(e) => handleMousemove(e, feature)}
      on:click={(e) => handleClick(e, feature)}
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
  .feature-path:focus, .polygon-layer:focus {
    outline: none;
  }
</style>

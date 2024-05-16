<script>
  import { getContext, createEventDispatcher, afterUpdate } from "svelte";
  import urbanColors from "$lib/utils/urbanColors.js";
  import { geoPath } from "d3-geo";
  import { getFill, getStroke } from "../lib.js";

  const { projection, features: globalFeatures, transform } = getContext("map");

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

  /*
   * Optional function that takes a feature as an argument, and if it returns true, set's that feature to a highlighted state.
   * @type {(Object) => boolean}
   */
  export let highlightFeature = undefined;

  $: geoPathFn = geoPath($projection);

  const dispatch = createEventDispatcher();

  // holds main dom node
  let el;

  // holds highlighted feature DOM element
  let highlightFeatureNode;

  function getAriaLabel(feature) {
    if (typeof ariaLabel === "string" || typeof ariaLabel === "undefined") {
      return ariaLabel;
    }
    return ariaLabel(feature);
  }

  function handleMousemove(e, feature) {
    raise(e.target);
    if (highlightFeatureNode) {
      raise(highlightFeatureNode);
    }
    dispatch("mousemove", { e, props: feature.properties });
  }

  function handleClick(e, feature) {
    raise(e.target);
    if (highlightFeatureNode) {
      raise(highlightFeatureNode);
    }
    dispatch("click", { e, props: feature.properties });
  }

  function raise(el) {
    el.parentNode.appendChild(el);
  }

  afterUpdate(() => {
    highlightFeatureNode = el.querySelector("path.highlight");
  });
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
  bind:this={el}
>
  {#each features || $globalFeatures as feature}
    <path
      class="polygon-feature"
      class:highlight={highlightFeature ? highlightFeature(feature) : false}
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
  .polygon-feature:hover,
  .polygon-feature.highlight {
    stroke: var(--hover-stroke);
    stroke-width: var(--hover-stroke-width);
  }
  .hover-fill .polygon-feature:hover,
  .hover-fill .polygon-feature.highlight {
    fill: var(--hover-fill);
  }
  .polygon-feature:focus,
  .polygon-layer:focus {
    outline: none;
  }
</style>
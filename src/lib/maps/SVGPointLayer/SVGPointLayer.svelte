<script>
  import { getContext, createEventDispatcher } from "svelte";
  import { geoPath } from "d3-geo";
  import { urbanColors } from "$lib/utils";
  import { getFill, getStroke, raise, getTooltipProps, getHighlightFeature } from "../lib.js";

  const {
    projection,
    features: globalFeatures,
    transform,
    handleLayerClick,
    handleLayerMousemove,
    stickyHighlight
  } = getContext("map");

  /**
   * A list of GeoJSON features. By default this component will render the features set in the parent SVGMap, but if `features` is defined, it plots those instead. Points are rendered as SVG `circle` elements by default. Polygon features are converted to points with `d3.geoPath().centroid`.
   * @type {Array} [features]
   */
  export let features = undefined;

  /**
   * A color string or a function that takes a feature and returns a color string. Use in combination with a D3 scale for a dynamic color encoding.
   * @type { (Object) => string | string } [fill = urbanColors.blue] A string or function that returns a string to use as this layers fill color.
   */
  export let fill = urbanColors.white;

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
  export let stroke = urbanColors.black;

  /**
   * Optional color string for hovered feature stroke
   * @type { string }
   */
  export let hoverStroke = undefined;

  /**
   * Stroke width of each feature
   * @type { number } [strokeWidth = 0.5]
   */
  export let strokeWidth = 0;

  /**
   * Stroke width of each feature when hovered
   * @type { number } [strokeWidth = undefined]
   */
  export let hoverStrokeWidth = undefined;

  /**
   * Function or static value to use for radius of circle
   * @type {number | (Object) => number}
   */
  export let r = 4;

  /**
   * Opacity of point circles
   * @type { number }
   */
  export let opacity = 1;

  /**
   * Optional aria role string to be applied to each feature. Defaults to no role, assuming that SVG is hidden from the accessiblity tree.
   * @type { string } [ariaRole = undefined]
   */
  export let ariaRole = undefined;

  /**
   * Optional aria label string or function to be applied to each feature. Defaults to no label, assuming that SVG is hidden from the accessiblity tree. If a function is passed, it should take a `feature` as an argument and return a label string.
   * @type { string | (Object) => string } [ariaLabel = undefined]
   */
  export let ariaLabel = undefined;

  /**
   * Optional object that will be compared with each `feature` displayed in the layer. If all of the key/value pairs in `highlightFeature` are equal to the properties of a given `feature`, set that `feature` to a highlighted state.
   * @type {{ string: any }}
   */
  export let highlightFeature = undefined;

  /**
   * Boolean that determines if this layer should respond to pointer events and dispatch events.
   * @type {boolean} [pointerEvents = true]
   */
  export let pointerEvents = true;

  /**
   * Boolean that determines if this layer should populate the tooltip slot when interacted with.
   * @type {boolean} [tooltip = false]
   */
  export let tooltip = false;

  $: geoPathFn = geoPath($projection);

  const dispatch = createEventDispatcher();

  // holds main dom node
  let el;

  // holds highlighted feature DOM element
  let highlightFeatureNode;

  $: if (highlightFeatureNode) {
    raise(highlightFeatureNode);
  }

  function getAriaLabel(feature) {
    if (typeof ariaLabel === "string" || typeof ariaLabel === "undefined") {
      return ariaLabel;
    }
    return ariaLabel(feature);
  }

  function getRadius(feature) {
    if (typeof r == "number") {
      return r;
    }
    return r(feature);
  }

  function handleMousemove(e, feature) {
    raise(e.target);
    if (highlightFeatureNode) {
      raise(highlightFeatureNode);
    }
    if (tooltip) {
      handleLayerMousemove(getTooltipProps(e, feature));
    }
    dispatch("mousemove", { e, props: feature.properties });
  }

  function handleClick(e, feature) {
    raise(e.target);
    if (highlightFeatureNode) {
      raise(highlightFeatureNode);
    }
    if (tooltip) {
      handleLayerClick(getTooltipProps(e, feature));
    }
    dispatch("click", { e, props: feature.properties });
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<g
  class="point-layer map-layer"
  on:mouseout={(e) => dispatch("mouseout")}
  on:blur={(e) => dispatch("mouseout")}
  style:pointer-events={pointerEvents ? "auto" : "none"}
  style:--hover-stroke-width="{(hoverStrokeWidth || strokeWidth) / $transform.k}px"
>
  {#each features || $globalFeatures as feature}
    {@const [x, y] = geoPathFn.centroid(feature)}
    {@const featureStroke = getStroke(feature, stroke)}
    {@const featureFill = getFill(feature, fill, naFill)}
    {#if $$slots.default}
      <!-- Optional slot that renders once for each feature. Overrides default SVG `<circle>` element.-->
      <slot {feature} {x} {y} />
    {:else}
      <circle
        class="point-feature"
        role={ariaRole}
        label={getAriaLabel(feature)}
        class:highlight={getHighlightFeature(feature, $stickyHighlight, highlightFeature)}
        cx={x}
        cy={y}
        {opacity}
        fill={featureFill}
        r={getRadius(feature) / $transform.k}
        stroke-width={strokeWidth / $transform.k}
        style:--hover-fill={hoverFill || featureFill}
        style:--hover-stroke={hoverStroke || featureStroke}
        class:hover-fill={typeof hoverFill !== "undefined"}
        stroke={featureStroke}
        on:mousemove={(e) => handleMousemove(e, feature)}
        on:click={(e) => handleClick(e, feature)}
      />
    {/if}
  {/each}
</g>

<style>
  .point-feature.hover-fill:hover,
  .point-feature.highlight {
    fill: var(--hover-fill);
  }
  .point-feature:hover {
    stroke: var(--hover-stroke);
    stroke-width: var(--hover-stroke-width);
  }
  .point-feature:focus,
  .point-layer:focus {
    outline: none;
  }
</style>

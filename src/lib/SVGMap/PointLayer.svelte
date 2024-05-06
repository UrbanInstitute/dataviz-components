<script>
  import { getContext } from "svelte";
  import { geoPath } from "d3-geo";
  import { urbanColors } from "$lib/utils";
  import { getFill, getStroke } from "./lib.js";

  const { width, height, transform, projection, features: globalFeatures } = getContext("map");

  /**
   * A list of GeoJSON features. By default this component will render the features set in the parent SVGMap, but if `features` is defined, it plots those instead. Points are rendered as SVG `circle` elements by default. Polygon features are converted to points with `d3.geoPath().centroid`.
   * @type {Array} [features]
   */
  export let features;

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

  export let stroke = urbanColors.black;
  export let strokeWidth = 0;

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

  $: fitSizeRange = [$width, $height];

  $: projectionFn = $projection().fitSize(fitSizeRange, {
    type: "FeatureCollection",
    features: $globalFeatures || features
  });

  $: geoPathFn = geoPath(projectionFn);

  function getRadius(feature) {
    if (typeof r == "number") {
      return r;
    }
    return r(feature);
  }
</script>

<g>
  {#each features || $globalFeatures as feature}
    {@const [x, y] = geoPathFn.centroid(feature)}
    {#if $$slots.default}
      <!-- Optional slot that renders once for each feature. Overrides default SVG `<circle>` element.-->
      <slot {feature} {x} {y} {hoverFill} />
    {:else}
      <circle
        class="point-feature"
        cx={x}
        cy={y}
        {opacity}
        fill={getFill(feature, fill, naFill)}
        r={getRadius(feature) / $transform.k}
        stroke-width={strokeWidth / $transform.k}
        style:--hover-fill={hoverFill}
        class:hover-fill={typeof hoverFill !== "undefined"}
        {stroke}
      />
    {/if}
  {/each}
</g>

<style>
.point-feature.hover-fill:hover {
  fill: var(--hover-fill);
}
</style>

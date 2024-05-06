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
  export let r = 3;

  $: fitSizeRange = [$width, $height];

  $: projectionFn = $projection().fitSize(fitSizeRange, {
    type: "FeatureCollection",
    features: $globalFeatures || features
  });

  $: geoPathFn = geoPath(projectionFn);
</script>

<g>
  {#each features || $globalFeatures as feature}
    {@const [x, y] = geoPathFn.centroid(feature)}
    {#if $$slots.default}
      <!-- Optional slot that renders once for each feature. Overrides default SVG `<circle>` element. Receives `feature`, `x` and `y` as props.-->
      <slot {feature} {x} {y} />
    {:else}
      <circle
        cx={x}
        cy={y}
        {fill}
        r={r / $transform.k}
        stroke-width={strokeWidth / $transform.k}
        {stroke}
      />
    {/if}
  {/each}
</g>

<script>
  import { getContext, createEventDispatcher } from "svelte";
  import { geoPath } from "d3-geo";
  import { urbanColors } from "$lib/utils";
  import { fade } from "svelte/transition";

  const { transform, projection, features: mapFeatures } = getContext("map");

  /**
   * A list of GeoJSON features. By default this component will render the features set in the parent SVGMap, but if `features` is defined, it plots those instead. Features are rendered as SVG `text` elements. Polygon features are converted to points with `d3.geoPath().centroid`.
   * @type {Array} [features]
   */
  export let features = undefined;

  /**
   * Color of the text label
   * @type { string } [fontColor=urbanColors.white]
   */
  export let fontColor = urbanColors.white;

  /**
   * Font size of the text label
   * @type { number } [fontSize=12]
   */
  export let fontSize = 12;

  /**
   * Color of the text label outline
   * @type { string } [stroke=urbanColors.black]
   */
  export let stroke = urbanColors.black;

  /**
   * Width of the outline of the text label
   * @type { number } [strokeWidth=3]
   */
  export let strokeWidth = 3;
  /**
   * Text anchor property of the label
   * @type { string } [textAnchor="middle"]
   */
  export let textAnchor = "middle";
  /**
   * `dy` property of the label
   * @type { string } [dy="-.5em"]
   */
  export let dy = "-.5em";

  /**
   * Minumum zoom factor at which to render layer relative to the default zoom
   * @type { number } [minZoom = 0]
   */
  export let minZoom = 0;

  /**
   * Boolean that determines if this layer should respond to pointer events and dispatch events.
   * @type {boolean} [pointerEvents]
   */
  export let pointerEvents = true;

  /**
   * Function that returns the string to be displayed in the label when passed a feature object
   * @param { Object } d the feature on which the label will be based
   * @returns { string }
   */
  export let getLabel = (d) => d;

  const dispatch = createEventDispatcher();

  $: geoPathFn = geoPath($projection);

  function handleMousemove(e, feature) {
    if (e.layerX !== 0 && e.layerY !== 0) {
      dispatch("mousemove", { e, props: feature.properties });
    }
  }

  function handleClick(e, feature) {
    dispatch("click", { e, props: feature.properties });
  }
</script>

{#if !minZoom || $transform.k >= minZoom}
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <g
    class="map-layer label-layer"
    on:mouseout={(e) => dispatch("mouseout")}
    on:blur={(e) => dispatch("mouseout")}
    transition:fade={{ duration: 250 }}
    style:pointer-events={pointerEvents ? "auto" : "none"}
  >
    {#each features || $mapFeatures as feature}
      {@const [x, y] = geoPathFn.centroid(feature)}
      <g class="label-feature">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <text
          {x}
          {y}
          {dy}
          style:font-size="{fontSize / $transform.k}px"
          stroke-width="{strokeWidth / $transform.k}px"
          {stroke}
          opacity={0.5}
          stroke-linejoin="round"
          on:mousemove={(e) => handleMousemove(e, feature)}
          on:click={(e) => handleClick(e, feature)}
          text-anchor={textAnchor}><slot props={feature.properties}>{getLabel(feature)}</slot></text
        >
        <text
          {x}
          {y}
          {dy}
          style:font-size="{fontSize / $transform.k}px"
          fill={fontColor}
          text-anchor={textAnchor}><slot props={feature.properties}>{getLabel(feature)}</slot></text
        >
      </g>
    {/each}
  </g>
{/if}

<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  import urbanColors from "$lib/utils/urbanColors.js";
  import { geoPath } from "d3-geo";
  import { getFill, getStroke, raise, getHighlightFeature } from "../lib.js";
  import { useSVGMapContext } from "../SVGMap/context.svelte.js";

  /**
   * @typedef {Object} Props
   * @property {import("d3-geo").GeoPermissibleObjects[]=} features A list of GeoJSON features. By default this component will render the features set in the parent SVGMap, but if `features` is defined, it plots those instead.
   * @property {boolean=} pointerEvents Boolean that determines if this layer should respond to pointer events and dispatch events.
   * @property {(feature: any) => string | string=} fill A color string or a function that takes a feature and returns a color string. Use in combination with a D3 scale for a dynamic color encoding.
   * @property {string=} hoverFill Optional color to use for a feature's fill when hovered.
   * @property {string=} naFill Color to use for values that are NA or otherwise undefined in the color scale.
   * @property {(feature: any) => string | string=} stroke A color string or a function that takes a feature and returns a color string.
   * @property {string=} hoverStroke Optional color string for hovered feature stroke.
   * @property {number=} strokeWidth Stroke width of each feature.
   * @property {number=} hoverStrokeWidth Stroke width of each feature when hovered.
   * @property {string=} ariaRole Optional aria role string applied to each feature.
   * @property {string | ((feature: any) => string)=} ariaLabel Optional aria label string or function applied to each feature.
   * @property {Record<string, any>=} highlightFeature Optional object matched against feature properties to determine highlight state.
   * @property {boolean=} tooltip Boolean that determines if this layer should populate the tooltip slot when interacted with.
   * @property {(event: CustomEvent<{ e: PointerEvent; props: any }>) => void=} onclick Optional click callback.
   * @property {(event: CustomEvent<{ e: PointerEvent; props: any }>) => void=} onmousemove Optional mousemove callback.
   * @property {(event: CustomEvent<{ e: PointerEvent }>) => void=} onmouseout Optional mouseout callback.
   */

  /** @type {Props} */
  let {
    features = undefined,
    pointerEvents = true,
    fill = urbanColors.blue,
    hoverFill = undefined,
    naFill = urbanColors.gray_shade_light,
    stroke = urbanColors.white,
    hoverStroke = undefined,
    strokeWidth = 0.5,
    hoverStrokeWidth = undefined,
    ariaRole = undefined,
    ariaLabel = undefined,
    highlightFeature = undefined,
    tooltip = false,
    onclick = undefined,
    onmousemove = undefined,
    onmouseout = undefined
  } = $props();

  const map = useSVGMapContext();

  const geoPathFn = $derived(geoPath(map.projection));

  // holds main dom node
  let el;

  function getAriaLabel(feature) {
    if (typeof ariaLabel === "string" || typeof ariaLabel === "undefined") {
      return ariaLabel;
    }
    return ariaLabel(feature);
  }

  function raiseHighlight() {
    const highlightNode = el?.querySelector(".polygon-feature.highlight");
    if (highlightNode) {
      raise(highlightNode);
    }
  }

  function handlePointermove(e, feature) {
    raise(e.target);
    raiseHighlight();
    map.onPointerMove(e, feature.properties, { tooltip });
    onmousemove?.(
      new CustomEvent("mousemove", {
        detail: { e, props: feature.properties }
      })
    );
  }

  function handlePointerdown(e, feature) {
    raise(e.target);
    raiseHighlight();
    map.onPointerDown(e, feature.properties, { tooltip });
    onclick?.(
      new CustomEvent("click", {
        detail: { e, props: feature.properties }
      })
    );
  }

  function handlePointerout(e) {
    map.onPointerOut(e);
    onmouseout?.(
      new CustomEvent("mouseout", {
        detail: { e }
      })
    );
  }

  $effect(() => {
    map.stickyHighlight;
    highlightFeature;
    features;
    map.features;
    raiseHighlight();
  });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<g
  class="map-layer polygon-layer"
  role="presentation"
  onpointerout={handlePointerout}
  onblur={handlePointerout}
  style:--hover-fill={hoverFill || null}
  style:--hover-stroke={hoverStroke || null}
  style:--hover-stroke-width={`${(hoverStrokeWidth || strokeWidth) / map.transform.k}px`}
  style:pointer-events={pointerEvents ? "auto" : "none"}
  class:hover-fill={hoverFill}
  bind:this={el}
>
  {#each features || map.features as feature}
    <path
      class="polygon-feature"
      class:highlight={getHighlightFeature(feature, map.stickyHighlight, highlightFeature)}
      role={ariaRole}
      label={getAriaLabel(feature)}
      style:--hover-stroke={hoverStroke || getStroke(feature, stroke)}
      fill={getFill(feature, fill, naFill)}
      stroke={getStroke(feature, stroke)}
      stroke-width={strokeWidth / map.transform.k}
      d={geoPathFn(feature)}
      onpointermove={(e) => handlePointermove(e, feature)}
      onpointerdown={(e) => handlePointerdown(e, feature)}
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

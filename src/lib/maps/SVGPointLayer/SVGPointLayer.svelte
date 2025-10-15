<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  import { geoPath } from "d3-geo";
  import { urbanColors } from "$lib/utils";
  import { getFill, getStroke, raise, getTooltipProps, getHighlightFeature } from "../lib.js";
  import { useSVGMapContext } from "../SVGMap/context.svelte.js";

  /**
   * @typedef {Object} Props
   * @property {import("d3-geo").GeoPermissibleObjects[]=} features A list of GeoJSON features rendered by this layer.
   * @property {(feature: any) => string | string=} fill A color string or function applied to fills.
   * @property {string=} hoverFill Optional fill override when hovered.
   * @property {string=} naFill Color for NA or undefined values.
   * @property {(feature: any) => string | string=} stroke Stroke color or accessor.
   * @property {string=} hoverStroke Optional stroke override when hovered.
   * @property {number=} strokeWidth Stroke width of each feature.
   * @property {number=} hoverStrokeWidth Stroke width when hovered.
   * @property {number | ((feature: any) => number)=} r Function or static radius for the circle fallback.
   * @property {number=} opacity Opacity of point circles.
   * @property {string=} ariaRole Optional aria role string applied to each feature.
   * @property {string | ((feature: any) => string)=} ariaLabel Optional aria label string or accessor.
   * @property {Record<string, any>=} highlightFeature Object compared to feature properties for highlight.
   * @property {boolean=} pointerEvents Whether the layer responds to pointer events.
   * @property {boolean=} tooltip Whether the layer should populate the tooltip slot.
   * @property {(event: CustomEvent<{ e: MouseEvent; props: any }>) => void=} onclick Optional click callback.
   * @property {(event: CustomEvent<{ e: MouseEvent; props: any }>) => void=} onmousemove Optional mousemove callback.
   * @property {(event: CustomEvent<{ e: MouseEvent }>) => void=} onmouseout Optional mouseout callback.
   * @property {import("svelte").Snippet<[feature: any, x: number, y: number]>=} children Optional snippet used to render each point.
   */

  /** @type {Props} */
  let {
    features = undefined,
    fill = urbanColors.white,
    hoverFill = undefined,
    naFill = urbanColors.gray_shade_light,
    stroke = urbanColors.black,
    hoverStroke = undefined,
    strokeWidth = 0,
    hoverStrokeWidth = undefined,
    r = 4,
    opacity = 1,
    ariaRole = undefined,
    ariaLabel = undefined,
    highlightFeature = undefined,
    pointerEvents = true,
    tooltip = false,
    onclick = undefined,
    onmousemove = undefined,
    onmouseout = undefined,
    children = undefined
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

  function getRadius(feature) {
    if (typeof r == "number") {
      return r;
    }
    return r(feature);
  }

  function raiseHighlight() {
    const highlightNode = el?.querySelector(".point-feature.highlight");
    if (highlightNode) {
      raise(highlightNode);
    }
  }

  function handleMousemove(e, feature) {
    raise(e.target);
    raiseHighlight();
    if (tooltip) {
      map.handleLayerMousemove(getTooltipProps(e, feature));
    }
    onmousemove?.(
      new CustomEvent("mousemove", {
        detail: { e, props: feature.properties }
      })
    );
  }

  function handleClick(e, feature) {
    raise(e.target);
    raiseHighlight();
    if (tooltip) {
      map.handleLayerClick(getTooltipProps(e, feature));
    }
    onclick?.(
      new CustomEvent("click", {
        detail: { e, props: feature.properties }
      })
    );
  }

  function handleMouseout(e) {
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
  class="point-layer map-layer"
  role="presentation"
  onmouseout={handleMouseout}
  onblur={handleMouseout}
  style:pointer-events={pointerEvents ? "auto" : "none"}
  style:--hover-stroke-width={`${(hoverStrokeWidth || strokeWidth) / map.transform.k}px`}
>
  {#each features || map.features as feature}
    {@const [x, y] = geoPathFn.centroid(feature)}
    {@const featureStroke = getStroke(feature, stroke)}
    {@const featureFill = getFill(feature, fill, naFill)}
    {#if children}
      {@render children(feature, x, y)}
    {:else}
      <circle
        class="point-feature"
        role={ariaRole}
        label={getAriaLabel(feature)}
        class:highlight={getHighlightFeature(feature, map.stickyHighlight, highlightFeature)}
        cx={x}
        cy={y}
        {opacity}
        fill={featureFill}
        r={getRadius(feature) / map.transform.k}
        stroke-width={strokeWidth / map.transform.k}
        style:--hover-fill={hoverFill || featureFill}
        style:--hover-stroke={hoverStroke || featureStroke}
        class:hover-fill={typeof hoverFill !== "undefined"}
        stroke={featureStroke}
        onmousemove={(e) => handleMousemove(e, feature)}
        onclick={(e) => handleClick(e, feature)}
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

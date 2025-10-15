<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  import { geoPath } from "d3-geo";
  import { urbanColors } from "$lib/utils";
  import { fade } from "svelte/transition";
  import { raise } from "../lib.js";
  import { useSVGMapContext } from "../SVGMap/context.svelte.js";

  /**
   * @typedef {Object} Props
   * @property {import("d3-geo").GeoPermissibleObjects[]=} features A list of GeoJSON features rendered as labels.
   * @property {string=} fontColor Color of the text label.
   * @property {number=} fontSize Font size of the label text.
   * @property {string=} stroke Color of the text outline.
   * @property {number=} strokeWidth Width of the text outline.
   * @property {string=} textAnchor Text anchor value for the label.
   * @property {string=} dy SVG `dy` offset applied to the label.
   * @property {number=} minZoom Minimum zoom factor at which to render the layer.
   * @property {boolean=} pointerEvents Whether the layer responds to pointer events.
   * @property {(feature: any) => string=} getLabel Function that returns the label text for a feature.
   * @property {boolean=} tooltip Whether the layer should populate the tooltip slot.
   * @property {(event: CustomEvent<{ e: PointerEvent; props: any }>) => void=} onclick Optional click callback.
   * @property {(event: CustomEvent<{ e: PointerEvent; props: any }>) => void=} onmousemove Optional mousemove callback.
   * @property {(event: CustomEvent<{ e: PointerEvent }>) => void=} onmouseout Optional mouseout callback.
   * @property {import("svelte").Snippet<[props: any]>=} children Optional snippet to render label content.
   */

  /** @type {Props} */
  let {
    features = undefined,
    fontColor = urbanColors.white,
    fontSize = 12,
    stroke = urbanColors.black,
    strokeWidth = 3,
    textAnchor = "middle",
    dy = "-.5em",
    minZoom = 0,
    pointerEvents = true,
    getLabel = (d) => d,
    tooltip = false,
    onclick = undefined,
    onmousemove = undefined,
    onmouseout = undefined,
    children = undefined
  } = $props();

  const map = useSVGMapContext();

  const geoPathFn = $derived(geoPath(map.projection));

  function handlePointermove(e, feature) {
    raise(e.target);
    map.onPointerMove(e, feature.properties, { tooltip });
    onmousemove?.(
      new CustomEvent("mousemove", {
        detail: { e, props: feature.properties }
      })
    );
  }

  function handlePointerdown(e, feature) {
    raise(e.target);
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
</script>

{#if !minZoom || map.transform.k >= minZoom}
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <g
    class="map-layer label-layer"
    role="presentation"
    onpointerout={handlePointerout}
    onblur={handlePointerout}
    transition:fade={{ duration: 250 }}
    style:pointer-events={pointerEvents ? "auto" : "none"}
  >
    {#each features || map.features as feature}
      {@const [x, y] = geoPathFn.centroid(feature)}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <g class="label-feature">
        <text
          {x}
          {y}
          {dy}
          style:font-size={`${fontSize / map.transform.k}px`}
          stroke-width={`${strokeWidth / map.transform.k}px`}
          {stroke}
          opacity={0.5}
          stroke-linejoin="round"
          role="presentation"
          onpointermove={(e) => handlePointermove(e, feature)}
          onpointerdown={(e) => handlePointerdown(e, feature)}
          text-anchor={textAnchor}
        >
          <!-- Default slot overrides output of `getLabel` prop -->
          {#if children}
            {@render children(feature.properties)}
          {:else}
            {getLabel(feature)}
          {/if}
        </text>
        <text
          {x}
          {y}
          {dy}
          style:font-size={`${fontSize / map.transform.k}px`}
          fill={fontColor}
          text-anchor={textAnchor}
          >{#if children}{@render children(feature.properties)}{:else}{getLabel(feature)}{/if}</text
        >
      </g>
    {/each}
  </g>
{/if}

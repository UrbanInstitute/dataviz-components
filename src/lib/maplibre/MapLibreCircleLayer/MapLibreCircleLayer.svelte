<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script>
  import { onMount } from "svelte";
  import urbanColors from "$lib/utils/urbanColors.js";
  import { useMapLibreMapContext } from "../MapLibreMap/context.svelte.js";
  import { useSourceContext, generateId, mergePaint } from "../lib.js";

  /**
   * @typedef {Object} Props
   * @property {string} [id] Layer ID. Auto-generated if not provided.
   * @property {Object} [paint] Raw MapLibre paint properties (escape hatch).
   * @property {Object} [layout] Raw MapLibre layout properties (escape hatch).
   * @property {Array} [filter] MapLibre filter expression.
   * @property {number} [minzoom] Min zoom visibility.
   * @property {number} [maxzoom] Max zoom visibility.
   * @property {string} [beforeId] Insert layer before this ID.
   * @property {boolean} [pointerEvents=true] Enable pointer events.
   * @property {boolean} [tooltip=false] Populate tooltip on hover.
   * @property {(e: CustomEvent) => void} [onclick] Layer click callback.
   * @property {(e: CustomEvent) => void} [onmousemove] Layer mousemove callback.
   * @property {(e: CustomEvent) => void} [onmouseout] Layer mouseout callback.
   * @property {string} [fill=urbanColors.blue] Circle color.
   * @property {string} [hoverFill] Circle color on hover (via feature-state).
   * @property {number} [r=4] Circle radius in pixels.
   * @property {string} [stroke=urbanColors.black] Circle stroke color.
   * @property {number} [strokeWidth=0] Circle stroke width.
   * @property {number} [opacity=1] Circle opacity.
   */

  /** @type {Props} */
  let {
    id = undefined,
    paint = undefined,
    layout = undefined,
    filter = undefined,
    minzoom = undefined,
    maxzoom = undefined,
    beforeId = undefined,
    pointerEvents = true,
    tooltip = false,
    onclick = undefined,
    onmousemove = undefined,
    onmouseout = undefined,
    fill = urbanColors.blue,
    hoverFill = undefined,
    r = 4,
    stroke = urbanColors.black,
    strokeWidth = 0,
    opacity = 1
  } = $props();

  const mapContext = useMapLibreMapContext();
  const sourceContext = useSourceContext();
  const layerId = id || generateId("circle-layer");
  const sourceId = sourceContext.id;

  let hoveredId = $state(null);

  // Compute paint properties from convenience props
  const computedPaint = $derived.by(() => {
    return {
      "circle-color": hoverFill
        ? ["case", ["boolean", ["feature-state", "hover"], false], hoverFill, fill]
        : fill,
      "circle-radius": r,
      "circle-stroke-color": stroke,
      "circle-stroke-width": strokeWidth,
      "circle-opacity": opacity
    };
  });

  // Event handlers
  function handleClick(e) {
    const feature = e.features?.[0];
    if (!feature) return;
    e.originalEvent._layerHandled = true;
    mapContext.onPointerDown(e, feature.properties, { tooltip });
    onclick?.(
      new CustomEvent("click", {
        detail: { e, props: feature.properties, feature }
      })
    );
  }

  function handleMousemove(e) {
    const feature = e.features?.[0];
    if (!feature) return;
    const map = mapContext.map;

    // Update hover state
    if (hoveredId !== null) {
      map.setFeatureState({ source: sourceId, id: hoveredId }, { hover: false });
    }
    hoveredId = feature.id;
    map.setFeatureState({ source: sourceId, id: hoveredId }, { hover: true });
    map.getCanvas().style.cursor = "pointer";

    mapContext.onPointerMove(e, feature.properties, { tooltip });
    onmousemove?.(
      new CustomEvent("mousemove", {
        detail: { e, props: feature.properties, feature }
      })
    );
  }

  function handleMouseleave(e) {
    const map = mapContext.map;
    if (hoveredId !== null) {
      map.setFeatureState({ source: sourceId, id: hoveredId }, { hover: false });
      hoveredId = null;
    }
    map.getCanvas().style.cursor = "";
    mapContext.onPointerOut(e);
    onmouseout?.(
      new CustomEvent("mouseout", {
        detail: { e }
      })
    );
  }

  onMount(() => {
    const map = mapContext.map;

    // Build layer spec
    const layerSpec = {
      id: layerId,
      type: "circle",
      source: sourceId,
      paint: mergePaint(computedPaint, paint),
      ...(layout && { layout }),
      ...(filter && { filter }),
      ...(minzoom !== undefined && { minzoom }),
      ...(maxzoom !== undefined && { maxzoom })
    };

    // Add layer
    map.addLayer(layerSpec, beforeId);

    // Register event listeners if pointer events enabled
    if (pointerEvents) {
      map.on("click", layerId, handleClick);
      map.on("mousemove", layerId, handleMousemove);
      map.on("mouseleave", layerId, handleMouseleave);
    }

    return () => {
      // Cleanup event listeners
      if (pointerEvents) {
        map.off("click", layerId, handleClick);
        map.off("mousemove", layerId, handleMousemove);
        map.off("mouseleave", layerId, handleMouseleave);
      }
      // Remove layer
      if (map.getLayer(layerId)) {
        map.removeLayer(layerId);
      }
    };
  });

  // Reactive paint updates
  $effect(() => {
    const map = mapContext.map;
    if (map && map.getLayer(layerId)) {
      const mergedPaint = mergePaint(computedPaint, paint);
      for (const [key, value] of Object.entries(mergedPaint)) {
        map.setPaintProperty(layerId, key, value);
      }
    }
  });

  // Reactive layout updates
  $effect(() => {
    const map = mapContext.map;
    if (map && map.getLayer(layerId) && layout) {
      for (const [key, value] of Object.entries(layout)) {
        map.setLayoutProperty(layerId, key, value);
      }
    }
  });

  // Reactive filter updates
  $effect(() => {
    const map = mapContext.map;
    if (map && map.getLayer(layerId)) {
      map.setFilter(layerId, filter || null);
    }
  });
</script>

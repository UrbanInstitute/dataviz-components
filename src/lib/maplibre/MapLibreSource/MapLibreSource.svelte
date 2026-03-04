<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script>
  import { onDestroy } from "svelte";
  import { useMapLibreMapContext } from "../MapLibreMap/context.svelte.js";
  import { generateId, setSourceContext } from "../lib.js";

  /**
   * @typedef {Object} Props
   * @property {string} [id] Source ID. Auto-generated if not provided.
   * @property {Object | string} data GeoJSON object or URL to GeoJSON. Required.
   * @property {boolean} [generateId=true] Auto-generate feature IDs (needed for setFeatureState hover).
   * @property {import('svelte').Snippet} [children] Layer components.
   */

  /** @type {Props} */
  let { id = undefined, data, generateId: shouldGenerateId = true, children } = $props();

  const mapContext = useMapLibreMapContext();
  const sourceId = id || generateId("source");
  const map = mapContext.map;

  // Set source context for child layers
  setSourceContext(sourceId);

  // Add the source synchronously (MapLibreSource only renders when map is loaded)
  map.addSource(sourceId, {
    type: "geojson",
    data,
    generateId: shouldGenerateId
  });

  // Cleanup on component destroy
  onDestroy(() => {
    // Get all layers using this source
    const layers = map.getStyle().layers;
    const layersToRemove = layers.filter((layer) => layer.source === sourceId);

    // Remove all layers first
    layersToRemove.forEach((layer) => {
      if (map.getLayer(layer.id)) {
        map.removeLayer(layer.id);
      }
    });

    // Then remove the source
    if (map.getSource(sourceId)) {
      map.removeSource(sourceId);
    }
  });

  // Reactive data updates
  $effect(() => {
    if (data) {
      const source = map.getSource(sourceId);
      if (source && source.type === "geojson") {
        source.setData(data);
      }
    }
  });
</script>

{@render children?.()}

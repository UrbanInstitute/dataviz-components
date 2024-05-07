<script>
  import { getContext, createEventDispatcher } from "svelte";
  import { geoPath } from "d3-geo";
  import { urbanColors } from "$lib/utils";
  import { fade } from "svelte/transition";

  const { width, height, transform, projection, features: mapFeatures } = getContext("map");

  export let features;
  export let fontColor = urbanColors.white;
  export let fontSize = 12;
  export let stroke = urbanColors.black;
  export let strokeWidth = 3;
  export let textAnchor = "middle";
  export let dy = "-.5em";
  export let minZoom = 0;

  export let getLabel = (d) => d;

  const dispatch = createEventDispatcher();

  $: fitSizeRange = [$width, $height];

  $: projectionFn = $projection().fitSize(fitSizeRange, {
    type: "FeatureCollection",
    features: $mapFeatures
  });

  $: geoPathFn = geoPath(projectionFn);

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
          text-anchor={textAnchor}>{getLabel(feature)}</text
        >
        <text
          {x}
          {y}
          {dy}
          style:font-size="{fontSize / $transform.k}px"
          fill={fontColor}
          text-anchor={textAnchor}>{getLabel(feature)}</text
        >
      </g>
    {/each}
  </g>
{/if}

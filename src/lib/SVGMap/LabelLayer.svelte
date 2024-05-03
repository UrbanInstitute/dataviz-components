<script>
  import { getContext } from "svelte";
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

  $: fitSizeRange = [$width, $height];

  $: projectionFn = $projection().fitSize(fitSizeRange, {
    type: "FeatureCollection",
    features: $mapFeatures
  });

  $: geoPathFn = geoPath(projectionFn);
</script>

{#if !minZoom || $transform.k >= minZoom}
<g transition:fade={{duration: 250}}>
  {#each features || $mapFeatures as feature}
    {@const [x, y] = geoPathFn.centroid(feature)}
    <g>
      <text
        {x}
        {y}
        {dy}
        style:font-size="{fontSize / $transform.k}px"
        stroke-width="{strokeWidth / $transform.k}px"
        {stroke}
        opacity={0.5}
        stroke-linejoin="round"
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

<script>
  import { getContext } from "svelte";
  import { geoPath } from "d3-geo";
  import { urbanColors } from "$lib/utils";

  const { data, width, height } = getContext("LayerCake");
  const { projection, features: globalFeatures } = getContext("map");

  export let features;
  export let fontColor = urbanColors.white;
  export let fontSize = "var(--font-size-small)";
  export let stroke = urbanColors.black;
  export let strokeWidth = 3;
  export let textAnchor = "middle";
  export let dy = "-.5em";

  export let getLabel = (d) => d;

  $: fitSizeRange = [$width, $height];

  $: projectionFn = $projection().fitSize(fitSizeRange, {type: "FeatureCollection", features: $globalFeatures});


  $: geoPathFn = geoPath(projectionFn);
</script>

<g>
  {#each features || $data.features as feature}
    {@const [x, y] = geoPathFn.centroid(feature)}
    <g>
      <text {x} {y} {dy} style:font-size={fontSize} stroke-width="{strokeWidth}px" stroke={stroke} opacity={0.5} stroke-linejoin="round" text-anchor={textAnchor}>{getLabel(feature)}</text>
      <text {x} {y} {dy} style:font-size={fontSize} fill={fontColor} text-anchor={textAnchor}>{getLabel(feature)}</text>
    </g>
  {/each}
</g>

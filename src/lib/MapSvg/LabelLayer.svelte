<script>
  import { getContext } from "svelte";
  import { geoPath } from "d3-geo";
  import { urbanColors } from "$lib/utils";

  const { data, width, height } = getContext("LayerCake");
  const { projection } = getContext("map");

  export let features;
  export let textColor = urbanColors.white;
  export let textSize = "var(--font-size-small)";
  export let stroke = urbanColors.black;
  export let strokeWidth = 3;
  export let textAnchor = "middle";
  export let dy = "-.5em";

  export let getLabel;

  $: fitSizeRange = [$width, $height];

  $: projectionFn = $projection().fitSize(fitSizeRange, $data);

  $: geoPathFn = geoPath(projectionFn);
</script>

<g>
  {#each features || $data.features as feature}
    {@const [x, y] =
      feature.geometry.type == "Point" ? geoPathFn(feature) : geoPathFn.centroid(feature)}
    <g>
      <text {x} {y} {dy} fill={stroke} style:font-size={textSize} stroke-width="{strokeWidth}px" stroke={stroke} opacity={0.5} stroke-linejoin="round" text-anchor={textAnchor}>{getLabel(feature)}</text>
      <text {x} {y} {dy} style:font-size={textSize} fill={textColor} text-anchor={textAnchor}>{getLabel(feature)}</text>
    </g>
  {/each}
</g>

<script>
  import { getContext } from "svelte";
  import { geoPath } from "d3-geo";
  import { urbanColors } from "$lib/utils";

  const { width, height, transform, projection, features: globalFeatures } = getContext("map");

  export let features;
  export let fill = urbanColors.white;
  export let stroke = urbanColors.black;
  export let strokeWidth = 0;
  export let r = 3;

  $: fitSizeRange = [$width, $height];

  $: projectionFn = $projection().fitSize(fitSizeRange, {
    type: "FeatureCollection",
    features: $globalFeatures
  });

  $: geoPathFn = geoPath(projectionFn);
</script>

<g>
  {#each features || $globalFeatures as feature}
    {@const [x, y] = geoPathFn.centroid(feature)}
    <circle cx={x} cy={y} {fill} r={r / $transform.k} stroke-width={strokeWidth / $transform.k} {stroke}/>
  {/each}
</g>

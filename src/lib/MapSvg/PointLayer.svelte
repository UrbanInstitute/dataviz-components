<script>
  import { getContext } from "svelte";
  import { geoPath } from "d3-geo";
  import { urbanColors } from "$lib/utils";

  const { data, width, height } = getContext("LayerCake");
  const { projection } = getContext("map");

  export let features;
  export let fill = urbanColors.white;
  export let stroke = urbanColors.black;
  export let strokeWidth = 3;
  export let r = 3;


  $: fitSizeRange = [$width, $height];

  $: projectionFn = $projection().fitSize(fitSizeRange, $data);

  $: geoPathFn = geoPath(projectionFn);
</script>

<g>
  {#each features || $data.features as feature}
    {@const [x, y] =
      feature.geometry.type == "Point" ? geoPathFn(feature) : geoPathFn.centroid(feature)}
      <circle cx={x} cy={y} fill={fill} {r}/>
  {/each}
</g>

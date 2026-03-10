<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script module>
  import MapLibreSource from "./MapLibreSource.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import docs from "./MapLibreSource.docs.md?raw";

  const { Story } = defineMeta({
    title: "Maps/MapLibreSource",
    component: MapLibreSource,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/maplibre/MapLibreSource/MapLibreSource.svelte"
      }
    }
  });
</script>

<script>
  import MapLibreMap from "../MapLibreMap/MapLibreMap.svelte";
  import MapLibreFillLayer from "../MapLibreFillLayer/MapLibreFillLayer.svelte";
  import states from "../../../docs/sample-data/states_geo.json";
  import { urbanColors } from "$lib/utils";

  const BASE_STYLE = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
</script>

<Story name="Basic usage" asChild>
  <MapLibreMap style={BASE_STYLE} center={[-98.5, 39.8]} zoom={3.5} height={400}>
    <MapLibreSource data={states}>
      <MapLibreFillLayer fill={urbanColors.blue} stroke={urbanColors.white} />
    </MapLibreSource>
  </MapLibreMap>
</Story>

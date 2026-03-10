<script module>
  import MapLibreLineLayer from "./MapLibreLineLayer.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import docs from "./MapLibreLineLayer.docs.md?raw";

  const { Story } = defineMeta({
    title: "Maps/MapLibreLineLayer",
    component: MapLibreLineLayer,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/maplibre/MapLibreLineLayer/MapLibreLineLayer.svelte"
      }
    }
  });
</script>

<script>
  import MapLibreMap from "../MapLibreMap/MapLibreMap.svelte";
  import MapLibreSource from "../MapLibreSource/MapLibreSource.svelte";
  import states from "../../../docs/sample-data/states_geo.json";
  import { urbanColors } from "$lib/utils";

  const BASE_STYLE = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
</script>

<Story name="Default styling" asChild>
  <MapLibreMap style={BASE_STYLE} center={[-98.5, 39.8]} zoom={3.5} height={400}>
    <MapLibreSource data={states}>
      <MapLibreLineLayer />
    </MapLibreSource>
  </MapLibreMap>
</Story>

<Story name="Custom stroke" asChild>
  <MapLibreMap style={BASE_STYLE} center={[-98.5, 39.8]} zoom={3.5} height={400}>
    <MapLibreSource data={states}>
      <MapLibreLineLayer stroke={urbanColors.magenta} strokeWidth={3} />
    </MapLibreSource>
  </MapLibreMap>
</Story>

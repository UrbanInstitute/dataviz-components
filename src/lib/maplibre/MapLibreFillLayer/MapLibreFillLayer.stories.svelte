<script module>
  import MapLibreFillLayer from "./MapLibreFillLayer.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import docs from "./MapLibreFillLayer.docs.md?raw";

  const { Story } = defineMeta({
    title: "Maps/MapLibreFillLayer",
    component: MapLibreFillLayer,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/maplibre/MapLibreFillLayer/MapLibreFillLayer.svelte"
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
      <MapLibreFillLayer />
    </MapLibreSource>
  </MapLibreMap>
</Story>

<Story name="Custom colors" asChild>
  <MapLibreMap style={BASE_STYLE} center={[-98.5, 39.8]} zoom={3.5} height={400}>
    <MapLibreSource data={states}>
      <MapLibreFillLayer fill={urbanColors.magenta} stroke={urbanColors.black} fillOpacity={0.6} />
    </MapLibreSource>
  </MapLibreMap>
</Story>

<Story name="With hover" asChild>
  <MapLibreMap style={BASE_STYLE} center={[-98.5, 39.8]} zoom={3.5} height={400}>
    <MapLibreSource data={states}>
      <MapLibreFillLayer
        fill={urbanColors.blue}
        hoverFill={urbanColors.yellow}
        stroke={urbanColors.white}
      />
    </MapLibreSource>
  </MapLibreMap>
</Story>

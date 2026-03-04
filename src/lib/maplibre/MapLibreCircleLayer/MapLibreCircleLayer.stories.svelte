<script module>
  import MapLibreCircleLayer from "./MapLibreCircleLayer.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import docs from "./MapLibreCircleLayer.docs.md?raw";

  const { Story } = defineMeta({
    title: "Maps/MapLibreCircleLayer",
    component: MapLibreCircleLayer,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/maplibre/MapLibreCircleLayer/MapLibreCircleLayer.svelte"
      }
    }
  });
</script>

<script>
  import MapLibreMap from "../MapLibreMap/MapLibreMap.svelte";
  import MapLibreSource from "../MapLibreSource/MapLibreSource.svelte";
  import us_cities from "../../../docs/sample-data/us_cities.json";
  import { urbanColors } from "$lib/utils";

  const BASE_STYLE = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
  const us_cities_geo = topojson.feature(us_cities, "us_cities");
</script>

<Story name="Default styling" asChild>
  <MapLibreMap style={BASE_STYLE} center={[-98.5, 39.8]} zoom={3.5} height={400}>
    <MapLibreSource data={us_cities_geo}>
      <MapLibreCircleLayer />
    </MapLibreSource>
  </MapLibreMap>
</Story>

<Story name="Custom styling" asChild>
  <MapLibreMap style={BASE_STYLE} center={[-98.5, 39.8]} zoom={3.5} height={400}>
    <MapLibreSource data={us_cities_geo}>
      <MapLibreCircleLayer
        r={8}
        fill={urbanColors.magenta}
        stroke={urbanColors.white}
        strokeWidth={2}
      />
    </MapLibreSource>
  </MapLibreMap>
</Story>

<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script module>
  import MapLibreSymbolLayer from "./MapLibreSymbolLayer.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import docs from "./MapLibreSymbolLayer.docs.md?raw";

  const { Story } = defineMeta({
    title: "Maps/MapLibreSymbolLayer",
    component: MapLibreSymbolLayer,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/maplibre/MapLibreSymbolLayer/MapLibreSymbolLayer.svelte"
      }
    }
  });
</script>

<script>
  import MapLibreMap from "../MapLibreMap/MapLibreMap.svelte";
  import MapLibreSource from "../MapLibreSource/MapLibreSource.svelte";
  import MapLibreFillLayer from "../MapLibreFillLayer/MapLibreFillLayer.svelte";
  import states from "../../../docs/sample-data/states_geo.json";
  import { urbanColors } from "$lib/utils";

  const BASE_STYLE = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
</script>

<Story name="State abbreviations" asChild>
  <MapLibreMap style={BASE_STYLE} center={[-98.5, 39.8]} zoom={3.5} height={400}>
    <MapLibreSource data={states}>
      <MapLibreFillLayer fill={urbanColors.gray_shade_lightest} stroke={urbanColors.gray} />
      <MapLibreSymbolLayer textField={["get", "STUSPS"]} fontSize={12} />
    </MapLibreSource>
  </MapLibreMap>
</Story>

<Story name="Custom text styling" asChild>
  <MapLibreMap style={BASE_STYLE} center={[-98.5, 39.8]} zoom={3.5} height={400}>
    <MapLibreSource data={states}>
      <MapLibreFillLayer fill={urbanColors.blue_shade_lightest} stroke={urbanColors.blue} />
      <MapLibreSymbolLayer
        textField={["get", "NAME"]}
        fontSize={14}
        fontColor={urbanColors.blue_shade_darkest}
        textHaloColor={urbanColors.white}
        textHaloWidth={2}
      />
    </MapLibreSource>
  </MapLibreMap>
</Story>

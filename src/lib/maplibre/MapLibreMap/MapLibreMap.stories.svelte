<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script module>
  import MapLibreMap from "./MapLibreMap.svelte";
  import MapLibreSource from "../MapLibreSource/MapLibreSource.svelte";
  import MapLibreFillLayer from "../MapLibreFillLayer/MapLibreFillLayer.svelte";
  import MapLibreLineLayer from "../MapLibreLineLayer/MapLibreLineLayer.svelte";
  import MapLibreCircleLayer from "../MapLibreCircleLayer/MapLibreCircleLayer.svelte";
  import MapLibreSymbolLayer from "../MapLibreSymbolLayer/MapLibreSymbolLayer.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Maps/MapLibreMap",
    component: MapLibreMap,
    parameters: {
      githubLink: {
        url: "/maplibre/MapLibreMap/MapLibreMap.svelte"
      }
    }
  });
</script>

<script>
  import states from "../../../docs/sample-data/states_geo.json";
  import us_cities from "../../../docs/sample-data/us_cities.json";
  import county_air_quality_topo from "../../../docs/sample-data/county_air_quality_topo.json";
  import BASE_STYLE from "../../../docs/sample-data/urban-protomaps-light.json";
  import { urbanColors } from "$lib/utils";
  import { scaleQuantile } from "d3-scale";

  // Convert TopoJSON to GeoJSON
  const county_air_quality = topojson.feature(county_air_quality_topo, "county_air_quality");
  const us_cities_geo = topojson.feature(us_cities, "us_cities");

  // Create color scale for air quality choropleth (matching SVGMap example)
  let airQualityScale = scaleQuantile()
    .domain(county_air_quality.features.map((d) => d.properties.index_air_quality))
    .range(urbanColors.getDivergingColors());

  // Get quantile thresholds for MapLibre step expression
  const airQualityQuantiles = airQualityScale.quantiles();
  const airQualityColors = urbanColors.getDivergingColors();
</script>

<Story name="Basic fill map" asChild>
  <MapLibreMap style={BASE_STYLE} center={[-98.5, 39.8]} zoom={3.5} height={500}>
    <MapLibreSource data={states}>
      <MapLibreFillLayer
        fill={urbanColors.blue}
        stroke={urbanColors.white}
        fillOpacity={0.7}
        beforeId="roads_labels_major"
      />
    </MapLibreSource>
  </MapLibreMap>
</Story>

<Story name="Choropleth with tooltip" asChild>
  <MapLibreMap style={BASE_STYLE} center={[-98.5, 39.8]} zoom={3.5} height={500}>
    {#snippet tooltip(props)}
      <strong>{props.county_name}</strong>
      <p>Air Quality Index: {props.index_air_quality}</p>
    {/snippet}

    <MapLibreSource data={county_air_quality}>
      <MapLibreFillLayer
        paint={{
          "fill-color": [
            "step",
            ["get", "index_air_quality"],
            airQualityColors[0],
            ...airQualityQuantiles.flatMap((q, i) => [q, airQualityColors[i + 1]])
          ],
          "fill-opacity": 0.8,
          "fill-outline-color": urbanColors.white
        }}
        tooltip={true}
        beforeId="roads_labels_major"
      />
    </MapLibreSource>
  </MapLibreMap>
</Story>

<Story name="Multiple layers" asChild>
  <MapLibreMap style={BASE_STYLE} center={[-98.5, 39.8]} zoom={3.5} height={500}>
    <MapLibreSource data={states}>
      <MapLibreFillLayer
        fill={urbanColors.gray_shade_light}
        stroke={urbanColors.gray}
        fillOpacity={0.5}
        beforeId="roads_labels_major"
      />
    </MapLibreSource>

    <MapLibreSource data={us_cities_geo}>
      <MapLibreCircleLayer
        r={6}
        fill={urbanColors.magenta}
        stroke={urbanColors.white}
        strokeWidth={1}
        tooltip={true}
        beforeId="roads_labels_major"
      />
    </MapLibreSource>
  </MapLibreMap>
</Story>

<Story name="Custom paint properties" asChild>
  <MapLibreMap style={BASE_STYLE} center={[-98.5, 39.8]} zoom={3.5} height={500}>
    <MapLibreSource data={states}>
      <MapLibreFillLayer
        paint={{
          "fill-color": [
            "case",
            ["==", ["get", "NAME"], "California"],
            urbanColors.blue,
            urbanColors.gray
          ],
          "fill-opacity": 0.7,
          "fill-outline-color": urbanColors.black
        }}
        beforeId="roads_labels_major"
      />
    </MapLibreSource>
  </MapLibreMap>
</Story>

<Story name="Interactive with click handler" asChild>
  <MapLibreMap style={BASE_STYLE} center={[-98.5, 39.8]} zoom={3.5} height={500}>
    <MapLibreSource data={states}>
      <MapLibreFillLayer
        fill={urbanColors.blue}
        hoverFill={urbanColors.yellow}
        stroke={urbanColors.white}
        fillOpacity={0.7}
        tooltip={true}
        onclick={(e) => console.log("Clicked:", e.detail.props.NAME)}
        beforeId="roads_labels_major"
      />
    </MapLibreSource>
  </MapLibreMap>
</Story>

<Story name="Line layer" asChild>
  <MapLibreMap style={BASE_STYLE} center={[-98.5, 39.8]} zoom={3.5} height={500}>
    <MapLibreSource data={states}>
      <MapLibreLineLayer
        stroke={urbanColors.blue}
        strokeWidth={2}
        hoverStroke={urbanColors.magenta}
        tooltip={true}
        beforeId="roads_labels_major"
      />
    </MapLibreSource>
  </MapLibreMap>
</Story>

<Story name="Symbol layer with labels" asChild>
  <MapLibreMap style={BASE_STYLE} center={[-98.5, 39.8]} zoom={3.5} height={500}>
    <MapLibreSource data={states}>
      <MapLibreFillLayer
        fill={urbanColors.gray_shade_lightest}
        stroke={urbanColors.gray}
        beforeId="roads_labels_major"
      />
      <MapLibreSymbolLayer
        textField={["get", "STUSPS"]}
        fontSize={14}
        fontColor={urbanColors.black}
        textHaloColor={urbanColors.white}
        textHaloWidth={2}
      />
    </MapLibreSource>
  </MapLibreMap>
</Story>

<Story name="Navigation controls" asChild>
  <MapLibreMap
    style={BASE_STYLE}
    center={[-98.5, 39.8]}
    zoom={3.5}
    height={500}
    navigationControl={true}
  >
    <MapLibreSource data={states}>
      <MapLibreFillLayer
        fill={urbanColors.blue}
        stroke={urbanColors.white}
        fillOpacity={0.7}
        beforeId="roads_labels_major"
      />
    </MapLibreSource>
  </MapLibreMap>
</Story>

<Story name="No basemap" asChild>
  <MapLibreMap center={[-98.5, 39.8]} zoom={3.5} height={500}>
    <MapLibreSource data={states}>
      <MapLibreFillLayer fill={urbanColors.blue} stroke={urbanColors.white} fillOpacity={0.9} />
    </MapLibreSource>
  </MapLibreMap>
</Story>

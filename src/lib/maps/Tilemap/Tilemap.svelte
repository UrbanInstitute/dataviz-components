<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script>
  import maplayout from "./layout_territories.txt?raw";
  import { urbanColors } from "$lib/utils";
  import { fipsMap } from "./fips.js";
  import Tooltip from "$lib/Tooltip/Tooltip.svelte";

  /** @typedef {"states" | "pr" | "territories"} FeatureOptions */
  /** @typedef {"hex" | "rext"} ShapeOption */

  /**
   * @typedef {Object} TilemapProps
   * @property {Object<string, any>[]} data
   * @property {ShapeOption} [shape="hex"]
   * @property {import("$utils/states").FeatureOptions} [featureOption="states"]
   * @property {string | ((d: Object<string, any>) => string)} [fill=urbanColors.blue] A string or function that returns a string to use as this layers stroke color.
   * @property {string | undefined} [hoverFill=undefined] A color string to use when a feature is hovered
   * @property {string} [naFill=urbanColors.gray_shade_light] Color to use for values that are NA or otherwise undefined in the color scale
   * @property {string | ((d: Object) => string)} [stroke=urbanColors.white] A string or function that returns a string to use as this layers stroke color.
   * @property {string | undefined} [hoverStroke=undefined] Optional color string for hovered feature stroke
   * @property {number} [strokeWidth=0.5] Stroke width of each feature
   * @property {number | undefined} [hoverStrokeWidth=undefined] Stroke width of each feature when hovered
   * @property {string | undefined} [highlightFeature=undefined] ID of the feature to highlight
   * @property {string | undefined} [ariaRole=undefined] Optional aria role string to be applied to SVG container. By default, the SVG is hidden from the accessiblity tree. If you add an ariaRole here, any layers should also be given an ariaRole.
   * @property {string | undefined} [ariaLabel=undefined] Optional aria label string to be applied to SVG container. By default, the SVG is hidden from the accessiblity tree and should include a descriptive label. If you add an ariaRole this property can be left undefined;
   * @property {string} [labelColor=urbanColors.black] Optional color string to use for the labels on the map
   * @property {(e: Event, props: Record<any, any>) => void} [onMousemove=() => {}] Optional handler that fires when the mouse moves over a feature
   * @property {(e: Event) => void} [onMouseout=() => {}] Optional handler that fires when the mouse moves out of a feature
   * @property {(e: Event, props: Record<any, any>) => void} [onClick=() => {}] Optional handler that fires when the mouse clicks on a feature
   * @property {(e: Event) => void} [onBgclick=() => {}] Optional handler that fires when the mouse clicks on the background
   * @property {@import("svelte").Snippet} [tooltip] Optional snippet for rendering a tooltip, receives hovered feature props
   */

  /** @type {TilemapProps} */
  const {
    data,
    shape = "hex",
    featureOption = "states",
    fill = urbanColors.blue,
    hoverFill = undefined,
    naFill = urbanColors.gray_shade_light,
    stroke = urbanColors.white,
    hoverStroke,
    strokeWidth = 0.5,
    hoverStrokeWidth,
    highlightFeature,
    ariaRole,
    ariaLabel,
    labelColor = urbanColors.black,
    onMousemove = () => {},
    onMouseout = () => {},
    onClick = () => {},
    onBgclick = () => {},
    tooltip = undefined
  } = $props();

  const featureFilters = {
    states: ["PR", "VI", "MP", "GU", "AS"],
    pr: ["VI", "MP", "GU", "AS"],
    territories: []
  };

  /**
   * @param { string } layoutString
   * @returns { string[][] }
   */
  function parseLayout(layoutString) {
    return layoutString.split("\n").map((row) =>
      row.split(",").map((st) => {
        if (featureFilters[featureOption].includes(st)) {
          return "  ";
        }
        return st;
      })
    );
  }

  let dataLookup = $derived(
    data
      ? data.reduce((acc, curr) => {
          const { map_id } = curr;
          return acc.set(map_id, curr);
        }, new Map())
      : undefined
  );

  let width = $state(500);
  let mapTiles = $derived(parseLayout(maplayout));
  let activeRows = $derived(
    mapTiles.filter((row) => row.some((tile) => tile.trim() !== "")).length
  );
  let shapeWidth = $derived(Math.floor(width / mapTiles[0].length));
  let shapeHeight = $derived(getHeight(shapeWidth, shape));
  let height = $derived(getMapHeight(activeRows, shapeHeight, shape));

  /**
   * @param { number } width
   * @param { string } shape
   * @returns { number}
   */
  function getHeight(width, shape) {
    if (shape === "hex") {
      return (width / Math.sqrt(3)) * 2.1;
    }
    return width;
  }

  /**
   * Calculate the height of the map based on number of rows, unit height, and shape type.
   * @param {number} numRows - Number of rows in the map.
   * @param {number} unitHeight - Height of a single map unit.
   * @param {ShapeOption} shapeType - The shape type of the map.
   * @returns {number}
   */
  function getMapHeight(numRows, unitHeight, shapeType) {
    if (shapeType === "hex") {
      return (
        numRows * (unitHeight / 2) +
        unitHeight * 2.25 +
        (numRows % 2) * (unitHeight * 0.25) +
        (hoverStrokeWidth || 0)
      );
    }
    return numRows * unitHeight + (hoverStrokeWidth || 0);
  }

  /**
   * @param { number } width
   * @param { number }height
   * @returns { string }
   */
  function generateHex(width, height) {
    const points = [
      [width / 2, 0],
      [width, height / 4],
      [width, (height / 4) * 3],
      [width / 2, height],
      [0, (height / 4) * 3],
      [0, height / 4]
    ];
    return (
      points.reduce((acc, point, i) => {
        acc += `${i > 0 ? "L" : ""} ${point[0]},${point[1]} `;
        return acc;
      }, "M") + "Z"
    );
  }

  let hexPoints = $derived(generateHex(shapeWidth, shapeHeight));

  /**
   * @param {number} row
   * @param {number} shapeHeight
   * @returns {number}
   */
  function getY(row, shapeHeight) {
    if (shape === "hex") {
      return row * shapeHeight * 0.75;
    } else {
      return row * shapeHeight;
    }
  }

  /**
   * @param {number} column
   * @param {number} row
   * @param {number} shapeWidth
   * @returns {number}
   */
  function getX(column, row, shapeWidth) {
    if (shape === "hex") {
      if (row % 2 !== 0) {
        return column * shapeWidth - shapeWidth * 0.5;
      } else {
        return column * shapeWidth;
      }
    } else {
      return column * shapeWidth;
    }
  }
  /**
   * @param {Object<string, any>} feature
   * @param {string|((feature: Object<string, any>) => string) } fill
   * @param {string} naFill
   */
  function getFill(feature, fill, naFill) {
    if (!feature) {
      return naFill;
    }
    if (typeof fill === "string") {
      return fill;
    }
    return fill(feature) || naFill;
  }

  /**
   * Get the feature data for a given abbreviation.
   * @param {string} abbr - The state or territory abbreviation.
   * @returns {Object|null}
   */
  function getFeatureData(abbr) {
    if (!dataLookup) {
      return null;
    }
    const fips = fipsMap.get(abbr);
    if (dataLookup.has(fips)) {
      return dataLookup.get(fips);
    } else {
      //if data doesn't exist for state, fill all columns with N/A values
      let fallbackData = {
        map_id: fips
      };
      return fallbackData;
    }
  }

  let tooltipData = $state(null);
  let hoveredTile = $state(null);

  /**
   * @param { Event } e
   * @param { string } tile
   * @param { number } rowIndex
   * @param { number } columnIndex
   */
  function handleMousemove(e, tile, rowIndex, columnIndex) {
    const props = getFeatureData(tile);
    tooltipData = {
      props,
      x: e.pageX,
      y: e.pageY
    };
    hoveredTile = { tile, rowIndex, columnIndex };
    onMousemove(e, props);
  }

  /**
   * @param { Event } e
   */
  function handleMouseout(e) {
    tooltipData = null;
    hoveredTile = null;
    onMouseout(e);
  }

  /**
   *
   * @param { Event } e
   * @param { string } state
   */
  function handleClick(e, state) {
    const props = getFeatureData(state);
    onClick(e, props);
  }

  /**
   * Returns true if the given fips matches the highlight value.
   * @param {string} fips
   * @param {string|undefined} highlight
   * @returns {boolean}
   */
  function getHighlight(fips, highlight) {
    return fips === highlight;
  }
</script>

<div
  class="tile-map-wrap"
  bind:clientWidth={width}
  aria-hidden={typeof ariaRole === "undefined"}
  role={ariaRole}
  aria-label={ariaLabel}
>
  <svg {width} {height} viewBox="0 0 {width} {height}">
    {#snippet tileShape(rowIndex, columnIndex, attrs)}
      {#if shape === "hex"}
        <path
          d={hexPoints}
          transform="translate({getX(columnIndex, rowIndex, shapeWidth)}, {getY(rowIndex, shapeHeight)})"
          {...attrs}
        ></path>
      {:else if shape === "rect"}
        <rect
          width={shapeWidth}
          height={shapeHeight}
          transform="translate({getX(columnIndex, rowIndex, shapeWidth)}, {getY(rowIndex, shapeHeight)})"
          {...attrs}
        ></rect>
      {/if}
    {/snippet}
    <rect
      role="presentation"
      class="background"
      fill={urbanColors.white}
      x="0"
      y="0"
      {width}
      {height}
      onmousedown={(e) => onBgclick(e)}
      onpointermove={(e) => {
        tooltipData = null;
        hoveredTile = null;
        onMouseout(e);
      }}
    ></rect>
    <g
      class="tiles"
      style:--hover-fill={hoverFill || null}
      class:hover-fill={hoverFill}
    >
      {#each mapTiles as row, rowIndex}
        {#each row as tile, columnIndex}
          {#if tile.trim() !== ""}
            {@render tileShape(rowIndex, columnIndex, {
              class: "tile-shape" + (getHighlight(fipsMap.get(tile), highlightFeature) ? " highlight" : ""),
              fill: getFill(getFeatureData(tile), fill, naFill),
              stroke,
              "stroke-width": strokeWidth,
              role: "presentation",
              onmousemove: (e) => handleMousemove(e, tile, rowIndex, columnIndex),
              onmouseout: handleMouseout,
              onblur: handleMouseout,
              onmousedown: (e) => handleClick(e, tile)
            })}
          {/if}
        {/each}
      {/each}
    </g>
    <g class="tile-outlines" pointer-events="none">
      {#each mapTiles as row, rowIndex}
        {#each row as tile, columnIndex}
          {#if tile.trim() !== "" && (
            (hoveredTile?.tile === tile && hoveredTile?.rowIndex === rowIndex && hoveredTile?.columnIndex === columnIndex) ||
            getHighlight(fipsMap.get(tile), highlightFeature)
          )}
            {@render tileShape(rowIndex, columnIndex, {
              fill: "none",
              stroke: hoverStroke || stroke,
              "stroke-width": hoverStrokeWidth || strokeWidth
            })}
          {/if}
        {/each}
      {/each}
    </g>
    <g class="map-labels" style:--font-weight="bold">
      {#each mapTiles as row, rowIndex}
        {#each row as tile, columnIndex}
          {#if tile.trim() !== ""}
            <g
              class="tile"
              transform="translate({getX(columnIndex, rowIndex, shapeWidth)}, {getY(
                rowIndex,
                shapeHeight
              )})"
              pointer-events="none"
              role="presentation"
            >
              <text
                class="state-label state-label-stroke"
                x={shapeWidth / 2}
                y={shapeHeight / 2}
                dx="-0.7em"
                dy="0.3em"
                fill="white"
                stroke="white"
                stroke-linejoin="round"
              >
                {tile}
              </text>
              <text
                class="state-label"
                x={shapeWidth / 2}
                y={shapeHeight / 2}
                dx="-0.7em"
                dy="0.3em"
                fill={labelColor}
              >
                {tile}
              </text>
            </g>
          {/if}
        {/each}
      {/each}
    </g>
  </svg>
  {#if tooltip && tooltipData}
    <Tooltip {...tooltipData}>
      {@render tooltip(tooltipData.props)}
    </Tooltip>
  {/if}
</div>

<style>
  .tile-shape {
    cursor: pointer;
  }
  .hover-fill .tile-shape:hover,
  .hover-fill .tile-shape.highlight {
    fill: var(--hover-fill);
  }
  .tile-shape:focus {
    outline: none;
  }
  .tile text {
    font-weight: var(--font-weight);
  }
  text.state-label {
    font-size: clamp(10px, 1.5vw, var(--font-size-large));
  }
  .state-label-stroke {
    stroke-width: 2;
  }
  @media (min-width: 768px) {
    .state-label-stroke {
      stroke-width: 3;
    }
  }
</style>

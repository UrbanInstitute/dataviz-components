/**
 * An object representing all of the Urban Institute's color palette.
 * @type Record<string, string>
 */
const colors = {
  black: "#000000",
  white: "#FFFFFF",
  blue_shade_darkest: "#062635",
  blue_shade_darker: "#0A4C6A",
  blue_shade_dark: "#12719E",
  blue: "#1696D2",
  blue_shade_medium: "#46ABDB",
  blue_shade_light: "#73BFE2",
  blue_shade_lighter: "#A2D4EC",
  blue_shade_lightest: "#CFE8F3",
  gray_shade_darkest: "#353535",
  gray_shade_darker: "#696969",
  gray_shade_dark: "#9D9D9D",
  gray: "#D2D2D2",
  gray_shade_medium: "#DCDBDB",
  gray_shade_light: "#E3E3E3",
  gray_shade_lighter: "#ECECEC",
  gray_shade_lightest: "#F5F5F5",
  yellow_shade_darkest: "#843215",
  yellow_shade_darker: "#CA5800",
  yellow_shade_dark: "#E88E2D",
  yellow: "#FDBF11",
  yellow_shade_medium: "#FCCB41",
  yellow_shade_light: "#FDD870",
  yellow_shade_lighter: "#FCE39E",
  yellow_shade_lightest: "#FFF2CF",
  magenta_shade_darkest: "#351123",
  magenta_shade_darker: "#761548",
  magenta_shade_dark: "#af1f6b",
  magenta: "#EC00BB",
  magenta_shade_medium: "#E54096",
  magenta_shade_light: "#E46AA7",
  magenta_shade_lighter: "#EB99C2",
  magenta_shade_lightest: "#F5CBDF",
  green_shade_darkest: "#1A2E19",
  green_shade_darker: "#2C5C2D",
  green_shade_dark: "#408941",
  green: "#55B748",
  green_shade_medium: "#78C26D",
  green_shade_light: "#98CF90",
  green_shade_lighter: "#BCDEB4",
  green_shade_lightest: "#DCEDD9",
  red_shade_darkest: "#1A2E19",
  red_shade_darker: "#6E1614",
  red_shade_dark: "#A4201D",
  red: "#DB2B27",
  red_shade_medium: "#E25552",
  red_shade_light: "#E9807D",
  red_shade_lighter: "#F1AAA9",
  red_shade_lightest: "#F8D5D4",
  space_gray_shade_darkest: "#0E0C0D",
  space_gray_shade_darker: "#1A1717",
  space_gray_shade_dark: "#262223",
  space_gray_shade_medium_dark: "#332D2F",
  space_gray: "#5C5859",
  space_gray_shade_light: "#848081",
  space_gray_shade_lighter: "#ADABAC",
  space_gray_shade_lightest: "#D5D5D4"
};

/**
 * Returns a list of 8 sequential blue hues for data visualization based on Urban's style guide
 * @returns {string[]} - An array of colors
 */
function getBlues() {
  const shades = [
    colors.blue_shade_lightest,
    colors.blue_shade_lighter,
    colors.blue_shade_light,
    colors.blue_shade_medium,
    colors.blue,
    colors.blue_shade_dark,
    colors.blue_shade_darker,
    colors.blue_shade_darkest
  ];
  return shades.slice();
}

/**
 * Returns a list of 8 sequential magenta hues for data visualization based on Urban's style guide
 * @returns {string[]} - An array of colors
 */
function getMagentas() {
  const shades = [
    colors.magenta_shade_lightest,
    colors.magenta_shade_lighter,
    colors.magenta_shade_light,
    colors.magenta_shade_medium,
    colors.magenta,
    colors.magenta_shade_dark,
    colors.magenta_shade_darker,
    colors.magenta_shade_darkest
  ];
  return shades.slice();
}

/**
 * Returns a list of 8 sequential gray hues for data visualization based on Urban's style guide
 * @returns {string[]} - An array of colors
 */
function getGrays() {
  const shades = [
    colors.gray_shade_lightest,
    colors.gray_shade_lighter,
    colors.gray_shade_light,
    colors.gray_shade_medium,
    colors.gray,
    colors.gray_shade_dark,
    colors.gray_shade_darker,
    colors.gray_shade_darkest
  ];
  return shades.slice();
}

/**
 * Returns a list of 8 sequential yellow hues for data visualization based on Urban's style guide
 * @returns {string[]} - An array of colors
 */
function getYellows() {
  const shades = [
    colors.yellow_shade_lightest,
    colors.yellow_shade_lighter,
    colors.yellow_shade_light,
    colors.yellow_shade_medium,
    colors.yellow,
    colors.yellow_shade_dark,
    colors.yellow_shade_darker,
    colors.yellow_shade_darkest
  ];
  return shades.slice();
}

/**
 * Returns a list of 8 sequential green hues for data visualization based on Urban's style guide
 * @returns {string[]} - An array of colors
 */
function getGreens() {
  const shades = [
    colors.green_shade_lightest,
    colors.green_shade_lighter,
    colors.green_shade_light,
    colors.green_shade_medium,
    colors.green,
    colors.green_shade_dark,
    colors.green_shade_darker,
    colors.green_shade_darkest
  ];
  return shades.slice();
}

/**
 * Returns a list of 8 sequential spaceGray hues for data visualization based on Urban's style guide
 * @returns {string[]} - An array of colors
 */
function getSpaceGrays() {
  const shades = [
    colors.space_gray_shade_lightest,
    colors.space_gray_shade_lighter,
    colors.space_gray_shade_light,
    colors.space_gray,
    colors.space_gray_shade_medium_dark,
    colors.space_gray_shade_dark,
    colors.space_gray_shade_darker,
    colors.space_gray_shade_darkest
  ];
  return shades.slice();
}

/**
 * Returns a list of 8 sequential red hues for data visualization based on Urban's style guide
 * @returns {string[]} - An array of colors
 */
function getReds() {
  const shades = [
    colors.red_shade_lightest,
    colors.red_shade_lighter,
    colors.red_shade_light,
    colors.red_shade_medium,
    colors.red,
    colors.red_shade_dark,
    colors.red_shade_darker,
    colors.red_shade_darkest
  ];
  return shades.slice(0, numColors);
}

/**
 * Generates a diverging yellow and blue color palette for data visualization based on Urban's style guide
 * @returns {string[]} - An array of colors
 */
function getDivergingColors() {
  return [
    colors.yellow_shade_darker,
    colors.yellow,
    colors.yellow_shade_light,
    colors.yellow_shade_lightest,
    colors.blue_shade_lightest,
    colors.blue_shade_light,
    colors.blue,
    colors.blue_shade_darker
  ];
}

/**
 * Creates a list of up to 6 categorical colors for data visualization based on Urban's style guide
 * @param {number} [numColors=6] - The number of colors to return - must be 6 or less
 * @returns {string[]} - An array of colors
 */
function getCategoricalColors(numColors = 6) {
  if (numColors > 6) {
    console.warn(
      "If you need more than 6 colors, you'll need to construct your own palette by using the colors object exported from this module."
    );
    throw new Error("getCategoricalColors only supports up to 6 colors.");
  }
  if (numColors < 2) {
    throw new Error("getCategoricalColors must have at least 2 colors.");
  }

  if (numColors === 2) {
    return [colors.blue, colors.yellow];
  }
  if (numColors === 3) {
    return [colors.blue, colors.yellow, colors.magenta];
  }
  if (numColors === 4) {
    return [colors.blue, colors.yellow, colors.magenta, colors.green];
  }
  if (numColors === 5) {
    return [colors.blue, colors.yellow, colors.magenta, colors.green, colors.blue_shade_darker];
  }
  return [
    colors.blue,
    colors.yellow,
    colors.magenta,
    colors.green,
    colors.blue_shade_darker,
    colors.space_gray
  ];
}

/**
 * Creates a list of 5 blues optimized for mapping.
 * @returns {string[]} - An array of colors
 */
function getMapBlues() {
  return [
    colors.blue_shade_lightest,
    colors.blue_shade_light,
    colors.blue,
    colors.blue_shade_darker,
    colors.black
  ];
}

export default {
  ...colors,
  getBlues,
  getMagentas,
  getGrays,
  getGreens,
  getYellows,
  getGrays,
  getSpaceGrays,
  getReds,
  getCategoricalColors,
  getDivergingColors,
  getMapBlues
};

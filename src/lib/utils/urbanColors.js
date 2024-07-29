const black = "#000000";
const white = "#FFFFFF";
const blue_shade_darkest = "#062635";
const blue_shade_darker = "#0A4C6A";
const blue_shade_dark = "#12719E";
const blue = "#1696D2";
const blue_shade_medium = "#46ABDB";
const blue_shade_light = "#73BFE2";
const blue_shade_lighter = "#A2D4EC";
const blue_shade_lightest = "#CFE8F3";
const gray_shade_darkest = "#353535";
const gray_shade_darker = "#696969";
const gray_shade_dark = "#9D9D9D";
const gray = "#D2D2D2";
const gray_shade_medium = "#DCDBDB";
const gray_shade_light = "#E3E3E3";
const gray_shade_lighter = "#ECECEC";
const gray_shade_lightest = "#F5F5F5";
const yellow_shade_darkest = "#843215";
const yellow_shade_darker = "#CA5800";
const yellow_shade_dark = "#E88E2D";
const yellow = "#FDBF11";
const yellow_shade_medium = "#FCCB41";
const yellow_shade_light = "#FDD870";
const yellow_shade_lighter = "#FCE39E";
const yellow_shade_lightest = "#FFF2CF";
const magenta_shade_darkest = "#351123";
const magenta_shade_darker = "#761548";
const magenta_shade_dark = "#af1f6b";
const magenta = "#EC00BB";
const magenta_shade_medium = "#E54096";
const magenta_shade_light = "#E46AA7";
const magenta_shade_lighter = "#EB99C2";
const magenta_shade_lightest = "#F5CBDF";
const green_shade_darkest = "#1A2E19";
const green_shade_darker = "#2C5C2D";
const green_shade_dark = "#408941";
const green = "#55B748";
const green_shade_medium = "#78C26D";
const green_shade_light = "#98CF90";
const green_shade_lighter = "#BCDEB4";
const green_shade_lightest = "#DCEDD9";
const red_shade_darkest = "#1A2E19";
const red_shade_darker = "#6E1614";
const red_shade_dark = "#A4201D";
const red = "#DB2B27";
const red_shade_medium = "#E25552";
const red_shade_light = "#E9807D";
const red_shade_lighter = "#F1AAA9";
const red_shade_lightest = "#F8D5D4";
const space_gray_shade_darkest = "#0E0C0D";
const space_gray_shade_darker = "#1A1717";
const space_gray_shade_dark = "#262223";
const space_gray_shade_medium_dark = "#332D2F";
const space_gray = "#5C5859";
const space_gray_shade_light = "#848081";
const space_gray_shade_lighter = "#ADABAC";
const space_gray_shade_lightest = "#D5D5D4";

/**
 * Returns a list of 8 sequential blue hues for data visualization based on Urban's style guide
 * @returns {string[]} - An array of colors
 */
function getBlues() {
  const shades = [
    blue_shade_lightest,
    blue_shade_lighter,
    blue_shade_light,
    blue_shade_medium,
    blue,
    blue_shade_dark,
    blue_shade_darker,
    blue_shade_darkest
  ];
  return shades.slice();
}

/**
 * Returns a list of 8 sequential magenta hues for data visualization based on Urban's style guide
 * @returns {string[]} - An array of colors
 */
function getMagentas() {
  const shades = [
    magenta_shade_lightest,
    magenta_shade_lighter,
    magenta_shade_light,
    magenta_shade_medium,
    magenta,
    magenta_shade_dark,
    magenta_shade_darker,
    magenta_shade_darkest
  ];
  return shades.slice();
}

/**
 * Returns a list of 8 sequential gray hues for data visualization based on Urban's style guide
 * @returns {string[]} - An array of colors
 */
function getGrays() {
  const shades = [
    gray_shade_lightest,
    gray_shade_lighter,
    gray_shade_light,
    gray_shade_medium,
    gray,
    gray_shade_dark,
    gray_shade_darker,
    gray_shade_darkest
  ];
  return shades.slice();
}

/**
 * Returns a list of 8 sequential yellow hues for data visualization based on Urban's style guide
 * @returns {string[]} - An array of colors
 */
function getYellows() {
  const shades = [
    yellow_shade_lightest,
    yellow_shade_lighter,
    yellow_shade_light,
    yellow_shade_medium,
    yellow,
    yellow_shade_dark,
    yellow_shade_darker,
    yellow_shade_darkest
  ];
  return shades.slice();
}

/**
 * Returns a list of 8 sequential green hues for data visualization based on Urban's style guide
 * @returns {string[]} - An array of colors
 */
function getGreens() {
  const shades = [
    green_shade_lightest,
    green_shade_lighter,
    green_shade_light,
    green_shade_medium,
    green,
    green_shade_dark,
    green_shade_darker,
    green_shade_darkest
  ];
  return shades.slice();
}

/**
 * Returns a list of 8 sequential spaceGray hues for data visualization based on Urban's style guide
 * @returns {string[]} - An array of colors
 */
function getSpaceGrays() {
  const shades = [
    space_gray_shade_lightest,
    space_gray_shade_lighter,
    space_gray_shade_light,
    space_gray,
    space_gray_shade_medium_dark,
    space_gray_shade_dark,
    space_gray_shade_darker,
    space_gray_shade_darkest
  ];
  return shades.slice();
}

/**
 * Returns a list of 8 sequential red hues for data visualization based on Urban's style guide
 * @returns {string[]} - An array of colors
 */
function getReds() {
  const shades = [
    red_shade_lightest,
    red_shade_lighter,
    red_shade_light,
    red_shade_medium,
    red,
    red_shade_dark,
    red_shade_darker,
    red_shade_darkest
  ];
  return shades.slice();
}

/**
 * Generates a diverging yellow and blue color palette for data visualization based on Urban's style guide
 * @returns {string[]} - An array of colors
 */
function getDivergingColors() {
  return [
    yellow_shade_darker,
    yellow,
    yellow_shade_light,
    yellow_shade_lightest,
    blue_shade_lightest,
    blue_shade_light,
    blue,
    blue_shade_darker
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
    throw new Error("getCategoricalColors only supports up to 6 ");
  }
  if (numColors < 2) {
    throw new Error("getCategoricalColors must have at least 2 ");
  }

  if (numColors === 2) {
    return [blue, yellow];
  }
  if (numColors === 3) {
    return [blue, yellow, black];
  }
  if (numColors === 4) {
    return [blue, yellow, black, magenta];
  }
  if (numColors === 5) {
    return [blue, yellow, black, magenta, gray];
  }
  return [
    blue,
    yellow,
    magenta,
    black,
    gray,
    blue_shade_light
  ];
}

/**
 * Creates a list of 5 blues optimized for mapping.
 * @returns {string[]} - An array of colors
 */
function getMapBlues() {
  return [
    blue_shade_lightest,
    blue_shade_light,
    blue,
    blue_shade_darker,
    black
  ];
}

export default {
  black,
  white,
  blue_shade_darkest,
  blue_shade_darker,
  blue_shade_dark,
  blue,
  blue_shade_medium,
  blue_shade_light,
  blue_shade_lighter,
  blue_shade_lightest,
  gray_shade_darkest,
  gray_shade_darker,
  gray_shade_dark,
  gray,
  gray_shade_medium,
  gray_shade_light,
  gray_shade_lighter,
  gray_shade_lightest,
  yellow_shade_darkest,
  yellow_shade_darker,
  yellow_shade_dark,
  yellow,
  yellow_shade_medium,
  yellow_shade_light,
  yellow_shade_lighter,
  yellow_shade_lightest,
  magenta_shade_darkest,
  magenta_shade_darker,
  magenta_shade_dark,
  magenta,
  magenta_shade_medium,
  magenta_shade_light,
  magenta_shade_lighter,
  magenta_shade_lightest,
  green_shade_darkest,
  green_shade_darker,
  green_shade_dark,
  green,
  green_shade_medium,
  green_shade_light,
  green_shade_lighter,
  green_shade_lightest,
  red_shade_darkest,
  red_shade_darker,
  red_shade_dark,
  red,
  red_shade_medium,
  red_shade_light,
  red_shade_lighter,
  red_shade_lightest,
  space_gray_shade_darkest,
  space_gray_shade_darker,
  space_gray_shade_dark,
  space_gray_shade_medium_dark,
  space_gray,
  space_gray_shade_light,
  space_gray_shade_lighter,
  space_gray_shade_lightest,
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

/**
 * An object representing all of TPC's color palette.
 * @type Record<string, string>
 */
const colors = {
  blue_dark: "#174a7c",
  blue: "#008bb0",
  blue_shade_light: "#60a1b6",
  blue_shade_lighter: "#95c0cf",
  blue_shade_lightest: "#cae0e7",
  blue_shade_dark: "#1d5669",
  blue_shade_darker: "#0e2b35",
  orange: "#f0573e",
  gray: "#bcbec0",
  black: "#000000",
  yellow: "#fcb64b"
};

/**
 * Returns a list of 6 sequential blue hues for data visualization based on TPC's style guide
 * @returns {string[]} - An array of colors
 */
function getBlues() {
  const shades = [
    colors.blue_shade_lightest,
    colors.blue_shade_lighter,
    colors.blue_shade_light,
    colors.blue,
    colors.blue_shade_dark,
    colors.blue_shade_darker,
  ];
  return shades.slice();
}


export default {
  ...colors,
  getBlues,
};

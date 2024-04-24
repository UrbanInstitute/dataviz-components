const blue_dark = "#174a7c";
const blue = "#008bb0";
const blue_shade_light = "#60a1b6";
const blue_shade_lighter = "#95c0cf";
const blue_shade_lightest = "#cae0e7";
const blue_shade_dark = "#1d5669";
const blue_shade_darker = "#0e2b35";
const orange = "#f0573e";
const gray = "#bcbec0";
const black = "#000000";
const yellow = "#fcb64b";

/**
 * Returns a list of 6 sequential blue hues for data visualization based on TPC's style guide
 * @returns {string[]} - An array of colors
 */
function getBlues() {
  const shades = [
    blue_shade_lightest,
    blue_shade_lighter,
    blue_shade_light,
    blue,
    blue_shade_dark,
    blue_shade_darker,
  ];
  return shades.slice();
}


export default {
  blue_dark,
  blue,
  blue_shade_light,
  blue_shade_lighter,
  blue_shade_lightest,
  blue_shade_dark,
  blue_shade_darker,
  orange,
  gray,
  black,
  yellow,
  getBlues,
};

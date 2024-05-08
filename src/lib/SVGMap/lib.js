/*
 * Computes a fill color with a string or function and a fallback NA color
 * @param { Object | null } feature The data object from which to compute a dynamic color
 * @param { (Object) => string | string } fill The function used to compute the color string or a static color
 * @param { string } naFill The fallback color if the feature doesn't return a color from the fill function
 * @returns { string }
 */
export function getFill(feature, fill, naFill) {
  if (typeof fill === "string") {
    return fill;
  }
  return fill(feature) || naFill;
}

/*
 * Computes the stroke based on a feature and a stroke function or a stroke color
 * @param { Object | null } feature The feature used to compute the color
 * @param { (Object) => string | string } stroke The stroke color or a function that computes the stroke color
 * @returns { string }
 */
export function getStroke(feature, stroke) {
  if (typeof stroke === "string") {
    return stroke;
  }
  return stroke(feature);
}

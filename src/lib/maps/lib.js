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

/*
 * Performs shallow comparison between 2 objects. Useful for checking a reference set of properties against a geojson feature props
 * @param { Object.<string: any> } propsA Reference props to check against `propsB`.
 * @param { Object.<string: any> } propsB The feature properties object to compare `propsA` with.
 * @returns { boolean }
 */
export function compareProps(propsA, propsB) {
  for (const key in propsA) {
    const propsHasKey = Object.keys(propsB).includes(key);
    if (propsHasKey && propsB[key] !== propsA[key]) {
      return false;
    }
    if (!propsHasKey) {
      return false;
    }
  }
  return true;
}

/**
 * Raise a dom node to top of siblings
 * @param { HTMLElement } el The DOM element to raise
 * @returns void
 */
export function raise(el) {
  el.parentNode.appendChild(el);
}

/**
 * Determine if a feature should be highlighted based on 2 possible comparisons
 * @param { Object } feature The feature to check
 * @param { Object } compareA The first comparison
 * @param { Object } compareB The second comparison
 * @returns { boolean }
 **/
export function getHighlightFeature(feature, compareA, compareB) {
  if (!feature || !feature.properties) {
    return false;
  }
  if (compareA && compareProps(compareA, feature.properties)) {
    return true;
  }
  if (compareB && compareProps(compareB, feature.properties)) {
    return true;
  }
  return false;
}

export function getFill(feature, fill, naFill) {
  if (typeof fill === "string") {
    return fill;
  }
  return fill(feature) || naFill;
}

export function getStroke(feature, stroke) {
  if (typeof stroke === "string") {
    return stroke;
  }
  return stroke(feature);
}

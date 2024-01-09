/**
 * Converts a string to kebab-case.
 *
 * @param {string} x - The input string.
 * @returns {string} The lowercase, kebab-case string.
 */
export default function kebabCase(x) {
  return x.replace(/ /g, "-").toLowerCase();
}

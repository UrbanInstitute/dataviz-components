import { format } from "d3-format";
/**
 * Formats a number as a dollar amount.
 *
 * @param {number} x - The number to format.
 * @returns {string} The formatted dollar amount.
 */
export default function dollar_format(x) {
  const formatter = format("$,.0f");
  return formatter(x);
}

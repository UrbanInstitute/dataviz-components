<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  /**
   * @typedef {Object} Props
   * @property {number} [size] - The width and height dimension for the icon
   * @property {string} [fill] - The color to fill the icon
   */

  /** @type {Props} */
  let { size = 40, fill = "#000" } = $props();
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="Minus icon"
>
  <path d="M0 27V21H48V27H0Z" {fill} />
</svg>

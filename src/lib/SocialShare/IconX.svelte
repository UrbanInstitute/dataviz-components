<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  /**
   * @typedef {Object} Props
   * @property {"dark" | "light"} [variant="dark"] - The color variant of the icon
   * @property {number} [size=49] - The width and height dimension for the icon
   */

  /** @type {Props} */
  let { variant = "dark", size = 49 } = $props();

  let fill = $derived(variant == "dark" ? "#000000" : "#FFFFFF");
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="Twitter logo"
>
  <path
    {fill}
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm9.7-34h-3.375l-5.56 6.39L19.96 14H13l8.313 10.938L13.43 34h3.38l6.08-6.99L28.213 34H35l-8.672-11.529L33.7 14zm-4.56 17.971h1.868L18.942 15.923h-2.008L29.14 31.971z"
  ></path>
</svg>

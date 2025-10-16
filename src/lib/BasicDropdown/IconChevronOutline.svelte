<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  import urbanColors from "$lib/utils/urbanColors.js";

  /**
   * @typedef {Object} Props
   * @property {string} [fill=urbanColors.white] - Hex color for arrow fill
   */

  /** @type {Props} */
  let { fill = urbanColors.white } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path
    d="M15.8915 4.36218C15.9657 4.45576 16 4.56034 16 4.67593C16 4.79152 15.9657 4.88509 15.8915 4.95664L8.32548 12.2828C8.22841 12.3544 8.11992 12.3874 8 12.3874C7.88009 12.3874 7.78301 12.3544 7.70878 12.2828L0.108494 4.95664C0.0342612 4.88509 0 4.79152 0 4.67593C0 4.56034 0.0342612 4.45576 0.108494 4.36218L0.83369 3.66314C0.902213 3.59159 0.999286 3.55856 1.12491 3.55856C1.25054 3.55856 1.35332 3.59159 1.45039 3.66314L8.00571 9.98203L14.5553 3.66314C14.6524 3.59159 14.7609 3.55856 14.8808 3.55856C15.0007 3.55856 15.0978 3.59159 15.172 3.66314L15.8915 4.36218Z"
    {fill}
  />
</svg>

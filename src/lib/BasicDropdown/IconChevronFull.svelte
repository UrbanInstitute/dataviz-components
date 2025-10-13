<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  import urbanColors from "$lib/utils/urbanColors.js";

  /**
   * @typedef {Object} Props
   * @property {string} [fill] - Hex color for arrow fill
   */

  /** @type {Props} */
  let { fill = urbanColors.blue } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
  <path
    d="M15.1313 4.53479C15.5179 4.53479 15.7794 4.72252 15.9272 5.09798C16.0749 5.47345 15.9954 5.77851 15.7111 6.02491L8.65117 13.3816C8.45791 13.5342 8.2419 13.6046 8.00316 13.6046C7.76442 13.6046 7.57115 13.5342 7.42335 13.3816L0.283802 6.02491C-0.000415318 5.77851 -0.0686276 5.46171 0.0677969 5.09798C0.21559 4.72252 0.477071 4.53479 0.863607 4.53479H15.1313Z"
    {fill}
  />
</svg>

<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  /**
   * @typedef {Object} Props
   * @property {string} [content] - The text content to display in the heading
   */

  /** @type {Props} */
  let { content = "" } = $props();
</script>

<h3 class="heading-alt">{content}</h3>

<style>
  h3.heading-alt {
    margin: 0;
    text-transform: uppercase;
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-light);
    margin-bottom: var(--spacing-8);
    line-height: 1;
  }
</style>

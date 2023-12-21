<script>
  import "$lib/style/app.css";
  /**
   * The text to display in the block. Allows HTML content.
   * @type {string} [textBlock]
   */
  export let content;
</script>

<p class="text-block text-width">{@html content}</p>

<style>
  p.text-block {
    font-family: var(--font-family-sans);
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-normal);
    color: var(--color-gray-shade-darkest);
    margin-bottom: var(--spacing-8);
  }

  @media (min-width: 768px) {
    p.text-block {
      font-size: var(--font-size-xl);
      line-height: var(--line-height-relaxed);
    }
  }
</style>

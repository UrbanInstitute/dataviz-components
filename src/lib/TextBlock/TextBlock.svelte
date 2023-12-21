<script>
  import "$lib/style/app.css";
  import Block from "$lib/Block/Block.svelte";
  /**
   * The text to display in the block. Allows HTML content.
   * @type {string} [textBlock]
   */
  export let content;

  /**
   * The width of the text block. Defaults to "body" (max-width: 760px)
   * @type import("$lib/Block/Block.svelte").BlockWidth
   */
  export let width = "body";
</script>

<Block {width}>
  <p class="text-block">{@html content}</p>
</Block>

<style>
  p.text-block {
    margin: 0;
    font-family: var(--font-family-sans);
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-normal);
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-8);
  }
  p.text-block :global(a) {
    color: var(--color-text-accent);
  }

  @media (min-width: 768px) {
    p.text-block {
      font-size: var(--font-size-xl);
      line-height: var(--line-height-relaxed);
    }
  }
</style>

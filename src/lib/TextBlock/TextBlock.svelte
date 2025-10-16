<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  import Block from "$lib/Block/Block.svelte";

  /**
   * @typedef {Object} Props
   * @property {import('$lib/Block/Block.svelte').blockWidth} [width="body"] - The width of the text block
   * @property {"primary" | "reverse"} [variant="primary"] - The theme of the text block
   * @property {string | null} [color=null] - Optional override of variant to specify a color for the text block
   * @property {import('svelte').Snippet} [children] - HTML or text content to render inside of the component
   */

  /** @type {Props} */
  let { width = "body", variant = "primary", color = null, children } = $props();
</script>

<Block {width}>
  <p
    class="text-block {variant}"
    class:color-override={color}
    style:color
    style={`--color-override: ${color}`}
  >
    {@render children()}
  </p>
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

  p.text-block.color-override :global(a) {
    color: var(--color-override);
  }

  p.text-block.reverse {
    color: var(--color-text-reverse);
  }

  p.text-block.reverse :global(a) {
    color: var(--color-text-reverse);
  }

  @media (min-width: 768px) {
    p.text-block {
      font-size: var(--font-size-xl);
      line-height: var(--line-height-relaxed);
    }
  }
</style>

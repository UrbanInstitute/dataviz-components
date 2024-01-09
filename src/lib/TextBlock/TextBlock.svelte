<script>
  import "../style/app.css";
  import Block from "$lib/Block/Block.svelte";

  /**
   * The width of the text block. Defaults to "body" (max-width: 760px)
   * @type import("$lib/Block/Block.svelte").BlockWidth
   */
  export let width = "body";

  /**
   * The theme of the text block. Defaults to "primary"
   * @type {"primary" | "reverse"}
   */
  export let variant = "primary";

  /**
   * Optional override of variant to specify a color for the text block
   * @type {String | null} [color = null]
   */
  export let color = null;
</script>

<Block {width}>
  <p
    class="text-block {variant}"
    class:color-override={color}
    style:color
    style={`--color-override: ${color}`}
  >
    <slot />
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

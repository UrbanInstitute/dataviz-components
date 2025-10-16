<script module>
  /**
   * @typedef {"body" | "full" | "wide"} blockWidth
   */
</script>

<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script>
  /**
   * @typedef {Object} Props
   * @property {blockWidth} [width="body"] - The width of the block
   * @property {import('svelte').Snippet} [children] - The content to render inside the block
   */

  /** @type {Props} */
  let { width = "body", children } = $props();
</script>

<div class="layout-block {width}">
  {@render children()}
</div>

<style>
  .layout-block {
    margin: 0 var(--spacing-4);
  }
  .layout-block.body {
    max-width: var(--size-body-max-width, 760px);
  }
  .layout-block.full {
    max-width: none;
    margin: 0 auto;
    width: 100%;
  }

  .layout-block.wide {
    max-width: var(--size-wide-max-width, 1160px);
  }

  @media screen and (min-width: 792px) {
    .layout-block.body {
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1197px) {
    .layout-block.wide {
      margin: 0 auto;
    }
  }
</style>

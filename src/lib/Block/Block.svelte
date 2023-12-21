<script context="module">
  /**
   * @typedef {"body" | "full"} blockWidth
   */
</script>

<script>
  /**
   * The width of the block.
   * @type {blockWidth} [width="body"]
   */
  export let width = "body";
</script>

<div class="layout-block {width}">
  <slot />
</div>

<style>
  .layout-block {
    margin: 0 auto;
    width: 100%;
  }
  .layout-block.body {
    max-width: var(--body-max-width, 760px);
  }
  .layout-block.full {
    max-width: none;
  }
</style>

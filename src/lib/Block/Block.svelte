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
  }
  .layout-block.body {
    max-width: var(--body-max-width, 760px);
    margin: 0 var(--spacing-4);
  }
  .layout-block.full {
    max-width: none;
    width: 100%;
  }

  @media screen and (min-width: 792px) {
    .layout-block.body {
      padding: 0;
      margin: 0 auto;
    }
  }
</style>

<script context="module">
  /**
   * @typedef {"body" | "full" | "wide"} blockWidth
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

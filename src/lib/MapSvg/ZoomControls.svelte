<script>
  export let zoomIn;
  export let zoomOut;
  export let zoomReset;
  export let showReset = false;
</script>

<div class="zoom-controls">
  <button class="zoom-button" on:click={zoomOut}>out</button>
  <button class="zoom-button zoom-in" on:click={zoomIn}>in</button>
  {#if showReset}
    <button class="zoom-button" on:click={zoomReset}>reset</button>
  {/if}
</div>

<style>
  .zoom-controls {
    display: flex;
    flex-direction: column-reverse;
    height: 55px;
    width: 55px;
    --border-radius: 5px;
  }
  .zoom-button {
    appearance: none;
    border: solid 1px var(--color-gray-shade-light);
    background: var(--color-white);
    color: var(--color-gray-shade-darkest);
    padding: var(--spacing-2);
    display: block;
  }
  .zoom-button:nth-child(3) {
    margin-block: var(--spacing-2);
    border-radius: var(--border-radius);
  }
  .zoom-button:nth-child(1) {
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }
  .zoom-button:nth-child(2) {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }
</style>

<script>
  export let zoomIn;
  export let zoomOut;
  export let zoomReset;
  export let showReset = false;

  export let disableZoomIn = false;
  export let disableZoomOut = false;

  /*
   * Where the zoom control UI should be positioned.
   * @type {"bottom-left" | "bottom-right" | "top-left" | "top-right"}
   */
  export let controlPosition;

  $: top = controlPosition.includes("top");
</script>

<div class="zoom-controls {controlPosition}">
  {#if showReset && top}
    <button class="zoom-button zoom-reset" on:click={zoomReset} aria-label="Reset map zoom">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6V2H2V6H0V0Z" fill="black" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 0L15 6L13 6L13 2L9 2L9 -2.62268e-07L15 0Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 15L9 15L9 13L13 13L13 9L15 9L15 15Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 15L-2.62268e-07 9L2 9L2 13L6 13L6 15L0 15Z"
          fill="black"
        />
      </svg>
    </button>
  {/if}
  <button
    class="zoom-button zoom-out"
    disabled={disableZoomOut}
    on:click={zoomOut}
    aria-label="Zoom out map"
  >
    <svg width="11" height="3" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 1.5C11 2.32843 10.3284 3 9.5 3L1.5 3C0.671573 3 5.87108e-08 2.32843 1.31134e-07 1.5C2.03558e-07 0.671572 0.671573 -9.0294e-07 1.5 -8.30516e-07L9.5 -1.31134e-07C10.3284 -5.87108e-08 11 0.671573 11 1.5Z"
        fill="black"
      />
    </svg>
  </button>
  <button
    class="zoom-button zoom-in"
    disabled={disableZoomIn}
    on:click={zoomIn}
    aria-label="Zoom in map"
  >
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 1.5C7 0.671573 6.32843 0 5.5 0C4.67157 0 4 0.671573 4 1.5V4L1.5 4C0.671573 4 0 4.67157 0 5.5C0 6.32843 0.671573 7 1.5 7L4 7V9.5C4 10.3284 4.67157 11 5.5 11C6.32843 11 7 10.3284 7 9.5V7L9.5 7C10.3284 7 11 6.32843 11 5.5C11 4.67157 10.3284 4 9.5 4L7 4V1.5Z"
        fill="black"
      />
    </svg>
  </button>
  {#if showReset && !top}
    <button class="zoom-button zoom-reset" on:click={zoomReset} aria-label="Reset map zoom">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6V2H2V6H0V0Z" fill="black" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 0L15 6L13 6L13 2L9 2L9 -2.62268e-07L15 0Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 15L9 15L9 13L13 13L13 9L15 9L15 15Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 15L-2.62268e-07 9L2 9L2 13L6 13L6 15L0 15Z"
          fill="black"
        />
      </svg>
    </button>
  {/if}
</div>

<style>
  .zoom-controls {
    display: flex;
    flex-direction: column-reverse;
    --border-radius: 5px;
  }
  .zoom-button {
    height: 30px;
    width: 30px;
    appearance: none;
    border: solid 1px var(--color-gray-shade-light);
    background: var(--color-white);
    color: var(--color-gray-shade-darkest);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
  }

  .zoom-button:disabled {
    cursor: not-allowed;
  }

  .zoom-button:disabled svg path {
    opacity: 0.25;
  }

  .zoom-reset {
    margin-block: var(--spacing-1);
    border-radius: var(--border-radius);
  }
  .zoom-out {
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }
  .zoom-in {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }
</style>

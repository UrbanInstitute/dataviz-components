<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import "../style/app.css";
  const arrow = `<svg width="30" height="30" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" fill="#fff"/>
<circle cx="20" cy="20" r="17"/>
<path d="m20.264 8.4834 13.052 12.918h-26.103l13.051-12.918z" fill="#fff"/>
<rect x="15.241" y="15.659" width="10.047" height="14.353" fill="#fff"/>
</svg>`;

  /**
   * Element ID to scroll to
   * @type {string}
   */
  export let elementId = "";
</script>

<div
  class="return-top"
  role="button"
  tabindex="0"
  on:click={(e) => {
    dispatch("click", e);
    document.getElementById(elementId)?.scrollIntoView();
  }}
  on:keypress={(e) => {
    dispatch("keypress", e);
    document.getElementById(elementId)?.scrollIntoView();
  }}
>
  <span>Return to top</span>
  {@html arrow}
</div>

<style>
  .return-top {
    display: inline-flex;
    column-gap: 0.375rem;
    align-items: center;
    padding-top: var(--spacing-4);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    cursor: pointer;
  }
</style>

<script>
  import arrow from "./arrow.svg";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import "../style/app.css";

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
  <img src={arrow} alt="arrow" />
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

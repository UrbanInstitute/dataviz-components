<script>
  import IconChevronFull from "./IconChevronFull.svelte";

  /**
   * Variant of dropdown
   * @type {string} ["primary" | "secondary-blue" | "secondary-black" | "secondary-yellow"]
   */
  export let variant = "primary";

  /**
   * Unique id given to the dropdown DOM node
   * @type {string}
   */
  export let id;

  /**
   * Binds to the current value for the dropdown (data.value)
   * @type {string | null}
   */
  export let value;

  /**
   * Source data as an array of objects (value and label attributes)
   * @type {{ value: string, label: string}[]}
   */
  export let data;

  /**
   * Label for the dropdown (used for accessibility even if showLabel is set to false)
   * @type {string}
   */
  export let inlineLabel;

  /**
   * Show label above dropdown
   * @type {boolean}
   */
  export let showLabel = false;

  /**
   * placeholder for when no option is selected (accepts a null value)
   * @type {string | null} [placeholder="Select..."]
   */
  export let placeholder = "Select...";

  /**
   * Width (px) of the dropdown
   * @type {number}
   */
  export let dropdownWidth = 260;
</script>

<div class="dropdown-container">
  <IconChevronFull />

  <label aria-hidden="true" hidden={!showLabel} for={id}>{inlineLabel} </label>
  <select
    bind:value
    name={id}
    {id}
    class={`dropdown-select ${variant}`}
    style:width={`${dropdownWidth}px `}
    aria-label={inlineLabel}
    on:change
  >
    <!-- options -->
    {#if placeholder}
      <option value={null}>{placeholder}</option>
    {/if}
    {#each data as d (d.value)}
      {#if d.value !== ""}
        <option value={d.value}>{d.label}</option>
      {/if}
    {/each}
  </select>
</div>

<style>
  .dropdown-container {
    display: flex;
    font-size: var(--font-size-small);
    flex-direction: column;
    gap: var(--spacing-2);
  }

  label {
    text-transform: uppercase;
    color: var(--color-gray-shade-darker);
  }

  .dropdown-select {
    cursor: pointer;
    text-overflow: ellipsis;
    font-size: var(--font-size-normal);
    font-family: Lato, helvetica, sans-serif;
  }

  .dropdown-select.primary {
    color: var(--color-gray-shade-darker);
    padding: var(--spacing-2) var(--spacing-8) var(--spacing-2) var(--spacing-3);
    border: 1px solid var(--color-gray-shade-medium);
    background-color: var(--color-white);
    background-image: var(--bg-img);
    background-size: var(--spacing-4) var(--spacing-4);
    background-repeat: no-repeat;
    background-position: 95% center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .dropdown-select[class*="secondary-"] {
    padding: var(--spacing-1) var(--spacing-4) var(--spacing-1) var(--spacing-3);
    font-size: var(--font-size-normal);
    font-weight: var(--font-weight-medium);
    border-width: 1px;
    border-style: solid;
  }

  .dropdown-select.secondary-blue {
    color: var(--color-white);
    background-color: var(--color-blue);
    border-color: var(--color-blue);
  }

  .dropdown-select.secondary-black {
    color: var(--color-white);
    background-color: var(--color-black);
    border-color: var(--color-black);
  }

  .dropdown-select.secondary-yellow {
    color: var(--color-black);
    background-color: var(--color-yellow);
    border-color: var(--color-yellow);
  }
</style>

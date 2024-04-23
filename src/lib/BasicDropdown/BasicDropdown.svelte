<script>
  import { urbanColors } from "$lib/utils";

  // define arguments

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
   * Label for the dropdown (currently hidden)
   * @type {string}
   */
  export let inlineLabel;

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

  /**
   * Hex color for arrow fill
   * @type {string}
   */
  export let arrowFillColor = urbanColors.blue;

  // define the svg arrow
  let arrow = `data:image/svg+xml;utf8,<svg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15.1313 0.666626C15.5179 0.666626 15.7794 0.846014 15.9272 1.20479C16.0749 1.56356 15.9954 1.85507 15.7111 2.09052L8.65117 9.12027C8.45791 9.26602 8.2419 9.33329 8.00316 9.33329C7.76442 9.33329 7.57115 9.26602 7.42335 9.12027L0.283802 2.09052C-0.000415318 1.85507 -0.0686276 1.55235 0.0677969 1.20479C0.21559 0.846014 0.477071 0.666626 0.863607 0.666626H15.1313Z' fill='${encodeURIComponent(
    arrowFillColor
  )}'/></svg>`;
</script>

<div class="dropdown-container">
  <label aria-hidden="true" hidden for={id}>{inlineLabel}</label>
  <select
    bind:value
    name={id}
    {id}
    class="dropdown-select"
    style={`--bg-img: url("${arrow}"); width: ${dropdownWidth}px;`}
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
    align-items: center;
  }

  .dropdown-select {
    color: var(--color-gray-shade-darker);
    padding: var(--spacing-2) var(--spacing-8) var(--spacing-2) var(--spacing-3);
    font-size: var(--font-size-normal);
    font-family: Lato, helvetica, sans-serif;
    border: 1px solid var(--color-gray-shade-medium);
    cursor: pointer;
    background-color: var(--color-white);
    background-image: var(--bg-img);
    background-size: var(--spacing-4) var(--spacing-4);
    background-repeat: no-repeat;
    background-position: 95% center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-overflow: ellipsis;
  }
</style>

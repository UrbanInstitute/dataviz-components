<!-- Portions of this code have been written or edited by generative-AI tools. -->
<script>
  import IconChevronFull from "./IconChevronFull.svelte";
  import IconChevronOutline from "./IconChevronOutline.svelte";
  import urbanColors from "$lib/utils/urbanColors.js";

  /**
   * @typedef {Object} Props
   * @property {"primary" | "secondary-blue" | "secondary-black" | "secondary-yellow"} [variant] - Variant of dropdown
   * @property {string} id - Unique id given to the dropdown DOM node
   * @property {string | null} value - Binds to the current value for the dropdown (data.value)
   * @property {{ value: string, label: string}[]} data - Source data as an array of objects (value and label attributes)
   * @property {string} inlineLabel - Label for the dropdown (used for accessibility even if showLabel is set to false)
   * @property {boolean} [showLabel] - Show label above dropdown
   * @property {string | null} [placeholder] - Placeholder for when no option is selected (accepts a null value)
   * @property {number} [dropdownWidth] - Width (px) of the dropdown
   * @property {(event: Event) => void} [onchange] - Callback fired when dropdown value changes
   * @property {import('svelte').Snippet} [icon] - Custom icon snippet to replace default chevron
   */

  /** @type {Props} */
  let {
    variant = "primary",
    id,
    value = $bindable(),
    data,
    inlineLabel,
    showLabel = false,
    placeholder = "Select...",
    dropdownWidth = 260,
    onchange,
    icon
  } = $props();
</script>

<div class="dropdown-parent">
  <label aria-hidden="true" hidden={!showLabel} for={id}>{inlineLabel} </label>
  <div class="dropdown-container" style:width={`${dropdownWidth}px `}>
    <select
      bind:value
      name={id}
      {id}
      class={`dropdown-select ${variant}`}
      aria-label={inlineLabel}
      onchange={onchange}
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
    <div class="icons" aria-hidden="true">
      <span class="dropdown-chevron">
        {#if icon}
          {@render icon()}
        {:else}
          {#if variant === "primary"}
            <IconChevronFull />
          {:else if variant === "secondary-blue" || variant === "secondary-black"}
            <IconChevronOutline />
          {:else if variant === "secondary-yellow"}
            <IconChevronOutline fill={urbanColors.black} />
          {/if}
        {/if}
      </span>
    </div>
  </div>
</div>

<style>
  .dropdown-parent {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }

  .dropdown-container {
    position: relative;
  }

  label {
    font-size: var(--font-size-small);
    text-transform: uppercase;
    color: var(--color-gray-shade-darker);
  }

  select {
    cursor: pointer;
    text-overflow: ellipsis;
    font-size: var(--font-size-normal);
    font-family: Lato, helvetica, sans-serif;
    background-image: var(--bg-img);
    background-size: var(--spacing-4) var(--spacing-4);
    background-repeat: no-repeat;
    background-position: 95% center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    border-radius: 0;
  }

  .dropdown-select.primary {
    color: var(--color-gray-shade-darker);
    padding: var(--spacing-2) var(--spacing-8) var(--spacing-2) var(--spacing-3);
    border: 1px solid var(--color-gray-shade-medium);
    background-color: var(--color-white);
  }

  .dropdown-select[class*="secondary-"] {
    padding: var(--spacing-1) var(--spacing-4);
    font-size: var(--font-size-normal);
    font-weight: var(--font-weight-bold);
    border-width: 1px;
    border-style: solid;
    line-height: 150%;
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

  .icons {
    pointer-events: none;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 0 var(--spacing-3);
  }

  .dropdown-chevron {
    width: var(--spacing-4);
    height: var(--spacing-4);
  }
</style>

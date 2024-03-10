<!-- @component Button a basic HTML button with Urban styling-->
<script>
  import "../style/app.css";
  import { createEventDispatcher } from "svelte";
  /**
   * Which variant of button to use
   * @type {"primary" | "primary-black" | "secondary" | "secondary-black" | "tertiary"}
   */
  export let variant = "primary";


  /**
   * Which size of button to use
   * @type {"standard" | "small" }
   */
  export let size = "standard"

  /**
   * Is the button disabled?
   * @type { boolean }
   */
  export let disabled = false;

  let el;

  let hovered = false;

  let dispatch = createEventDispatcher();

  function getIconColor(_variant, _hovered, el) {
    if (!el) return;
    let iconColor = getComputedStyle(el).getPropertyValue("--current-color");
    return iconColor;
  }

  function onMouseEnter(e) {
    hovered = true;
    dispatch("mouseenter", e);
  }
  function onMouseLeave(e) {
    hovered = false;
    dispatch("mouseleave", e);
  }

  $: iconColor = getIconColor(variant, hovered, el);
</script>
<button class="variant-{variant} size-{size}" bind:this={el} on:click {disabled} on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave}>
  <slot>Default button text</slot>
  {#if $$slots.icon}
    <span class="button-icon"><slot name="icon" {iconColor}></slot></span>
  {/if}
</button>
<style>
  button {
    appearance: none;
    border: none;
    cursor: pointer;
    --current-color: var(--color-white);
    color: var(--current-color);
    font-family: var(--font-family-sans);
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    --border-size: 2px;
  }

  .button-icon {
    display: inline-block;
    margin-left: 0.5rem;
  }

  /* sizes */
  button.size-standard {
    padding: calc(1rem - var(--border-size) * 2);
  }
  button.size-small {
    padding: calc(0.75rem - var(--border-size) * 2);
  }

  /* primary variant */
  button.variant-primary {
    background-color: var(--color-blue);
    border: solid var(--border-size) var(--color-blue);
    --current-color: var(--color-white);
  }
  button.variant-primary:hover {
    background-color: var(--color-blue-shade-dark);
    border: solid var(--border-size) var(--color-blue-shade-dark);
  }

  /* primary-black variant */
  button.variant-primary-black {
    background-color: var(--color-black);
    border: solid var(--border-size) var(--color-black);
    --current-color: var(--color-white);
  }
  button.variant-primary-black:hover {
    background-color: var(--color-white);
    --current-color: var(--color-black);
    border: solid var(--border-size) var(--color-black);
  }

  /* secondary variant */
  button.variant-secondary {
    background-color: var(--color-white);
    border: solid var(--border-size) var(--color-blue);
    --current-color: var(--color-blue);
  }
  button.variant-secondary:hover {
    background-color: var(--color-blue);
    --current-color: var(--color-white);
    border: solid var(--border-size) var(--color-blue);
  }

  /* secondary-black variant */
  button.variant-secondary-black {
    background-color: var(--color-white);
    border: solid var(--border-size) var(--color-black);
    --current-color: var(--color-black);
  }
  button.variant-secondary-black:hover {
    background-color: var(--color-black);
    --current-color: var(--color-white);
    border: solid var(--border-size) var(--color-black);
  }
  /* tertiary variant */
  button.variant-tertiary {
    background-color: var(--color-yellow);
    border: solid var(--border-size) var(--color-yellow);
    --current-color: var(--color-black);
  }
  button.variant-tertiary:hover {
    background-color: var(--color-black);
    border: solid var(--border-size) var(--color-black);
    --current-color: var(--color-white);
  }

</style>

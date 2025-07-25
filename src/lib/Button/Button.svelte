<!-- @component Button a basic HTML button with Urban styling-->
<script>
  import { createEventDispatcher } from "svelte";
  /**
   * @typedef Props
   * @type Object
   * @property {"primary" | "primary-black" | "secondary" | "secondary-black" | "tertiary"} variant - Which variant of button to use
   * @property {"standard" | "small" } size
   * @property { boolean } disabled - Is the button disabled?
   * @property {Function} onMouseEnter - Callback for mouse enter event
   * @property {Function} onMouseLeave - Callback for mouse leave event
   * @property {Function} onClick - Callback for click event
   */

  /**
   * @type {Props}
   */
  const {
    variant = "primary",
    size = "standard",
    disabled = false,
    onMouseenter = () => {},
    onMouseleave = () => {},
    onClick = () => {},
    children = () => {},
    icon = (iconColor) => {}
  } = $props();

  let el;

  let hovered = false;

  function getIconColor(_variant, _hovered, el) {
    if (!el) return;
    let iconColor = getComputedStyle(el).getPropertyValue("--button-color");
    return iconColor;
  }

  function _onMouseenter(e) {
    hovered = true;
    onMouseenter(e);
  }
  function _onMouseleave(e) {
    hovered = false;
    onMouseleave(e);
  }

  function _onClick(e) {
    onClick(e);
  }

  let iconColor = $derived(getIconColor(variant, hovered, el));
</script>

<button
  class="variant-{variant} size-{size}"
  bind:this={el}
  {disabled}
  aria-disabled={disabled}
  onmouseenter={_onMouseenter}
  onmouseleave={_onMouseleave}
  onclick={_onClick}
>
  {@render children()}
  {#if icon}
    <span class="button-icon">
      {@render icon(iconColor)}
    </span>
  {/if}
</button>

<style>
  button {
    --border-size: 2px;
    --button-color: var(--color-white);
    appearance: none;
    border: none;
    cursor: pointer;
    color: var(--button-color);
    font-family: var(--font-family-sans);
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
  }

  button:disabled {
    cursor: not-allowed;
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
    --button-color: var(--color-white);
    background-color: var(--color-blue);
    border: solid var(--border-size) var(--color-blue);
  }

  button.variant-primary:hover:not(:disabled) {
    background-color: var(--color-blue-shade-dark);
    border: solid var(--border-size) var(--color-blue-shade-dark);
  }

  /* primary-black variant */
  button.variant-primary-black {
    --button-color: var(--color-white);
    background-color: var(--color-black);
    border: solid var(--border-size) var(--color-black);
  }

  button.variant-primary-black:hover {
    --button-color: var(--color-black);
    background-color: var(--color-white);
    border: solid var(--border-size) var(--color-black);
  }

  /* secondary variant */
  button.variant-secondary {
    --button-color: var(--color-blue);
    background-color: var(--color-white);
    border: solid var(--border-size) var(--color-blue);
  }

  button.variant-secondary:hover:not(:disabled) {
    --button-color: var(--color-white);
    background-color: var(--color-blue);
    border: solid var(--border-size) var(--color-blue);
  }

  button.variant-secondary:disabled,
  button.variant-secondary-black:disabled {
    --button-color: var(--color-gray);
    border: solid var(--border-size) var(--color-gray);
  }

  /* secondary-black variant */
  button.variant-secondary-black {
    --button-color: var(--color-black);
    background-color: var(--color-white);
    border: solid var(--border-size) var(--color-black);
  }

  button.variant-secondary-black:hover:not(:disabled) {
    --button-color: var(--color-white);
    background-color: var(--color-black);
    border: solid var(--border-size) var(--color-black);
  }

  /* tertiary variant */
  button.variant-tertiary {
    --button-color: var(--color-black);
    background-color: var(--color-yellow);
    border: solid var(--border-size) var(--color-yellow);
  }

  button.variant-tertiary:hover {
    --button-color: var(--color-white);
    background-color: var(--color-black);
    border: solid var(--border-size) var(--color-black);
  }

  /* disabled state */
  button.variant-primary:disabled,
  button.variant-primary-black:disabled,
  button.variant-tertiary:disabled {
    --button-color: var(--color-white);
    background-color: var(--color-gray);
    border: solid var(--border-size) var(--color-gray);
  }

  button.variant-secondary:disabled,
  button.variant-secondary-black:disabled {
    --button-color: var(--color-gray);
    border: solid var(--border-size) var(--color-gray);
  }
</style>

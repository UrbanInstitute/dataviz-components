<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  /**
   * @typedef {Object} Props
   * @property {boolean} [active=false] - Whether the toggle is active or not
   * @property {string} [label="Enim id qui labore labore"] - Label for the toggle
   * @property {"left" | "right"} [labelPosition="left"] - Position of the label relative to the toggle
   * @property {boolean} [disabled=false] - Whether the toggle is disabled or not
   * @property {(event: MouseEvent) => void} [onclick] - Callback fired when toggle is clicked
   */

  /** @type {Props} */
  let {
    active = $bindable(false),
    label = "Enim id qui labore labore",
    labelPosition = "left",
    disabled = false,
    onclick
  } = $props();
</script>

<button
  class="container {labelPosition}"
  {disabled}
  role="switch"
  aria-checked={active}
  onclick={(event) => {
    active = !active;
    onclick?.(event);
  }}
  style:direction={labelPosition === "right" ? "rtl" : "ltr"}
  ><p class="label {labelPosition}">{label}</p>
  <span class="toggle" aria-hidden="true"><span class="circle"></span></span>
</button>

<style>
  .container {
    appearance: none;
    background: none;
    border: none;
    color: var(--color-black);
    display: inline-flex;
    gap: 0.75rem;
    justify-content: start;
    align-items: center;
    cursor: pointer;
  }

  /* lower opacity if disabled */
  .container:disabled {
    opacity: 0.5;
  }

  /* label text */
  .label {
    display: inline-block;
    font-weight: 400;
    font-size: 1.125rem;
    font-style: italic;
  }

  .toggle {
    display: inline-block;
    width: 50px;
    height: 24px;
    border-radius: 12px;
    background-color: var(--color-gray-shade-dark);
    border: 1px solid var(--color-gray-shade-dark);
    position: relative;
    transition:
      background-color 250ms ease,
      border 250ms ease;
  }

  .toggle .circle {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    background-color: var(--color-white);
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(2px, 2px);
    transition: transform 250ms ease;
  }

  button[aria-checked="true"] .toggle {
    background-color: var(--color-blue);
    border: 1px solid var(--color-blue);
  }

  button[aria-checked="true"] .circle {
    background-color: var(--color-white);
    left: none;
    transform: translate(28px, 2px);
  }

  @media (prefers-reduced-motion: reduce) {
    .toggle,
    .toggle .circle {
      transition-duration: 0ms;
    }
  }
</style>

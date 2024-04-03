<script>
  /**
   * Whether the toggle is active or not
   * @type {boolean}
   **/
  export let active = false;

  /**
   * Label for the toggle
   * @type {string}
   **/
  export let label = "Enim id qui labore labore";

  /**
   * Position of the label relative to the toggle
   * @type {"left" | "right"}
   **/
  export let labelPosition = "left";

  /**
   * Whether the toggle is disabled or not
   * @type {boolean}
   **/
  export let disabled = false;
</script>

<button
  class="container {labelPosition}"
  {disabled}
  aria-pressed={active}
  on:click={() => (active = !active)}
  ><p class="label {labelPosition}">{label}</p>
  <span class="toggle" aria-hidden="true"><span class="circle" /></span>
</button>

<style>
  .container {
    appearance: none;
    background: none;
    border: none;
    color: var(--color-black);
    display: inline-flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
  }

  .container.right {
    flex-direction: row-reverse;
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

  .label.left {
    margin-right: 0.75rem;
  }

  .label.right {
    margin-left: 0.75rem;
  }

  .toggle {
    display: inline-block;
    width: 36px;
    height: 20px;
    border-radius: 10px;
    background-color: var(--color-white);
    border: 1px solid var(--color-gray-shade-light);
    position: relative;
    transition: background-color 250ms ease, border 250ms ease;
  }

  .toggle .circle {
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: var(--color-gray-shade-light);
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(2px, 2px);
    transition: transform 250ms ease;
  }

  button[aria-pressed="true"] .toggle {
    background-color: var(--color-blue);
    border: 1px solid var(--color-blue);
  }

  button[aria-pressed="true"] .circle {
    background-color: var(--color-white);
    left: none;
    transform: translate(17px, 2px);
  }
</style>

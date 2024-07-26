<script>
  /**
   * True if the icon displays as a plus, for example if content is collapsed
   * @type {boolean} [plusModeActivated = true]
   */
  export let plusModeActivated = true;

  /**
   * An optional custom click handler to be called when any share button is clicked
   * If set externally, toggle plusModeActivated
   * @param {import("svelte").ComponentEvents<This>} evt - A Svelte component event
   * @returns {void}
   */
  export let onClick = function (evt) {
    plusModeActivated = !plusModeActivated;
  };

  /**
   * The height and width dimensions of the activated plus
   * @type {number} [size = 40]
   */
  export let size = 40;

  /**
   * How wide each bar of the plus is
   * @type {number} [barWidth = 5]
   */
  let barWidth = 5;

  $: width = size;
  $: height = size;
</script>

<button
  class="container"
  style="width: {width}px; height: {height}px; --bar-width: {barWidth}px;"
  on:click={(evt) => onClick(evt)}
>
  <div class="bar {plusModeActivated ? 'upright' : ''}" />
  <div class="bar" />
</button>

<style>
  .container {
    position: relative;
    background-color: var(--color-white);
    border: none;
    margin: 0;
    padding: 0;
  }
  .bar {
    position: absolute;
    width: 100%;
    height: var(--bar-width);
    background-color: var(--color-black);
    left: 0;
    top: calc(50% - calc(var(--bar-width) / 2));
    transition: 300ms;
  }
  .upright {
    transform: rotate(-90deg);
  }
</style>

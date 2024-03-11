<!-- @component ChartBlock - A basic chart wrapper that includes, title, description, source, and notes. -->
<script>
  import Block from "../Block/Block.svelte";

  /**
   * The width of the text block. Defaults to "body" (max-width: 760px)
   * @type import("../Block/Block.svelte").BlockWidth
   */
  export let width = "body";

  /**
   * The title of the chart block
   * @type {string}
   */
  export let title;
  /**
   * The description of the chart block
   * @type {string}
   */
  export let description;

  /**
   * The source to include below the chart body - accepts HTML
   * @type {string}
   */
  export let source;
  /**
   * The notes line to include below source - accepts HTML
   * @type {string}
   */
  export let notes;

  /**
   * Optional color override for text
   * @type {string}
   */
  export let color = "var(--color-black)";
</script>

<Block {width}>
  <div class="chart-wrapper" style:--current-color={color}>
    {#if title}
      <h4 class="chart-title">{title}</h4>
    {/if}
    {#if description}
      <p class="chart-description">{description}</p>
    {/if}
    <slot />
    {#if source || notes}
      <div class="chart-footer">
        {#if source}
          <p><strong>Source:</strong> {@html source}</p>
        {/if}
        {#if notes}
          <p><strong>Notes:</strong> {@html notes}</p>
        {/if}
      </div>
    {/if}
  </div>
</Block>

<style>
  .chart-wrapper {
    line-height: var(--line-height-normal);
  }
  .chart-wrapper * {
    color: var(--current-color);
  }
  /* chart text */
  .chart-title {
    margin: 0 0 var(--spacing-2);
    font-size: var(--font-size-xl);
  }

  .chart-description {
    font-size: var(--font-size-large);
    margin: 0;
  }

  .chart-footer p {
    font-size: var(--font-size-small);
    margin: 0;
  }
  .chart-footer p:not(:last-child) {
    margin-bottom: var(--spacing-2);
  }

  @media (min-width: 769px) {
    .chart-title {
      font-size: var(--font-size-2xl);
    }
  }
</style>

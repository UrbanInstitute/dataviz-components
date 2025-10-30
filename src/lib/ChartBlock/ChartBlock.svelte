<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<!-- @component ChartBlock - A basic chart wrapper that includes, title, description, source, and notes. -->
<script>
  import Block from "../Block/Block.svelte";

  /**
   * @typedef {Object} ChartBlockProps
   * @property {import("../Block/Block.svelte").blockWidth} [width="body"] The width of the text block. Defaults to "body" (max-width: 760px)
   * @property {string} [title] The title of the chart block
   * @property {string} [description] The description of the chart block
   * @property {string} [source] The source to include below the chart body - accepts HTML
   * @property {string} [notes] The notes line to include below source - accepts HTML
   * @property {string} [color="var(--color-black)"] Optional color override for text
   * @property {import('svelte').Snippet} [children] Optional snippet for chart content
   */

  /** @type {ChartBlockProps} */
  let {
    width = "body",
    title,
    description,
    source,
    notes,
    color = "var(--color-black)",
    children
  } = $props();
</script>

<Block {width}>
  <div class="chart-wrapper" style:--current-color={color}>
    {#if title || description}
      <div class="chart-header">
        {#if title}
          <h4 class="chart-title">{@html title}</h4>
        {/if}
        {#if description}
          <p class="chart-description">{@html description}</p>
        {/if}
      </div>
    {/if}
    {#if children}
      {@render children()}
    {/if}
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
    color: var(--current-color) !important;
  }
  /* chart text */
  .chart-title {
    margin: 0 0 var(--spacing-1);
    font-size: var(--font-size-xl);
  }

  .chart-description {
    font-size: var(--font-size-large);
    margin: 0;
  }

  .chart-header {
    margin-bottom: var(--spacing-2);
  }

  .chart-footer {
    margin-top: var(--spacing-2);
  }

  .chart-wrapper .chart-footer p {
    font-size: 12px;
    line-height: 21px;
    margin: 0;
  }
  .chart-footer p:not(:last-child) {
    margin-bottom: var(--spacing-1);
  }

  @media (min-width: 769px) {
    .chart-title {
      font-size: var(--font-size-2xl);
    }
  }
</style>

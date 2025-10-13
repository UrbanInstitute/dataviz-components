<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  /**
   * @typedef {Object} Props
   * @property {string} value - Scorecard value
   * @property {string} label - Scorecard label
   */

  /** @type {Props} */
  let { value, label } = $props();
</script>

<div class="scorecard-container">
  <!-- scorecard value -->
  {#if value}
    <div class="scorecard-number">
      <div class="scorecard-number-inner">
        {value}
      </div>
    </div>
  {/if}
  <!-- scorecard label -->
  {#if label}
    <div class="scorecard-text-group font-light">
      <div class="scorecard-text">
        {label}
      </div>
    </div>
  {/if}
</div>

<style>
  .scorecard-container {
    display: flex;
    flex-direction: row;
    gap: 2px;
    max-height: var(--spacing-20);
    height: var(--spacing-20);
  }

  .scorecard-number {
    display: flex;
    align-items: center;
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-bold);
    height: var(--spacing-20);
    color: var(--color-white);
    background-color: var(--color-blue-shade-darker);
    padding: 0 1rem;
    text-decoration: underline;
    text-underline-offset: var(--spacing-2);
    text-decoration-color: var(--color-blue);
    text-decoration-thickness: var(--spacing-1);
  }
  .scorecard-number-inner {
    transform: translateY(-6px);
  }

  .scorecard-text-group {
    display: flex;
    align-items: center;
    height: var(--spacing-20);
    background-color: var(--color-gray-shade-light);
  }

  .scorecard-text {
    font-size: var(--font-size-3xl);
    overflow: nowrap;
    padding: 0 var(--spacing-4);
    text-transform: uppercase;
  }

  /* on smaller screens, reduce font size so there's no vertical stacking */
  @media screen and (max-width: 450px) {
    .scorecard-text {
      font-size: var(--font-size-2xl);
    }
  }

  @media screen and (max-width: 376px) {
    .scorecard-number {
      height: var(--spacing-16);
    }
    .scorecard-container {
      height: var(--spacing-16);
      max-height: var(--spacing-16);
    }
    .scorecard-text-group {
      height: var(--spacing-16);
    }
  }
</style>

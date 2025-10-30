<!-- @component `SectionBreak` [Read the docs.](https://urbaninstitute.github.io/dataviz-components/?path=/docs/components-sectionbreak--docs) -->
<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script>
  /**
   * @typedef {Object} Props
   * @property {string} number String to display as the "number" of the section
   * @property {string} subhead String to display as the subhead
   * @property {string} [accentColor="#9d9d9d"] Color to be used for the number
   * @property {string} [fontWeight="var(--font-weight-light)"] Font weight of the number
   */

  /** @type {Props} */
  let {
    number,
    subhead,
    accentColor = "#9d9d9d",
    fontWeight = "var(--font-weight-light)"
  } = $props();
</script>

<div class="section-break" style:--accent-color={accentColor} style:--font-weight={fontWeight}>
  <span class="section-number">{number}.</span>
  <div class="section-line"></div>
</div>
<h2>{subhead}</h2>

<style>
  .section-break {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    margin-bottom: var(--spacing-12);
  }
  .section-number {
    font-size: 5rem;
    color: var(--accent-color, #9d9d9d);
    line-height: 1;
    margin-right: var(--spacing-6);
    flex-shrink: 0;
    font-family: Lato;
    font-weight: var(--font-weight);
  }
  .section-line {
    width: 100%;
    border-bottom: solid 1px var(--color-gray, #9d9d9d);
    transform: translateY(-10px);
    flex-shrink: 1;
  }

  h2 {
    font-family: var(--font-family-sans);
    color: var(--color-black);
    font-family: var(--font-family-sans);
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-snug);
    text-transform: none;
    margin-bottom: 0;
  }
  @media screen and (min-width: 376px) {
    .section-break {
      margin-bottom: var(--spacing-10);
    }
  }
  @media screen and (min-width: 768px) {
    h2 {
      font-size: var(--font-size-4xl);
    }
    .section-number {
      margin-right: var(--spacing-4);
    }
    .section-line {
      display: inline-block;
      vertical-align: text-bottom;
    }
  }
</style>

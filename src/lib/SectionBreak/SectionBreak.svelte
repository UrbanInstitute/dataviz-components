<!-- @component `SectionBreak` [Read the docs.](https://urbaninstitute.github.io/dataviz-components/?path=/docs/components-sectionbreak--docs) -->
<script>
  import "../style/app.css";
  /**
   * String to display as the "number" of the section
   * @type { string }
   **/
  export let number;
  /**
   * String to display as the subhead
   * @type { string }
   **/
  export let subhead;
  /**
   * Color to be used for the number
   * @type { string } [accentColor="#9d9d9d"]
   **/
  export let accentColor = "#9d9d9d";
  /**
   * Font weight of the number
   * @type { string } [fontWeight="var(--fknt-weight-light)"]
   **/
  export let fontWeight = "var(--font-weight-light)";
</script>

<div class="section-break" style:--accent-color={accentColor} style:--font-weight={fontWeight}>
  <span class="section-number">{number}.</span>
  <div class="section-line" />
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

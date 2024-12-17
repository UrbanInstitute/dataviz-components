<script>
  import Block from "../Block/Block.svelte";
  import SocialShare from "../SocialShare/SocialShare.svelte";

  /**
   * Text that should be displayed in headline.
   * @type {string}
   */
  export let headline;

  /**
   * Optional description to be displayed below headline.
   * @type {string | null}
   */
  export let description = null;

  /**
   * Optional eyebrow to be displayed above the headline.
   * @type {string | null}
   */
  export let eyebrow = null;

  /**
   * Date to be displayed below headline.
   * @type {string | null}
   */
  export let date = null;

  /**
   * Optional prefix for the date.
   * @type {string}
   */
  export let datePrefix = "";

  /**
   * Optional URL to share on social media. Will include social buttons if defined.
   * @type {string | null}
   */
  export let shareUrl = null;

  /**
   * Width of the headline. Default is "body".
   * @type {@import("../Block/Block.svelte").BlockWidth}
   */
  export let width = "body";

  /**
   * The color variant of the social media icons
   * @type {"dark" | "light"} [variant = "dark"]
   */
  export let variant = "dark";
</script>

<Block {width}>
  <div class="headline-wrap {variant}">
    {#if $$slots.eyebrow}
      <!--
        Optional slot for custom content in the eyebrow slot.
         -->
      <slot name="eyebrow" />
    {:else if eyebrow}
      <p class="headline-eyebrow">{eyebrow}</p>
    {/if}
    {#if $$slots.headline}
      <!--
        Optional slot for custom content in the headline slot.
         -->
      <slot name="headline" />
    {:else}
      <h1 class="headline-page-headline">{headline}</h1>
    {/if}
    {#if $$slots.description}
      <!--
        Optional slot for custom content in the description slot.
         -->
      <slot name="description" />
    {:else if description}
      <p class="headline-description">{description}</p>
    {/if}
    {#if $$slots.date}
      <!--
        Optional slot for custom content in the date slot.
         -->
      <slot name="date" />
    {:else if date}
      <p class="headline-date">
        {#if datePrefix}
          <span>{datePrefix} </span>
        {/if}
        <time>{date}</time>
      </p>
    {/if}
    <!--
      Optional slot for extra content to include below the date and above the share buttons.
       -->
    <slot name="extra" />
    <hr class="headline-rule" />
  </div>
  {#if shareUrl}
    <SocialShare {shareUrl} {variant} />
  {/if}
</Block>

<style>
  .headline-wrap {
    text-align: center;
    margin-bottom: var(--spacing-8);
  }
  .headline-rule {
    border: none;
    border-bottom: solid 1px var(--color-gray);
    margin: 0;
    margin-top: var(--spacing-12);
  }
  .headline-page-headline {
    margin-bottom: var(--spacing-6);
    margin-top: 0;
  }
  .headline-wrap p {
    margin-bottom: 0;
  }
  .headline-description {
    margin-bottom: var(--spacing-12);
    margin-top: 0;
    color: var(--color-gray-shade-darkest);
    font-style: italic;
  }
  .headline-wrap p.headline-date {
    color: var(--color-gray-shade-darker);
    font-size: var(--font-size-small);
  }
  .headline-wrap.light {
    color: var(--color-white);
  }
  .headline-wrap.light .headline-rule {
    border-bottom: solid 1px var(--color-white);
  }
  .headline-wrap.light h1 {
    color: var(--color-white);
  }
  .headline-wrap.light .headline-date {
    color: var(--color-white);
  }
  .headline-wrap.light .headline-eyebrow {
    color: var(--color-white);
  }
  .headline-wrap p.headline-eyebrow {
    font-size: var(--font-size-small);
    text-transform: uppercase;
  }
</style>

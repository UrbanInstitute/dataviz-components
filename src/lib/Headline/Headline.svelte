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
    {#if eyebrow}
      <p class="headline-eyebrow">{eyebrow}</p>
    {/if}
    <h1 class="headline-page-headline">{headline}</h1>
    {#if description}
      <p class="headline-description">{description}</p>
    {/if}
    {#if date}
      <p class="headline-date">
        {#if datePrefix}
          <span>{datePrefix} </span>
        {/if}
        <time>{date}</time>
      </p>
    {/if}
  </div>
  {#if shareUrl}
    <SocialShare {shareUrl} {variant} />
  {/if}
</Block>

<style>
  .headline-wrap {
    text-align: center;
    border-bottom: solid 1px var(--color-gray);
    padding-bottom: var(--spacing-12);
    margin-bottom: var(--spacing-8);
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
  .headline-date {
    color: var(--color-gray-shade-darker);
    font-size: var(--font-size-small);
  }
  .headline-wrap.light {
    color: var(--color-white);
    border-bottom: solid 1px var(--color-white);
  }
  .headline-wrap.light h1 {
    color: var(--color-white);
  }
  .headline-wrap.light .headline-date {
    color: var(--color-white);
  }
  .headline-eyebrow {
    font-size: var(--font-size-small);
    text-transform: uppercase;
  }
  @media screen and (min-width: 769px) {
    .headline-page-headline {
      /* margin-top: var(--spacing-20); */
    }
  }
</style>

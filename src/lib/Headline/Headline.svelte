<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  import Block from "../Block/Block.svelte";
  import SocialShare from "../SocialShare/SocialShare.svelte";

  /**
   * @typedef {Object} Props
   * @property {string} [headline] - Text that should be displayed in headline
   * @property {string | null} [description] - Optional description to be displayed below headline
   * @property {string | null} [eyebrow] - Optional eyebrow to be displayed above the headline
   * @property {string | null} [date] - Date to be displayed below headline
   * @property {string} [datePrefix] - Optional prefix for the date
   * @property {string | null} [shareUrl] - Optional URL to share on social media
   * @property {import('../Block/Block.svelte').blockWidth} [width] - Width of the headline
   * @property {"dark" | "light"} [variant] - The color variant of the social media icons
   * @property {import('svelte').Snippet} [eyebrowSnippet] - Optional snippet for custom eyebrow content
   * @property {import('svelte').Snippet} [headlineSnippet] - Optional snippet for custom headline content
   * @property {import('svelte').Snippet} [descriptionSnippet] - Optional snippet for custom description content
   * @property {import('svelte').Snippet} [dateSnippet] - Optional snippet for custom date content
   * @property {import('svelte').Snippet} [extra] - Optional snippet for extra content below date
   */

  /** @type {Props} */
  let {
    headline,
    description = null,
    eyebrow = null,
    date = null,
    datePrefix = "",
    shareUrl = null,
    width = "body",
    variant = "dark",
    eyebrowSnippet,
    headlineSnippet,
    descriptionSnippet,
    dateSnippet,
    extra
  } = $props();
</script>

<Block {width}>
  <div class="headline-wrap {variant}">
    {#if eyebrowSnippet}
      <!--
      Optional snippet for custom content in the eyebrow slot.
       -->
      {@render eyebrowSnippet()}
    {:else if eyebrow}
      {#if eyebrow.toLowerCase() == "data tool"}
        <a href="https://www.urban.org/data-tools" target="_blank"
          ><p class="headline-eyebrow">{eyebrow}</p></a
        >
      {:else if eyebrow.toLowerCase() == "story"}
        <a href="https://www.urban.org/stories" target="_blank"
          ><p class="headline-eyebrow">{eyebrow}</p></a
        >
      {:else}
        <p class="headline-eyebrow">{eyebrow}</p>
      {/if}
    {/if}
    {#if headlineSnippet}
      <!--
      Optional snippet for custom content in the headline slot.
       -->
      {@render headlineSnippet()}
    {:else if headline}
      <h1 class="headline-page-headline">{headline}</h1>
    {/if}
    {#if descriptionSnippet}
      <!--
      Optional snippet for custom content in the description slot.
       -->
      {@render descriptionSnippet()}
    {:else if description}
      <p class="headline-description">{description}</p>
    {/if}
    {#if dateSnippet}
      <!--
      Optional snippet for custom content in the date slot.
       -->
      {@render dateSnippet()}
    {:else if date}
      <p class="headline-date">
        {#if datePrefix}
          <span>{datePrefix} </span>
        {/if}
        <time>{date}</time>
      </p>
    {/if}
    <!--
    Optional snippet for extra content to include below the date and above the share buttons.
     -->
    {#if extra}
      {@render extra()}
    {/if}
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
  .headline-wrap p.headline-eyebrow:hover {
    text-decoration: underline;
    cursor: pointer;
  }
</style>

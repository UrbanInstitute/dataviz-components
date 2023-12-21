<script>
  import Heading from "$lib/HeadingAlt/HeadingAlt.svelte";
  import TextBlock from "$lib/TextBlock/TextBlock.svelte";
  import Block from "$lib/Block/Block.svelte"

  /**
   * Heading to display above credits block
   * @type {string}
   */
  export let heading;

  /**
   * Paragraphs of text to display within credits block
   * @type {string[]}
   */
  export let text;

  /**
   * The credit items to display
   * @type {{label: string, content: string}[]}
   */
  export let items;

  /**
   * An optional link to a Github repo to display
   * @type {string}
   */
  export let githubUrl;

</script>

<Block>
  <Heading content={heading} />
</Block>
{#each text as content}
  <TextBlock {content} />
{/each}
<Block>
<ul>
  {#each items as item}
    <li>
      <span class="label">{item.label}</span>
      {@html item.content}
    </li>
  {/each}
</ul>
</Block>
{#if githubUrl}
  <TextBlock content="View the project on <a href='{githubUrl}' target='_blank'>Github</a>."/>
{/if}

<style>
  ul {
    list-style-type: none;
    padding: 0;
    font-size: var(--font-size-large);
  }

  .label {
    text-transform: uppercase;
    padding-right: 0.5rem;
    font-weight: var(--font-weight-bold);
  }

  li {
    margin: 2rem 0;
  }

  li :global(a) {
    color: var(--color-text-accent);
  }

  @media(min-width: 769px) {
    ul {
      font-size: var(--font-size-xl);
    }
  }
</style>

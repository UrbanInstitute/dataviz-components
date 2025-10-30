<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script>
  import Heading from "$lib/HeadingAlt/HeadingAlt.svelte";
  import TextBlock from "$lib/TextBlock/TextBlock.svelte";
  import Block from "$lib/Block/Block.svelte";

  /**
   * @typedef {Object} CreditItem
   * @property {string} label
   * @property {string} content
   */

  /**
   * @typedef {Object} Props
   * @property {string} heading Heading to display above credits block
   * @property {CreditItem[]} items The credit items to display
   * @property {string | null} [githubUrl=null] An optional link to a Github repo to display
   * @property {import('svelte').Snippet} [intro] Content to render between the heading and the items
   */

  /** @type {Props} */
  let { heading, items, githubUrl = null, intro } = $props();
</script>

<div class="project-credits-wrapper">
  <Block>
    <Heading content={heading} />
  </Block>
  <!-- Content to render between the heading and the items -->
  {#if intro}
    {@render intro()}
  {/if}
  <Block>
    <ul class="credits-list">
      {#each items as item}
        <li>
          <span class="label">{item.label}</span>
          {@html item.content}
        </li>
      {/each}
    </ul>
  </Block>
  {#if githubUrl}
    <TextBlock>View the project on <a href={githubUrl} target="_blank">Github</a>.</TextBlock>
  {/if}
</div>

<style>
  .project-credits-wrapper ul.credits-list {
    list-style-type: none;
    padding: 0;
    font-size: var(--font-size-large);
  }

  .project-credits-wrapper .label {
    text-transform: uppercase;
    padding-right: 0.5rem;
    font-weight: var(--font-weight-bold);
  }

  .project-credits-wrapper li {
    margin: 2rem 0;
  }

  .project-credits-wrapper li :global(a) {
    color: var(--color-text-accent);
  }

  @media (min-width: 769px) {
    .project-credits-wrapper ul {
      font-size: var(--font-size-xl);
    }
  }
</style>

<script>
  import Heading from "$lib/HeadingAlt/HeadingAlt.svelte";
  import TextBlock from "$lib/TextBlock/TextBlock.svelte";
  import Block from "$lib/Block/Block.svelte";

  /**
   * Heading to display above credits block
   * @type {string}
   */
  export let heading;

  /**
   * The credit items to display
   * @type {{label: string, content: string}[]}
   */
  export let items;

  /**
   * An optional link to a Github repo to display
   * @type {string | null} [githubUrl=null]
   */
  export let githubUrl = null;
</script>

<div class="project-credits-wrapper">
  <Block>
    <Heading content={heading} />
  </Block>
  <!-- Content to render between the heading and the items -->
  <slot name="intro" />
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

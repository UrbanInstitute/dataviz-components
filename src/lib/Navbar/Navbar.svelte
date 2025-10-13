<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  import LogoUrban from "$lib/LogoUrbanBadge/LogoUrbanBadge.svelte";
  import LogoTPC from "$lib/LogoTPCBadge/LogoTPCBadge.svelte";

  /**
   * @typedef {Object} Props
   * @property {string} [title] - Title to display in the navbar
   * @property {string} [projectUrl] - URL to link to from the title
   * @property {"urban" | "tpc"} [brand] - Brand to use for the logo
   * @property {boolean} [sticky] - Option to make the navbar sticky
   */

  /** @type {Props} */
  let { title = "", projectUrl = "", brand = "urban", sticky = false } = $props();

  let homeURL = $derived(
    brand === "tpc" ? "https://www.taxpolicycenter.org" : "https://www.urban.org"
  );

  let projectHref = $derived(projectUrl ? `${projectUrl.replace(/\/$/, "")}/` : projectUrl);
</script>

<nav class:sticky>
  <div class="logo">
    <a href={homeURL}>
      {#if brand === "urban"}
        <LogoUrban width={30} />
      {:else if brand === "tpc"}
        <LogoTPC width={47} />
      {/if}
    </a>
  </div>
  {#if title}
    {#if projectUrl}
      <a href={projectHref}>
        <p class="nav--page-title">{title}</p>
      </a>
    {:else}
      <p class="nav--page-title">{title}</p>
    {/if}
  {/if}
</nav>

<style>
  nav {
    background: var(--color-white);
    color: var(--color-white, #ffffff);
    display: flex;
    align-items: center;
    border-bottom: solid 1px var(--color-gray);
    padding: var(--spacing-2) 0;
    position: relative;
    min-height: 48px;
  }
  nav.sticky {
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .logo {
    margin-left: var(--spacing-2);
  }
  a {
    text-decoration: none;
  }
  .nav--page-title {
    margin-left: var(--spacing-8);
    margin-bottom: 0;
    margin-top: 0;
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-small);
    color: var(--color-gray-shade-darkest);
  }
</style>

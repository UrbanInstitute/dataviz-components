<script>
  import "$lib/style/app.css";
  import LogoUrban from "$lib/LogoUrbanBadge/LogoUrbanBadge.svelte";
  import LogoTPC from "$lib/LogoTPCBadge/LogoTPCBadge.svelte";

  export let title = "";
  /**@type {string} */
  export let projectUrl;
  /**@type {"urban" | "tpc"} */
  export let brand = "urban";

  $: homeURL = brand == "tpc" ? "https://www.taxpolicycenter.org" : "https://www.urban.org";
</script>

<nav>
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
    <a href="{projectUrl}/">
      <p class="nav--page-title">{title}</p>
    </a>
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
  .project-title {
    width: 100%;
  }
  @media (min-width: 768px) {
    .project-title {
      align-self: center;
    }
  }
</style>

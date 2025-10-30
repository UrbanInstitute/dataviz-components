<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script>
  import urbanColors from "../utils/urbanColors.js";
  import LogoUrbanAnimated from "../LogoUrbanAnimated/LogoUrbanAnimated.svelte";

  /**
   * @typedef {Object} Props
   * @property {boolean} [isChildLoading=true]
   * @property {string | null} [backgroundColor=urbanColors.white]
   * @property {import('svelte').Snippet<[void]>} [graphic]
   * @property {import('svelte').Snippet<[{
   *   setChildLoading: () => void;
   *   setChildLoaded: () => void;
   * }]>} [children]
   */

  /** @type {Props} */
  let {
    isChildLoading = $bindable(true),
    backgroundColor = urbanColors.white,
    graphic,
    children
  } = $props();

  const setChildLoaded = () => {
    isChildLoading = false;
  };

  const setChildLoading = () => {
    isChildLoading = true;
  };
</script>

<div class="container">
  {#if isChildLoading}
    <div class="loading" id="loading" style:background-color={backgroundColor}>
      {#if graphic}
        {@render graphic()}
      {:else}
        <LogoUrbanAnimated width={50} duration="1500ms" />
      {/if}
    </div>
  {/if}
  {@render children?.({ setChildLoading, setChildLoaded })}
</div>

<style>
  .container {
    position: relative;
    width: 100%;
  }

  .loading {
    /* absolute position */
    left: 0;
    position: absolute;
    top: 0;

    /* take full size */
    height: 100%;
    width: 100%;

    /* center */
    align-items: center;
    display: flex;
    justify-content: center;
  }
</style>

<script>
  import urbanColors from "../utils/urbanColors.js";
  import LogoUrbanAnimated from "../LogoUrbanAnimated/LogoUrbanAnimated.svelte";

  /**
   * Boolean indicating whether the child component is loading or not
   * @type {boolean}
   */
  export let isChildLoading = true;

  /**
   * The background color of the loading container (can be null for transparent background)
   * @type {string | null} ["white"]
   */
  export let backgroundColor = urbanColors.white;

  // define functions to expose that set isChildLoading
  let setChildLoaded = () => {
    isChildLoading = false;
  };

  let setChildLoading = () => {
    isChildLoading = true;
  };
</script>

<div class="container">
  {#if isChildLoading}
    <div class="loading" id="loading" style:background-color={backgroundColor}>
      <slot name="graphic">
        <LogoUrbanAnimated width={50} duration="1500ms" />
      </slot>
    </div>
  {/if}
  <slot {setChildLoading} {setChildLoaded} />
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

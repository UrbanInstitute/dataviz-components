<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  import pym from "pym.js";
  import { createPymChildState } from "./stores.svelte.js";

  /**
   * @typedef {Object} Props
   * @property {number} [polling]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { polling = 500, children } = $props();

  const pymChildState = createPymChildState();

  $effect.root(() => {
    if (typeof window === "undefined") return;

    const child = new pym.Child({ polling });
    pymChildState.setChild(child);

    return () => {
      child?.remove?.();
      pymChildState.clear();
    };
  });
</script>

{#if children}
  {@render children()}
{/if}

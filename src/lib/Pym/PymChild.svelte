<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script>
  import pym from "pym.js";
  import { createPymChildContext } from "./context.svelte.js";

  /**
   * @typedef {Object} Props
   * @property {number} [polling=500]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { polling = 500, children } = $props();

  const pymChildContext = createPymChildContext();

  $effect.root(() => {
    if (typeof window === "undefined") return;

    const child = new pym.Child({ polling });
    pymChildContext.setChild(child);

    return () => {
      child?.remove?.();
      pymChildContext.clear();
    };
  });
</script>

{#if children}
  {@render children()}
{/if}

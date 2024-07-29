<script>
  import { onMount } from "svelte";
  import pym from "pym.js";
  import { pymChildStore } from "./stores.js";

  /** Pym.js polling interval */
  export let polling = 500;

  let pymChild;

  onMount(() => {
    pymChild = new pym.Child({ polling });
    pymChildStore.set(pymChild);
  });
</script>

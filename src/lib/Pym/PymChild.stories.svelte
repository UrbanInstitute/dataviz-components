<!-- Portions of this code have been written or edited by generative AI tools. -->
<script module>
  import PymChild from "./PymChild.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Components/PymChild",
    component: PymChild,
    parameters: {
      githubLink: {
        url: "/Pym/PymChild.svelte"
      }
    }
  });
</script>

<script>
  import { usePymChild } from "./stores.svelte.js";

  let sendCount = $state(0);
  let pymStatus = $state("Not initialized");
</script>

<Story name="Primary" />

<Story name="With Context Consumer">
  <PymChild>
    {#if typeof window !== "undefined"}
      {@const pymChild = usePymChild()}
      <div style="padding: 20px; border: 1px solid #ccc; border-radius: 4px;">
        <h3>Child Component Using Context</h3>
        <p>
          Status: <strong
            >{pymChild ? "PymChild context available" : "PymChild context unavailable"}</strong
          >
        </p>
        <p>Send height called: <strong>{sendCount}</strong> times</p>
        <button
          onclick={() => {
            pymChild?.sendHeight();
            sendCount++;
          }}
          style="padding: 8px 16px; border: 1px solid #1696d2; background: #1696d2; color: white; cursor: pointer;"
        >
          Send Height via usePymChild()
        </button>
        <p style="margin-top: 16px; font-size: 14px; color: #666;">
          This component is a descendant of PymChild and can access the context.
        </p>
      </div>
    {/if}
  </PymChild>
</Story>

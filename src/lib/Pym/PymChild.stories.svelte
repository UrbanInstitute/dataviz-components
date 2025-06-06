<script context="module">
  import PymChild from "./PymChild.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const {Story} = defineMeta({
    title: "Components/PymChild",
    component: PymChild,
    parameters: {
      githubLink: {
        url: "/Pym/PymChild.svelte"
      }
    }
  });
</script>

<Story name="Primary" />

<script context="module">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import IconRefresh from "./IconRefresh.svelte";

  const { Story } = defineMeta({
    title: "Icons/Icons/IconRefresh",
    component: IconRefresh,
    tags: ["!autodocs"],
    parameters: {
      githubLink: {
        url: "/Icons/IconRefresh.svelte"
      }
    }
  });
</script>


<Story name="Primary" />

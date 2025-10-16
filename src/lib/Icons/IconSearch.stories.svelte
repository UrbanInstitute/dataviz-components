<script module>
  import IconSearch from "./IconSearch.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Icons/Icons/IconSearch",
    component: IconSearch,
    tags: ["!autodocs"],
    parameters: {
      githubLink: {
        url: "/Icons/IconSearch.svelte"
      }
    }
  });
</script>

<Story name="Primary" />

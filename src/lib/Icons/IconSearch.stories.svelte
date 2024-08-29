<script context="module">
  import IconSearch from "./IconSearch.svelte";

  export const meta = {
    title: "Icons/Icons/IconSearch",
    component: IconSearch,
    tags: ["!dev", "!autodocs"],
    parameters: {
      githubLink: {
        url: "/Icons/IconSearch.svelte"
      }
    }
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default" let:args>
  <IconSearch {...args} />
</Story>

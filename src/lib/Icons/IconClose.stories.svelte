<script context="module">
  import IconClose from "./IconClose.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Icons/Icons/IconClose",
    component: IconClose,
    tags: ["!autodocs"],
    parameters: {
      githubLink: {
        url: "/Icons/IconClose.svelte"
      }
    }
  });
</script>


<Story name="Primary" />

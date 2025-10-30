<script module>
  import IconMinus from "./IconMinus.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Icons/Icons/IconMinus",
    component: IconMinus,
    tags: ["!autodocs"],
    parameters: {
      githubLink: {
        url: "/Icons/IconMinus.svelte"
      }
    }
  });
</script>

<Story name="Primary" />

<script context="module">
  import IconMinus from "./IconMinus.svelte";

  export const meta = {
    title: "Icons/Icons/IconMinus",
    component: IconMinus,
    tags: ["!dev", "!autodocs"],
    parameters: {
      githubLink: {
        url: "/Icons/IconMinus.svelte"
      }
    }
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default" let:args>
  <IconMinus {...args} />
</Story>

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
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <IconMinus {...args} />
</Template>

<Story name="Default" />

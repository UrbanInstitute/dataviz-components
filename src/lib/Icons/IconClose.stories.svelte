<script context="module">
  import IconClose from "./IconClose.svelte";

  export const meta = {
    title: "Icons/Icons/IconClose",
    component: IconClose,
    tags: ["!dev", "!autodocs"],
    parameters: {
      githubLink: {
        url: "/Icons/IconClose.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <IconClose {...args} />
</Template>

<Story name="Default" />

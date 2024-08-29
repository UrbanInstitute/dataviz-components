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
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default" let:args>
  <IconClose {...args} />
</Story>

<script context="module">
  import IconRefresh from "./IconRefresh.svelte";

  export const meta = {
    title: "Icons/Icons/IconRefresh",
    component: IconRefresh,
    tags: ["!dev", "!autodocs"],
    parameters: {
      githubLink: {
        url: "/Icons/IconRefresh.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <IconRefresh {...args} />
</Template>

<Story name="Default" />

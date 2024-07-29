<script context="module">
  import LogoUrbanBadge from "./LogoUrbanBadge.svelte";
  import docs from "./LogoUrbanBadge.docs.md?raw";

  export const meta = {
    title: "Logos/LogoUrbanBadge",
    component: LogoUrbanBadge,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/LogoUrbanBadge/LogoUrbanBadge.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <LogoUrbanBadge {...args} />
</Template>

<Story name="Default" />

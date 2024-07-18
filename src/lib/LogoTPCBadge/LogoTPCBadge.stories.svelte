<script context="module">
  import LogoTPCBadge from "./LogoTPCBadge.svelte";
  import docs from "./LogoTPCBadge.docs.md?raw";

  export const meta = {
    title: "Logos/LogoTPCBadge",
    component: LogoTPCBadge,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/LogoTPCBadge/LogoTPCBadge.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <LogoTPCBadge {...args} />
</Template>

<Story name="Default" />

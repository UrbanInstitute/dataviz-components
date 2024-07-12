<script context="module">
  import Logo from "./LogoTPCBadge.svelte";

  export const meta = {
    title: "Logos/LogoTPCBadge",
    description: "A Tax Policy Center logo",
    component: Logo,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "Tax Policy Center logo in square badge format."
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
  <Logo {...args} />
</Template>

<Story name="Default" />

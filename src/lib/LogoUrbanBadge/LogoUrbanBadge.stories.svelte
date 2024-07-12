<script context="module">
  import Logo from "./LogoUrbanBadge.svelte";

  export const meta = {
    title: "Logos/LogoUrbanBadge",
    description: "An Urban Institute badge logo",
    component: Logo,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "Urban Institute logo in square badge format."
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
  <Logo {...args} />
</Template>

<Story name="Default" />

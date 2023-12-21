<script context="module">
  import Logo from "./LogoUrbanBadge.svelte";

  export const meta = {
    title: "Components/LogoUrbanBadge",
    description: "An Urban Institute badge logo",
    component: Logo,
    tags: ["autodocs"]
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf"; </script>

<Template let:args>
  <Logo {...args} />
</Template>

<Story name="Default" />

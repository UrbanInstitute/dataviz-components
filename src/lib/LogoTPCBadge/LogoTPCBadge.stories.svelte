<script context="module">
  import Logo from "./LogoTPCBadge.svelte";

  export const meta = {
    title: "Components/LogoTPCBadge",
    description: "A Tax Policy Center logo",
    component: Logo,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "Tax Policy Center logo in square badge format."
        }
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

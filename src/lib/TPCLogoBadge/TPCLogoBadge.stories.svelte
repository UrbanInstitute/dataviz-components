<script context="module">
  import Logo from "./TPCLogoBadge.svelte";

  export const meta = {
    title: "Components/TPCLogoBadge",
    description: "A Tax Policy Center logo",
    component: Logo,
    tags: ["autodocs"]
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <Logo {...args} />
</Template>

<Story name="Default" />

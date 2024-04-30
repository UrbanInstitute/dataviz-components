<script context="module">
  import LogoUrbanAnimated from "./LogoUrbanAnimated.svelte";

  export const meta = {
    title: "Logos/LogoUrbanAnimated",
    description: "An animated Urban logo icon",
    component: LogoUrbanAnimated,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "An animated Urban Institute logo icon"
        }
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <LogoUrbanAnimated {...args} />
</Template>

<Story name="Default" />

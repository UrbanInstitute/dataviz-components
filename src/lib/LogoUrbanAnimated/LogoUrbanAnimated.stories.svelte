<script context="module">
  import LogoUrbanAnimated from "./LogoUrbanAnimated.svelte";
  import docs from "./LogoUrbanAnimated.docs.md?raw";

  export const meta = {
    title: "Logos/LogoUrbanAnimated",
    component: LogoUrbanAnimated,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/LogoUrbanAnimated/LogoUrbanAnimated.svelte"
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

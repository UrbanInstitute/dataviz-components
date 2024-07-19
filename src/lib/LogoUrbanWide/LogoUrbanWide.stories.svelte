<script context="module">
  import LogoUrbanWide from "./LogoUrbanWide.svelte";
  import docs from "./LogoUrbanWide.docs.md?raw";

  export const meta = {
    title: "Logos/LogoUrbanWide",
    component: LogoUrbanWide,
    tags: ["autodocs"],
    argTypes: {
      variant: {
        options: ["color", "white"],
        control: "select"
      }
    },
    parameters: {
      backgrounds: {
        default: "light",
        values: [
          { name: "light", value: "#ffffff" },
          { name: "dark", value: "#0A4C6A" }
        ]
      },
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/LogoUrbanWide/LogoUrbanWide.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <LogoUrbanWide {...args} />
</Template>

<Story name="Default" />
<Story
  name="Variant - white"
  args={{ variant: "white" }}
  parameters={{ backgrounds: { default: "dark" } }}
/>

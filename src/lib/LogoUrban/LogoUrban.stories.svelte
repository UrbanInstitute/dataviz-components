<script context="module">
  import LogoUrban from "./LogoUrban.svelte";
  import docs from "./LogoUrban.docs.md?raw";

  export const meta = {
    title: "Logos/LogoUrban",
    component: LogoUrban,
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
        url: "/LogoUrban/LogoUrban.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <LogoUrban {...args} />
</Template>

<Story name="Default" />
<Story
  name="Variant - white"
  args={{ variant: "white" }}
  parameters={{ backgrounds: { default: "dark" } }}
/>

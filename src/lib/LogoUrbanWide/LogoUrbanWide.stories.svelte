<script context="module">
  import Logo from "./LogoUrbanWide.svelte";

  export const meta = {
    title: "Logos/LogoUrbanWide",
    description: "An Urban Institute wide logo",
    component: Logo,
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
          component: "Urban Institute logo in wide format."
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
  <Logo {...args} />
</Template>

<Story name="Default" />
<Story
  name="Variant - white"
  args={{ variant: "white" }}
  parameters={{ backgrounds: { default: "dark" } }}
/>

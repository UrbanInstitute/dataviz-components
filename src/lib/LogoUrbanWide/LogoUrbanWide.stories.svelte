<script module>
  import LogoUrbanWide from "./LogoUrbanWide.svelte";
  import docs from "./LogoUrbanWide.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
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
  });
</script>

<Story name="Default" />
<Story
  name="Variant - white"
  args={{ variant: "white" }}
  parameters={{ backgrounds: { default: "dark" } }}
/>
<Story name="Width 300" args={{ width: 300 }} parameters={{ backgrounds: { default: "dark" } }} />

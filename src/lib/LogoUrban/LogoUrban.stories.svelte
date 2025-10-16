<script module>
  import LogoUrban from "./LogoUrban.svelte";
  import docs from "./LogoUrban.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
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
  });
</script>

<Story name="Default" />
<Story
  name="Variant - white"
  args={{ variant: "white" }}
  globals={{ backgrounds: { value: "dark" } }}
/>

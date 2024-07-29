<script context="module">
  import Theme from "./Theme.svelte";

  export const meta = {
    title: "Theming/Theme",
    component: Theme,
    // tags: ["autodocs"],
    argTypes: {
      theme: {
        default: "urban",
        options: ["urban"],
        control: "select"
      },
      slot_default: {
        control: { type: "text" }
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
      githubLink: {
        url: "/Theme/Theme.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <Theme />
</Template>

<Story name="Default" />

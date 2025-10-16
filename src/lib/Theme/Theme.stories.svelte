<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script module>
  import Theme from "./Theme.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Theming/Theme",
    component: Theme,
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
  });
</script>

<Story name="Default" />

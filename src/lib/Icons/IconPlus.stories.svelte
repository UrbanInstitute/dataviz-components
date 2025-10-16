<script module>
  import IconPlus from "./IconPlus.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import urbanColors from "$lib/utils/urbanColors.js";

  const { Story } = defineMeta({
    title: "Icons/Icons/IconPlus",
    component: IconPlus,
    //tags: ["autodocs"],
    argTypes: {
      size: {
        default: 40
      },
      fill: {
        control: {
          type: "color",
          presetColors: ["#000", "#1696D2", "#fbdf11"]
        }
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
          component:
            "Any of these icons can be pulled in as standalone components. They are intended as decorations, and do not include `onClick` parameters. "
        }
      },
      githubLink: {
        url: "/Icons/IconPlus.svelte"
      }
    }
  });
</script>

<Story name="Primary" />

<Story name="ForCanvas" />

<Story name="WithColor" args={{ fill: urbanColors.blue }}></Story>

<Story name="ChangingSize" args={{ size: 65 }}></Story>

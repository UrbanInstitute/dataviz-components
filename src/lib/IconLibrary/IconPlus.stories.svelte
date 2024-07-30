<script context="module">
    import IconPlus from "./IconPlus.svelte";
  
    export const meta = {
      title: "Components/IconLibrary",
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
          url: "/IconLibrary/IconPlus.svelte"
        }
      }
    };
  </script>
  
  <script>
    import { Story, Template } from "@storybook/addon-svelte-csf";
    import urbanColors from "$lib/utils/urbanColors.js";
  </script>
  
  <Template let:args>
    <IconPlus {...args} />
  </Template>
  
  <Story name="Default" />

  <Story name="PlusPreview">
    <IconPlus size={25}/>
  </Story>
  
  <Story name="WithColor">
    <IconPlus fill={urbanColors.blue} />
  </Story>
  
  <Story name="ChangingSize">
    <IconPlus size={65} />
  </Story>
  
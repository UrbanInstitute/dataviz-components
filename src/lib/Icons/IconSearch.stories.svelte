<script context="module">
    import IconSearch from "./IconSearch.svelte";
  
    export const meta = {
      title: "Icons/Other Icons/IconSearch",
      component: IconSearch,
      tags: ["!dev","!autodocs"],
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
          url: "/Icons/IconSearch.svelte"
        }
      }
    };
  </script>
  
  <script>
    import { Story, Template } from "@storybook/addon-svelte-csf";
  </script>
  
  <Template let:args>
    <IconSearch {...args} />
  </Template>
  
  <Story name="SearchPreview">
    <IconSearch size={25}/>
  </Story>
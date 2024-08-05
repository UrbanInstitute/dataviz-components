<script context="module">
    import IconClose from "./IconClose.svelte";
  
    export const meta = {
      title: "Icons/Other Icons/IconClose",
      component: IconClose,
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
          url: "/Icons/IconClose.svelte"
        }
      }
    };
  </script>
  
  <script>
    import { Story, Template } from "@storybook/addon-svelte-csf";
  </script>
  
  <Template let:args>
    <IconClose {...args} />
  </Template>
  
  <Story name="ClosePreview">
    <IconClose size={25}/>
  </Story>
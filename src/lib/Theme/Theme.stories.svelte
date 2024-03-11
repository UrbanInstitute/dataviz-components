<script context="module">
  import Theme from "./Theme.svelte";

  export const meta = {
    title: "Theming/Theme",
    description: "A theme wrapper that provides styles for children components.",
    component: Theme,
    tags: ["autodocs"],
    argTypes: {
      variant: {
        default: "urban",
        options: ["urban"],
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
          component: "A theme wrapper that provides styles for children components. All of the components in this library rely on CSS provided by this <Theme> component. If you are working on a project that depends on this library, you should probably wrap your entire page inside of a `<Theme></Theme>`. If you are pulling in just a component or two to a project that otherwise doesn't use this library, you'll want to wrap those components directly in a `<Theme>`.\n\n```html\n<Theme>\n  <ChildComponent />\n  <ChildComponent />\n</Theme>\n```"
        }
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <Theme/>
</Template>

<Story name="Default" />


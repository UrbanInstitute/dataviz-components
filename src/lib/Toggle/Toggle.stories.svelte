<!-- Portions of this code have been written or edited by generative AI tools. -->
<script context="module">
  import Toggle from "./Toggle.svelte";
  import docs from "./Toggle.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Components/Toggle",
    component: Toggle,
    tags: ["autodocs"],
    argTypes: {
      labelPosition: {
        options: ["left", "right"],
        control: "select"
      },
      active: { control: "boolean" },
      disabled: { control: "boolean" }
    },
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/Toggle/Toggle.svelte"
      }
    }
  });
</script>

<Story
  name="Default"
  args={{
    label: "Enim id qui labore labore",
    labelPosition: "left",
    active: false,
    disabled: false
  }}
/>

<Story
  name="Active left"
  args={{
    active: true
  }}
/>

<Story
  name="Active right"
  args={{
    active: true,
    labelPosition: "right"
  }}
/>

<Story
  name="Disabled left"
  args={{
    disabled: true
  }}
/>

<Story
  name="Disabled right"
  args={{
    disabled: true,
    labelPosition: "right"
  }}
/>

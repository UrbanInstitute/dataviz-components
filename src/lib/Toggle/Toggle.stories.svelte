<script context="module">
  import Toggle from "./Toggle.svelte";
  import docs from "./Toggle.docs.md?raw";

  export const meta = {
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
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <Toggle {...args} on:click />
</Template>

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

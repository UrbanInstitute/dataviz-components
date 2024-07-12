<script context="module">
  import Block from "./Block.svelte";
  import docs from "./Block.docs.md?raw";

  export const meta = {
    title: "Components/Block",
    component: Block,
    tags: ["autodocs"],
    argTypes: {
      width: {
        default: "body",
        options: ["body", "wide", "full"],
        control: "select"
      }
    },
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/Block/Block.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <Block {...args}>
    <div
      style="width: 100%; height: 200px; background: #d2d2d2; display: flex; align-items: center; justify-content: center;"
    >
      Block
    </div>
  </Block>
</Template>

<Story name="Default" args={{}} />
<Story
  name="Full width"
  args={{
    width: "full"
  }}
/>
<Story
  name="Wide"
  args={{
    width: "wide"
  }}
/>

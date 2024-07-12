<script context="module">
  import Block from "./Block.svelte";

  export const meta = {
    title: "Components/Block",
    description: "A basic building block of a page",
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
          component:
            "A basic content block with several width options. This helps when building a page layout if you'd like to place your own components inside a container that aligns with the body well of a typical urban.org layout, a wider block, or a full width block."
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

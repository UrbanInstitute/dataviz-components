<script module>
  import Block from "./Block.svelte";
  import docs from "./Block.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
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
  });
</script>

{#snippet template(args)}
  <div
    style="width: 100%; height: 200px; background: #d2d2d2; display: flex; align-items: center; justify-content: center;"
  >
    Block
  </div>
{/snippet}

<Story name="Default" {template} />
<Story
  name="Full width"
  args={{
    width: "full"
  }}
  {template}
/>

<Story
  name="Wide"
  args={{
    width: "wide"
  }}
  {template}
/>

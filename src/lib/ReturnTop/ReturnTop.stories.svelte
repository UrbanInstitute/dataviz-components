<script context="module">
  import ReturnTop from "./ReturnTop.svelte";
  import docs from "./ReturnTop.docs.md?raw";

  export const meta = {
    title: "Components/ReturnTop",
    component: ReturnTop,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/ReturnTop/ReturnTop.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <ReturnTop args on:click on:keypress />
</Template>

<Story
  name="Default"
  args={{
    elementId: "target-element"
  }}
/>

<script context="module">
  import ReturnTop from "./ReturnTop.svelte";

  export const meta = {
    title: "Components/ReturnTop",
    description: "A button for moving the browser to a specified element ID",
    component: ReturnTop,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "A button for moving the browser to a specified element ID."
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

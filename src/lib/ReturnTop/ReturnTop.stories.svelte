<script context="module">
  import ReturnTop from "./ReturnTop.svelte";

  export const meta = {
    title: "Components/ReturnTop",
    description: "A button for moving the browser to a specified element ID",
    component: ReturnTop,
    tags: ["autodocs"]
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <ReturnTop args />
</Template>

<Story
  name="Default"
  args={{
    elementId: "target-element"
  }}
/>

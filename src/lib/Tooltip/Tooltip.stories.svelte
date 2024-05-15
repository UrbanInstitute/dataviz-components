<script context="module">
  import Tooltip from "./Tooltip.svelte";

  export const meta = {
    title: "Components/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    argTypes: {
    },
    parameters: {
      docs: {
        description: {
          component: "A basic tooltip."
        }
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  let x = 120;
  let y = 100;
</script>

<Template let:args>
  <div class="wrapper" style="width: 100%; height: 300px">
    <Tooltip {...args} />
  </div>
</Template>

<Story name="Default" args={{
  content: "<h2>Title</h2>Data value: <strong>72.3%</strong>",
  x: x,
  y: y
}}/>


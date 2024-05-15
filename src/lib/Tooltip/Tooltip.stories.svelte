<script context="module">
  import Tooltip from "./Tooltip.svelte";

  export const meta = {
    title: "Components/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    argTypes: {
      style: {
        control: "select",
        options: ["light", "dark"]
      },
      size: {
        control: "select",
        options: ["small", "large"]
      },
      orientation: {
        control: "select",
        options: ["dynamic", "left", "right", "top", "bottom"]
      }
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
  let x = 100;
  let y = 150;

</script>

<Template let:args>
  <div class="wrapper" style="width: 100%; height: 300px">
    <Tooltip {...args} />
  </div>
</Template>

<Story name="Default" args={{
  content: "This is a tooltip",
  x: x,
  y: y
}}/>

<Story name="Dark mode" args={{
  content: "This is a dark style tooltip",
  style: "dark",
  x: x,
  y: y
}}/>

<Story name="Custom HTML" args={{
  content: "<h2>HTML Formatting</h2><p>For <em>fancier</em> tooltip structure</p>",
  size: "large",
  x: x,
  y: y
}}/>

<Story name="Set static orientation" args={{
  content: "This tooltip is oriented to the left",
  style: "dark",
  orientation: "left",
  x: x + 50,
  y: y
}}/>

<script context="module">
  import Scroller from "./Scroller.svelte";

  export const meta = {
    title: "Components/Scroller",
    description: "Scroller",
    component: Scroller,
    tags: ["autodocs"],
    argTypes: {
      // slides: {
      //   description: "The slides to be scrolled through",
      //   control: {
      //     type: "array"
      //   }
      // }
    },
    parameters: {
      docs: {
        description: {
          component: "A component for making scrolly segments"
        }
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";

  const slides = ["Slide 1", "Slide 2", "Slide 3"];
</script>

<Template let:args>
  <Scroller {...args}>
    <div
      slot="background"
      style="width: 100%; height: 100vh; color: var(--color-white); font-weight: var(--font-weight-bold); background: var(--color-blue); display: flex; align-items: center; justify-content: center;"
    >
      &lt;Scroller background&gt;
    </div>
  </Scroller>
</Template>

<Story name="Default" args={{slides}} />

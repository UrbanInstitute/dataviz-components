<script context="module">
  import Scrolly from "./Scrolly.svelte";

  export const meta = {
    title: "Components/Scrolly",
    component: Scrolly
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";

  const slides = ["Slide 1", "Slide 2", "Slide 3"];
</script>

<Template let:args>
  <Scrolly {...args}>
    <div
      slot="background"
      style="width: 100%; height: 100vh; color: var(--color-white); font-weight: var(--font-weight-bold); background: var(--color-blue); display: flex; align-items: center; justify-content: center;"
    >
      Scroller background
    </div>
  </Scrolly>
</Template>

<Story name="Default" args={{ slides }} />

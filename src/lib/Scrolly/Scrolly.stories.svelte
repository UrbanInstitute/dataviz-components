<script context="module">
  import Scrolly from "./Scrolly.svelte";

  export const meta = {
    title: "Components/Scrolly",
    component: Scrolly,
    argTypes: {
      slides: { control: "array" },
      foregroundWidth: {
        options: ["body", "wide", "full"],
        control: { type: "select" }
      },
      textLayout: {
        options: ["center", "left", "right"],
        control: { type: "select" }
      },
      textAlign: {
        options: ["center", "left", "right"],
        control: { type: "select" }
      }
    },
    parameters: {
      githubLink: {
        url: "/Scrolly/Scrolly.svelte"
      }
    }
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
      Scrolly background
    </div>
  </Scrolly>
</Template>

<Story name="Default" args={{ slides }} />

<!-- Portions of this code have been written or edited by generative AI tools. -->
<script context="module">
  import Scrolly from "./Scrolly.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
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
  });
  const slides = ["Slide 1", "Slide 2", "Slide 3"];
</script>

<Story name="Primary" args={{ slides }}>
  {#snippet template(args)}
    <Scrolly {...args}>
      {#snippet background()}
        <div
          style="width: 100%; height: 100vh; color: var(--color-white); font-weight: var(--font-weight-bold); background: var(--color-blue); display: flex; align-items: center; justify-content: center;"
        >
          Scrolly background
        </div>
      {/snippet}
    </Scrolly>
  {/snippet}
</Story>

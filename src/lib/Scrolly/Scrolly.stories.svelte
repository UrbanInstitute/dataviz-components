<!-- Portions of this code have been written or edited by generative AI tools. -->
<script module>
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

<script>
  import { useScrollyState } from "$lib";
</script>

{#snippet template(args)}
  <Scrolly {...args}>
    {#snippet background()}
      {@const scrolly = useScrollyState()}
      {@const totalSlides = args.slides?.length ?? 0}
      <div
        style="width: 100%; height: 100vh; color: var(--color-white); font-weight: var(--font-weight-bold); background: var(--color-blue); display: flex; flex-direction: column; gap: var(--spacing-4); align-items: center; justify-content: center;"
      >
        <div>Scrolly background</div>
        <div>
          Slide {scrolly.index + 1} of {totalSlides}
        </div>
        <div>Progress: {Math.round(scrolly.progress * 100)}%</div>
      </div>
    {/snippet}
  </Scrolly>
{/snippet}

<Story name="Primary" args={{ slides }} {template} />

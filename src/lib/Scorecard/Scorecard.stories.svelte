<script context="module">
  import Scorecard from "./Scorecard.svelte";
  import docs from "./Scorecard.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Components/Scorecard",
    component: Scorecard,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/Scorecard/Scorecard.svelte"
      }
    }
  });
</script>

<Story
  name="Default"
  args={{
    value: "9,001",
    label: "Visualizations"
  }}
/>

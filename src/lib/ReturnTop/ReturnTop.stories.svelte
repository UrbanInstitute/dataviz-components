<script context="module">
  import ReturnTop from "./ReturnTop.svelte";
  import docs from "./ReturnTop.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Components/ReturnTop",
    component: ReturnTop,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/ReturnTop/ReturnTop.svelte"
      }
    }
  });
</script>

<Story
  name="Default"
  args={{
    elementId: "target-element"
  }}
/>

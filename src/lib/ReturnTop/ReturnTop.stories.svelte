<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script module>
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

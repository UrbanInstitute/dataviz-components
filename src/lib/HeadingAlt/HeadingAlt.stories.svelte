<script module>
  import Heading from "./HeadingAlt.svelte";
  import docs from "./HeadingAlt.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Components/HeadingAlt",
    component: Heading,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/HeadingAlt/HeadingAlt.svelte"
      }
    }
  });
</script>

<Story
  name="Default"
  args={{
    content: "This is an alternate heading"
  }}
/>

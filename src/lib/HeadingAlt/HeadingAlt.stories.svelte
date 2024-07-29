<script context="module">
  import Heading from "./HeadingAlt.svelte";
  import docs from "./HeadingAlt.docs.md?raw";

  export const meta = {
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
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <Heading {...args} />
</Template>

<Story
  name="Default"
  args={{
    content: "This is an alternate heading"
  }}
/>

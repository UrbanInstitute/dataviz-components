<script context="module">
  import Heading from "./HeadingAlt.svelte";

  export const meta = {
    title: "Components/HeadingAlt",
    description: "A block for an alternate heading",
    component: Heading,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "Alternate title heading in all caps, useful for h2 tags and lower."
        }
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

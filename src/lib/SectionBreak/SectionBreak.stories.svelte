<script context="module">
  import SectionBreak from "./SectionBreak.svelte";
  import docs from "./SectionBreak.docs.md?raw";

  export const meta = {
    title: "Components/SectionBreak",
    component: SectionBreak,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/SectionBreak/SectionBreak.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <SectionBreak {...args} />
</Template>

<Story
  name="Default"
  args={{
    number: "1",
    subhead: "This is a subhead"
  }}
/>
<Story
  name="With accent color"
  args={{
    number: "1",
    subhead: "This is a subhead",
    accentColor: "var(--color-blue)"
  }}
/>
<Story
  name="With font weight"
  args={{
    number: "1",
    subhead: "This is a subhead",
    fontWeight: "var(--font-weight-bold)"
  }}
/>

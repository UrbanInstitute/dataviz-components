<script context="module">
  import SectionBreak from "./SectionBreak.svelte";

  export const meta = {
    title: "Components/SectionBreak",
    description: "Section break element that includes a number, a subhead and a horizontal rule.",
    component: SectionBreak,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component:
            "Section break element that includes a number, a subhead and a horizontal rule."
        }
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

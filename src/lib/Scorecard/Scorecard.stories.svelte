<script context="module">
  import Scorecard from "./Scorecard.svelte";
  import docs from "./Scorecard.docs.md?raw";

  export const meta = {
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
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <Scorecard {...args} />
</Template>

<Story
  name="Default"
  args={{
    value: "9,001",
    label: "Visualizations"
  }}
/>

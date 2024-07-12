<script context="module">
  import Scorecard from "./Scorecard.svelte";

  export const meta = {
    title: "Components/Scorecard",
    description: "A scorecard that displays a value and a label",
    component: Scorecard,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component:
            "Scorecard element, which displays a value and a label, originally developed for <a href='https://www.urban.org/policy-centers/center-labor-human-services-and-population/projects/apprenticeship-support' target='_blank'>this project</a>."
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

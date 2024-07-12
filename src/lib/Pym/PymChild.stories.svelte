<script context="module">
  import PymChild from "./PymChild.svelte";

  export const meta = {
    title: "Components/PymChild",
    description: "A component that adds PymChild support to a page",
    component: PymChild,
    parameters: {
      docs: {
        description: {
          component: "A basic headline component."
        }
      },
      githubLink: {
        url: "/Pym/PymChild.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <PymChild {...args} />
</Template>

<Story name="Primary" />

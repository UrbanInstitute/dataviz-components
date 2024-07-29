<script context="module">
  import PymChild from "./PymChild.svelte";

  export const meta = {
    title: "Components/PymChild",
    component: PymChild,
    parameters: {
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

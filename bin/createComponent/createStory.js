export function createStory(componentName) {
  return `<script context="module">
  import TestingTree from "./TestingTree.svelte";
  import docs from "./TestingTree.docs.md?raw";

  export const meta = {
    title: "Components/TestingTree",
    component: TestingTree,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/TestingTree/TestingTree.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <TestingTree {...args} />
</Template>

<Story name="Default" />`;
}

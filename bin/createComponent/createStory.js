export function createStory(componentName) {
  return `
<script context="module">
  import ${componentName} from "./${componentName}.svelte";
  import docs from "./${componentName}.docs.md?raw";

  export const meta = {
    title: "Components/${componentName}",
    component: ${componentName},
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/${componentName}/${componentName}.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <${componentName} {...args} />
</Template>

<Story
  name="Default"
/>`;
}

<script context="module">
  import Analytics from "./Analytics.svelte";

  export const meta = {
    title: "Components/Analytics",
    description: "A component that provides Google Analytics functionality to your page.",
    component: Analytics,
    parameters: {
      docs: {
        description: {
          component: "A component that provides Google Analytics functionality to your page."
        }
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <Analytics {...args} />
</Template>

<Story
  name="Default"
  args={{
    title: "Urban Institute dataviz components storybook",
    mode: "development",
  }}
/>

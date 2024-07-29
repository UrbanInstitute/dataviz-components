<script context="module">
  import Analytics from "./Analytics.svelte";

  export const meta = {
    title: "Components/Analytics",
    component: Analytics,
    parameters: {
      githubLink: {
        url: "/Analytics/Analytics.svelte"
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
    mode: "development"
  }}
/>

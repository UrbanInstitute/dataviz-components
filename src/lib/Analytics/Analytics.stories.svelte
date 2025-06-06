<script context="module">
  import Analytics from "./Analytics.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const {Story} = defineMeta({
    title: "Components/Analytics",
    component: Analytics,
    parameters: {
      githubLink: {
        url: "/Analytics/Analytics.svelte"
      }
    }
  });
</script>

<script>
</script>

<Story
  name="Default"
  args={{
    title: "Urban Institute dataviz components storybook",
    mode: "development"
  }}
/>

<script context="module">
  import DatawrapperIframe from "./DatawrapperIframe.svelte";
  import docs from "./DatawrapperIframe.docs.md?raw";

  export const meta = {
    title: "Components/DatawrapperIframe",
    component: DatawrapperIframe,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/DatawrapperIframe/DatawrapperIframe.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  $: test = "Hover over a region to change this text";
</script>

<Template let:args>
  <DatawrapperIframe
    {...args}
    on:regionclick
    on:regionmouseenter
    on:regionmouseleave
    on:regionclick={(e) => (test = e.detail.data.fips)}
    on:regionmouseenter={(e) => (test = e.detail.data.fips)}
    on:regionmouseleave={() => (test = "Hover over a region to change this text")}
    on:visrendered
  />
  <p>{test}</p>
</Template>

<Story
  name="Default"
  args={{
    title: "This is a title for the visualization",
    ariaLabel: "This is an accessible title for the visualization",
    datawrapperId: "RMnkX"
  }}
/>

<script context="module">
  import DatawrapperIframe from "./DatawrapperIframe.svelte";

  export const meta = {
    title: "Components/DatawrapperIframe",
    description: "Datawrapper iframe",
    component: DatawrapperIframe,
    tags: ["autodocs"]
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  $: test = "Hover over a region to change this text";
</script>

<Template let:args>
  <DatawrapperIframe
    {...args}
    on:regionclick={(e) => (test = e.detail.data.fips)}
    on:regionmouseenter={(e) => (test = e.detail.data.fips)}
    on:regionmouseleave={() => (test = "Hover over a region to change this text")}
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

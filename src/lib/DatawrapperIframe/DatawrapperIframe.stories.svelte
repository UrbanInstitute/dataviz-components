<script context="module">
  import DatawrapperIframe from "./DatawrapperIframe.svelte";

  export const meta = {
    title: "Components/DatawrapperIframe",
    description: "Datawrapper iframe",
    component: DatawrapperIframe,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component:
            "Datawrapper iframe with <a href='https://developer.datawrapper.de/docs/listening-to-chart-interaction-events' target='_blank'>event dispatching</a> enabled. All interaction events are accessible via <code>on:eventname</code> (<b>no periods</b>) on the `DatawrapperIframe` Svelte component itself.<br/><br/>The complete event list and associated descriptions can be found <a href='https://developer.datawrapper.de/docs/listening-to-chart-interaction-events#visualization-events' target='_blank'>here</a>."
        }
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

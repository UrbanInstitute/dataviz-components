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
            "Datawrapper iframe with <a href='https://developer.datawrapper.de/docs/listening-to-chart-interaction-events' target='_blank'>event dispatching</a> enabled. All interaction events are accessible via <code>on:eventname</code> (<b>no periods</b>) on the `DatawrapperIframe` Svelte component itself. The complete event list and associated descriptions can be found <a href='https://developer.datawrapper.de/docs/listening-to-chart-interaction-events#visualization-events' target='_blank'>here</a>.<br/><br/>Examples of how to setup \"switching\" between Datawrapper charts with a dropdown or button controls can be found <a href='/docs/examples-datawrapper-switching--docs'>in the Examples section here</a>.<br/><br/>In April 2024, the <code>vis.rendered</code> event was added to the Datawrapper event list (per the Urban team's request) in order to track when a visualization had been rendered/painted on the page. This is useful if there is a longer loading visualization (like a large map) and you'd like to indicate to the user that the visualization is still loading.<br><br>The `startrender` event is available via the component's `beforeUpdate()` function in order to track when the iframe starts to load. This can be combined with the `vis.rendered` event to track when the visualization has been rendered/painted on the page in combination with the <a href='/docs/components-loadingwrapper--docs' >LoadingWrapper</a> component."
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

<script context="module">
  import DatawrapperWebComponent from "./DatawrapperWebComponent.svelte";

  export const meta = {
    title: "Components/DatawrapperWebComponent",
    description: "Datawrapper web component",
    component: DatawrapperWebComponent,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: "DW web component lorem ipsum"
        }
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  $: test = "Hover over a region to change this text";

  let datawrapperIdReactive = "RMnkX";
</script>

<Template let:args>
  <DatawrapperWebComponent
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
    datawrapperId: "RMnkX"
  }}
/>

<Story name="Switcher">
  <button on:click={() => (datawrapperIdReactive = "OnyTY")}>Change chart</button>
  <DatawrapperWebComponent datawrapperId={datawrapperIdReactive} />
</Story>

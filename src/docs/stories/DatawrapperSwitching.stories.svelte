<script context="module">
  export const meta = {
    title: "Examples/Stories/Datawrapper Switching",
    description: "Examples of switching between Datawrapper Iframes"
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
  import DatawrapperIframe from "$lib/DatawrapperIframe/DatawrapperIframe.svelte";
  import Button from "$lib/Button/Button.svelte";
</script>

<Story name="Dropdown">
  <DatawrapperIframe datawrapperId="RMnkX" title="test" />

  <Button>Click me</Button>
</Story>

<Story name="Buttons">
  <DatawrapperIframe datawrapperId={"4BsZm"} title="another test" />

  <Button>Click me</Button>
</Story>

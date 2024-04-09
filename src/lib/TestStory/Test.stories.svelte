<script context="module">
  import DatawrapperIframe from "../DatawrapperIframe/DatawrapperIframe.svelte";
  import Button from "../Button/Button.svelte";
  export const meta = {
    title: "TestStory",
    tags: ["autodocs"],
    description: "Sit laborum nisi sunt."
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
  import { CodeOrSourceMdx } from "@storybook/blocks";
</script>

<Story name="Default">
  <DatawrapperIframe datawrapperId="WAssZ" title="test" />

  <Button>Click me</Button>
</Story>
<!-- <CodeOrSourceMdx>Test</CodeOrSourceMdx> -->

<script context="module">
  import DatawrapperIframe from "./DatawrapperIframe.svelte";
  import Button from "../Button/Button.svelte";
  export const meta = {
    title: "Components/DatawrapperIframe/SwitchExamples",
    tags: ["autodocs"],
    description: "Sit laborum nisi sunt."
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <DatawrapperIframe datawrapperId="RMnkX" title="test" />

  <Button>Click me</Button>
</Story>

<Story name="Another">
  <DatawrapperIframe datawrapperId={"4BsZm"} title="another test" />

  <Button>Click me</Button>
</Story>

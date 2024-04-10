<script context="module">
  export const meta = {
    title: "Examples/Stories/Datawrapper Switching",
    description: "Examples of switching between Datawrapper iframes"
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
  import DatawrapperIframe from "$lib/DatawrapperIframe/DatawrapperIframe.svelte";
  import BasicDropdown from "$lib/BasicDropdown/BasicDropdown.svelte";
  import Button from "$lib/Button/Button.svelte";

  let selectedChart = "AHpJL";

  const dropdownData = [
    { value: "AHpJL", label: "Chart #1" },
    { value: "91Q0t", label: "Chart #2" },
    { value: "eaD2D", label: "Chart #3" }
  ];
</script>

<Story name="Dropdown">
  <BasicDropdown
    id="dropdown"
    data={dropdownData}
    inlineLabel="Dropdown"
    bind:value={selectedChart}
    placeholder={null}
  />
  {#key selectedChart}
    <DatawrapperIframe datawrapperId={selectedChart} />
  {/key}
</Story>

<Story name="Buttons">
  <Button on:click={() => (selectedChart = "AHpJL")}>Chart #1</Button>
  <Button on:click={() => (selectedChart = "91Q0t")}>Chart #2</Button>
  <Button on:click={() => (selectedChart = "eaD2D")}>Chart #3</Button>
  {#key selectedChart}
    <DatawrapperIframe datawrapperId={selectedChart} />
  {/key}
</Story>

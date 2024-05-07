<script context="module">
  export const meta = {
    title: "Examples/Stories/Datawrapper Switching",
    description: "Examples of switching between Datawrapper iframes"
  };
</script>

<script>
  import LoadingWrapper from "$lib/LoadingWrapper/LoadingWrapper.svelte";

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

  let selectedChartLoading = "WsGs1";
</script>

<Story
  name="Dropdown"
  source={`
<script>
  import { BasicDropdown, DatawrapperIframe } from "@urbaninstitute/dataviz-components";
  let selectedChart;

  const dropdownData = [
    { value: "AHpJL", label: "Chart #1" },
    { value: "91Q0t", label: "Chart #2" },
    { value: "eaD2D", label: "Chart #3" }
  ];
</script>

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
`}
>
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

<Story
  name="Buttons"
  source={`
<script>
  import { Button, DatawrapperIframe } from "@urbaninstitute/dataviz-components";
  let selectedChart;
</script>

<Button on:click={() => (selectedChart = "AHpJL")}>Chart #1</Button>
<Button on:click={() => (selectedChart = "91Q0t")}>Chart #2</Button>
<Button on:click={() => (selectedChart = "eaD2D")}>Chart #3</Button>

{#key selectedChart}
  <DatawrapperIframe datawrapperId={selectedChart} />
{/key}
  `}
>
  <Button on:click={() => (selectedChart = "AHpJL")}>Chart #1</Button>
  <Button on:click={() => (selectedChart = "91Q0t")}>Chart #2</Button>
  <Button on:click={() => (selectedChart = "eaD2D")}>Chart #3</Button>
  {#key selectedChart}
    <DatawrapperIframe datawrapperId={selectedChart} />
  {/key}
</Story>

<Story
  name="Loading"
  source={`
  {#key selectedChart}
    <LoadingWrapper let:setChildLoaded let:setChildLoading>
      <DatawrapperIframe
        datawrapperId={selectedChart}
        on:startrender={setChildLoading}
        on:visrendered={setChildLoaded}
      />
    </LoadingWrapper>
  {/key}
`}
>
  <Button on:click={() => (selectedChart = "Toh1S")}>Chart #1</Button>
  <Button on:click={() => (selectedChart = "rgLU1")}>Chart #2</Button>

  {#key selectedChart}
    <LoadingWrapper let:setChildLoaded let:setChildLoading>
      <DatawrapperIframe
        datawrapperId={selectedChartLoading}
        on:startrender={setChildLoading}
        on:visrendered={setChildLoaded}
      />
    </LoadingWrapper>
  {/key}
</Story>

<script context="module">
  export const meta = {
    title: "Examples/Stories/Datawrapper Switching"
  };
</script>

<script>
  import LoadingWrapper from "$lib/LoadingWrapper/LoadingWrapper.svelte";

  import { Story } from "@storybook/addon-svelte-csf";
  import DatawrapperIframe from "$lib/DatawrapperIframe/DatawrapperIframe.svelte";
  import BasicDropdown from "$lib/BasicDropdown/BasicDropdown.svelte";
  import Button from "$lib/Button/Button.svelte";

  let selectedChart = "AHpJL";

  $: selectedChartMetadata = dropdownData.find((d) => d.value === selectedChart);

  const dropdownData = [
    {
      value: "AHpJL",
      label: "Chart #1",
      ariaLabel: "Quis id magna ut esse qui nostrud magna."
    },
    {
      value: "91Q0t",
      label: "Chart #2",
      ariaLabel: "Quis id magna ut esse qui nostrud magna."
    },
    {
      value: "eaD2D",
      label: "Chart #3",
      ariaLabel: "Quis id magna ut esse qui nostrud magna."
    }
  ];

  let selectedChartLoading = "WsGs1";
</script>

<Story
  name="Dropdown"
  source={`
<script>
  import { BasicDropdown, DatawrapperIframe } from "@urbaninstitute/dataviz-components";
  let selectedChart;

  // look up metadata based on selected chart
  $: selectedChartMetadata = dropdownData.find((d) => d.value === selectedChart);

  const dropdownData = [
    {
      value: "AHpJL",
      label: "Chart #1",
      ariaLabel: "Quis id magna ut esse qui nostrud magna."
    },
    {
      value: "91Q0t",
      label: "Chart #2",
      ariaLabel: "Quis id magna ut esse qui nostrud magna."
    },
    {
      value: "eaD2D",
      label: "Chart #3",
      ariaLabel: "Quis id magna ut esse qui nostrud magna."
    }
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
  <DatawrapperIframe
    datawrapperId={selectedChartMetadata.value}
    title={selectedChartMetadata.label}
    ariaLabel={selectedChartMetadata.ariaLabel}
  />
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
  {#if selectedChart}
    <DatawrapperIframe
      datawrapperId={selectedChartMetadata.value}
      title={selectedChartMetadata.label}
      ariaLabel={selectedChartMetadata.ariaLabel}
    />
  {/if}
</Story>

<Story
  name="Buttons"
  source={`
<script>
  import { Button, DatawrapperIframe } from "@urbaninstitute/dataviz-components";
  // see first code chunk for setup
</script>

<Button on:click={() => (selectedChart = "AHpJL")}>Chart #1</Button>
<Button on:click={() => (selectedChart = "91Q0t")}>Chart #2</Button>
<Button on:click={() => (selectedChart = "eaD2D")}>Chart #3</Button>

{#key selectedChart}
  <DatawrapperIframe
    datawrapperId={selectedChartMetadata.value}
    title={selectedChartMetadata.label}
    ariaLabel={selectedChartMetadata.ariaLabel}
  />
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
<script>
  import { Button, DatawrapperIframe, LoadingWrapper } from "@urbaninstitute/dataviz-components";
  // see first code chunk for setup
</script>

<Button on:click={() => (selectedChart = "Toh1S")}>Chart #1</Button>
<Button on:click={() => (selectedChart = "rgLU1")}>Chart #2</Button>

{#key selectedChart}
  <LoadingWrapper let:setChildLoaded let:setChildLoading>
    <DatawrapperIframe
      datawrapperId={selectedChartMetadata.value}
      title={selectedChartMetadata.label}
      ariaLabel={selectedChartMetadata.ariaLabel}
      on:startrender={setChildLoading}
      on:visrendered={setChildLoaded}
    />
  </LoadingWrapper>
{/key}
`}
>
  <Button on:click={() => (selectedChart = "Toh1S")}>Chart #1</Button>
  <Button on:click={() => (selectedChart = "rgLU1")}>Chart #2</Button>

  {#if selectedChart}
    <LoadingWrapper let:setChildLoaded let:setChildLoading>
      <DatawrapperIframe
        datawrapperId={selectedChartLoading}
        on:startrender={setChildLoading}
        on:visrendered={setChildLoaded}
      />
    </LoadingWrapper>
  {/if}
</Story>

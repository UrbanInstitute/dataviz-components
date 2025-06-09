<script context="module">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  const { Story } = defineMeta({
    title: "Examples/Stories/Datawrapper Switching"
  });
</script>

<script>
  import LoadingWrapper from "$lib/LoadingWrapper/LoadingWrapper.svelte";

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

  const loadingChartData = [
    {
      value: "Toh1S",
      label: "Chart #1",
      ariaLabel: "Quis id magna ut esse qui nostrud magna."
    },
    {
      value: "rgLU1",
      label: "Chart #2",
      ariaLabel: "Quis id magna ut esse qui nostrud magna."
    }
  ];
  let selectedChartLoading = "Toh1S";
  $: selectedChartLoadingMetadata = loadingChartData.find((d) => d.value === selectedChartLoading);
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

{#if selectedChartMetaData}
  <DatawrapperIframe
    datawrapperId={selectedChartMetadata.value}
    title={selectedChartMetadata.label}
    ariaLabel={selectedChartMetadata.ariaLabel}
  />
{/if}
`}
>
  <BasicDropdown
    id="dropdown"
    data={dropdownData}
    inlineLabel="Dropdown"
    bind:value={selectedChart}
    placeholder={null}
  />
  {#if selectedChartMetadata}
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

{#if selectedChartMetadata}
  <DatawrapperIframe
    datawrapperId={selectedChartMetadata.value}
    title={selectedChartMetadata.label}
    ariaLabel={selectedChartMetadata.ariaLabel}
  />
{/if}
  `}
>
  <Button on:click={() => (selectedChart = "AHpJL")}>Chart #1</Button>
  <Button on:click={() => (selectedChart = "91Q0t")}>Chart #2</Button>
  <Button on:click={() => (selectedChart = "eaD2D")}>Chart #3</Button>
  {#if selectedChart}
    <DatawrapperIframe
      datawrapperId={selectedChartMetadata.value}
      title={selectedChartMetadata.label}
      ariaLabel={selectedChartMetadata.ariaLabel}
    />
  {/if}
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

  {#if selectedChartMetadata}
    <LoadingWrapper let:setChildLoaded let:setChildLoading>
      {#key selectedChart}
        <DatawrapperIframe
          datawrapperId={selectedChartMetadata.value}
          title={selectedChartMetadata.label}
          ariaLabel={selectedChartMetadata.ariaLabel}
          on:startrender={setChildLoading}
          on:visrendered={setChildLoaded}
        />
      {/key}
    </LoadingWrapper>
  {/if}
`}
>
  <Button on:click={() => (selectedChartLoading = "Toh1S")}>Chart #1</Button>
  <Button on:click={() => (selectedChartLoading = "rgLU1")}>Chart #2</Button>

  {#if selectedChartLoadingMetadata}
    <LoadingWrapper let:setChildLoaded let:setChildLoading>
      {#key selectedChartLoading}
        <DatawrapperIframe
          datawrapperId={selectedChartLoadingMetadata.value}
          on:startrender={setChildLoading}
          on:visrendered={setChildLoaded}
        />
      {/key}
    </LoadingWrapper>
  {/if}
</Story>

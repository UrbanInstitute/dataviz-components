<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import LoadingWrapper from "$lib/LoadingWrapper/LoadingWrapper.svelte";
  import DatawrapperIframe from "$lib/DatawrapperIframe/DatawrapperIframe.svelte";
  import BasicDropdown from "$lib/BasicDropdown/BasicDropdown.svelte";
  import Button from "$lib/Button/Button.svelte";
  import DocsComponent from "./Placeholder.svelte";

  const { Story } = defineMeta({
    title: "Examples/Stories/Datawrapper Switching",
    component: DocsComponent
  });
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

  let selectedChart = $state("AHpJL");

  let selectedChartMetadata = $derived(dropdownData.find((d) => d.value === selectedChart));

  let selectedChartLoading = $state("Toh1S");
  let selectedChartLoadingMetadata = $derived(
    loadingChartData.find((d) => d.value === selectedChartLoading)
  );
</script>

<Story
  name="Dropdown"
  asChild
  source={`
<script>
  import { BasicDropdown, DatawrapperIframe } from "@urbaninstitute/dataviz-components";
  let selectedChart = $state();

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

  // look up metadata based on selected chart
  let selectedChartMetadata = $derived(dropdownData.find((d) => d.value === selectedChart));
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
  asChild
  source={`
<script>
  import { Button, DatawrapperIframe } from "@urbaninstitute/dataviz-components";
  // see first code chunk for setup
</script>

<Button onClick={() => (selectedChart = "AHpJL")}>Chart #1</Button>
<Button onClick={() => (selectedChart = "91Q0t")}>Chart #2</Button>
<Button onClick={() => (selectedChart = "eaD2D")}>Chart #3</Button>

{#if selectedChartMetadata}
  <DatawrapperIframe
    datawrapperId={selectedChartMetadata.value}
    title={selectedChartMetadata.label}
    ariaLabel={selectedChartMetadata.ariaLabel}
  />
{/if}
  `}
>
  <Button onClick={() => (selectedChart = "AHpJL")}>Chart #1</Button>
  <Button onClick={() => (selectedChart = "91Q0t")}>Chart #2</Button>
  <Button onClick={() => (selectedChart = "eaD2D")}>Chart #3</Button>
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
  asChild
  source={`
<script>
  import { Button, DatawrapperIframe, LoadingWrapper } from "@urbaninstitute/dataviz-components";
  // see first code chunk for setup
</script>

<Button onClick={() => (selectedChart = "Toh1S")}>Chart #1</Button>
<Button onClick={() => (selectedChart = "rgLU1")}>Chart #2</Button>

  {#if selectedChartMetadata}
    <LoadingWrapper let:setChildLoaded let:setChildLoading>
      {#key selectedChart}
        <DatawrapperIframe
          datawrapperId={selectedChartMetadata.value}
          title={selectedChartMetadata.label}
          ariaLabel={selectedChartMetadata.ariaLabel}
          onstartrender={setChildLoading}
          onvisrendered={setChildLoaded}
        />
      {/key}
    </LoadingWrapper>
  {/if}
`}
>
  <Button onClick={() => (selectedChartLoading = "Toh1S")}>Chart #1</Button>
  <Button onClick={() => (selectedChartLoading = "rgLU1")}>Chart #2</Button>

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

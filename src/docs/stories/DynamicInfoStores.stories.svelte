<script context="module">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  const { Story } = defineMeta({
    title: "Examples/Stories/Dynamic Info With Stores"
  });
</script>

<script>
  import { writable, derived } from "svelte/store";
  import BasicDropdown from "$lib/BasicDropdown/BasicDropdown.svelte";

  const data = [
    {
      label: "Bar Chart",
      value: "barChart",
      metric: 100
    },
    {
      label: "Column Chart",
      value: "columnChart",
      metric: 200
    },
    {
      label: "Heatmap",
      value: "heatmap",
      metric: 300
    }
  ];

  // use key to access object (instead of .find())
  data.reduce((map, d) => {
    map[d.value] = d;
    return map;
  }, data);

  // create dropdown data
  const dropdownData = data.map((d) => {
    return {
      value: d.value,
      label: d.label
    };
  });

  // create writable and derived stores
  const selected = writable("barChart"); // initial value set to bar Chart
  const selectedData = derived(selected, ($selected) => {
    return data[$selected]; // access source data using key
  });
</script>

<Story
  name="Default"
  source={`
<script>
  import { BasicDropdown } from "@urbaninstitute/dataviz-components";
  import { selected, selectedData } from "$lib/stores/selected";
  import data from "$data/data.json";

  // create dropdown data
  const dropdownData = data.map((d) => {
    return {
      value: d.value,
      label: d.label
    };
  });
</script>

<!-- dropdown to control selected item -->
<BasicDropdown
    id="dropdown"
    data={dropdownData}
    inlineLabel="Dropdown"
    bind:value={$selected}
    placeholder={null}
  />

<!-- access data of selected using selectedData -->
{#each Object.keys($selectedData) as field}
  <p>{field}: {$selectedData[field]}</p>
{/each}
`}
>
  <BasicDropdown
    id="dropdown"
    data={dropdownData}
    inlineLabel="Dropdown"
    bind:value={$selected}
    placeholder={null}
  />
  {#each Object.keys($selectedData) as field}
    <p>{field}: {$selectedData[field]}</p>
  {/each}
</Story>

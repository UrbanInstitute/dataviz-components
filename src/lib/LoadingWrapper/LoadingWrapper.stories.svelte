<script context="module">
  import { onMount } from "svelte";
  import LoadingWrapper from "./LoadingWrapper.svelte";
  import LogoUrbanWide from "../LogoUrbanWide/LogoUrbanWide.svelte";
  import DatawrapperIframe from "../DatawrapperIframe/DatawrapperIframe.svelte";

  export const meta = {
    title: "Components/LoadingWrapper",
    description: "Wrapper to display a loading spinner graphic while content is loading",
    component: LoadingWrapper,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component:
            'Wrapper to display a loading spinner graphic while content is loading. All children wrapped in component. Accepts an alternative graphic for the "graphic" named slot.'
        }
      }
    }
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";

  // function to create a fake await for 2sec
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  $: loading = true;
  onMount(() => {
    sleep(2500).then(() => {
      loading = false;
    });
  });

  $: mapLoading = true;
</script>

<Story name="Default">
  <LoadingWrapper childLoading={loading}>
    <span
      >Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
      Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
      cupidatat aliqua magna. Ipsum irure anim commodo Lorem.
    </span>
  </LoadingWrapper>
</Story>

<Story name="Custom graphic">
  <LoadingWrapper childLoading={loading}>
    <LogoUrbanWide slot="graphic" />
    <span
      >Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
      Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
      cupidatat aliqua magna. Ipsum irure anim commodo Lorem.
    </span>
  </LoadingWrapper>
</Story>

<Story name="Datawrapper example">
  <LoadingWrapper childLoading={mapLoading}>
    <DatawrapperIframe
      title="This is a title for the visualization"
      ariaLabel="This is an accessible title for the visualization"
      datawrapperId="qF5No"
      on:visrendered={() => (mapLoading = false)}
    />
  </LoadingWrapper>
</Story>

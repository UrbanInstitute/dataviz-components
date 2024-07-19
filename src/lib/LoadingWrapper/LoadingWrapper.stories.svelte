<script context="module">
  import { onMount } from "svelte";
  import LoadingWrapper from "./LoadingWrapper.svelte";
  import LogoUrbanWide from "../LogoUrbanWide/LogoUrbanWide.svelte";
  import DatawrapperIframe from "../DatawrapperIframe/DatawrapperIframe.svelte";
  import docs from "./LoadingWrapper.docs.md?raw";

  export const meta = {
    title: "Components/LoadingWrapper",
    component: LoadingWrapper,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/LoadingWrapper/LoadingWrapper.svelte"
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

  // set loading for paragraph examples, sleep for 2.5 sec on mount
  $: isChildLoading = true;
  onMount(() => {
    sleep(2500).then(() => {
      isChildLoading = false;
    });
  });
</script>

<Story name="Default">
  <LoadingWrapper {isChildLoading}>
    <span
      >Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
      Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
      cupidatat aliqua magna. Ipsum irure anim commodo Lorem.
    </span>
  </LoadingWrapper>
</Story>

<Story name="Custom graphic">
  <LoadingWrapper {isChildLoading}>
    <LogoUrbanWide slot="graphic" />
    <span
      >Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
      Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
      cupidatat aliqua magna. Ipsum irure anim commodo Lorem.
    </span>
  </LoadingWrapper>
</Story>

<Story name="Datawrapper example">
  <LoadingWrapper let:setChildLoading let:setChildLoaded>
    <DatawrapperIframe
      title="This is a title for the visualization"
      ariaLabel="This is an accessible title for the visualization"
      datawrapperId="qF5No"
      on:startrender={setChildLoading}
      on:visrendered={setChildLoaded}
    />
  </LoadingWrapper>
</Story>

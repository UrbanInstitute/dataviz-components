<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script module>
  import { onMount } from "svelte";
  import LoadingWrapper from "./LoadingWrapper.svelte";
  import LogoUrbanWide from "../LogoUrbanWide/LogoUrbanWide.svelte";
  import DatawrapperIframe from "../DatawrapperIframe/DatawrapperIframe.svelte";
  import docs from "./LoadingWrapper.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
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
  });
</script>

<script>
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  let isChildLoading = $state(true);

  onMount(() => {
    let cancelled = false;

    sleep(2500).then(() => {
      if (!cancelled) {
        isChildLoading = false;
      }
    });

    return () => {
      cancelled = true;
    };
  });
</script>

<Story name="Default" asChild>
  <LoadingWrapper {isChildLoading}>
    {#snippet children()}
      <span
        >Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
        Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
        cupidatat aliqua magna. Ipsum irure anim commodo Lorem.
      </span>
    {/snippet}
  </LoadingWrapper>
</Story>

<Story name="Custom graphic" asChild>
  <LoadingWrapper {isChildLoading}>
    {#snippet graphic()}
      <LogoUrbanWide />
    {/snippet}
    {#snippet children()}
      <span
        >Amet est Lorem qui ullamco laboris velit. Incididunt est sunt exercitation qui ea. Officia
        Lorem est labore amet irure nostrud. Exercitation Lorem do consectetur enim esse quis mollit
        cupidatat aliqua magna. Ipsum irure anim commodo Lorem.
      </span>
    {/snippet}
  </LoadingWrapper>
</Story>

<Story name="Datawrapper example" asChild>
  <LoadingWrapper>
    {#snippet children({ setChildLoading, setChildLoaded })}
      <DatawrapperIframe
        title="This is a title for the visualization"
        ariaLabel="This is an accessible title for the visualization"
        datawrapperId="qF5No"
        on:startrender={setChildLoading}
        on:visrendered={setChildLoaded}
      />
    {/snippet}
  </LoadingWrapper>
</Story>

<!-- Portions of this code have been written or edited by generative AI tools. -->
<script module>
  import DatawrapperIframe from "./DatawrapperIframe.svelte";
  import docs from "./DatawrapperIframe.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Components/DatawrapperIframe",
    component: DatawrapperIframe,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/DatawrapperIframe/DatawrapperIframe.svelte"
      }
    }
  });
</script>

<script>
  let test = "Hover over a region to change this text";
</script>

<Story
  name="Default"
  args={{
    title: "This is a title for the visualization",
    ariaLabel: "This is an accessible title for the visualization",
    datawrapperId: "RMnkX"
  }}
>
  {#snippet template(args)}
    <DatawrapperIframe
      {...args}
      onregionclick={(event) => (test = event.detail.data.fips)}
      onregionmouseenter={(event) => (test = event.detail.data.fips)}
      onregionmouseleave={() => (test = "Hover over a region to change this text")}
      onvisrendered={() => {}}
    />
    <p>{test}</p>
  {/snippet}
</Story>

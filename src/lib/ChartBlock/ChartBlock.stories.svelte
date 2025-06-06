<script context="module">
  import ChartBlock from "./ChartBlock.svelte";
  import DatawrapperIframe from "../DatawrapperIframe/DatawrapperIframe.svelte";
  import docs from "./ChartBlock.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const defaultArgs = {
    title: "Chart title",
    description: "Chart description",
    source: "Chart source",
    notes: "Chart notes"
  };

  const { Story } = defineMeta({
    title: "Components/ChartBlock",
    component: ChartBlock,
    tags: ["autodocs"],
    argTypes: {
      width: {
        default: "body",
        options: ["body", "wide", "full"],
        control: "select"
      }
    },
    args: defaultArgs,
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/ChartBlock/ChartBlock.svelte"
      }
    }
  });
</script>

{#snippet template(args)}
  <ChartBlock {...args}>
    <div
      style="height: 350px; width: 100%; background: #dededd; color: #000000; display: flex; align-items: center; justify-content: center;"
    >
      Chart area
    </div>
  </ChartBlock>
{/snippet}

<Story name="Default" {template} />

<Story
  name="Custom text color"
  globals={{
    backgrounds: { value: "dark" },
  }}
  args={{ color: "#FFFFFF" }}
  {template}
/>
<Story name="With a Datawrapper chart" args={{  color: "#FFFFFF" }} asChild>
  <ChartBlock
    title="Datawrapper chart"
    description="This is what a Datawrapper looks like inside this component."
    source="Chart source"
    notes="Chart notes"
  >
    <DatawrapperIframe
      title="Datawrapper title"
      ariaLabel="This is an accessible title for the visualization"
      datawrapperId="RMnkX"
    />
  </ChartBlock>
</Story>

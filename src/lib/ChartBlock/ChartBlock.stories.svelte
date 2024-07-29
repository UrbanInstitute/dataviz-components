<script context="module">
  import ChartBlock from "./ChartBlock.svelte";
  import DatawrapperIframe from "../DatawrapperIframe/DatawrapperIframe.svelte";
  import docs from "./ChartBlock.docs.md?raw";

  export const meta = {
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
    parameters: {
      backgrounds: {
        default: "light",
        values: [
          { name: "light", value: "#ffffff" },
          { name: "dark", value: "#0A4C6A" }
        ]
      },
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/ChartBlock/ChartBlock.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";

  const chartArgs = {
    title: "Chart title",
    description: "Chart description",
    source: "Chart source",
    notes: "Chart notes"
  };
</script>

<Template let:args>
  <ChartBlock {...args}>
    <div
      style="height: 350px; width: 100%; background: #dededd; color: #000000; display: flex; align-items: center; justify-content: center;"
    >
      Chart area
    </div>
  </ChartBlock>
</Template>

<Story name="Default" args={chartArgs} />

<Story
  name="Custom text color"
  parameters={{ backgrounds: { default: "dark" } }}
  args={{ ...chartArgs, color: "#FFFFFF" }}
/>
<Story name="With a Datawrapper chart" args={{ ...chartArgs, color: "#FFFFFF" }}>
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

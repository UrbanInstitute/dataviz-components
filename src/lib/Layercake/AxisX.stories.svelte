<script context="module">
  import AxisX from "./AxisX.svelte";
  import docs from "./AxisX.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import { LayerCake, Svg } from "layercake";
  import data from "./data.json";

  const xKey = "value";
  const yKey = "year";

  const { Story } = defineMeta({
    title: "Layercake/AxisX",
    component: AxisX,
    tags: ["autodocs"],
    argTypes: {
      ticks: {
        control: {
          type: "range",
          min: 1,
          max: 20
        }
      },
      axisLabel: {
        control: "text"
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
        url: "/Layercake/AxisX.svelte"
      }
    }
  });
</script>

{#snippet template(args)}
  <div style="height: 150px;">
    <LayerCake {data} xDomain={[0, 20]} yDomain={[0, 10]} y={yKey} x={xKey}>
      <Svg>
        <AxisX {...args} />
      </Svg>
    </LayerCake>
  </div>
{/snippet}

<Story name="Default" {template} />

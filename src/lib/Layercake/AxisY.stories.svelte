<script context="module">
  import AxisY from "./AxisY.svelte";
  import docs from "./AxisY.docs.md?raw";

  export const meta = {
    title: "Layercake/AxisY",
    component: AxisY,
    tags: ["autodocs"],
    argTypes: {
      ticks: {
        control: {
          type: "range",
          min: 1,
          max: 10
        }
      },
      textAnchor: {
        control: "select",
        options: ["start", "middle", "end"]
      },
      axisLabel: {
        control: "text"
      },
      tickLabelColor: {
        control: {
          type: "color"
        }
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
        url: "/Layercake/AxisY.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import { LayerCake, Svg } from "layercake";
  import data from "./data.json";

  const xKey = "value";
  const yKey = "year";
</script>

<Template let:args>
  <div style="height: 150px; width:100%;">
    <LayerCake {data} xDomain={[0, 20]} yDomain={[0, 10]} y={yKey} x={xKey}>
      <Svg>
        <AxisY {...args} />
      </Svg>
    </LayerCake>
  </div>
</Template>

<Story name="Default" />

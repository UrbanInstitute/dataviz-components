<script context="module">
  import TextBlock from "./TextBlock.svelte";

  export const meta = {
    title: "Components/TextBlock",
    description: "A basic text block",
    component: TextBlock,
    tags: ["autodocs"],
    argTypes: {
      width: {
        default: "body",
        options: ["body", "full"],
        control: "select"
      },
      variant: {
        default: "primary",
        options: ["primary", "reverse"],
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
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <TextBlock {...args}>
    Enim id qui labore labore quis ut enim tempor sint quis proident voluptate ex. Duis nisi minim
    et occaecat do ullamco nisi dolore ipsum proident tempor aute exercitation duis. Proident
    pariatur consectetur tempor mollit Lorem deserunt. Ut laboris est cillum ut dolore quis
    consectetur nostrud ut cupidatat enim ea cupidatat ipsum. Voluptate esse labore incididunt sint
    eiusmod ullamco mollit consequat.
  </TextBlock>
</Template>

<Story name="Default" />

<Story name="With HTML content">
  <TextBlock>
    Enim id qui <a href="https://urban.org" target="_blank">labore labore quis</a> ut enim tempor sint
    quis proident voluptate ex. Duis nisi minim et occaecat do ullamco nisi dolore ipsum proident tempor
    aute exercitation duis. Proident pariatur consectetur tempor mollit Lorem deserunt. Ut laboris est
    cillum ut dolore quis consectetur nostrud ut cupidatat enim ea cupidatat ipsum. Voluptate esse labore
    incididunt sint eiusmod ullamco mollit consequat.
  </TextBlock>
</Story>

<Story
  name="Reversed variant"
  parameters={{ backgrounds: { default: "dark" } }}
  args={{ variant: "reverse" }}
/>

<Story
  name="With color override"
  args={{
    color: "#0a4c6a"
  }}
/>

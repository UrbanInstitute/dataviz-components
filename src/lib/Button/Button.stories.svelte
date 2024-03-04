<script context="module">
  import Button from "./Button.svelte";
  import IconDownload from "./IconDownload.svelte";

  export const meta = {
    title: "Components/Button",
    description: "A basic button component.",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
      variant: {
        default: "primary",
        options: ["primary", "primary-black", "secondary", "secondary-black", "tertiary"],
        control: "select"
      },
      size: {
        default: "standard",
        options: ["standard", "small"],
        control: "select"
      },
    },
    parameters: {
      docs: {
        description: {
          component: "Basic HTML Button adhering to Urban styles."
        }
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <Button {...args} on:click on:mouseenter on:mouseleave>Button text</Button>
</Template>

<Story name="primary" args={{}} />

<Story name="primary with icon">
  <Button
    >Button text <svelte:fragment slot="icon" let:iconColor
      ><IconDownload size={16} fill={iconColor} /></svelte:fragment
    ></Button
  >
</Story>

<Story
  name="primary small"
  args={{
    size: "small"
  }}
/>

<Story
  name="primary-black"
  args={{
    variant: "primary-black"
  }}
/>

<Story name="primary-black with icon">
  <Button variant="primary-black"
    >Button text <svelte:fragment slot="icon" let:iconColor
      ><IconDownload size={16} fill={iconColor} /></svelte:fragment
    ></Button
  >
</Story>

<Story
  name="primary-black-small"
  args={{
    variant: "primary-black",
    size: "small"
  }}
/>

<Story
  name="secondary"
  args={{
    variant: "secondary"
  }}
/>
<Story name="secondary with icon">
  <Button variant="secondary"
    >Button text <svelte:fragment slot="icon" let:iconColor
      ><IconDownload size={16} fill={iconColor} /></svelte:fragment
    ></Button
  >
</Story>

<Story
  name="secondary-small"
  args={{
    variant: "secondary",
    size: "small"
  }}
/>

<Story
  name="secondary-black"
  args={{
    variant: "secondary-black"
  }}
/>

<Story name="secondary-black with icon">
  <Button variant="secondary-black"
    >Button text <svelte:fragment slot="icon" let:iconColor
      ><IconDownload size={16} fill={iconColor} /></svelte:fragment
    ></Button
  >
</Story>
<Story
  name="secondary-black-small"
  args={{
    variant: "secondary-black",
    size: "small"
  }}
/>

<Story
  name="tertiary"
  args={{
    variant: "tertiary"
  }}
/>


<Story name="tertiary with icon">
  <Button variant="tertiary"
    >Button text <svelte:fragment slot="icon" let:iconColor
      ><IconDownload size={16} fill={iconColor} /></svelte:fragment
    ></Button
  >
</Story>
<Story
  name="tertiary-small"
  args={{
    variant: "tertiary",
    size: "small"
  }}
/>

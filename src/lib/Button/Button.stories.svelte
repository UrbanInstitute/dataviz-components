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
      }
    },
    parameters: {
      docs: {
        description: {
          component: "Basic HTML Button adhering to Urban styles."
        }
      },
      githubLink: {
        url: "/Button/Button.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import { within, userEvent, expect, fn } from "@storybook/test";
</script>

<Template let:args>
  <Button {...args} on:click on:mouseenter on:mouseleave>Button text</Button>
</Template>

<Story name="primary" args={{}} />

<Story
  name="primary with event listeners"
  args={{
    event_click: fn(),
    event_mouseenter: fn(),
    event_mouseleave: fn()
  }}
  play={async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    await expect(args.event_click).toHaveBeenCalled();
    await userEvent.hover(button);
    await expect(args.event_mouseenter).toHaveBeenCalled();
    await userEvent.unhover(button);
    await expect(args.event_mouseleave).toHaveBeenCalled();
  }}
/>

<Story name="primary with icon">
  <Button
    >Button text <svelte:fragment slot="icon" let:iconColor
      ><IconDownload size={16} fill={iconColor} /></svelte:fragment
    ></Button
  >
</Story>

<Story
  name="primary disabled"
  args={{
    disabled: true
  }}
/>

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

<Story
  name="primary-black disabled"
  args={{
    variant: "primary-black",
    disabled: true
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

<Story
  name="secondary disabled"
  args={{
    variant: "secondary",
    disabled: true
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

<Story
  name="secondary-black disabled"
  args={{
    variant: "secondary-black",
    disabled: true
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

<Story
  name="tertiary disabled"
  args={{
    variant: "tertiary",
    disabled: true
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

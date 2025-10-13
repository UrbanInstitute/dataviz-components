<!-- Portions of this code have been written or edited by generative-AI tools. -->
<script context="module">
  import Button from "./Button.svelte";
  import IconDownload from "./IconDownload.svelte";
  import docs from "./Button.docs.md?raw";
  import { within, expect, fn } from "storybook/test";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Components/Button",
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
    args: {
      onclick: fn(),
      onmouseenter: fn(),
      onmouseleave: fn()
    },
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/Button/Button.svelte"
      }
    }
  });
</script>

<Story name="primary">Button text</Story>

<Story
  name="primary with event listeners"
  play={async ({ canvasElement, args, userEvent }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    await expect(args.onclick).toHaveBeenCalled();
    await userEvent.hover(button);
    await expect(args.onmouseenter).toHaveBeenCalled();
    await userEvent.unhover(button);
    await expect(args.onmouseleave).toHaveBeenCalled();
  }}
>
  Button text
</Story>

<Story name="primary with icon">
  Button text <svelte:fragment slot="icon" let:iconColor
    ><IconDownload size={16} fill={iconColor} /></svelte:fragment
  ></Story
>

<Story
  name="primary disabled"
  args={{
    disabled: true
  }}
>
  Button text
</Story>

<Story
  name="primary small"
  args={{
    size: "small"
  }}
>
  Button text
</Story>

<Story
  name="primary-black"
  args={{
    variant: "primary-black"
  }}
>
  Button text
</Story>

<Story
  name="primary-black disabled"
  args={{
    variant: "primary-black",
    disabled: true
  }}
>
  Button text
</Story>

<Story name="primary-black with icon">
  Button text <svelte:fragment slot="icon" let:iconColor
    ><IconDownload size={16} fill={iconColor} /></svelte:fragment
  ></Story
>

<Story
  name="primary-black-small"
  args={{
    variant: "primary-black",
    size: "small"
  }}
>
  Button text
</Story>

<Story
  name="secondary"
  args={{
    variant: "secondary"
  }}
>
  Button text
</Story>

<Story
  name="secondary disabled"
  args={{
    variant: "secondary",
    disabled: true
  }}
>
  Button text
</Story>

<Story name="secondary with icon">
  Button text <svelte:fragment slot="icon" let:iconColor
    ><IconDownload size={16} fill={iconColor} /></svelte:fragment
  ></Story
>

<Story
  name="secondary-small"
  args={{
    variant: "secondary",
    size: "small"
  }}
>
  Button text
</Story>

<Story
  name="secondary-black"
  args={{
    variant: "secondary-black"
  }}
>
  Button text
</Story>

<Story
  name="secondary-black disabled"
  args={{
    variant: "secondary-black",
    disabled: true
  }}
>
  Button text
</Story>

<Story name="secondary-black with icon">
  Button text <svelte:fragment slot="icon" let:iconColor
    ><IconDownload size={16} fill={iconColor} /></svelte:fragment
  ></Story
>
<Story
  name="secondary-black-small"
  args={{
    variant: "secondary-black",
    size: "small"
  }}
>
  Button text
</Story>

<Story
  name="tertiary"
  args={{
    variant: "tertiary"
  }}
>
  Button text
</Story>

<Story
  name="tertiary disabled"
  args={{
    variant: "tertiary",
    disabled: true
  }}
>
  Button text
</Story>

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
>
  Button text
</Story>

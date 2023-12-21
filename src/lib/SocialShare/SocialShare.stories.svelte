<script context="module">
  import SocialShare from "./SocialShare.svelte";
  import { fn, userEvent, within, expect } from '@storybook/test';

  export const meta = {
    title: "Components/SocialShare",
    description: "Social media share buttons",
    component: SocialShare,
    tags: ["autodocs"],
    args: {
      shareUrl: "https://urban.org",
    },
    argTypes: {
      variant: {
        default: "dark",
        options: ["light", "dark"],
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
  <SocialShare {...args} />
</Template>

<Story name="Default" />
<Story
  name="Variant - light"
  args={{
    variant: "light"
  }}
  parameters={{ backgrounds: { default: "dark" } }}
/>
<Story
  name="With custom onClick handler"
  args={{
    onClick: fn()}}
  play={async ({ args, canvasElement }) => {
    await userEvent.click(within(canvasElement).getByLabelText("email-share"));
    await expect(args.onClick).toHaveBeenCalled();
  }}
/>

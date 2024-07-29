<script context="module">
  import SocialShare from "./SocialShare.svelte";
  import docs from "./SocialShare.docs.md?raw";
  import { fn, userEvent, within, expect } from "@storybook/test";

  export const meta = {
    title: "Components/SocialShare",
    component: SocialShare,
    tags: ["autodocs"],
    args: {
      shareUrl: "https://urban.org"
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
      },
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/SocialShare/SocialShare.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <SocialShare {...args} on:click />
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
    onClick: fn()
  }}
  play={async ({ args, canvasElement }) => {
    await userEvent.click(within(canvasElement).getByLabelText("email-share"));
    await expect(args.onClick).toHaveBeenCalled();
  }}
/>

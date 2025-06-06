<script context="module">
  import LogoTPCBadge from "./LogoTPCBadge.svelte";
  import docs from "./LogoTPCBadge.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Logos/LogoTPCBadge",
    component: LogoTPCBadge,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/LogoTPCBadge/LogoTPCBadge.svelte"
      }
    }
  });
</script>

<Story name="Default" />

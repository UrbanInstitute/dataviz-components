<script module>
  import LogoUrbanBadge from "./LogoUrbanBadge.svelte";
  import docs from "./LogoUrbanBadge.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Logos/LogoUrbanBadge",
    component: LogoUrbanBadge,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/LogoUrbanBadge/LogoUrbanBadge.svelte"
      }
    }
  });
</script>

<Story name="Default" />

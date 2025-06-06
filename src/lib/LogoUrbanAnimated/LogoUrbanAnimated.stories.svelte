<script context="module">
  import LogoUrbanAnimated from "./LogoUrbanAnimated.svelte";
  import docs from "./LogoUrbanAnimated.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Logos/LogoUrbanAnimated",
    component: LogoUrbanAnimated,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/LogoUrbanAnimated/LogoUrbanAnimated.svelte"
      }
    }
  });
</script>

<Story name="Default" />

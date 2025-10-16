<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script module>
  import Navbar from "./Navbar.svelte";
  import docs from "./Navbar.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Components/Navbar",
    component: Navbar,
    tags: ["autodocs"],
    argTypes: {
      brand: {
        default: "urban",
        options: ["urban", "tpc"],
        control: "select"
      }
    },
    parameters: {
      docs: {
        description: {
          component: docs
        }
      },
      githubLink: {
        url: "/Navbar/Navbar.svelte"
      }
    }
  });
</script>

<Story name="Default" />

<Story
  name="With title, no project link"
  args={{
    title: "Project title"
  }}
/>

<Story
  name="With title and project link"
  args={{
    title: "Project title",
    projectUrl: "https://urban.org"
  }}
/>

<Story
  name="Sticky"
  args={{
    title: "Project title",
    projectUrl: "https://urban.org",
    sticky: true
  }}
/>

<Story
  name="TPC"
  args={{
    title: "Project title",
    projectUrl: "https://taxpolicycenter.org",
    brand: "tpc"
  }}
/>

<script context="module">
  import Navbar from "./Navbar.svelte";
  import docs from "./Navbar.docs.md?raw";

  export const meta = {
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
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <Navbar {...args} />
</Template>

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

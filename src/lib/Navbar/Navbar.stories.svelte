<script context="module">
  import Navbar from "./Navbar.svelte";

  export const meta = {
    title: "Components/Navbar",
    description: "A basic navbar",
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
          component:
            "Full width navigation bar for top of page. Includes <code>brand</code> and <code>sticky</code> properties for Urban/TPC logo and absolute position controls respectively."
        }
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
  name="With title"
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
    projectUrl: "https://urban.org",
    brand: "tpc"
  }}
/>

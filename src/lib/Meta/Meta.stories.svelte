<script context="module">
  import Meta from "./Meta.svelte";

  export const meta = {
    title: "Components/Meta",
    component: Meta,
    argTypes: {
      authors: {
        control: {
          type: "array"
        }
      },
      keywords: {
        control: {
          type: "array"
        }
      }
    },
    parameters: {
      githubLink: {
        url: "/Meta/Meta.svelte"
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <Meta {...args} />
</Template>

<Story
  name="Default"
  args={{
    title: "",
    description: "",
    url: "",
    siteName: "Urban Institute",
    authors: ["Author Name", "Author Name"],
    keywords: ["keyword1", "keyword2"],
    socialImage: ""
  }}>Nothing to see here</Story
>

<Story
  name="No Index"
  args={{
    title: "",
    description: "",
    url: "",
    siteName: "Urban Institute",
    authors: ["Author Name", "Author Name"],
    keywords: ["keyword1", "keyword2"],
    socialImage: "",
    robotsNoIndex: true
  }}>Nothing to see here</Story
>

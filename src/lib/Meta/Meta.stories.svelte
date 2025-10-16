<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script module>
  import Meta from "./Meta.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
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
  });
</script>

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

<script context="module">
  import Meta from "./Meta.svelte";

  export const meta = {
    title: "Components/Meta",
    description: "A component to manage meta tags for the HTML document.",
    component: Meta,
    tags: ["autodocs"],
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
      docs: {
        description: {
          component: "This component uses Svelt's built-in `<svelte:head>` component to include important metadata for your HTML page."
        }
      }
    }
  };
</script>

<script>
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <Meta />
</Template>

<Story name="Default" args={{
  title: "",
  description: "",
  url: "",
  site_name: "Urban Institute",
  authors: ["Author Name", "Author Name"],
  keywords: ["keyword1", "keyword2"],
  social_image: ""
}}>Nothing to see here</Story>


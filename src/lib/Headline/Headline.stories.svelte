<script context="module">
  import Headline from "./Headline.svelte";
  import { Button } from "$lib";
  import docs from "./Headline.docs.md?raw";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    title: "Components/Headline",
    component: Headline,
    tags: ["autodocs"],
    argTypes: {
      width: {
        default: "body",
        options: ["body", "wide", "full"],
        control: "select"
      },
      variant: {
        default: "dark",
        options: ["dark", "light"],
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
        url: "/Headline/Headline.svelte"
      }
    }
  });
  const hed = "Urban Institute Data Visualization Project Headline";
</script>

<Story
  name="Primary"
  args={{
    headline: hed,
    date: "January 1, 1968",
    eyebrow: "Data tool",
    shareUrl: "https://urban.org"
  }}
/>

<Story
  name="With description"
  args={{
    headline: hed,
    date: "January 1, 1968",
    eyebrow: "Data tool",
    description:
      "The Urban Institute is a nonprofit research organization that provides data and evidence to help advance upward mobility and equity.",
    shareUrl: "https://urban.org"
  }}
/>

<Story
  name="With date prefix"
  args={{
    headline: hed,
    date: "January 1, 1968",
    eyebrow: "Data tool",
    datePrefix: "Last updated on",
    shareUrl: "https://urban.org"
  }}
/>

<Story
  name="No eyebrow"
  args={{
    headline: hed,
    date: "January 1, 1968",
    shareUrl: "https://urban.org"
  }}
/>

<Story
  name="No publish date"
  args={{
    headline: hed,
    eyebrow: "Data tool",
    shareUrl: "https://urban.org"
  }}
/>

<Story
  name="No social share"
  args={{
    headline: hed,
    date: "January 1, 1968",
    eyebrow: "Data tool"
  }}
/>

<Story
  name="Reverse"
  parameters={{ backgrounds: { default: "dark" } }}
  args={{
    headline: hed,
    date: "January 1, 1968",
    eyebrow: "Data tool",
    shareUrl: "https://urban.org",
    variant: "light"
  }}
/>

<!-- Portions of this code have been written or edited by generative AI tools. -->
<Story name="With custom snippets" asChild>
  <Headline shareUrl="https://urban.org">
    {#snippet eyebrowSnippet()}
      <img src="urban-logo.svg" alt="An Urban institute logo" width="120px" />
    {/snippet}
    {#snippet headlineSnippet()}
      <h1 style="color: var(--color-blue); font-weight: var(--font-weight-bold)">
        Custom headline snippet
      </h1>
    {/snippet}
    {#snippet descriptionSnippet()}
      <p>This is a custom description snippet</p>
    {/snippet}
    {#snippet dateSnippet()}
      <p>Custom date snippet: January 1, 1968</p>
    {/snippet}
    {#snippet extra()}
      <Button>Extra snippet</Button>
      <p style="font-size: var(--font-size-small); color: var(--color-gray-darker)">
        (Custom button)
      </p>
    {/snippet}
  </Headline>
</Story>

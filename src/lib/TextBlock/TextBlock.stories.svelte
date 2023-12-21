<script context="module">
	import TextBlock from "./TextBlock.svelte";

	export const meta = {
		title: "Components/TextBlock",
		description: "A basic text block",
		component: TextBlock,
		tags: ["autodocs"],
	};
</script>

<script>
	import { Story, Template } from "@storybook/addon-svelte-csf";

</script>

<Template let:args>
	<TextBlock {...args} />
</Template>

<Story
	name="Default"
  args={{
    content: "Enim id qui labore labore quis ut enim tempor sint quis proident voluptate ex. Duis nisi minim et occaecat do ullamco nisi dolore ipsum proident tempor aute exercitation duis. Proident pariatur consectetur tempor mollit Lorem deserunt. Ut laboris est cillum ut dolore quis consectetur nostrud ut cupidatat enim ea cupidatat ipsum. Voluptate esse labore incididunt sint eiusmod ullamco mollit consequat.",
  }}
/>

<Story
	name="With HTML content"
  args={{
    content: "Enim id qui <a href='https://urban.org' target='_blank'>labore labore quis</a> ut enim tempor sint quis proident voluptate ex. Duis nisi minim et occaecat do ullamco nisi dolore ipsum proident tempor aute exercitation duis. Proident pariatur consectetur tempor mollit Lorem deserunt. Ut laboris est cillum ut dolore quis consectetur nostrud ut cupidatat enim ea cupidatat ipsum. Voluptate esse labore incididunt sint eiusmod ullamco mollit consequat.",
  }}
/>

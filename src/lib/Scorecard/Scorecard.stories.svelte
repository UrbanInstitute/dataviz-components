<script context="module">
	import Scorecard from "./Scorecard.svelte";

	export const meta = {
		title: "Components/Scorecard",
    description: "A scorecard that displays a value and a label",
		component: Scorecard,
		tags: ["autodocs"],
	};
</script>

<script>
	import { Story, Template } from "@storybook/addon-svelte-csf";

</script>

<Template let:args>
	<Scorecard {...args} />
</Template>

<Story
	name="Default"
	args={{
		value: "9,001",
		label: "Visualizations",
	}}
/>

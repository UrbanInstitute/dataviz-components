<script>
	import BasicDropdown from "$lib/BasicDropdown/BasicDropdown.svelte";
	import Scorecard from "$lib/Scorecard/Scorecard.svelte";
	import "$lib/style/app.css";
</script>

<main>
	<h1>Svelte Data Visualization Components for Urban Institute</h1>
	<br />
	<h2>BasicDropdown.svelte</h2>
	<BasicDropdown
		value="rachel"
		data={[
			{ value: "rachel", label: "Rachel" },
			{ value: "ben", label: "Ben" },
			{ value: "mitchell", label: "Mitchell" },
			{ value: "aleszu", label: "Aleszu" }
		]}
		inline_label="Select a value"
		id="names"
	/>
	<br />
	<h2>Scorecard.svelte</h2>
	<Scorecard value="9,001" label="Visualizations" />
</main>

<style>
	main {
		padding: 1rem;
	}
</style>

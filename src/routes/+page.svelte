<script>
	import BasicDropdown from "$lib/BasicDropdown.svelte";
	import "../app.css";
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
	/>
</main>

<style>
	main {
		padding: 1rem;
	}
</style>

<script>
	import { createEventDispatcher } from "svelte";
	import "../app.css";

	// define arguments
	/** @type {String} The current value for the dropdown */
	export let value;

	/** @type {{ value: string, label: string}[]} source data as array of objects (value and label attributes)*/
	export let data;

	/** @type {String} The label for the dropdown (currently hidden)*/
	export let inline_label;

	/** @type {Number} The width of the dropdown */
	export let dropdown_width = 260;

	// create dispatcher
	const dispatch = createEventDispatcher();

	// define the svg arrow
	let arrow = `data:image/svg+xml;utf8,<svg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15.1313 0.666626C15.5179 0.666626 15.7794 0.846014 15.9272 1.20479C16.0749 1.56356 15.9954 1.85507 15.7111 2.09052L8.65117 9.12027C8.45791 9.26602 8.2419 9.33329 8.00316 9.33329C7.76442 9.33329 7.57115 9.26602 7.42335 9.12027L0.283802 2.09052C-0.000415318 1.85507 -0.0686276 1.55235 0.0677969 1.20479C0.21559 0.846014 0.477071 0.666626 0.863607 0.666626H15.1313Z' fill='%231696D2'/></svg>`;
</script>

<div class="dropdown-container">
	<label aria-hidden="true" hidden for="opts">{inline_label}</label>
	<select
		bind:value
		name="dropdown-select"
		class="dropdown-select"
		style={`--bg-img: url("${arrow}"); width: ${dropdown_width}px;`}
		aria-label={inline_label}
		on:change={(e) => {
			dispatch("change", e);
		}}
	>
		<!-- options -->
		{#each data as d (d.value)}
			{#if d !== ""}
				<option value={d.value}>{d.label}</option>
			{/if}
		{/each}
	</select>
</div>

<style>
	.dropdown-container {
		display: flex;
		align-items: center;
	}

	.dropdown-select {
		color: var(--color-gray-shade-darker);
		padding: var(--spacing-2) var(--spacing-3);
		font-size: var(--font-size-normal);
		font-family: Lato, helvetica, sans-serif;
		font-style: normal;
		border: 1px solid var(--color-gray-shade-medium);
		cursor: pointer;
		background-color: var(--color-white);
		background-image: var(--bg-img);
		background-size: var(--spacing-4) var(--spacing-4);
		background-repeat: no-repeat;
		background-position: 95% center;
		z-index: 2;
		position: relative;
		overflow: hidden;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}
</style>

import BasicDropdown from "./BasicDropdown.svelte";

export default {
	component: BasicDropdown,
	tags: ["autodocs"],
	argTypes: {
		arrow_fill_color: { control: "color" },
		data: { control: "object" }
	}
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default = {
	render: (args) => ({
		Component: BasicDropdown,
		props: args
	}),
	args: {
		id: "dropdown-story",
		dropdown_width: 260,
		inline_label: "Dropdown label",
		arrow_fill_color: "#1696D1",
		placeholder: "Select a state",
		data: [
			{ value: "Ohio", label: "Ohio" },
			{ value: "Pennsylvania", label: "Pennsylvania" },
			{ value: "New York", label: "New York" },
			{ value: "Maryland", label: "Maryland" }
		]
	}
};

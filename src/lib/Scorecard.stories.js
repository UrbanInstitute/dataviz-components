import Scorecard from "./Scorecard.svelte";

export default {
	component: Scorecard,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default = {
	render: (args) => ({
		Component: Scorecard,
		props: args
	}),
	args: {
		value: "10,000",
    label: "Points"
	}
};

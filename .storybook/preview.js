import Theme from '../src/lib/Theme/Theme.svelte';
import "$lib/style/main.css";

/** @type { import('@storybook/svelte').Preview } */
const preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
  decorators: [() => Theme],
};

export default preview;

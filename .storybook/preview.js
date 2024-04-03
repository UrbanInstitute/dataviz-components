import Theme from '../src/lib/Theme/Theme.svelte';
import "$lib/style/main.css";

/** @type { import('@storybook/svelte').Preview } */
const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
    options: {
      storySort: {
        order: ['Introduction', 'Theming/Theme', 'Theming', 'Components', 'Layout', 'Logos', 'Utils', 'Actions', 'Stores'],
      }
    }
	},
  decorators: [() => Theme],
};

export default preview;

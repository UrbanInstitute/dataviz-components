import Theme from "../src/lib/Theme/Theme.svelte";
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
        method: 'alphabetical',
        order: [
          "Introduction",
          "Theming",
          ["Theme", "Fonts"],
          "Examples",
          "Components",
          "Layout",
          "Logos",
          "Utils",
          "Actions",
          "Stores"
        ]
      }
    }
  },
  decorators: [() => Theme]
};

export default preview;

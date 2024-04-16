import Theme from "../src/lib/Theme/Theme.svelte";
import "$lib/style/main.css";
import { SyntaxHighlighter } from "@storybook/components";
import svelte from "./svelte-highlighting";

SyntaxHighlighter.registerLanguage("svelte", svelte);

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
        method: "alphabetical",
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
    },
    docs: {
      source: { language: "svelte" }
    }
  },
  decorators: [() => Theme]
};

export default preview;

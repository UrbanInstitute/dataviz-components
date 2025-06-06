import Theme from "../src/lib/Theme/Theme.svelte";
import "$lib/style/main.css";
import { SyntaxHighlighter } from "storybook/internal/components";
import svelte from "./svelte-highlighting";

SyntaxHighlighter.registerLanguage("svelte", svelte);

/** @type { import('@storybook/sveltekit').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      options: {
        light: { name: "light", value: "#ffffff" },
        dark: { name: "dark", value: "#0A4C6A" }
      },
    },
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
          "Layercake",
          ["Intro"],
          "Layout",
          "Logos",
          ["Icons"],
          "Maps",
          ["SVGMap"],
          "Utils",
          "Actions",
          "Stores"
        ]
      }
    },
    docs: {
      source: { language: "svelte" }
    },
    viewport: {
      viewports: {
        small: {
          name: "Small",
          styles: {
            width: "375px",
            height: "667px"
          }
        },
        medium: {
          name: "Medium",
          styles: {
            width: "460px",
            height: "800px"
          }
        },
        large: {
          name: "Large",
          styles: {
            width: "768px",
            height: "100%"
          }
        },
        xl: {
          name: "XL",
          styles: {
            width: "1160px",
            height: "100%"
          }
        }
      }
    },
    githubLink: {
      baseURL: "https://github.com/UrbanInstitute/dataviz-components/tree/main/src/lib/",
      auto: false
    }
  },
  decorators: [() => Theme]
};

export default preview;

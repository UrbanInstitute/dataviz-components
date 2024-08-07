/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-svelte-csf",
    "@storybook/addon-a11y",
    "@etchteam/storybook-addon-github-link"
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {}
  },
  core: { disableTelemetry: true },
  docs: {
    autodocs: "tag"
  },
  staticDirs: ["../static/"],
  build: {
    test: {
      disableAutoDocs: false
    }
  }
};
export default config;

/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)"],

  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-svelte-csf"
    },
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/sveltekit",
    options: {}
  },

  core: { disableTelemetry: true },
  staticDirs: ["../static/"],

  build: {
    test: {
      disableAutoDocs: false
    }
  }
};
export default config;

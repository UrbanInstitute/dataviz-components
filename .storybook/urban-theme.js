import { create } from "@storybook/theming/create";

export default create({
	base: "light",
	brandTitle: "Urban Institute dataviz components",
	brandUrl: "https://www.urban.org",
	brandImage: "/urban-logo.svg",
	brandTarget: "_blank",
	// Typography
  fontBase: 'Lato, Helvetica, Arial, sans-serif',
	fontCode: "monospace",

	colorPrimary: "#0A4C6A",
	colorSecondary: "#1696D2",

	// UI
	appBg: "#ffffff",
	appContentBg: "#ffffff",
	appPreviewBg: "#ffffff",
	appBorderColor: "#d2d2d2",
	appBorderRadius: 0,

	// Toolbar default and active colors
	barTextColor: "#000000",
	barSelectedColor: "#1696D2",
	barBg: "#ececec",

	// Form colors
	inputBg: "#ffffff",
	inputBorder: "#d2d2d2",
	inputTextColor: "#000000",
	inputBorderRadius: 0
});

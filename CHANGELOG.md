# @UrbanInstitute/dataviz-components Changelog

## Next

- Fix: Syntax error in toggle component
- Feat: Tooltip has pointerEvents prop
- Fix: ColorLegend story now displays correctly

## v1.0.6

- Fix: LogoUrbanWide height is derived from width instead of being hard-coded

## v1.0.5

- Fix: SVGMap layers set pointer-events style property correctly

## v1.0.4

- Feat: SVGMap has tooltipSize prop to determine large or small tooltips

## v1.0.3

- Fix: Fixes issue with getFeatureHighlight function in SVGMap that would throw an error for any features without props

## v1.0.2

- Update relative css imports in main.css

## v1.0.1

- Add Tilemap component
- Update prettier settings
- Cleanup type checker warnings
- Add type check to CI
- Fix syntax issues in stories and remove unneeded story

## v1.0.0

- Upgrade Svelte from version 4 to 5
- Upgrade Storybook to version 9
- Use new Svelte Storybook CSF format for stories

## v0.13.0

- Feature: add `robotsNoIndex` option to Meta component
- Patch: Change naSpacing prop jsdoc to type number
- Patch: Add new Urban type styles and update Futura font loading

## v0.13.0

- Fix: Allow HTML content for title and description field in ChartBlock component
- Patch: IconRefresh didn't have an export; added it.
- Patch: Analytics component sends dev-only start-up console log about state of sendPageview.

## v0.12.6

- Patch: DatawrapperSwitching story to wrap the bottom block in `if` instead of `key`.

## v0.12.5

- Patch: Headline eyebrows in Drupal include a link to the Story or Data tool homepage; tweaked Headline component to do the same.
- Fix: CSS Theme variable --color-green was #ffb748, which is a kind of yellow. Changed to match style guide.

## v0.12.4

- Fix: Tooltip positioning works as expected when inside a ShadowRoot of a custom element

## v0.12.3

- Fix: Tooltip checks if ancestor is an instance of Element before calling getComputedStyle

## v0.12.2

- Fix: Color scale resets ticks when switching from threshold scale to continuous scale
- Patch: SVGPolygonLayer uses mousedown instead of click event

## v0.12.1

- Fix: Add more specificity to several <p> tags to avoid CSS conflicts between <Theme /> and component styles

## v0.12.0

- Patch: Support Svelte 5 in projects that use this library
- Patch: Update Datawrapper Switching example with `title` and `ariaLabel` props

## v0.11.1

- Fix: Correct path for icon exports

## v0.11.0

- Patch: Update BasicDropdown with better accessibility (icon hidden from screen readers)
- Feature: GitHub source links for components via [@etchteam/storybook-addon-github-link](https://storybook.js.org/addons/@etchteam/storybook-addon-github-link) in storybook docs
- Patch: Update method of declaring Storybook component descriptions and add import instructions to components
- Patch: Remove description field from top level `meta` object in component `.stories.svelte` files (do not render)
- Feature: CLI command to generate new component boilerplate (`npm run create-component`)
- Feature: Add Layercake AxisX and AxisY components and docs
- Feature: Add Icon components [close, plus, minus, search]
- Fix: ColorLegend compontent displays threshold scale ticks correctly
- Feature: ColorLegend supports an N/A item

## v0.10.2

- Patch: Run Vitest tests in CI
- Feature: Add style/theme export and instructions on CSS variable intellisense
- Patch: Update SocialShare spacing
- Patch: Update Storybook viewport sizes to match design system breakpoints
- Patch: Update Toggle size to adhere to design team guidance

## v0.10.1

- Fix: Remove padding from ZoomControls on map in mobile Safari

## v0.10.0

- Fix BasicDropdown border radius
- Update Toggle with dispatched click
- Fix: Remove errant padding from ProjectCredits
- Feature: Add SVGMap component
- Feature: Add SVGPolygonLayer component
- Feature: Add SVGPointLayer component
- Feature: Add SVGLabelLayer component
- Feature: Add ColorLegend component
- Feature: Add Tooltip component

## v0.9.0

- Update BasicDropdown with secondary style variants, a visible label, and better story controls
- Add LoadingWrapper component to provide a loading graphic for components that need it
- Add SVGMap component and associated layer components
- Add ColorLegend component
- Add Tooltip component

## v0.8.0

- Simplify CSS in Toggle component
- Add contribution guidance to Intro docs and README
- Add Headline component
- Add PymChild component
- Add "vis.rendered" event to DatawrapperIframe component
- Patch Toggle component accessibility
- Add animated Urban Logo Badge component

## v0.7.2

- Add Svelte syntax highlighting for code blocks (thanks to Axios team for the tip here!)
- Adds example writable/derived store setup for dynamic information display
- Fixes package name in documentation
- Fixes Intro code chunk to be up to date
- Changes snake_case variables to camelCase
- Change BasicDropdown's value prop to accept null
- Add Navbar case for no projectUrl with story documentation

## v0.7.1

- Add Analytics component
- Move Block documentation to main component section
- Adds Basic page layout example
- Update Storybook favicon to Urban logo

## v0.7.0

- Add right padding and ellipsis on text overflow to BasicDropdown
- Add functionality to remove `placeholder` <option> in BasicDropdown component
- Add LogoUrbanWide and create Logos story folder
- Turn off interaction events `onDestroy` of DatawrapperIframe
- Add Toggle component
- Upgrade Storybook to version 8
- Upgrade SvelteKit to version 2 and update other Svelte-related dependencies
- Upgrade to Vite version 5
- Create Examples section and add examples of swithcing Datawrapper iframes
- Add Scrolly component
- Update story ordering config

## v0.6.0

- Add Theme component and update styles of components accordingly
- Add Font loading components to account for changes in styles
- Export main stylesheet
- Add normalize.css to exported stylesheet
- Add Meta component
- Re-organize documentation files for more consistency
- Update spacing on ChartBlock component
- Cleanup: remove unused +page.svelte file and remove `dev` as a command in scripts

## v0.5.1

- Bugfix: export ChartBlock

## v0.5.0

- Add ChartBlock component
- Add Button component
- Updates Github action versions
- Add resizeObserver action
- Change BasicDropdown programmatic dispatching to declarative event forwarding

## 0.4.0

- Add SectionBreak component
- Add PR template for changelog reminder
- Update urbanColors module to align more closely with the Urban Institute data visualization styleguide
- Improve urbanColors documentation
- Update SocialShare Twitter icon to new X logo
- Simplify SocialShare dialogue URLs

## 0.3.3

- Add descriptions to Storybook documentation
- Bugfix: remove unchecked call to window in Datawrapper events

## 0.3.2

- Update `wide` Block width

## 0.3.1

- Bugfix, add missing exports

## 0.3.0

- Add additional options to TextBlock component
- Add "Return to top" component
- Add `dollarFormat` utility function
- Add `kebabCase` utility function

## 0.2.1

- Make github URL in ProjectCredits an optional prop
- Updates storybook to v7.6.6
- Fixes TextBlock documentation
- Adds sticky option to Navbar

## 0.2.0

- Update props for TextBlock component to play better with ArchieML
- Better spacing for Block component on mobile
- Add wide option for Block component

## 0.1.3

- Bugfix Add Block component to exports

## 0.1.2

- Add TextBlock component
- Add ProjectCredits component
- Add Navbar component
- Add Logo components
- Add HeadingAlt component
- Add Block layout component
- Add social share component
- Add ProjectCredits component
- Add tpcColors utility module

## 0.1.1

- Fix utls export in package.json

## 0.1.0

- Update .prettierrc
- Add color utility module
- Add Storybook instance for documentation and testing
- Simplify global styles, move to lib folder

## 0.0.2

### Patch changes

- fix: build/publish github action

## 0.0.1

### Patch changes

- feature: setup initial repository from template

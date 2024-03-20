<div class="theme">
  <slot />
</div>

<style>
  .theme :global(*) {
    box-sizing: border-box;
  }

  .theme {
    --font-family-sans: Lato, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-sans-alt: "futura-pt", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-serif: Georgia, Cambria, "Times New Roman", Times, serif;
    --font-family-mono: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --font-size-normal: 1rem;
    --font-size-small: 0.875rem;
    --font-size-large: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    --font-size-5xl: 3rem;
    --font-size-6xl: 3.75rem;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.625;
    --line-height-snug: 1.375;
    --line-height-tight: 1.25;
    --color-black: #000000;
    --color-white: #ffffff;
    --color-blue-shade-darkest: #062635;
    --color-blue-shade-darker: #0a4c6a;
    --color-blue-shade-dark: #12719e;
    --color-blue: #1696d2;
    --color-blue-shade-medium: #46abdb;
    --color-blue-shade-light: #73bfe2;
    --color-blue-shade-lighter: #a2d4ec;
    --color-blue-shade-lightest: #cfe8f3;
    --color-gray-shade-darkest: #353535;
    --color-gray-shade-darker: #696969;
    --color-gray-shade-dark: #9d9d9d;
    --color-gray: #d2d2d2;
    --color-gray-shade-medium: #dcdbdb;
    --color-gray-shade-light: #e3e3e3;
    --color-gray-shade-lighter: #ececec;
    --color-gray-shade-lightest: #f5f5f5;
    --color-yellow-shade-darkest: #843215;
    --color-yellow-shade-darker: #ca5800;
    --color-yellow-shade-dark: #e88e2d;
    --color-yellow: #fdbf11;
    --color-yellow-shade-medium: #fccb41;
    --color-yellow-shade-light: #fdd870;
    --color-yellow-shade-lighter: #fce39e;
    --color-yellow-shade-lightest: #fff2cf;
    --color-magenta-shade-darkest: #351123;
    --color-magenta-shade-darker: #761548;
    --color-magenta-shade-dark: #af1f6b;
    --color-magenta: #ec00bb;
    --color-magenta-shade-medium: #e54096;
    --color-magenta-shade-light: #e46aa7;
    --color-magenta-shade-lighter: #eb99c2;
    --color-magenta-shade-lightest: #f5cbdf;
    --color-green-shade-darkest: #1a2e19;
    --color-green-shade-darker: #2c5c2d;
    --color-green-shade-dark: #408941;
    --color-green: #ffb748;
    --color-green-shade-medium: #78c26d;
    --color-green-shade-light: #98cf90;
    --color-green-shade-lighter: #bcdeb4;
    --color-green-shade-lightest: #dcedd9;
    --color-red-shade-darkest: #1a2e19;
    --color-red-shade-darker: #6e1614;
    --color-red-shade-dark: #a4201d;
    --color-red: #db2b27;
    --color-red-shade-medium: #e25552;
    --color-red-shade-light: #e9807d;
    --color-red-shade-lighter: #f1aaa9;
    --color-red-shade-lightest: #f8d5d4;
    --color-space-gray-shade-darkest: #0e0c0d;
    --color-space-gray-shade-darker: #1a1717;
    --color-space-gray-shade-dark: #262223;
    --color-space-gray-shade-medium-dark: #332d2f;
    --color-space-gray: #5c5859;
    --color-space-gray-shade-light: #848081;
    --color-space-gray-shade-lighter: #adabac;
    --color-space-gray-shade-lightest: #d5d5d4;
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --spacing-4: 1rem;
    --spacing-5: 1.25rem;
    --spacing-6: 1.5rem;
    --spacing-7: 1.75rem;
    --spacing-8: 2rem;
    --spacing-9: 2.25rem;
    --spacing-10: 2.5rem;
    --spacing-11: 2.75rem;
    --spacing-12: 3rem;
    --spacing-16: 4rem;
    --spacing-20: 5rem;
    --size-body-max-width: 760px;
    --size-wide-max-width: 1160px;
    --color-text-primary: var(--color-gray-shade-darkest);
    --color-text-secondary: var(--color-black);
    --color-text-accent: var(--color-blue);
    --color-text-reverse: var(--color-white);
    --color-surface-primary: var(--color-white);
    --color-accent-primrary: var(--color-blue);
    --color-accent-highlight: var(--color-yellow);
    font-family: var(--font-family-sans);
    line-height: var(--line-height-normal, 1.5);
    font-weight: var(--font-weight-normal, 400);
    font-size: 16px;
    color-scheme: light dark;
    color: #000000;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
  }

  /*
   * Inside the <Theme /> we'll set some default typographic styles
   */

  /*
   * Headings
   */

  .theme :global(h1) {
    color: var(--color-black);
    font-family: var(--font-family-sans);
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
    text-transform: none;
  }

  .theme :global(h2) {
    color: var(--color-black);
    font-family: var(--font-family-sans);
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-snug);
    text-transform: none;
  }

  .theme :global(h3) {
    color: var(--color-black);
    font-family: var(--font-family-sans);
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-light);
    line-height: var(--line-height-normal);
    text-transform: uppercase;
  }

  .theme :global(h4) {
    color: var(--color-black);
    font-family: var(--font-family-sans);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-normal);
    text-transform: none;
  }

  .theme :global(h5) {
    color: var(--color-black);
    font-family: var(--font-family-sans);
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-normal);
    text-transform: none;
  }

  .theme :global(h6) {
    color: var(--color-black);
    font-family: var(--font-family-sans);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-normal);
    text-transform: none;
  }

  /*
   * Paragraphs
   */

  .theme :global(p) {
    font-family: var(--font-family-sans);
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-normal);
    color: var(--color-gray-shade-darkest);
  }
  .theme :global(strong) {
    font-weight: var(--font-weight-bold);
  }

  .theme :global(em) {
    font-style: italic;
  }

  /*
   * Links
   */

  .theme :global(a) {
    color: var(--color-blue);
    font-weight: var(--font-weight-bold);
    text-decoration: none;
  }

  .theme :global(a):hover {
    color: var(--color-blue-shade-dark);
  }

  /*
   * Lists
   */

  .theme :global(ol),
  .theme :global(ul) {
    padding-left: 1em;
  }

  /*
   * Larger screens
   */

  @media (min-width: 769px) {
    /*
     * Headings
     */

    .theme :global(h1) {
      font-size: var(--font-size-5xl);
    }

    .theme :global(h2) {
      font-size: var(--font-size-4xl);
    }

    .theme :global(h3) {
      font-size: var(--font-size-3xl);
    }

    .theme :global(h4) {
      font-size: var(--font-size-2xl);
    }

    .theme :global(h5) {
      font-size: var(--font-size-xl);
    }

    .theme :global(h6) {
      font-size: var(--font-size-large);
    }

    .theme :global(p) {
      font-size: var(--font-size-xl);
      line-height: var(--line-height-relaxed);
    }

  }

</style>

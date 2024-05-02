<script>
  import "theme.css";
</script>

<div class="theme">
  <slot />
</div>

<style>
  .theme :global(*) {
    box-sizing: border-box;
  }

  .theme {
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

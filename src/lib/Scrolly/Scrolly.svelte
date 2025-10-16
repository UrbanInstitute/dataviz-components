<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import Block from "../Block/Block.svelte";
  import { createScrollyContext } from "./context.svelte.js";

  /**
   * @typedef {Object} ScrollyProps
   * @property {any[]} [slides=[]] - An array of content blocks with text or HTML to use in the foreground of the scrolly component. For default behaviour, this should be an array of strings, but if you are using a custom `foreground` snippet, you can use any type of data structure your project requires
   * @property {number} [top=0] - The vertical position that the top of the foreground must scroll past before the background becomes fixed, as a proportion of window height
   * @property {number} [bottom=1] - The inverse of top — once the bottom of the foreground passes this point, the background becomes unfixed
   * @property {number} [threshold=0.75] - Once a section crosses this point, it becomes 'active'
   * @property {number} [spacing=0.75] - The spacing between sections, as a proportion of window height
   * @property {number} [startOffset=0.5] - The spacing before the first section
   * @property {number} [endOffset=0.75] - The spacing after the last section
   * @property {string} [query="section"] - A CSS selector that describes the individual sections of your foreground
   * @property {boolean} [parallax=false] - If true, the background will scroll such that the bottom edge reaches the bottom at the same time as the foreground. This effect can be unpleasant for people with high motion sensitivity, so use it advisedly
   * @property {import("../Block/Block.svelte").blockWidth} [foregroundWidth="wide"] - The foreground is wrapped in a layout `Block` component. This property allows you to adjust the width of the layout block for the foreground text.
   * @property {"center" | "left" | "right"} [textLayout="center"] - The layout of the foreground text
   * @property {"center" | "left" | "right"} [textAlign="center"] - The text alignment of the foreground text
   * @property {number} [textMaxWidth=580] - The max width of the foreground text box
   * @property {string} [textBackground="var(--color-white)"] - The color to use for the background of the text box
   * @property {string} [textColor="var(--color-gray-darker)"] - The color to use for the foreground text
   * @property {boolean} [boxShadow=true] - Should the text box include a box shadow?
   * @property {import('svelte').Snippet} [background] - Optional snippet for custom background component
   * @property {import('svelte').Snippet<[any, number]>} [foreground] - Optional snippet for custom foreground content, receives (slide, index)
   */

  /** @type {ScrollyProps} */
  let {
    slides = [],
    top = 0,
    bottom = 1,
    threshold = 0.75,
    spacing = 0.75,
    startOffset = 0.5,
    endOffset = 0.75,
    query = "section",
    parallax = false,
    foregroundWidth = "wide",
    textLayout = "center",
    textAlign = "center",
    textMaxWidth = 580,
    textBackground = "var(--color-white)",
    textColor = "var(--color-gray-darker)",
    boxShadow = true,
    background,
    foreground
  } = $props();

  // Create rune-based context and set into Svelte context
  const scrolly = createScrollyContext();
</script>

<svelte:window
  bind:innerHeight={scrolly.innerHeight}
  bind:outerHeight={scrolly.slideHeight}
  bind:innerWidth={scrolly.slideWidth}
/>
<div
  class="scrolly-wrapper"
  style:--text-align={textAlign}
  style:--text-max-width="{textMaxWidth}px"
  style:--text-background={textBackground}
  style:--text-color={textColor}
>
  <Scroller
    {top}
    {bottom}
    {threshold}
    {query}
    {parallax}
    bind:index={scrolly.index}
    bind:offset={scrolly.offset}
    bind:progress={scrolly.progress}
  >
    <svelte:fragment slot="background">
      <!--
        The background component that will render behind the foreground slides.
         -->
      {#if background}
        {@render background()}
      {/if}
    </svelte:fragment>
    <Block width={foregroundWidth} slot="foreground">
      <div class="foreground layout-{textLayout}">
        {#each slides as slide, i}
          {@const firstSlide = i === 0}
          {@const lastSlide = i === slides.length - 1}
          <section
            style:margin-top="{firstSlide ? scrolly.slideHeight * startOffset : 0}px"
            style:margin-bottom="{lastSlide
              ? scrolly.slideHeight * endOffset
              : scrolly.slideHeight * spacing}px"
          >
            <!--
                  Optional custom foreground component or markup, renders once for each `slide`.
                 -->
            {#if foreground}
              {@render foreground(slide, i)}
            {:else}
              <div class="scrolly-text-box" class:box-shadow={boxShadow}>
                <p>{@html slide}</p>
              </div>
            {/if}
          </section>
        {/each}
      </div>
    </Block>
  </Scroller>
</div>

<style>
  .scrolly-text-box {
    background-color: var(--text-background);
    color: var(--text-color);
    padding: 2rem;
    text-align: var(--text-align, center);
  }
  .scrolly-text-box.box-shadow {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .scrolly-text-box p {
    color: var(--text-color);
    margin: 0;
  }
  section {
    max-width: var(--text-max-width);
    margin: 0 auto;
    width: 100%;
  }
  .scrolly-text-box p:last-child {
    margin-bottom: 0;
  }
  .foreground {
    display: flex;
    flex-direction: column;
  }
  .scrolly-wrapper {
    margin-bottom: var(--spacing-8);
  }
  @media (min-width: 768px) {
    .scrolly-text-box {
      padding: var(--spacing-12) var(--spacing-12);
    }
    .foreground.layout-left {
      align-items: flex-start;
    }
    .foreground.layout-right {
      align-items: flex-end;
    }
    .foreground.layout-left section,
    .foreground.layout-right section {
      margin-left: 0;
      margin-right: 0;
      width: 50%;
    }
  }
</style>

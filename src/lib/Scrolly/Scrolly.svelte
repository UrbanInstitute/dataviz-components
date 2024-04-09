<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import Block from "../Block/Block.svelte";
  import { writable } from "svelte/store";
  import { setContext } from "svelte";

  /**
   * An array of content blocks with text or HTML to use in the foreground of the scrolly component. For default behaviour, this should be an array of strings, but if you are using a custom `foreground` slot, you can use any type of data structure your project requires
   * @type {any[]}
   */
  export let slides = [];

  /**
   * The vertical position that the top of the foreground must scroll past before the background becomes fixed, as a proportion of window height
   * @type {number}
   */
  export let top = 0;

  /**
   * The inverse of top —  once the bottom of the foreground passes this point, the background becomes unfixed
   * @type {number} [bottom=1]
   */
  export let bottom = 1;

  /**
   * Once a section crosses this point, it becomes 'active'
   * @type {number} [threshold=0.75]
   */
  export let threshold = 0.75;

  /**
   * The spacing between sections, as a proportion of window height
   * @type {number} [spacing=0.75]
   */
  export let spacing = 0.75;

  /**
   * The spacing before the first section
   * @type {number} [startOffset=0.5]
   */
  export let startOffset = 0.5;

  /**
   * The spacing after the last section
   * @type {number} [endOffset=0.75]
   */
  export let endOffset = 0.75;

  /**
   * A CSS selector that describes the individual sections of your foreground
   * @type {string}
   */
  export let query = "section";

  /**
   * If true, the background will scroll such that the bottom edge reaches the bottom at the same time as the foreground. This effect can be unpleasant for people with high motion sensitivity, so use it advisedly
   * @type {boolean}
   */
  export let parallax = false;

  /**
   * The foreground is wrapped in a layout `Block` component. This property allows you to adjust the width of the layout block for the foreground text.
   * @type {import("../Block/Block.svelte").blockWidth} [foregroundWidth="wide"]
   */
  export let foregroundWidth = "wide";

  /**
   * The layout of the foreground text
   * @type {"center" | "left" | "right"}
   */
  export let textLayout = "center";

  /**
   * The text alignment of the foreground text
   * @type {"center" | "left" | "right"}
   */
  export let textAlign = "center";

  /**
   * The max width of the foreground text box
   * @type {number}
   */
  export let textMaxWidth = 580;

  /**
   * The color to use for the background of the text box
   * @type {string}
   */
  export let textBackground = "var(--color-white)";

  /**
   * The color to use for the foreground text
   * @type {string}
   */
  export let textColor = "var(--color-gray-darker)";

  /**
   * Should the text box include a box shadow?
   * @type {boolean} [boxShadow=true]
   */
  export let boxShadow = true;

  // setup stores to add to context

  // index of the current slide
  const index = writable(0);

  // how far the section has scrolled past the threshold, as a value between 0 and 1
  const offset = writable(0);

  // how far the foreground has travelled, where 0 is the top of the foreground crossing top, and 1 is the bottom crossing bottom
  const progress = writable(0);

  // the height of the slide, set to window.outerHeight - outer not inner because inner changes on some devices causing user to jump out of sequence
  const slideHeight = writable(0);

  // the width of the slide
  const slideWidth = writable(0);

  // set to window.innerHeight - the viewable area of the window
  const innerHeight = writable(0);

  $: context = { index: index, offset: offset, progress: progress, slideHeight, slideWidth };
  $: setContext("scrolly", context);
</script>

<svelte:window
  bind:innerHeight={$innerHeight}
  bind:outerHeight={$slideHeight}
  bind:innerWidth={$slideWidth}
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
    bind:index={$index}
    bind:offset={$offset}
    bind:progress={$progress}
  >
    <svelte:fragment slot="background">
      <!-- 
        The background component that will render behind the foreground slides.
         -->
      <slot name="background" />
    </svelte:fragment>
    <Block width={foregroundWidth} slot="foreground">
      <div class="foreground layout-{textLayout}">
        {#each slides as slide, i}
          {@const firstSlide = i === 0}
          {@const lastSlide = i === slides.length - 1}
          <section
            style:margin-top="{firstSlide ? $slideHeight * startOffset : 0}px"
            style:margin-bottom="{lastSlide ? $slideHeight * endOffset : $slideHeight * spacing}px"
          >
            <!-- 
                  Optional custom foreground component or markup, renders once for each `slide`.
                  @param prop slide
                 -->
            <slot {slide} name="foreground">
              <div class="scrolly-text-box" class:box-shadow={boxShadow}>
                <p>{@html slide}</p>
              </div>
            </slot>
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

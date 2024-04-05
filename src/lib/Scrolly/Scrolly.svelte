<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import { writable } from "svelte/store";
  import { setContext } from "svelte";

  /**
   * An array of content blocks with text or HTML to use in the foreground of the scroller component. For default behaviour, this should be an array of strings, but if you are using a custom `foreground` slot, you can use any type of data structure your project requires
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
  $: setContext("scroller", context);
</script>

<svelte:window
  bind:innerHeight={$innerHeight}
  bind:outerHeight={$slideHeight}
  bind:innerWidth={$slideWidth}
/>
<div class="scroller-wrapper">
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
      <slot name="background"></slot>
    </svelte:fragment>
    <div slot="foreground" class="foreground">
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
            <div class="scroller-text-box">
              <p>{@html slide}</p>
            </div>
          </slot>
        </section>
      {/each}
    </div>
  </Scroller>
</div>

<style>
  .scroller-text-box {
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 2rem;
    max-width: 595px;
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  .scroller-text-box p:last-child {
    margin-bottom: 0;
  }
  .foreground {
    display: flex;
    flex-direction: column;
  }
  .scroller-wrapper {
    margin-bottom: var(--spacing-8);
  }
  :global(.annotation-highlight) {
    background-color: #b0d0db;
    padding: var(--spacing-1) 0.25rem;
  }
  @media (min-width: 768px) {
    .scroller-text-box {
      padding: 4rem 3rem;
    }
  }
</style>

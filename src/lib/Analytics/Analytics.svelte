<!-- Portions of this code have been written or edited by generative AI tools. -->
<script module>
  /**
   * A function that logs a click event to Google Analytics.
   * @param {HTMLElement} target The DOM element that triggered the event.
   * @param {string} eventName A string in the format "event_name--event_specifics" where "event_name is the type of event, such as "map_click" or "dropdown_select" and "event_specifics" refers to the selected option, region, or specific function.
   * @returns {void}
   */
  export function logClickToGA(target, eventName) {
    if (typeof window === "undefined") return;

    window.ui_dataviz_config = window.ui_dataviz_config || {};
    const { analytics_mode = "production", analytics_title = "" } = window.ui_dataviz_config;
    const DEV = analytics_mode !== "production";

    const eventData = {
      dataviz_title: analytics_title,
      dataviz_target: target,
      dataviz_detail: eventName
    };

    if (!DEV) {
      if (typeof window.gtag !== "function") return;
      window.gtag("event", "dataviz_click", eventData);
    } else {
      console.log("dataviz_click fired", eventData);
    }
  }
</script>

<script>
  import { onMount } from "svelte";

  /**
   * @typedef {Object} Props
   * @property {string} title - A descriptive title for your project. Used to collect events within GA.
   * @property {boolean} [sendPageview] - Set to false to skip initial pageview. Useful for projects that are primarily embedded on pages with their own analytics.
   * @property {string} [mode] - If set to "development", logClickToGA will print debugging info rather than sending events to GA. Set to "production" to send actual events.
   */

  /** @type {Props} */
  let { title, sendPageview = true, mode = "production" } = $props();

  onMount(() => {
    if (typeof window === "undefined") return;

    window.ui_dataviz_config = window.ui_dataviz_config || {};
    window.ui_dataviz_config.analytics_title = title;
    window.ui_dataviz_config.analytics_mode = mode;
    if (mode == "development") {
      console.log(
        sendPageview
          ? "You are sending page views to GA, as for a full page app."
          : "You are not sending page views to GA, as for an iframe embed."
      );
    }
  });
</script>

<svelte:head>
  <!-- Google Tag Manager -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-N0EZ8ZMM8T"></script>
  {#if sendPageview}
    <script>
      window.dataLayer = window.dataLayer || [];
      window.gtag = function ({}) {
        dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", "G-N0EZ8ZMM8T");
    </script>
  {:else}
    <script>
      window.dataLayer = window.dataLayer || [];
      window.gtag = function ({}) {
        dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", "G-N0EZ8ZMM8T", {
        send_page_view: false
      });
    </script>
  {/if}
  <!-- End Google Tag Manager -->
</svelte:head>

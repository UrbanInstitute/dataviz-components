<script>
  import { createEventDispatcher, onDestroy, beforeUpdate, afterUpdate } from "svelte";
  import datawrapper from "./events";
  import datawrapperEventList from "./datawrapper-event-list.json";

  /**
   * HTML title of the iframe
   * @type {string}
   */
  export let title;

  /**
   * HTML aria-label of the iframe
   * @type {string}
   */
  export let ariaLabel;

  /**
   * Datawrapper chart ID
   * @type {string}
   */
  export let datawrapperId;

  /**
   * iframe scrolling attribute
   * @type {string}
   */
  export let scrolling = "no";

  /**
   * iframe frameborder attribute
   * @type {string}
   */
  export let frameborder = "0";

  /**
   * iframe height attribute (placeholder since reactivity is enabled)
   * @type {string}
   */
  export let height = "500";

  /**
   * CSS styles of the iframe
   * @type {string}
   */
  export let style = "width: 0; min-width: 100% !important; border: none;";

  // add event dispatching for Datawrapper interaction events
  // more: https://developer.datawrapper.de/docs/listening-to-chart-interaction-events#visualization-events
  const dispatch = createEventDispatcher();

  datawrapperEventList.forEach((eventName) => {
    datawrapper.on(eventName, (e) => {
      dispatch(eventName.replace(".", ""), e);
    });
  });

  // responsive iframe code form Datawrapper
  if (typeof window !== "undefined") {
    window.addEventListener("message", function (a) {
      if (void 0 !== a.data["datawrapper-height"]) {
        var e = document.querySelectorAll("iframe");
        for (var t in a.data["datawrapper-height"])
          for (var r = 0; r < e.length; r++)
            if (e[r].contentWindow === a.source) {
              var i = a.data["datawrapper-height"][t] + "px";
              e[r].style.height = i;
            }
      }
    });
  }

  // dispatch an even when the iframe starts to load
  // (does not user beforeUpdate because it is not triggered on first load)
  afterUpdate(() => {
    dispatch("startrender");
  });

  // turn off interaction events on destroy
  // (prevents multiple events when loading multiple iframes)
  onDestroy(() => {
    if (typeof window !== "undefined") {
      datawrapperEventList.forEach((eventName) => {
        datawrapper.off(eventName);
      });
    }
  });
</script>

<iframe
  {title}
  aria-label={ariaLabel}
  id="datawrapper-chart-{datawrapperId}"
  src="https://datawrapper.dwcdn.net/{datawrapperId}"
  {scrolling}
  {frameborder}
  {style}
  {height}
  data-external="1"
  {...$$restProps}
></iframe>

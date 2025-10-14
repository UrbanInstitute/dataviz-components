<!-- Portions of this code have been written or edited by generative AI tools. -->
<script>
  import datawrapper from "./events";
  import datawrapperEventList from "./datawrapper-event-list.json";

  let {
    title,
    ariaLabel,
    datawrapperId,
    scrolling = "no",
    frameborder = "0",
    height = "500",
    style = "width: 0; min-width: 100% !important; border: none;",
    onstartrender = () => {},
    ...restProps
  } = $props();

  const eventCallbackKeys = new Set(
    datawrapperEventList.map((eventName) => `on${eventName.replace(/\./g, "")}`)
  );

  const iframeProps = $derived.by(() => {
    const rest = {};
    for (const [key, value] of Object.entries(restProps)) {
      if (eventCallbackKeys.has(key)) continue;
      rest[key] = value;
    }
    return rest;
  });

  function createCallbackEvent(name, detail) {
    if (typeof CustomEvent === "function") {
      return new CustomEvent(name, { detail });
    }
    return { type: name, detail };
  }

  function handleDatawrapperResize(messageEvent) {
    if (
      !messageEvent?.data ||
      typeof messageEvent.data !== "object" ||
      messageEvent.data["datawrapper-height"] === undefined
    ) {
      return;
    }
    const heights = messageEvent.data["datawrapper-height"];
    const frames = document.querySelectorAll("iframe");
    for (const key in heights) {
      for (let index = 0; index < frames.length; index += 1) {
        const frame = frames[index];
        if (frame.contentWindow === messageEvent.source) {
          frame.style.height = `${heights[key]}px`;
        }
      }
    }
  }

  $effect(() => {
    // Track datawrapperId to fire when iframe src changes
    void datawrapperId;
    onstartrender(createCallbackEvent("startrender"));
  });

  $effect(() => {
    window.addEventListener("message", handleDatawrapperResize);

    const cleanups = datawrapperEventList.map((eventName) => {
      const sanitizedEvent = eventName.replace(/\./g, "");
      const handler = (eventPayload) => {
        const callback = restProps[`on${sanitizedEvent}`];
        if (typeof callback === "function") {
          callback(createCallbackEvent(sanitizedEvent, eventPayload));
        }
      };
      datawrapper.on(eventName, handler);
      return () => datawrapper.off(eventName, handler);
    });

    return () => {
      window.removeEventListener("message", handleDatawrapperResize);
      cleanups.forEach((cleanup) => cleanup());
    };
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
  {...iframeProps}
></iframe>

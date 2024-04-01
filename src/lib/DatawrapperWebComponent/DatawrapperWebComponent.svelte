<script>
  // import datawrapper from "../DatawrapperIframe/events";
  // import datawrapperEventList from "../DatawrapperIframe/datawrapper-event-list.json";
  // import { createEventDispatcher } from "svelte";

  /*** @type {string} Datawrapper chart ID */
  export let datawrapperId;

  // const dispatch = createEventDispatcher();

  // datawrapperEventList.forEach((eventName) => {
  //   if (typeof window.datawrapper !== "undefined") {
  //     datawrapper.on(eventName, (e) => {
  //       dispatch(eventName.replace(".", ""), e);
  //     });
  //   }
  // });
</script>

<div style="width:100%; min-height:300px;">
  <script
    type="text/javascript"
    defer
    src="https://datawrapper.dwcdn.net/{datawrapperId}/embed.js"
    charset="utf-8"
  >
  </script>
  <noscript>
    <img src="https://datawrapper.dwcdn.net/{datawrapperId}/full.png" alt="[aria-description]" />
  </noscript>
</div>

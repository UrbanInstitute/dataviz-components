Datawrapper iframe with [event dispatching](https://developer.datawrapper.de/docs/listening-to-chart-interaction-events) enabled. All interaction events are accessible via `on:eventname` (**no periods**) on the `DatawrapperIframe` Svelte component itself. The complete event list and associated descriptions can be found [here](https://developer.datawrapper.de/docs/listening-to-chart-interaction-events#visualization-events).

Examples of how to setup "switching" between Datawrapper charts with a dropdown or button controls can be found [in the Examples section here](/docs/examples-datawrapper-switching--docs).

In April 2024, the `vis.rendered` event was added to the Datawrapper event list (per the Urban team's request) in order to track when a visualization had been rendered/painted on the page. This is useful if there is a longer loading visualization (like a large map) and you'd like to indicate to the user that the visualization is still loading.

The `startrender` event is available via the component's `beforeUpdate()` function in order to track when the iframe starts to load. This can be combined with the `vis.rendered` event to track when the visualization has been rendered/painted on the page in combination with the [LoadingWrapper](/docs/components-loadingwrapper--docs) component.

```js
import { DatawrapperIframe } from "@urbaninstitute/dataviz-components";
```

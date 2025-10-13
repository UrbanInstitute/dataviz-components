Wrapper to display a loading spinner graphic while content is loading. Exposes `setChildLoading()` and `setChildLoaded()` to be used by children as an alternative method of setting `isChildLoading` boolean. Accepts an alternative graphic via the `graphic` snippet.

```js
import { LoadingWrapper } from "@urbaninstitute/dataviz-components";
```

```svelte
<LoadingWrapper>
  {#snippet graphic()}
    <CustomSpinner />
  {/snippet}
  {#snippet children({ setChildLoading, setChildLoaded })}
    <RemoteViz on:initializing={setChildLoading} on:ready={setChildLoaded} />
  {/snippet}
</LoadingWrapper>
```

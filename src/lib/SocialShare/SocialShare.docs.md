Social share icons, available in light or dark mode.

```js
import { SocialShare } from "@urbaninstitute/dataviz-components";
```

```svelte
<SocialShare
  shareUrl="https://urban.org"
  onclick={(event, provider) => {
    console.log(`Shared on ${provider}`, event.currentTarget);
  }}
/>;
```

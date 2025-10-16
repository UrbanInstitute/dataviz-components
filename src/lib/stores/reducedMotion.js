// A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review.
/**
 * @deprecated Use createMatchMediaContext()/useMatchMediaContext() from matchMediaContext.svelte.js instead.
 * This store will be removed in a future major version.
 *
 * Legacy readable store to detect if client has reduced motion turned on.
 * Adapted from Geoff Rich: https://geoffrich.net/posts/svelte-prefers-reduced-motion-store/
 */

import { readable } from "svelte/store";

/**
 * @type {string}
 */
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

/**
 * Readable store that tracks the user's reduced motion preference.
 * @deprecated Use createMatchMediaContext()/useMatchMediaContext() from matchMediaContext.svelte.js
 */
export const reducedMotion = readable(false, (set) => {
  // SSR-safe initialization
  if (typeof window === "undefined") {
    return;
  }

  const mediaQueryList = window.matchMedia(reducedMotionQuery);

  // Set initial value
  set(mediaQueryList.matches);

  // Listen for changes
  const updateMotionPreference = (event) => {
    set(event.matches);
  };

  mediaQueryList.addEventListener("change", updateMotionPreference);

  // Cleanup function
  return () => {
    mediaQueryList.removeEventListener("change", updateMotionPreference);
  };
});

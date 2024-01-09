// Svelte store to detect if client has reduced motion turned on (relevant for animations in radial visualization scrollytelling section)
// Copied from Geoff Rich: https://geoffrich.net/posts/svelte-prefers-reduced-motion-store/
// @ts-nocheck
import { readable } from "svelte/store";
import { browser } from "$app/environment";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const getInitialMotionPreference = () => {
  if (browser) return window.matchMedia(reducedMotionQuery).matches;
};

export const reducedMotion = readable(getInitialMotionPreference(), (set) => {
  const updateMotionPreference = (event) => {
    set(event.matches);
  };

  if (browser) {
    const mediaQueryList = window.matchMedia(reducedMotionQuery);
    mediaQueryList.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQueryList.removeEventListener("change", updateMotionPreference);
    };
  }
});

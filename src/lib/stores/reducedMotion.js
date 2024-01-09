// Svelte store to detect if client has reduced motion turned on (relevant for animations in radial visualization scrollytelling section)
// Copied from Geoff Rich: https://geoffrich.net/posts/svelte-prefers-reduced-motion-store/
// @ts-nocheck
import { readable } from "svelte/store";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const getInitialMotionPreference = () => {
  if (typeof window !== "undefined") return window.matchMedia(reducedMotionQuery).matches;
};

export const reducedMotion = readable(getInitialMotionPreference(), (set) => {
  const updateMotionPreference = (event) => {
    set(event.matches);
  };

  if (typeof window !== "undefined") {
    const mediaQueryList = window.matchMedia(reducedMotionQuery);
    mediaQueryList.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQueryList.removeEventListener("change", updateMotionPreference);
    };
  }
});

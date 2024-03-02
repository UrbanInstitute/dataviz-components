// Shamelessly stolen from https://github.com/reuters-graphics/graphics-components/blob/e81349ae7dcd6509c79dae42e6f287a29652c4ac/src/actions/resizeObserver/index.js#L8
// Which was, in turn, shamelessly stolen from https://github.com/sveltejs/svelte/issues/7583#issue-1260717165

/** @type {ResizeObserver} */
let observer;
/** @type {WeakMap<Element, (element: Element) => void>} */
let callbacks;

/**
 * @param {Element} element
 * @param {(element: Element) => any} onResize
 * @returns {{ destroy: () => void }}
 */
export default (element, onResize) => {
  if (!observer) {
    callbacks = new WeakMap();
    observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const onResize = callbacks.get(entry.target);
        if (onResize) onResize(entry.target);
      }
    });
  }

  callbacks.set(element, onResize);
  observer.observe(element);

  return {
    destroy: () => {
      callbacks.delete(element);
      observer.unobserve(element);
    }
  };
};

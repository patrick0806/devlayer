export function selectHtmlElements(
  el: string,
  all = false
): Element | Element[] | null {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
}

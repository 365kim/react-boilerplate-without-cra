export const isViewWiderThan = (width: string | number) =>
  window.matchMedia(`(min-width: ${width})`).matches;

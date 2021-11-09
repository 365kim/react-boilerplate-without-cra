export const debounce = (callback, ms) => {
  let timerId = null;

  return () => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      callback();
      timerId = null;
    }, ms);
  };
};

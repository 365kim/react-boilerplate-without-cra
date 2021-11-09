export const throttle = (callback, ms) => {
  let timerId;

  return () => {
    if (timerId) {
      return;
    }
    timerId = setTimeout(() => {
      callback();
      timerId = null;
    }, ms);
  };
};

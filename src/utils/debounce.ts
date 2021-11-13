export const debounce = (ms: number) => {
  let timerId: NodeJS.Timer | null = null;

  return (callback: () => void) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      callback();
      timerId = null;
    }, ms);
  };
};

export const getID = (() => {
  let id = 0;

  return () => `${new Date().getTime()}${id++}`;
})();

export const getNextKey = (() => {
  let tipIndex = 0;

  return (array: []) => {
    if (tipIndex === array.length) {
      tipIndex = 0;
    }
    return tipIndex++;
  };
})();

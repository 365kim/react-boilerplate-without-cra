export const convertPathExt = (path: string, from = 'png', to = 'webp') => {
  return path.slice(0, path.length - from.length) + to;
};

export const addPathSuffix = (path: string, suffix: string) => {
  const lastIndex = path.split('').lastIndexOf('.');
  return path.slice(0, lastIndex) + suffix + path.slice(lastIndex);
};

export const image2x = (path: string) => addPathSuffix(path, '@2x');
export const image3x = (path: string) => addPathSuffix(path, '@3x');

export const addThousandSeparator = (num: number | string) => {
  if (typeof num === 'number') {
    num = num.toString();
  }
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const storage = {
  local: {
    get: (key: string) => {
      try {
        const item: any = localStorage.getItem(key);

        return JSON.parse(item);
      } catch (error) {
        console.error(error);

        return undefined;
      }
    },
    set: (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value)),
    remove: (key: string) => localStorage.removeItem(key),
  },

  session: {
    get: (key: string) => {
      try {
        const item: any = sessionStorage.getItem(key);

        return JSON.parse(item);
      } catch (error) {
        console.error(error);

        return undefined;
      }
    },
    set: (key: string, value: any) => sessionStorage.setItem(key, JSON.stringify(value)),
    remove: (key: string) => sessionStorage.removeItem(key),
  },
};

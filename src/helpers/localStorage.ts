export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("lists");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (main: any) => {
  try {
    const serializedState = JSON.stringify(main);
    localStorage.setItem("lists", serializedState);
  } catch (err) {
    // TODO: add handler
  }
};

export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("formState", serializedState);
  } catch (e) {
    console.error("Could not save state to localStorage:", e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("formState");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state from localStorage:", e);
    return undefined;
  }
};

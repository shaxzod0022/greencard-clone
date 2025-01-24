import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./anketaData";
import languageReducer from "./lang";
import currentReducer from "./currentBtn";
import { saveToLocalStorage, loadFromLocalStorage } from "./localStorage";

const preloadedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    form: formReducer,
    language: languageReducer,
    currentBtn: currentReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveToLocalStorage({
    form: store.getState().form,
  });
});

export default store;

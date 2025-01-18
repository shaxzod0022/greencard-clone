import { createStore } from "redux";

const SET_LANGUAGE = "SET_LANGUAGE";

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

const initialState = {
  language: localStorage.getItem("language") || "ru",
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      localStorage.setItem("language", action.payload);
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(languageReducer);

export default store;

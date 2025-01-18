import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigate from "./Navigate";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/lang";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Navigate />
  </Provider>
);

reportWebVitals();

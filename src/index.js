import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigate from "./Navigate";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navigate />
  </React.StrictMode>
);

reportWebVitals();

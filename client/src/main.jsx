import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainComponent from "./components/MainComponent.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainComponent />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import Router from "../routes";

document.addEventListener("turbo:load", () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  );
});
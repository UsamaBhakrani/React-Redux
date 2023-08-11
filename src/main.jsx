import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bulma/css/bulma.css";
import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

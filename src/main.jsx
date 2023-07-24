import { Provider } from "react-redux";
import { store } from "./store/main";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bulma/css/bulma.css";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

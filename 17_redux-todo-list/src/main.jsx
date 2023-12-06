import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import TodoApp from "./TodoApp.jsx";
import store from "./redux/store.js";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> 
      <TodoApp />
    </Provider>
  </React.StrictMode>
);

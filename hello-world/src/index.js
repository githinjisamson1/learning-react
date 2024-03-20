import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./hooks/usersContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <UsersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsersProvider>
  </>
);

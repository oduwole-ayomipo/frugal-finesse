import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../src/context/AuthContext";
import { UserDataContextProvider } from "./context/UserDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <UserDataContextProvider>
          <App />
        </UserDataContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

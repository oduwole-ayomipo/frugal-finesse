import "./App.css";
import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";
import Layout from "./layout/Layout";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div data-testid="app-container">
      <Routes>
        <Route index element={<Landing />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

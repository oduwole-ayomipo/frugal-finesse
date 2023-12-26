import "./App.css";
import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Sign-Up/SignUp";
import Layout from "./pages/Dashboard-Layout/Layout";
import { AuthContext } from "./Context/AuthContext";

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

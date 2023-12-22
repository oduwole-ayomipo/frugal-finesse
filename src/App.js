import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Sign-Up/SignUp";
import SetupLayout from "./pages/Setup-Layout/SetupLayout";
import Layout from "./pages/Dashboard-Layout/Layout";

function App() {
  return (
    <div data-testid="app-container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="basic-setup" element={<SetupLayout />} />
        <Route path="dashboard" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;

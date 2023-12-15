import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Sign-Up/SignUp";
import SetupLayout from "./pages/Setup-Layout/SetupLayout";
import Dashboard from "./pages/Dashbord/Dashboard";

function App() {
  return (
    <div
      className="mx-auto max-w-7xl shadow-default"
      data-testid="app-container"
    >
      <Routes>
        <Route path="frugal-finesse" element={<Landing />} />
        <Route path="frugal-finesse/contact-us" element={<Contact />} />
        <Route path="frugal-finesse/login" element={<Login />} />
        <Route path="frugal-finesse/sign-up" element={<SignUp />} />
        <Route path="frugal-finesse/basic-setup" element={<SetupLayout />} />
        <Route path="frugal-finesse/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

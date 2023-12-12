import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Sign-Up/SignUp";

function App() {
  return (
    <div data-testid="app-container">
      <Routes>
        <Route path="frugal-finesse" element={<Landing />} />
        <Route path="frugal-finesse/login" element={<Login />} />
        <Route path="frugal-finesse/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

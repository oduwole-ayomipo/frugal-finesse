import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Sign-Up/SignUp";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="sign-in" element={<SignUp />} />
    </Routes>
  );
}

export default AppRoutes;

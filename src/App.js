import "./App.css";
import React, { Suspense, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Loader from "./common/Loader/Loader";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";
import PasswordReset from "./pages/password-reset/PasswordReset";
import Layout from "./layout/Layout";
import { AuthContext } from "./context/AuthContext";
import routes from "./routes/routes";
import ErrorPage from "./pages/error404.jsx/ErrorPage";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" replace />;
  };

  return (
    <div data-testid="app-container">
      <Routes>
        <Route index element={<Landing />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="password-reset" element={<PasswordReset />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

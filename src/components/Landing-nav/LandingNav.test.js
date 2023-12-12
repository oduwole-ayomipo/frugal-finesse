import LandingNav from "./LandingNav";
import { render, screen } from "@testing-library/react";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Sign-Up/SignUp";
import { MemoryRouter, Routes, Route } from "react-router-dom";

test("renders Login and Sign Up links in LandingNav", () => {
  render(
    <MemoryRouter initialEntries={["/frugal-finesse"]}>
      <Routes>
        <Route path="frugal-finesse/login" element={<Login />} />
        <Route path="frugal-finesse/sign-up" element={<SignUp />} />
        <Route path="frugal-finesse" element={<LandingNav />} />
      </Routes>
    </MemoryRouter>
  );

  // Check if the Login link is rendered
  const loginLink = screen.getByTestId("Login");
  expect(loginLink).toBeInTheDocument();
  expect(loginLink.getAttribute("href")).toBe("/frugal-finesse/login");

  // Check if the Sign Up link is rendered
  const signUpLink = screen.getByTestId("Sign Up");
  expect(signUpLink).toBeInTheDocument();
  expect(signUpLink.getAttribute("href")).toBe("/frugal-finesse/sign-up");
});

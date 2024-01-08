import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import Login from "./Login";
import { MemoryRouter, BrowserRouter } from "react-router-dom";

// test utils helper func
const renderWithRouter = (ui, { route = "/login" } = {}) => {
  window.history.pushState({}, "Login", route);

  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(),
}));

jest.mock("firebase/analytics", () => ({
  getAnalytics: jest.fn(),
}));

jest.mock("firebase/auth", () => ({
  getAuth: jest.fn(),
}));

jest.mock("firebase/firestore", () => ({
  getFirestore: jest.fn(),
}));

// Renders login form with email, password, and 3 buttons
test("Page should render login with a frugal finesse text", () => {
  renderWithRouter(<Login />);
  const title = screen.getByText(/Login to Frugal Finesse/i);
  expect(title).toBeInTheDocument();
});

test("Email Form field should have email adress label", () => {
  renderWithRouter(<Login />);
  const emailLabel = screen.getByLabelText(/Email Address/i);
  expect(emailLabel).toBeInTheDocument();
});

test("Password Form field should have a password text as label", () => {
  renderWithRouter(<Login />);
  const passwordLabel = screen.getByLabelText(/password/i);
  expect(passwordLabel).toBeInTheDocument();
});

test("Email Form field should have a placeholder", () => {
  renderWithRouter(<Login />);
  const emailPlaceholder = screen.getByPlaceholderText(/enter your email/i);
  expect(emailPlaceholder).toBeInTheDocument();
});

test("Password Form field should have a placeholder", () => {
  renderWithRouter(<Login />);
  const passwordPlaceholder =
    screen.getByPlaceholderText(/enter your password/i);
  expect(passwordPlaceholder).toBeInTheDocument();
});

test("Renders three buttons with correct props", () => {
  renderWithRouter(<Login />);
  // Check Outline Button props
  const filledBtn = screen.getByTestId("filled-btn");

  expect(filledBtn).toBeInTheDocument();
  expect(filledBtn).toHaveAttribute("type", "submit");
  expect(filledBtn).not.toBeDisabled();
  expect(filledBtn).toHaveTextContent("Login");

  // Check Outline Button props
  const outlineBtn = screen.getByTestId("outline-btn");

  expect(outlineBtn).toBeInTheDocument();
  expect(outlineBtn).not.toBeDisabled();
  expect(outlineBtn).toHaveTextContent("Login with Google");
  /*  expect(outlineBtn).toHaveAttribute("type", "submit"); => valid when login in with google feature is implemented */

  //Check Text Button Props
  const textBtn = screen.getByTestId("text-btn");

  expect(textBtn).toBeInTheDocument();
  expect(textBtn).toHaveAttribute("type", "button");
  expect(textBtn).not.toBeDisabled();
  expect(textBtn).toHaveTextContent("Don't have an account? Sign Up");
});

test("Render sign up page on click", async () => {
  renderWithRouter(<Login />);

  const link = screen.getByTestId("sign-up");
  expect(link).toHaveAttribute("href", "/sign-up");

  fireEvent.click(link);

  await waitFor(() => {
    expect(screen.findByText("Sign In to Frugal Finesse"));
  });
});

// Tests for input validation by providing various invalid and valid inputs

import { render, screen } from "@testing-library/react";
import Login from "./Login";
import FilledBtn from "../../components/button/FilledBtn";

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

jest.mock("react-router-dom", () => ({
  Link: jest.fn(),
  useNavigate: jest.fn(),
}));

// Test for UI
test("Page should render login with a frugal finesse text", () => {
  render(<Login />);
  const title = screen.getByText(/Login to Frugal Finesse/i);
  expect(title).toBeInTheDocument();
});

test("Email Form field should have email adress label", () => {
  render(<Login />);
  const emailLabel = screen.getByLabelText(/Email Address/i);
  expect(emailLabel).toBeInTheDocument();
});

test("Password Form field should have a password text as label", () => {
  render(<Login />);
  const passwordLabel = screen.getByLabelText(/password/i);
  expect(passwordLabel).toBeInTheDocument();
});

test("Email Form field should have a placeholder", () => {
  render(<Login />);
  const emailPlaceholder = screen.getByPlaceholderText(/enter your email/i);
  expect(emailPlaceholder).toBeInTheDocument();
});

test("Password Form field should have a placeholder", () => {
  render(<Login />);
  const passwordPlaceholder =
    screen.getByPlaceholderText(/enter your password/i);
  expect(passwordPlaceholder).toBeInTheDocument();
});

test("Renders three buttons with correct props", () => {
  render(<Login />);

  // Check Outline Button props
  const filledBtn = screen.getByTestId("filled-btn");

  expect(filledBtn).toBeInTheDocument();
  expect(filledBtn).toHaveAttribute("type", "submit");
  expect(filledBtn).not.toBeDisabled();
  expect(filledBtn).toHaveTextContent("Login");

  // Check Outline Button props
  const outlineBtn = screen.getByTestId("outline-btn");

  expect(outlineBtn).toBeInTheDocument();
  /*  expect(outlineBtn).toHaveAttribute("type", "submit"); => valid when login in with google feature is implemented */
  expect(outlineBtn).not.toBeDisabled();
  expect(outlineBtn).toHaveTextContent("Login with Google");

  // Check Text Button links to sign up
});

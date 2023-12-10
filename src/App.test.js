import render from "@testing-library/react";
import App from "./App";
import LandingPage from "./pages/Landing/Landing";

test("Landing Page", () => {
  render(<App />);
  const AppElement = render(<LandingPage />);
});

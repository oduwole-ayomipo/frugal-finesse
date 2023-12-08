import { render, screen } from "@testing-library/react";
import App from "./App";
import LandingPage from "./pages/Landing-Page/LandingPage";

test("Landing Page", () => {
  render(<App />);
  const AppElement = render(<LandingPage />);
});

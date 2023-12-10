import React from "react";
import LandingNav from "../../components/Landing-nav/LandingNav";
import Header from "../../components/Header/Header";

function Landing() {
  return (
    <div
      className="flex flex-col min-h-[100vh] sm:px-0 custom:px-10"
      data-testid="landing-page"
    >
      <LandingNav />
      <Header />
    </div>
  );
}

export default Landing;

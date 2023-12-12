import React from "react";
import LandingNav from "../../components/Landing-nav/LandingNav";
import Header from "../../components/Header/Header";

function Landing() {
  return (
    <div
      className="flex flex-col text-purple-dark min-h-[100vh]"
      data-testid="landing-page"
    >
      <LandingNav />
      <Header />
    </div>
  );
}

export default Landing;

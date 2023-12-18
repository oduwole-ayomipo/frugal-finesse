import React from "react";
import LandingNav from "../../components/Landing-nav/LandingNav";
import Header from "../../components/Landing-Header/Header";

function Landing() {
  return (
    <>
      <div
        className="flex flex-col text-purple-dark min-h-[100vh] mx-auto max-w-7xl shadow-default"
        data-testid="landing-page"
      >
        <LandingNav />
        <Header />
      </div>
    </>
  );
}

export default Landing;

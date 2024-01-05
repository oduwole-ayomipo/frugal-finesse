import React from "react";
import Hero from "../../components/landing-component/Hero";
import Navigation from "../../components/landing-component/Navigation";

function Landing() {
  return (
    <>
      <div
        className="flex flex-col text-purple-dark min-h-[100vh] mx-auto max-w-7xl shadow-default"
        data-testid="landing-page"
      >
        <Navigation />
        <Hero />
      </div>
    </>
  );
}

export default Landing;

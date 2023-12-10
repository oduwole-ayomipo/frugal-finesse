import React from "react";
import LandingPageNav from "../../components/Landing-Page-Nav/LandingPageNav";
import Header from "../../components/Header/Header";

function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100vh] sm:px-0 custom:px-10">
      <LandingPageNav />
      <Header />
    </div>
  );
}

export default LandingPage;

//libraries
import React from "react";

//components
import Footer from "./section/footer/Footer";
import HeroBox from "./section/heroBox/HeroBox";
import LandingCenter from "./section/main/LandingCenter";

function Landing() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <HeroBox />
      <LandingCenter />
      <Footer />
    </div>
  );
}

export default Landing;

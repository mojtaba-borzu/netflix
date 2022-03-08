//liberares
import React from "react";

//components
import Header from "./section/Header";
import MainCover from "./section/MainCover";

function HeroBox() {
  return (
    <div className="relative w-full h-full flex flex-col items-center bg-hero ">
      <div className="absolute w-full h-full bg-black opacity-60"></div>
      <div className="w-full h-full flex flex-col items-center z-10">
        <Header />
        <MainCover />
      </div>
    </div>
  );
}

export default HeroBox;

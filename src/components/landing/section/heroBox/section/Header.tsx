//libraries
import React from "react";

//icons
import Logo_icon from "../../../../common/icons/Logo_icon";

function Header() {
  return (
    <div className="w-full h-[100px] flex flex-row justify-between items-center md:px-[56px] px-[10px]">
      <div className="2xl:w-[167px] sm:w-[134px] w-[96px] 2xl:h-[45px] sm:h-[34px] h-[26px]">
        <Logo_icon />
      </div>
      <div className="w-[84px] h-[34px] rounded-[3px] bg-[#e50914] text-white text-[18px] flex items-center justify-center">
        Sign In
      </div>
    </div>
  );
}

export default Header;

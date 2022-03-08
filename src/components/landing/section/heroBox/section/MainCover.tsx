//libraires
import React, { useState } from "react";

//validators
import {
  validateEmail,
  validatePassword,
} from "../../../../common/validator/inputValidators";

//icons
import Chevron_right_icon from "../../../../common/icons/Chevron_right_icon";

function MainCover() {
  const [email, setEmail] = useState("");
  const [emailErrorStatus, setEmailEroorStatus] = useState(true);

  const handleEmailOnchange = (e: any) => {
    setEmail(e.currentTarget.value);
    let validationEmail = e.currentTarget.value
      ? validateEmail(e.currentTarget.value)
      : true;
    setEmailEroorStatus(validationEmail);
  };
  return (
    <div className="pb-[200px] sm:mt-[149px] mt-[80px] w-full flex flex-col items-center">
      <div className="2xl:text-[64px] md:text-[50px] sm:text-[36px] text-[24px] text-white flex flex-col items-center font-semibold leading-tight">
        <span>Unlimited films, TV </span> <span>programmes and more.</span>
      </div>
      <div className="mt-[16px] w-full md:text-[26px] sm:text-[18px] text-[16px] text-white flex justify-center">
        Watch anywhere. Cancel at any time.
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="mt-[24px] lg:w-full w-10/12 lg:text-left text-center text-white flex justify-center sm:text-[18px] text-[16px]">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="mt-[10px] 2xl:w-[746px] lg:w-[646px] w-10/12 lg:h-[70px] flex lg:flex-row flex-col lg:gap-0 gap-4 items-center rounded-[3px]">
          <input
            value={email}
            onChange={handleEmailOnchange}
            type="text"
            className={`2xl:w-[500px] sm:w-[450px] w-10/12 lg:h-full h-[50px] px-[10px] outline-none rounded-tl-[3px] ${
              emailErrorStatus ? "" : "border-b-[3px] border-[#ffa00a]"
            }`}
            placeholder="Email address"
          />
          <div className="2xl:w-[246px] lg:w-[196px] lg:px-0 px-[10px] lg:py-0 py-[10px] h-full text-white lg:text-[30px] text-[18px] flex flex-row justify-center items-center gap- bg-[#e50914]  rounded-[3px] lg:rounded-tr-[3px]">
            <span>Get Started</span>
            <Chevron_right_icon />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div
            className={`mt-[8px] 2xl:w-[746px] lg:w-[646px] w-10/12 text-[#ffa00a] text-[14px] font-medium px-[4px] ${
              emailErrorStatus ? "invisible" : "visible"
            }`}
          >
            Email is required.
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCover;

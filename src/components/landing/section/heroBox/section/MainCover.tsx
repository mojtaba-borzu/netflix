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
    <div className="pb-[200px] mt-[149px] w-full flex flex-col items-center">
      <div className="text-[64px] text-white flex flex-col items-center font-semibold leading-tight">
        <span>Unlimited films, TV </span> <span>programmes and more.</span>
      </div>
      <div className="mt-[16px] w-full text-[26px] text-white flex justify-center">
        Watch anywhere. Cancel at any time.
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="mt-[24px] w-full text-white flex justify-center text-[18px]">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="mt-[10px] w-[746px] h-[70px] flex flex-row rounded-[3px]">
          <input
            value={email}
            onChange={handleEmailOnchange}
            type="text"
            className={`w-[500px] h-full px-[10px] outline-none rounded-tl-[3px] ${
              emailErrorStatus ? "" : "border-b-[3px] border-[#ffa00a]"
            }`}
            placeholder="Email address"
          />
          <div className="w-[246px] h-full text-white text-[30px] flex flex-row justify-center items-center gap-4 bg-[#e50914] rounded-tr-[3px]">
            <span>Get Started</span>
            <Chevron_right_icon />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div
            className={`mt-[8px] w-[746px] text-[#ffa00a] text-[14px] font-medium px-[4px] ${
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

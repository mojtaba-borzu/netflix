//libraries
import React, { useState } from "react";

//validators
import {
  validateEmail,
  validatePassword,
} from "../../../common/validator/inputValidators";

//icons
import Chevron_right_icon from "../../../common/icons/Chevron_right_icon";

const questions = [
  {
    id: 1,
    lable: "What is Netflix?",
    describtion:
      "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!",
  },
  {
    id: 2,
    lable: "How much does Netflix cost?",
    describtion:
      "Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from £5.99 to £13.99 a month. No extra costs, no contracts.",
  },
  {
    id: 3,
    lable: "Where can I watch?  ",
    describtion:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    id: 4,
    lable: "How do I cancel?  ",
    describtion:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.",
  },
  {
    id: 5,
    lable: "What can I watch on Netflix?",
    describtion:
      "Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.",
  },
  {
    id: 6,
    lable: "Is Netflix good for children?",
    describtion:
      "The Netflix Children's experience is included in your membership to give parents control while children enjoy family-friendly TV programmes and films in their own space. Children's profiles come with PIN-protected parental controls that let you restrict the maturity rating of content children can watch and block specific titles you don’t want children to see.",
  },
];

function LandingCenter() {
  //instance
  const [email, setEmail] = useState("");
  const [showDescribtion, setShowDescribtion] = useState("");
  const [emailErrorStatus, setEmailEroorStatus] = useState(true);

  const handleEmailOnchange = (e: any) => {
    setEmail(e.currentTarget.value);
    let validationEmail = e.currentTarget.value
      ? validateEmail(e.currentTarget.value)
      : true;
    setEmailEroorStatus(validationEmail);
  };
  return (
    <div className="w-full h-full flex flex-col items-center  bg-black">
      <div className="w-full h-[8px] bg-[#444444]"></div>
      <div className="w-full h-full px-[45px] py-[70px] bg-black ">
        <div className="w-full h-[326px] px-[204px]   flex flex-row text-white">
          <div className="w-1/2 flex flex-col items-end justify-center ">
            <div className="text-[50px] font-semibold w-10/12">
              Enjoy on your TV.
            </div>
            <div className="text-[26px] w-10/12 ">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </div>
          </div>
          <div className="relative w-1/2 flex items-center justify-center">
            <div className="absolute w-full  flex justify-center ">
              <video
                autoPlay
                loop
                muted
                className="-mt-[8px] w-[400px]"
                src="/videos/video-tv-0819.m4v"
              />
            </div>
            <img className="w-[530px] z-10" src="/images/tv.png" />
          </div>
        </div>
      </div>
      <div className="w-full h-[8px] bg-[#444444]"></div>
      <div className="w-full h-full px-[45px] py-[70px] bg-black ">
        <div className="w-full h-[326px] px-[204px]   flex flex-row-reverse text-white">
          <div className="w-1/2 flex flex-col justify-center items-start">
            <div className="text-[50px] font-semibold w-10/12 leading-tight">
              Download your programmes to watch offline.
            </div>
            <div className="text-[26px] w-10/12">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </div>
          </div>
          <div className="relative w-1/2 flex items-center ">
            <div className="absolute w-[530px]  flex justify-center ">
              <div className="mt-[250px] w-[320px] h-[100px] rounded-xl z-10 border-2 bg-black flex flex-row items-center px-[10px] gap-[10px] ">
                <img src="/images/boxshot.png" className="w-[57px] h-[80px]" />
                <div className=" flex flex-col justify-center">
                  <div className="text-[18px] text-white font-semibold">
                    Stranger Things
                  </div>
                  <div className="text-blue-700">Downloading...</div>
                </div>
                <div className="ml-[20px] h-full  flex justify-center items-center">
                  <img
                    className="w-[60px] h-[60px]"
                    src="/images/download-icon.gif"
                  />
                </div>
              </div>
            </div>
            <img className="w-[530px] " src="/images/mobile-0819.jpg" />
          </div>
        </div>
      </div>
      <div className="w-full h-[8px] bg-[#444444]"></div>
      <div className="w-full h-full px-[45px] py-[70px] bg-black ">
        <div className="w-full h-[326px] px-[204px]   flex flex-row text-white">
          <div className="w-1/2 flex flex-col justify-center items-end">
            <div className="text-[50px] font-semibold w-10/12">
              Watch everywhere.
            </div>
            <div className="text-[26px] w-10/12">
              Stream unlimited films and TV programmes on your phone, tablet,
              laptop and TV without paying more.
            </div>
          </div>
          <div className="relative w-1/2 flex items-center justify-center">
            <div className="absolute w-full  flex justify-center ">
              <video
                autoPlay
                loop
                muted
                className="-mt-[120px] w-[340px]"
                src="/videos/video-devices.m4v"
              />
            </div>
            <img className="w-[530px] z-10" src="/images/device-pile.png" />
          </div>
        </div>
      </div>
      <div className="w-full h-[8px] bg-[#444444]"></div>
      <div className="w-full h-full px-[45px] py-[70px] bg-black ">
        <div className="w-full h-[326px] px-[204px]   flex flex-row-reverse text-white">
          <div className="w-1/2 flex flex-col justify-center items-start">
            <div className="text-[50px] font-semibold w-10/12 leading-tight">
              Create profiles for children.
            </div>
            <div className="text-[26px] w-10/12">
              Send children on adventures with their favourite characters in a
              space made just for them – free with your membership.
            </div>
          </div>
          <div className="relative w-1/2 flex justify-end items-center ">
            <img className="w-[530px] z-10" src="/images/child.png" />
          </div>
        </div>
      </div>
      <div className="w-full h-[8px] bg-[#444444]"></div>
      <div className="w-full  flex flex-col justify-center items-center">
        <div className="mt-[60px] text-[50px] text-white font-semibold">
          Frequently Asked Questions
        </div>
        <div className="mt-[50px] flex flex-col items-center gap-2">
          {questions.map((item: any) => (
            <div
              key={item.id}
              onClick={() => {
                showDescribtion
                  ? setShowDescribtion("")
                  : setShowDescribtion(item.id);
              }}
              className="w-full flex flex-col items-center gap-2"
            >
              <div className="w-[820px] h-[72px] bg-[#303030] flex flex-row justify-between items-center px-[30px]">
                <span className="text-white text-[26px]">{item.lable}</span>
                <div
                  className={`w-[26px] h-[26px] duration-300 ${
                    showDescribtion && showDescribtion == item.id
                      ? "rotate-0"
                      : "rotate-45"
                  }`}
                >
                  <svg
                    width={26}
                    height={26}
                    viewBox="0 0 26 26"
                    focusable="true"
                    fill="white"
                  >
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`w-[820px] bg-[#303030] duration-300 text-white text-[26px] overflow-hidden px-[30px] ${
                  showDescribtion && showDescribtion == item.id
                    ? "max-h-[800px]"
                    : "max-h-0"
                }`}
              >
                <div className="py-[30px]">{item.describtion}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-[50px] mt-[50px] w-full flex flex-col items-center">
          <div className="mt-[24px] w-full text-white flex justify-center text-[18px]">
            Ready to watch? Enter your email to create or restart your
            membership.
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
      <div className="w-full h-[8px] bg-[#444444]"></div>
    </div>
  );
}

export default LandingCenter;

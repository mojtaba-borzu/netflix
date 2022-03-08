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
      <div className="w-full h-full  2xl:px-[45px]  px-0 py-[70px] bg-black ">
        <div className="w-full lg:h-[326px] h-full    2xl:px-[204px]    px-0  flex lg:flex-row flex-col items-center text-white">
          <div className="lg:w-1/2 w-full flex flex-col lg:items-end items-center justify-center ">
            <div className="lg:text-[50px] sm:text-[40px] text-[20px] font-semibold w-10/12 flex lg:justify-start justify-center">
              Enjoy on your TV.
            </div>
            <div className="sm:text-[26px] text-[16px] w-10/12 flex lg:justify-start justify-center lg:text-left text-center">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </div>
          </div>
          <div className="relative lg:w-1/2 w-full flex items-center justify-center">
            <div className="absolute w-full  flex justify-center ">
              <video
                autoPlay
                loop
                muted
                className="-mt-[8px] lg:w-[400px] w-8/12 px-[5px]"
                src="/videos/video-tv-0819.m4v"
              />
            </div>
            <img
              alt="center"
              className=" lg:w-[530px] w-8/12 z-10"
              src="/images/tv.png"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[8px] bg-[#444444]"></div>
      <div className="w-full h-full  2xl:px-[45px]  py-[70px] bg-black ">
        <div className="w-full lg:h-[326px] h-full  2xl:px-[204px]  px-0   flex lg:flex-row-reverse flex-col items-center text-white">
          <div className="lg:w-1/2 w-full flex flex-col justify-center   lg:items-start items-center ">
            <div className="lg:text-[50px] sm:text-[40px] text-[20px] font-semibold w-10/12 leading-tight flex lg:justify-start justify-center lg:text-left text-center">
              Download your programmes to watch offline.
            </div>
            <div className="sm:text-[26px] text-[16px] w-10/12 flex lg:justify-start justify-center lg:text-left text-center">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </div>
          </div>
          <div className="relative lg:w-1/2 flex lg:justify-center justify-center items-center w-full ">
            <div className="absolute lg:w-[530px] w-10/12 lg:h-auto h-[500px]  flex justify-center ">
              <div className="lg:mt-[250px] mt-[350px] sm:w-[320px] w-[250px] sm:h-[100px] h-[70px] rounded-xl z-10 border-2 bg-black flex flex-row items-center px-[10px] gap-[10px] ">
                <img
                  alt="center"
                  src="/images/boxshot.png"
                  className="sm:w-[57px] w-[37px] sm:h-[80px] h-[60px]"
                />
                <div className=" flex flex-col justify-center">
                  <div className="sm:text-[18px] text-[14px] text-white font-semibold">
                    Stranger Things
                  </div>
                  <div className="text-blue-500 sm:text-[16px] text-[14px]">
                    Downloading...
                  </div>
                </div>
                <div className="ml-[20px] h-full  flex justify-center items-center">
                  <img
                    alt="center"
                    className="w-[60px] h-[60px]"
                    src="/images/download-icon.gif"
                  />
                </div>
              </div>
            </div>
            <img
              alt="center"
              className="lg:w-[530px] w-10/12"
              src="/images/mobile-0819.jpg"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[8px] bg-[#444444]"></div>
      <div className="w-full h-full  2xl:px-[45px]  py-[70px] bg-black ">
        <div className="w-full lg:h-[326px] h-full  2xl:px-[204px]  px-0   flex lg:flex-row flex-col items-center text-white">
          <div className="lg:w-1/2 w-full flex flex-col justify-center lg:items-end items-center">
            <div className="lg:text-[50px] sm:text-[40px] text-[20px] font-semibold w-10/12 flex lg:justify-start justify-center lg:text-left text-center">
              Watch everywhere.
            </div>
            <div className="sm:text-[26px] text-[16px] w-10/12 flex lg:justify-start justify-center lg:text-left text-center">
              Stream unlimited films and TV programmes on your phone, tablet,
              laptop and TV without paying more.
            </div>
          </div>
          <div className="relative lg:w-1/2 w-full flex items-center justify-center">
            <div className="absolute w-full  flex justify-center ">
              <video
                autoPlay
                loop
                muted
                className="sm:-mt-[120px] -mt-[100px] sm:w-[330px] w-8/12 px-[10px] py-[5px]"
                src="/videos/video-devices.m4v"
              />
            </div>
            <img
              alt="center"
              className="sm:w-[530px] w-full z-10"
              src="/images/device-pile.png"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[8px] bg-[#444444]"></div>
      <div className="w-full h-full  2xl:px-[45px]  py-[70px] bg-black ">
        <div className="w-full lg:h-[326px] h-full  2xl:px-[204px]  px-0   flex lg:flex-row-reverse flex-col items-center text-white">
          <div className="lg:w-1/2 w-full flex flex-col justify-center lg:items-start items-center">
            <div className="lg:text-[50px] sm:text-[40px] text-[20px] font-semibold w-10/12 leading-tight flex lg:justify-start justify-center lg:text-left text-center">
              Create profiles for children.
            </div>
            <div className="sm:text-[26px] text-[16px] w-10/12 flex lg:justify-start justify-center lg:text-left text-center">
              Send children on adventures with their favourite characters in a
              space made just for them – free with your membership.
            </div>
          </div>
          <div className="relative lg:w-1/2 w-full flex lg:justify-end justify-center items-center ">
            <img
              alt="center"
              className="w-[530px] z-10"
              src="/images/child.png"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[8px] bg-[#444444]"></div>
      <div className="w-full  flex flex-col justify-center items-center">
        <div className="mt-[60px] md:text-[50px] sm:text-[32px] text-[20px] text-white font-semibold md:text-left text-center">
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
              <div className="lg:w-[820px] w-10/12 h-[72px] bg-[#303030] flex flex-row justify-between items-center px-[30px]">
                <span className="text-white md:text-[26px] sm:text-[18px] text-[16px]">
                  {item.lable}
                </span>
                <div
                  className={`md:w-[26px] w-[18px] md:h-[26px] h-[18px] duration-300 ${
                    showDescribtion && showDescribtion == item.id
                      ? "rotate-0"
                      : "rotate-45"
                  }`}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 26 26"
                    focusable="true"
                    fill="white"
                  >
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`lg:w-[820px] w-10/12 bg-[#303030] duration-300 text-white md:text-[26px] sm:text-[18px] text-[16px] overflow-hidden px-[30px] ${
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

        <div className="w-full flex flex-col items-center">
          <div className="mt-[24px] lg:w-full w-10/12 lg:text-left text-center text-white flex justify-center sm:text-[18px] text-[14px]">
            Ready to watch? Enter your email to create or restart your
            membership.
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
      <div className="w-full h-[8px] bg-[#444444]"></div>
    </div>
  );
}

export default LandingCenter;

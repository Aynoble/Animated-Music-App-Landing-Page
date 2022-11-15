import React from "react";
import CenterMenu from "./CenterMenu";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";

function Footer() {
  const socialStyle = "rounded-full border-2 border-white p-2 mr-[5rem]";
  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      {/* social icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={socialStyle}>
          <AiOutlineFacebook />
        </div>
        <div className={socialStyle}>
          <SlSocialTwitter />
        </div>
        <div className={socialStyle}>
          <SlSocialYoutube />
        </div>
        <div className={socialStyle}>
          <AiOutlineLinkedin />
        </div>
      </div>

      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
    </div>
  );
}

export default Footer;

import React from "react";
import GradientText from "./GradientText";
import underline from "@public/underline.svg";
import Image from "next/image";
import ps5 from "@public/ps5.svg";
import { FaArrowRight } from "react-icons/fa6";
import AnimatedButton from "./AnimatedButton";

import controllerguy from "@public/front-view-man-with-controller 1.svg";
function GamingSection() {
  return (
    <div
      id="about"
      className="lg:mt-[70px] px-6 mt-6 flex flex-col lg:flex-row justify-between gap-3 min-h-[85vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/section2bg.svg')" }}
    >
      <div className="lg:pl-[120px]  ">
        <GradientText className="text-[32px] mt-10 md:text-[52px] font-semibold">
          Gaming
        </GradientText>
        <Image src={underline} alt="" className="w-[130px] md:w-[200px]" />
        <p className=" text-[18px] text-balance  text-black/85 mt-5 max-w-[500px] ">
          "Immerse yourself in worlds beyond imagination, where every moment
          brings new adventures and unforgettable experiences"
        </p>

        <AnimatedButton
          baseColor="bg-[#fafafa]"
          hoverColor="bg-text_blue"
          textColor="text-text_blue"
          hoverTextColor="text-white"
          activeColor="opacity-35"
          className="border-2 border-text_blue mt-5 rounded-lg   px-6        py-2 "
        >
          <p className="group-hover:text-white">Get Started</p>
          <FaArrowRight className="group-hover:text-white" />
        </AnimatedButton>
      </div>
      <div className="">
        <Image src={controllerguy} alt="" width={500} />
      </div>
    </div>
  );
}

export default GamingSection;

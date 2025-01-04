import React from "react";
import GradientText from "./GradientText";
import InfiniteScroll from "./InfiniteScroll";
import underline from "@public/underline.svg";
import vr_right from "@public/vr-glasses-right.svg";
import vr_left from "@public/vr-glasses-left.svg";
import xboxcontroller from "@public/xbox-controller.svg";
import humanvr from "@public/human-vr.svg";
import gamingblur from "@public/gaming-blur.svg";
import left_xbox from "@public/left-xbox.svg";
import right_xbox from "@public/right-xbox.svg";
import Image from "next/image";
import { FaPlaystation, FaSteam, FaUnity, FaXbox } from "react-icons/fa6";
import ParticleEffect from "./Particles";

function Sponsors() {
  return (
    <div
      id="sponsors"
      className="py-[70px] bg-gradient-to-b from-[#f5f5f5] to-bg_blue relative"
      style={{ marginBottom: 0 }} // Ensure no margin-bottom on the section
    >
      <GradientText className="sponsor__heading text-[32px] md:text-[52px] mb-[60px] text-center font-semibold opacity">
        Sponsors
      </GradientText>

      <Image
        src={vr_right}
        alt=""
        className="hidden md:block w-[150px] absolute right-0 top-3"
      />

      <Image
        src={vr_left}
        alt=""
        className="hidden md:block w-[200px] absolute left-0 top-96"
      />

      <InfiniteScroll />
      <div className="text-white mt-[70px] flex flex-col items-center">
        <div className="flex gap-2">
          <p className="text-[32px] md:text-[52px] font-semibold">
            The future of{" "}
          </p>
          <div>
            <GradientText className="text-[32px] md:text-[52px] font-semibold">
              Gaming
            </GradientText>
            <Image
              src={underline}
              alt=""
              className="w-[140px] md:w-[200px] block"
            />
          </div>
        </div>
        <p className="text-[32px] md:text-[52px] font-semibold">is Here!!! </p>
      </div>

      <div className="px-6 md:px-24">
        <div className="bg-[#F5F5F5] bg-opacity-[13.3] glossy-box p-6 flex items-center justify-center w-full min-h-[400px] relative">
          <Image
            src={gamingblur}
            alt=""
            className="absolute w-[260px] md:w-[550px] -z-10 md:-right-8 md:-top-6 md:bottom-auto"
          />
          <Image
            src={humanvr}
            alt=""
            className="absolute right-4 w-[225px] md:w-[300px] bottom-0 md:right-auto md:left-24 block"
          />
          <div className="hidden md:block relative">
            <div
              className="grid grid-cols-3 gap-7 justify-center items-center animate-rotate"
              style={{ animationDuration: "20s" }}
            >
              <div></div>
              <div className="icon text-2xl text-white animate-sequential-pulse text-glow">
                <FaXbox />
              </div>
              <div></div>
              <div className="icon text-2xl text-white animate-sequential-pulse text-glow delay-1">
                <FaPlaystation />
              </div>
              <div></div>
              <div className="icon text-2xl text-white animate-sequential-pulse text-glow delay-2">
                <FaUnity />
              </div>
              <div></div>
              <div className="icon text-2xl text-white animate-sequential-pulse text-glow delay-3">
                <FaSteam />
              </div>
            </div>
          </div>

          <Image
            src={left_xbox}
            alt=""
            className="absolute top-20 z-20 left-6 md:top-32 md:left-auto md:right-44 w-[175px] md:w-[250px] block"
          />
          <Image
            src={right_xbox}
            alt=""
            className="absolute top-10 left-24 md:left-auto md:right-24 w-[125px] md:w-[200px] block"
          />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;

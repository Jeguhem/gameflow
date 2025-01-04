"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import GradientText from "@components/GradientText";
import showcase from "@public/Ellipse 3.svg";
import controller from "@public/controller.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function Hero() {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(useGSAP);
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    tl.fromTo(
      ".hero__heading",
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 }
    );
    tl.fromTo(
      ".hero__body",
      { y: 40 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.7"
    );
    tl.fromTo(
      ".hero__controller",
      { y: -30 },
      { y: 30, duration: 4, repeat: -1, yoyo: true } // Infinite bounce
    );
    tl.to(".hero__controller", { opacity: 1 }, "-=4");
    tl.to(".hero__showcase", { opacity: 1 }, "-=0.5");
  }, []);

  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center h-[80vh] my-[30px]"
      ref={container}
    >
      <div className="flex flex-col items-center">
        <GradientText className="hero__heading text-[48px] md:text-[84px] text-center font-semibold  opacity-0">
          Discover Your sign
        </GradientText>
        <GradientText className="hero__body text-[14px] md:text-[24px] text-center font-medium opacity-0">
          Take a controller and take control of your life{" "}
        </GradientText>
      </div>
      <div className=" md:mt-[8] mt-[80px] relative ">
        <Image
          src={controller}
          alt=""
          // width={310}
          className="hero__controller absolute w-[230px] md:w-[310px] left-[80px] top-[30px] md:left-[163px] z-10 opacity-0"
        />
        <Image
          src={showcase}
          alt=""
          // width={635}
          className="hero__showcase mt-[200px] w-[450px] md:w-[635px] opacity-0  "
        />
      </div>
    </div>
  );
}

export default Hero;

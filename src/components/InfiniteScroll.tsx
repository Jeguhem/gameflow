"use client";
import React, { useEffect, useRef } from "react";
import xbox from "@public/xbox.svg";
import xfinity from "@public/xfinity.svg";
import easports from "@public/easports.svg";
import pitch from "@public/pitch_logo.svg.svg";
import callofDuty from "@public/call_of_duty_logo.svg";
import gamestop from "@public/gamestop_logo.svg";
import Image from "next/image";
import { gsap } from "gsap";

function InfiniteScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = scrollRef.current;

    if (!element) return;

    const items = Array.from(element.children) as HTMLElement[];
    const totalWidth = items.reduce((acc, child) => acc + child.offsetWidth, 0);

    // Duplicate items for seamless looping
    items.forEach((child) => {
      const clone = child.cloneNode(true) as HTMLElement;
      element.appendChild(clone);
    });

    // GSAP animation
    gsap.to(element, {
      x: -totalWidth,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="h-28 w-full px-9 flex gap-[50px] lg:gap-[100px] items-center overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-[40px] lg:gap-[90px] items-center"
      >
        <Image src={xbox} alt="Xbox" className="h-[25px]" />
        <Image src={xfinity} alt="Xfinity" className="h-[25px]" />
        <Image src={easports} alt="EA Sports" className="h-[25px]" />
        <Image src={pitch} alt="Pitch" className="h-[25px]" />
        <Image src={callofDuty} alt="Call of Duty" className="h-[25px]" />
        <Image src={gamestop} alt="GameStop" className="h-[25px]" />
      </div>
    </div>
  );
}

export default InfiniteScroll;

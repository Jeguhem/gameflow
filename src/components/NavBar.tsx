"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import clsx from "clsx"; // Import clsx
import Navlinks from "./Navlinks";
import logo from "@public/logo.svg";
import AnimatedButton from "./AnimatedButton";

function NavBar() {
  const [isSticky, setIsSticky] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true); // Navbar becomes sticky when scrolling past it
      } else {
        setIsSticky(false); // Reverts back when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        "flex justify-between items-center p-4 transition-all duration-300 ease-in-out z-50",
        {
          // If isSticky is true, apply these styles
          "fixed top-0 left-0 w-full shadow-lg bg-white z-10": isSticky,
          // If isSticky is false, apply these styles (default navbar state)
          relative: !isSticky,
        }
      )}
    >
      <Image src={logo} alt="Logo" width={32} height={32} />
      <Navlinks />
      <AnimatedButton
        baseColor="bg-text_blue"
        hoverColor="bg-black/65"
        textColor="text-white"
        hoverTextColor="text-white"
        activeColor="opacity-35"
        className="rounded-lg           px-6 
          py-2 "
      >
        Register
      </AnimatedButton>
    </div>
  );
}

export default NavBar;

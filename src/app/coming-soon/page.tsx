import NavBar from "@/components/NavBar";
import React from "react";

export default function ComingSoon() {
  return (
    <div className="h-screen w-screen ">
      <NavBar />
      <div className="flex bg-text_blue text-white h-full  items-center justify-center">
        <p className="text-3xl font-semibold ">
          Comming <span className="text">|</span> soon
        </p>
      </div>
    </div>
  );
}

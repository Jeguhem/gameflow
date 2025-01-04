"use client";
import React from "react";

export const navigationLinks = [
  {
    label: "Home",
    sectionId: "hero",
  },
  {
    label: "About",
    sectionId: "about",
  },
  {
    label: "Sponsors",
    sectionId: "sponsors",
  },
  {
    label: "Subscription",
    sectionId: "subscription",
  },
  {
    label: "Contact",
    sectionId: "contact",
  },
];

function Navlinks() {
  return (
    <div className="hidden  lg:flex gap-6 items-center">
      {navigationLinks.map((item, idx) => (
        <div
          key={idx}
          onClick={() =>
            document.getElementById(`${item.sectionId}`)?.scrollIntoView()
          }
          className="text-text_blue font-medium text-[14px] hover:scale-110 hover:transition-all duration-150 hover:ease-in-out cursor-pointer"
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default Navlinks;

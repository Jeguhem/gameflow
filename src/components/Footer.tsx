import React from "react";
import GradientText from "./GradientText";
import AnimatedButton from "./AnimatedButton";
import subscribelogo from "@public/subscribe-logo.svg";
import Image from "next/image";
import {
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import footerlogo from "@public/footerlogo.svg";

function Footer() {
  return (
    <div id="contact" className="">
      <div className="flex flex-col py-12 px-4 items-center gap-3">
        <GradientText className="text-[32px] text-center text-balance md:text-[52px] font-semibold">
          Start your Gaming Career with us
        </GradientText>
        <p className="text-[24px] text-center text-balance font-medium py-2">
          Subscribe to our newsletter to not miss exciting info!!!
        </p>
        <div className="flex gap-1 md:gap-3 border rounded-[50px] bg-white  p-2 ">
          <Image src={subscribelogo} alt="" width={32} />
          <input
            type="email"
            placeholder="example@gmail.com"
            className="outline-none w-[200px] md:min-w-[250px] border-b "
          />
          <AnimatedButton
            baseColor="bg-text_blue"
            hoverColor="bg-black/65"
            textColor="text-white"
            hoverTextColor="text-white"
            activeColor="opacity-35"
            className="rounded-[40px] px-3 py-[6px]"
          >
            Subscribe
          </AnimatedButton>
        </div>
      </div>

      <div
        className="py-[70px] px-6 bg-cover  bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/footer-image.svg')" }}
      >
        <div className="flex justify-between ">
          <div className="flex flex-col md:gap-16 px-2 relative">
            <div className="flex flex-col gap-4">
              <Image src={footerlogo} alt="" className="w-[38px]" />
              <p className="text-[#BCBCBC] text-[16px] max-w-[400px] font-medium">
                Become the gamer you’ve always wanted to become. But this time
                with profit{" "}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[#BCBCBC] text-[14px]">
                Coming soon. Join the waitlist
              </p>
              <div className="flex gap-2  ">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="outline-none border-black border text-[#BCBCBC] text-[12px]  bg-[#FAFAFA] px-3 py-2 rounded-lg w-[200px] md:min-w-[250px] "
                />
                <AnimatedButton
                  baseColor="bg-text_blue"
                  hoverColor="bg-black/65"
                  textColor="text-white"
                  hoverTextColor="text-white"
                  activeColor="opacity-35"
                  className="rounded-lg p-2"
                >
                  Subscribe
                </AnimatedButton>
              </div>
            </div>
          </div>

          <div className=" text-gray_Text px-6 md:px-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {/* Product Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-2 font-normal text-[14px]">
                  <li className="hover:text-[#FAFAFA] cursor-pointer">
                    Features
                  </li>
                  <li className="hover:text-[#FAFAFA] cursor-pointer">
                    Integrations
                  </li>
                  <li className="hover:text-[#FAFAFA] cursor-pointer">
                    Updates
                  </li>
                  <li className="hover:text-[#FAFAFA] cursor-pointer">FAQ</li>
                  <li className="hover:text-[#FAFAFA] cursor-pointer">
                    Pricing
                  </li>
                </ul>
              </div>
              {/* Company Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-[14px]">
                  <li className="hover:text-[#FAFAFA] cursor-pointer">About</li>
                  <li className="hover:text-[#FAFAFA] cursor-pointer">Blog</li>
                  <li className="hover:text-[#FAFAFA] cursor-pointer">
                    Careers
                  </li>
                  <li className="hover:text-[#FAFAFA] cursor-pointer">
                    Manifesto
                  </li>
                  <li className="hover:text-[#FAFAFA] cursor-pointer">Press</li>
                  <li className="hover:text-[#FAFAFA] cursor-pointer">
                    Contact
                  </li>
                </ul>
              </div>
              {/* Resources Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 font-normal text-[14px] ">
                  <li className="hover:text-[#FAFAFA] cursor-pointer">
                    Examples
                  </li>
                  <li className="hover:text-[#FAFAFA] cursor-pointer">
                    Community
                  </li>
                  <li className="hover:text-[#FAFAFA] cursor-pointer">
                    Guides
                  </li>
                  <li className="hover:text-[#FAFAFA] cursor-pointer">Docs</li>
                </ul>
              </div>
              {/* Legal Section */}
              <div>
                <h3 className="text-[18px] font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 font-normal   text-[14px]">
                  <li className="hover:text-[#FAFAFA] cursor-pointer">
                    Privacy
                  </li>
                  <li className="hover:text-[#FAFAFA] cursor-pointer">Terms</li>
                  <li className="hover:text-[#FAFAFA] cursor-pointer">
                    Security
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-6">
              <FaTwitter className="text-xl hover:text-[#fafafa] transition-colors" />
              <FaInstagram className="text-xl hover:text-[#fafafa] transition-colors" />
              <FaPinterest className="text-xl hover:text-[#fafafa] transition-colors" />
              <FaLinkedin className="text-xl hover:text-[#fafafa] transition-colors" />
              <FaTiktok className="text-xl hover:text-[#fafafa] transition-colors" />
              <FaYoutube className="text-xl hover:text-[#fafafa] transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

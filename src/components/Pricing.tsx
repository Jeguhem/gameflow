import React from "react";
import { FaCheck } from "react-icons/fa";

interface PriceCardProps {
  price: number;
  planName: string;
  features: string[];
  buttonText?: string;
  popular?: boolean;
}

const pricingData: PriceCardProps[] = [
  {
    price: 0.0,
    planName: "Novice Plan",
    features: [
      "150+ FREE Games to play",
      "150+ Games to play",
      "Play 3 premium games for 5 hours a week",
    ],
    buttonText: "Buy Now",
  },
  {
    price: 9.99,
    planName: "Amature Plan",
    features: [
      "Play all free & premium games",
      "600+ Games to play",
      "In game screen recording feature 720p",
      "Weekly leaderboard ranking",
      "Multiplayer games",
      "Audio/Voice chat in lobby and in game",
    ],
    buttonText: "Buy Now",
    popular: true,
  },
  {
    price: 19.99,
    planName: "Pro Plan",
    features: [
      "Play all free & premium games",
      "1000+ Games to play",
      "Screen recording with in highest Quality 1080P-4K",
      "Weekly leaderboard ranking",
      "Streaming feature upon reaching 100+ followers",
      "Multiplayer games",
      "Audio/Voice chat in lobby and in game",
    ],
    buttonText: "Buy Now",
  },
];

const PriceCard: React.FC<PriceCardProps> = ({
  price,
  planName,
  features,
  buttonText = "Buy Now",
  popular = false,
}) => {
  return (
    <div
      className={`
        relative
        bg-opacity-[13.3] 
        backdrop-blur-md
        p-6
        rounded-xl
        flex
        flex-col
        gap-6
        h-fit
        min-w-[230px]
        ${popular ? "border border-blue-400 glossy-box-popular" : "  glossy-box "}
      `}
    >
      {/* Plan Name */}
      <h3 className="text-white text-xl font-semibold">{planName}</h3>

      <div className=" absolute -right-3  -top-2 -rotate-12">
        {popular ? (
          <div className=" animated-border  bg-black/70  px-4 py-2 rounded-xl">
            <p className="text-[14px] font-medium text-white ">Popular</p>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Price */}
      <div className="flex items-end gap-1">
        <span className="text-white text-3xl font-bold">
          ${price.toFixed(2)}
        </span>
        <span className="text-gray-400 mb-1">/month</span>
      </div>

      {/* Features Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center  gap-3">
          <div className="bg-[#FAFAFA]/60 w-full h-[2px] rounded-md"></div>
          <h4 className="text-white text-lg  ">Features</h4>
          <div className="bg-[#FAFAFA]/60 w-full h-[2px] rounded-md"></div>
        </div>
        <ul className="flex flex-col gap-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <FaCheck className="text-blue-400 mt-1 flex-shrink-0" />
              <span className="text-gray-200 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Button */}
      <button
        className={`
          mt-auto
          w-full
          py-2.5
          px-4
          rounded-xl
          font-medium
          ${popular ? " bg-[#fafafa] text-blue-600 border-gradient" : " bg-blue-600 hover:bg-blue-700 transition-colors text-white"}

        `}
      >
        {buttonText}
      </button>
    </div>
  );
};

function Pricing() {
  return (
    <div
      id="subscription"
      className="py-[70px] px-6 flex flex-col items-center min-h-[95vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/pricing-bg.svg')" }}
    >
      <div className="w-full mb-[60px]">
        <p className="pricing__heading md:max-w-[700px] mx-auto text-white text-balance text-[32px] md:text-[52px] text-center font-semibold">
          Simple and Affordable Subscription Plans
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-end gap-6 w-full max-w-[1200px]">
        {pricingData.map((plan, index) => (
          <PriceCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}

export default Pricing;

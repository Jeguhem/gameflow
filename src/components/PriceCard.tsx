import React from "react";

interface PriceCardProps {
  price: number;
  planName: string;
  features: string[] | string;
  popular?: boolean;
}

function PriceCard() {
  return (
    <div className="bg-[#F5F5F5] bg-opacity-[13.3] glossy-box p-3 rounded-xl"></div>
  );
}

export default PriceCard;

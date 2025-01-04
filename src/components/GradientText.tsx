import React, { ReactNode } from "react";

interface GredientTextProps {
  children: ReactNode;
  className?: string;
}
const GradientText: React.FC<GredientTextProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`${className} bg-gradient-to-b from-black to-text_blue bg-clip-text text-transparent`}
    >
      {children}
    </div>
  );
};

export default GradientText;

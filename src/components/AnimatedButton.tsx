interface AnimatedButtonProps {
  children: React.ReactNode;
  baseColor: string;
  hoverColor: string;
  textColor: string;
  hoverTextColor: string;
  activeColor: string;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  baseColor,
  hoverColor,
  textColor,
  hoverTextColor,
  activeColor,
  className,
}) => {
  return (
    <button
      className={`
          relative
          overflow-hidden

          transition-colors
          duration-300
          ${baseColor}
          active:${activeColor}
          group
          ${className}
        `}
    >
      <div
        className={`
          absolute 
          -top-2
          -left-2
          w-[calc(100%+1rem)]
          h-[calc(100%+1rem)]
          -translate-x-full
          -translate-y-full
          ${hoverColor}
          active:${activeColor}
          group-hover:translate-x-0 
          group-hover:translate-y-0
          transition-transform 
          duration-300 
          ease-out
          origin-top-left
          rounded-3xl

        `}
      />

      <span
        className={`
          relative 
          z-10
          ${textColor}
          group-hover:${hoverTextColor}
          transition-colors 
          duration-300
          flex 
          gap-3
          items-center
        `}
      >
        {children}
      </span>
    </button>
  );
};

export default AnimatedButton;
